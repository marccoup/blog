---
title: Rewriting This Site in PHP
date: 2022-09-07
exclude_from_blog: true
---

---

So I gave up on Svelte and TypeScript even though they're great. I just kept missing PHP and my familiarity with it - adding a new feature in the old setup of this site was just a pain for me, and I quickly got over the hype of using something new, and wanted to return to what I know, where I can actually implement things in a reasonable amount of time.

It took me less time to build a whole static site generator in PHP for this site than it did for me to[write a deploy script in TypeScript](/writing-a-deploy-script-in-typescript.html) in the old set up. Navigating the tooling for node felt so foreign, I missed the simplicity of a bare bones PHP script.

## The Why

Well, the little intro above gives a good amount of insight into that but the primary trigger was when I wanted to implement a [social image generator](https://github.com/marccoup/social-image-generator) to automatically generate open graph images for my blog posts. The problem was, I couldn't seem to get them to generate at the right time for the build process, and there didn't seem to be a straightforward way to set a script to run prior to everything else (other than adding it manually at the start of every item in the `package.json` script, but then you have the issue of it not actually being triggered by the Vite build process). Generating the images at the same time as the site's html files were being generated didn't work, as SvelteKit would check for images referenced in the pages, before the script generating the page content (and as such, images) was being executed and throw up an error. I did spend some time trying to figure out how the build process worked and to try and hoodwink the system into including the images at the right time, but alas I decided it would be easier to just start from scratch, and my own static site generator in PHP.

I did manage to get something kind-of working, with the aforementioned strategy of running a separate script before the build step, but there was another issue. This one really frustrated me, in the SvelteKit setup I had there didn't seem to be a way to set a base URL for the site, to prepend to referenced files (or links) during a production build process. There is a base config option, but that's only allowed to be a path. Most annoyingly, the base option seems to be able to be a URL in Vite, but the SvelteKit override prevents that. The most mind-boggling was that for link tags in the \<head> of a page, the href seemed to be getting prepended with the URL of the current session (as in it would be "./file.png" in the .html file, but when visiting the site it would be "https://current-site.example/file.png") - attempting this in other tags seemed to have no affect, I could find no reference to how this was done in the docs, and going through the uglified js of the generated site yielded a grand total on zero results for me. There were a few other things related to this that seemed strange to me (in that I thought they should work in a different way), but for now I can't be bothered to go into all the details. Perhaps one day I'll speak to a Svelte developer and they can enlighten me.

It's worth mentioning that, at this time, SvelteKit is in early development and many things may change before they hit version 1.0. I shouldn't be too harsh, as it is by their own description an unfinished project, and I have by my own admission a poor understanding of Svelte, SvelteKit, Node, and TypeScript. This is why I decided it was best to return to my roots, and get going on this rebuild in PHP. No more doing it the hard way for no reason, and writing it off as a good thing because I learned something.

## The How
With PHP. Obviously.

[Have a look](https://github.com/marccoup/blog)

