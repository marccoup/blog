---
title: Writing a Deploy Script in TypeScript
date: 2022-09-05
updated: 2022-09-06
---

---

> Update 06/09/2022: A single day after doing this, when attempting to add some new features. I decided to rebuild the entire site in PHP as a custom static site generator. So this site is no longer even deployed with the script discussed in this post. Still a good read though, I think!

---

> Disclaimer: This is not a tutorial, I am a PHP Developer, and I haven't worked with TypeScript or Node very much at all.

## The Why

Usually I use a small PHP CLI application I wrote called `ok` to deploy my projects, it doesn't do much other than perform a few sanity checks, then create a date based tag for the repo. Usually I have the build process in a GitHub action (or equivalent e.g. BitBucket Pipeline script), but `ok` will look for a `deploy.ok.php` file in the root of the project it's deploying and, if it exists, run that before tagging the repo - pretty useful you know. 

For one reason or another I decided I'd like this blog to be self-sufficient, maybe I'll decommission `ok` in the future, or maybe I'll want to work on my site somewhere I don't have access to my laptop with all my personal tooling already set up (disregard the fact I'll need to be cloning the repo and installing git for this - that comes with the static site hosted via GitHub pages territory). I'm aware I'll still need node etc. but I'd need that anyway to build the site locally (roll on moving the build step to GitHub actions).

## The How
With TypeScript. Obviously.

[Have a look](https://github.com/marccoup/blog/blob/ca1b6ada2cedc23f9dea85590a2c58b5d2f54b34/deploy.ts)

In all seriousness the most challenging part was running the file through a script defined in the `package.json` file. Since the script is written in TypeScript you can't do the usual `node my-script.ts` because node throws an absolute wobbly and refuses to run a TypeScript file (understandable, but I'm still annoyed). 

I soldiered on, trying `ts-node`, however this bad boy **also** likes to throw a wobbly because of the `.ts` extension (excuse me wtf?). Turned out to be something to do with the `"type": "module"` setting in my package.json - anyway the solution seemed to be `ts-node-esm`.

I'll give you one guess as to what `ts-node-esm` did when trying to run this file? You guessed it - _threw an absolutely devastating wobbly_ - just at a different point in the process, providing me with what one might call a "false sense of hope". So, the hissy fit occurs when running the build via Vite's impressive [JavaScript API](https://vitejs.dev/guide/api-javascript.html) - for some bewildering reason, at the point my `vite.config.ts` file was being used for the build, `ts-node-esm` just couldn't find `@sveltejs/kit/vite` - I was lost. My google-fu lead me to a familiar issue - `"type": "module"` - at this point I understood, this little config option was destroying my deploy script's fledgling life, but I needed everything else to continue working exactly as it did before, so, I refused to change it.

At this point I thought that maybe trying to run the TypeScript directly was a lost cause, I'd do what should be done with TypeScript and just compile it to JavaScript first. I try `tsc deploy.ts && node deploy.js` and lo-and-behold yet another meltdown about the bloody `"type": "module"` config. I was close to giving up, but this time, I was given a useful tip by the error output - something to the effect of:  "Rename the file to `deploy.cjs` to treat it as common js instead of this stupid module stuff you've got going on and obviously don't understand". So, I did.

The final change to the project, making the `npm run deploy` command do `tsc deploy.ts && mv deploy.js deploy.cjs && node deploy.cjs` - probably terrible practice, probably will break, probably making any half-decent node-savvy developer cry. To be honest, haphazardly changing file extensions and expecting everything to work makes me uncomfortable, I don't feel like it should work, and I definitely don't feel like it's a good idea - but it _did_ work, and that makes it a good idea. So for now, up to until it breaks or I move the build to GitHub actions, this is how it shall remain.

## Afterthoughts
"The Why" section of this post is somewhat short, in hindsight that's because it really didn't make much sense to do this. I should have just done it in GitHub actions straight away. Oh well, it was a learning experience and that's what being a developer is all about - doing things the hard way for no good reason, reinventing the wheel, and then writing it off as a good thing because you _learned_ something.

Have a good day!

I hope you enjoy automating something you don't need to automate when you next get the chance.

<small>p.s if this makes it to the blog, it was deployed with the script in question via `npm run deploy`</small>