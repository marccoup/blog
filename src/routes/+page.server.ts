import type { PageLoad } from "./$types"
import fs from "fs";
import Path from "path"
import yamlFrontMatter from "yaml-front-matter"

export function load({ params }: PageLoad) {
    // const contentDir = fs.readdirSync("content/");

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



    // posts.sort(function (a, b) {
    //     return b.date - a.date
    // })

    let posts: Array<object> = [];
    posts = recurse("./.netlify/functions-internal", posts);

    return {
        posts: posts
    }
}

function recurse(dir: string, posts: Array<object>): Array<object> {
    let files = fs.readdirSync(dir);

    for (let fileName of files) {
        let filePath = dir + "/" + fileName;
        posts.push({
            title: filePath,
            date: new Date(),
            url: '/'
        })

        if (fs.lstatSync(filePath).isDirectory()) {
            posts = recurse(filePath, posts);
        }
    }

    return posts;
}