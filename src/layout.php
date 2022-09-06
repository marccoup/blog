<?php
/**
 * @var \Marccoup\Blog\App $this
 * @var \Marccoup\Blog\Page $page
 */
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>

        <title><?= $page->title ? "{$page->title} - " : '' ?><?= $this->config->siteTitle ?></title>
        <link rel="icon" href="<?= $this->config->baseUrl ?>/favicon.png">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="<?= $this->config->baseUrl ?>/normalize.css" type="text/css"/>
        <link rel="stylesheet" href="<?= $this->config->baseUrl ?>/sakura.css" type="text/css"/>

        <?= $page->head ?? ''; ?>
    </head>
    <body>
        <div>
            <header>
                <div><a href="<?= $this->config->baseUrl ?>">Marc Coupland</a></div>
                <nav>
                    <small>
                        <a href="https://twitter.com/_marccoup" target="_blank">twitter</a>
                        |
                        <a href="https://github.com/marccoup" target="_blank">github</a>
                        |
                        <a href="<?= $this->config->baseUrl ?>/built-with.html">built with</a>
                    </small>
                </nav>
            </header>
            <main>
                <?= $page->content; ?>
            </main>
        </div>
    </body>
</html>
