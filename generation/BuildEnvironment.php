<?php

namespace Marccoup\Blog;

enum BuildEnvironment: string
{
    case PRODUCTION = 'production';
    case LOCAL = 'local';
}