<?php

namespace Marccoup\Blog;

use DateTimeImmutable;
use SplFileInfo;

class ContentPage
{
    public string $slug;

    public string $title;

    public DateTimeImmutable $date;

    public DateTimeImmutable|null $updated;

    public bool $excludeFromBlog;

    public string $content;

    private function __construct(
        private readonly SplFileInfo $file,
        private readonly MarkdownConverter $converter,
        private readonly Config $config
    ) {
    }

    private function parse(): self
    {
        $parsed      = $this->converter->convert(file_get_contents($this->file->getRealPath()));
        $frontMatter = $parsed->getFrontMatter();
        $slug        = str_replace("{$this->config->contentDir}/", '', $this->file->getRealPath());
        $slug        = substr_replace($slug, '', -strlen(".{$this->file->getExtension()}"));

        $this->slug            = $slug;
        $this->title           = $frontMatter['title'];
        $this->date            = (new DateTimeImmutable())->setTimestamp($frontMatter['date']);
        $this->updated         = isset($frontMatter['updated'])
            ? (new DateTimeImmutable())->setTimestamp($frontMatter['updated'])
            : null;
        $this->excludeFromBlog = $frontMatter['exclude_from_blog'] ?? false;
        $this->content         = $parsed->getContent();

        return $this;
    }

    public static function load(SplFileInfo $file, MarkdownConverter $converter, Config $config): self
    {
        return (new self($file, $converter, $config))->parse();
    }
}