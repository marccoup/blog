## Blog

Content goes in `/content` as markdown files.

Supports the following YAML front matter options in content files

```YAML
---
title: My Post/Page Title
date: 1970-01-01
updated: 1970-01-02
exclude_from_blog: false
---
```

The site will be generated from those files, the filenames being their slugs. Doesn't support nested directories (yet). Only `title` and `date` are required.

| Property | Use | Format/Type | Required |
|----------|-----|-------------|----------|
| `title`  | It's the title | `string`| ✅ |
| `date`   | Shown as published date on individual pages. Also used to sort the front page posts list | `string` (yyyy-mm-dd) | ✅ |
| `updated` | Shown as updated at on individual pages. | `string` (yyyy-mm-dd) |  |
| `exclude_from_blog` | Exlude from front page posts list if set to `true`. | `bool` | |