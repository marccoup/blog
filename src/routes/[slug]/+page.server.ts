import type { PageLoad } from "./$types"
import { marked } from "marked"
import fs from "fs";
import { error } from "@sveltejs/kit";
import yamlFrontMatter from "yaml-front-matter"

const renderer = {
    link(href: string, title: string, text: string) {
        const target: string = href.startsWith("http") ? "_blank" : "_self";
        title = title ? title : "";

        return `<a href="${href}" title="${title}" target="${target}">${text}</a>`
    }
};

marked.use({ renderer });

export function load({ params }: PageLoad) {
    const contentPath = "static/content/" + params.slug + ".md";

    if (fs.existsSync(contentPath)) {
        const md = fs.readFileSync(contentPath).toString();
        const front = yamlFrontMatter.loadFront(md);
        const html = marked.parse(front.__content);

        const date = new Date(Date.parse(front.date));


        return {
            title: front.title,
            date: date.toDateString(),
            pageContent: html
        }
    }

    throw error(404, "Not Found")
}