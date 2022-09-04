## Blog

Content goes in `/static/content` as markdown files.

Supports the following YAML front matter options in content files:

```YAML
---
title: My Post/Page Title
date: 1970-01-01
exclude_from_blog: false
---
```

The site will be generated from those files, the filenames being their slugs. Doesn't support nested directories (yet).

The `title` is self explanatory.

The `date` will be shown as published at on individual pages, and is used to sort the front page posts list in reverse chronological order (latest first).

Setting `exclude_from_blog` to true will exclude the file from the front page posts list. Useful for other pages (about/contact etc.), or for drafting content (though I'd recommend other strategies to keep drafts off the server but whatever).