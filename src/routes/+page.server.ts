import type { PageLoad } from "./$types"
import fs from "fs";
import Path from "path"
import yamlFrontMatter from "yaml-front-matter"

export function load({ params }: PageLoad) {
    // const contentDir = fs.readdirSync("content/");

    const example = fs.readdirSync("./.netlify");

    let posts = [];

    // for (let fileName of contentDir) {
    //     const filePath = "content/" + fileName
    //     const file = Path.parse(fileName);

    //     if (file.ext === ".md") {
    //         const md = fs.readFileSync(filePath).toString();
    //         const front = yamlFrontMatter.loadFront(md);

    //         if (front.exclude_from_blog !== true) {
    //             posts.push({
    //                 title: front.title,
    //                 date: new Date(Date.parse(front.date)),
    //                 url: file.name
    //             });
    //         }
    //     }
    // }

    for (let fileName of example) {
        posts.push({
            title: fileName,
            date: new Date(),
            url: '/'
        })
    }

    // posts.sort(function (a, b) {
    //     return b.date - a.date
    // })

    return {
        posts: posts
    }
}