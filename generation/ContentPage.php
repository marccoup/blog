<?php

namespace Marccoup\Blog;

use DateTimeImmutable;
use Intervention\Image\ImageManager;
use Marccoup\SocialImageGenerator\SocialImageGenerator;
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

    public function generateAndSaveSocialImage(ImageManager $manager): void
    {
        $titleText  = wordwrap($this->title, 30, PHP_EOL, true);
        $footerText = str_replace(['https://', 'http://'], '', $this->config->baseUrl);

        $mediaDir = "{$this->config->outDir}/media";

        if (!is_dir($mediaDir)) {
            mkdir($mediaDir, 0775, true);
        }

        SocialImageGenerator::make($manager, $this->config->projectRoot.$this->config->imageFontFile)
                            ->titleText($titleText)
                            ->footerText($footerText)
                            ->backgroundColorHex('#f9f9f9')
                            ->titleTextColorHex('#4a4a4a')
                            ->footerTextColorHex('#1d7484')
                            ->borderColorHex('#1d7484')
                            ->latticeSize(15)
                            ->generate()
                            ->save("{$mediaDir}/{$this->slug}.png");
    }

    public static function load(SplFileInfo $file, MarkdownConverter $converter, Config $config): self
    {
        return (new self($file, $converter, $config))->parse();
    }
}