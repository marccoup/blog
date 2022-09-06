<?php
/**
 * @var \Marccoup\Blog\App $this
 */

use Marccoup\Blog\ContentPage;
use Marccoup\Blog\MarkdownConverter;

$content           = new FilesystemIterator($this->config->contentDir, FilesystemIterator::SKIP_DOTS);
$posts             = [];
$markdownConverter = new MarkdownConverter();

/** @var SplFileInfo $postFile */
foreach ($content as $postFile) {
    if ($postFile->getExtension() !== 'md') {
        continue;
    }

    $post = ContentPage::load($postFile, $markdownConverter, $this->config);

    if (!$post->excludeFromBlog) {
        $posts[] = $post;
    }

    usort($posts, fn( ContentPage $a, ContentPage $b) => $a->date < $b->date ? 1 : 0);
}
?>

<h1>Blog</h1>
<p>This is my blog and all that</p>

<ul>
    <?php foreach ($posts as $post): ?>
        <li>
            <a href="<?= $this->config->baseUrl ?>/<?= $post->slug ?>.html">
                <?= $post->title ?>
            </a>
            - <?= $post->date->format('d/m/Y') ?>
        </li>
    <?php endforeach; ?>
</ul>
