<?php
/**
 * @var \Marccoup\Blog\Generator $this
 * @var \Marccoup\Blog\ContentPage $contentPage
 */

$__head  = <<<HTML
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Marc Coupland">
    <meta property="og:url" content="{$this->config->baseUrl}/{$contentPage->slug}.html">
    <meta property="og:title" content="{$contentPage->title}">
HTML;
$__title = $contentPage->title;
?>

<h1><?= $contentPage->title ?></h1>

<p <?= $contentPage->updated ? 'style="margin-bottom: 0"' : '' ?>>
    Published: <?= $contentPage->date->format('jS F Y') ?>
</p>

<?php if ($contentPage->updated): ?>
    <p>Updated: <?= $contentPage->updated->format('jS F Y') ?></p>
<?php endif; ?>

<?= $contentPage->content ?>