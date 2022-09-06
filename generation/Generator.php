<?php

namespace Marccoup\Blog;

use FilesystemIterator;
use SplFileInfo;

class Generator
{
    public function __construct(readonly public Config $config)
    {
    }

    public static function make(Config $config): self
    {
        return new self($config);
    }

    protected function createDirectory(string $dir): self
    {
        if (!is_dir($dir)) {
            mkdir($dir, 0775, true);
        }

        return $this;
    }

    public function build(): self
    {
        $this->resetDir($this->config->outDir);
        $this->copyStatic($this->config->staticDir);
        $this->buildRoutes($this->config->routesDir);
        $this->buildContent($this->config->contentDir);

        return $this;
    }

    public function resetDir(string $dir): self
    {
        $this->createDirectory($dir);

        $iter = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);

        /** @var SplFileInfo $file */
        foreach ($iter as $file) {
            if ($file->isDir()) {
                $this->resetDir($file->getRealPath());
                rmdir($file->getRealPath());

                continue;
            }

            unlink($file->getRealPath());
        }

        return $this;
    }

    public function copyStatic(string $dir): self
    {
        $this->createDirectory($dir);
        $iter = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);

        /** @var SplFileInfo $file */
        foreach ($iter as $file) {
            $copyTo = str_replace($this->config->staticDir, $this->config->outDir, $file->getRealPath());

            if ($file->isDir()) {
                $this->createDirectory($copyTo);
                $this->copyStatic($file->getRealPath());

                continue;
            }

            copy($file->getRealPath(), $copyTo);
        }

        return $this;
    }

    public function buildRoutes(string $dir): self
    {
        $this->createDirectory($dir);

        $iter = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);

        /** @var SplFileInfo $file */
        foreach ($iter as $file) {
            $writeTo = str_replace($this->config->routesDir, $this->config->outDir, $file->getRealPath());

            if ($file->isDir()) {
                $this->createDirectory($writeTo);
                $this->buildRoutes($file->getRealPath());

                continue;
            }

            $writeTo = substr_replace($writeTo, 'html', -strlen($file->getExtension()));

            $this->buildPage($file->getRealPath(), $writeTo);
        }

        return $this;
    }

    public function buildContent(string $dir): self
    {
        $this->createDirectory($dir);

        $iter              = new FilesystemIterator($dir, FilesystemIterator::SKIP_DOTS);
        $markdownConverter = new MarkdownConverter();

        /** @var SplFileInfo $file */
        foreach ($iter as $file) {
            if ($file->getBasename() === '.obsidian') {
                continue;
            }

            $writeTo = str_replace($this->config->contentDir, $this->config->outDir, $file->getRealPath());

            if ($file->isDir()) {
                $this->createDirectory($writeTo);
                $this->buildContent($file->getRealPath());

                continue;
            }

            if ($file->getExtension() !== 'md') {
                continue;
            }

            $writeTo     = substr_replace($writeTo, 'html', -strlen($file->getExtension()));
            $contentPage = ContentPage::load($file, $markdownConverter, $this->config);

            $this->buildPage($this->config->contentTemplateFile, $writeTo, $contentPage);
        }

        return $this;
    }

    public function buildPage(string $include, string $writeTo, ContentPage|null $contentPage = null): self
    {
        $page = (function (string $include, ContentPage|null $contentPage) {
            ob_start();

            include $include;

            return new Page(
                content: ob_get_clean(),
                title: $__title ?? ($contentPage?->title ?? null),
                head: $__head ?? null
            );
        })($include, $contentPage);

        $content = (function ($page) {
            // $page is required so that the layout file has access to it

            ob_start();

            include $this->config->layoutFile;

            return ob_get_clean();
        })($page);

        file_put_contents($writeTo, $content);

        return $this;
    }
}