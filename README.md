## Blog

### How it works

Content goes in `/content` (by default) as markdown files.

Supports the following YAML front matter options in content files

```YAML
---
title: My Post/Page Title
date: 1970-01-01
updated: 1970-01-02
exclude_from_blog: false
---
```

The site will be generated from those files, the filenames being their slugs. Nested directories will generate files, but they will not currently be included in the front page posts list. 

| Property            | Use                                                                                      | Format/Type           | Required  |
|---------------------|------------------------------------------------------------------------------------------|-----------------------|-----------|
| `title`             | It's the title                                                                           | `string`              | ✅         |
| `date`              | Shown as published date on individual pages. Also used to sort the front page posts list | `string` (yyyy-mm-dd) | ✅         |
| `updated`           | Shown as updated at on individual pages.                                                 | `string` (yyyy-mm-dd) |           |
| `exclude_from_blog` | Exclude from front page posts list if set to `true`.                                     | `bool`                |           |

### Config

There are a few configuration options, they're all optional.

Any of the options can be overwritten by setting them in a `config.php` file in the root directory of the project. An example of this file is below with all the default values:

```php
<?php
return [
    'site_title'            => 'Website',
    'base_url'              => '',
    'layout_file'           => '/src/layout.php',
    'content_template_file' => '/src/content.php',
    'routes_dir'            => '/src/routes',
    'content_dir'           => '/content',
    'static_dir'            => '/static',
    'out_dir'               => '/docs',
];
```

Additionally, specific values may be set for builds run in the local environment:

```php
<?php
return [
    // ... Primary configuration (Used for production builds)
    
    'environments' => [
        'local' => [
            'base_url' => 'http://blog.test'
        ]
    ]
];
```

Support for other environments may be added in the future

### Building the site

Run the build with local config:

```bash
./build
```

Run the build with production config:
```bash
./build --env=production
```