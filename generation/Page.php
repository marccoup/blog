<?php

namespace Marccoup\Blog;

class Page
{
    public function __construct(
        public readonly string $content,
        public readonly string|null $title = null,
        public readonly string|null $head = null
    ) {
    }
}