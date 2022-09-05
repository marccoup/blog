import { type BranchSummary, simpleGit, type SimpleGit } from "simple-git";
import { build } from 'vite';

const deploy = async () => {
    const git: SimpleGit = simpleGit();

    if (!await git.checkIsRepo()) {
        console.error("This isn't a repo cheif. What you playing at?");

        return;
    }

    await git.fetch();

    const branchData: BranchSummary = await git.branch();

    if (!onValidBranch(branchData)) {
        console.error("You must be on the main branch to run a deploy");

        return;
    }

    await build();
    await git.add(".");

    const latestTag: string | undefined = (await git.tags()).latest;
    const newTag: string = generateTag(latestTag);

    await git.commit(`build ${newTag}`);
    await git.addTag(newTag);

    await git.push();
    await git.pushTags();
}

const onValidBranch = (branchData: BranchSummary) => {
    return branchData.current === "main" && branchData.detached === false;
}

const generateTag = (previousTag: string | undefined) => {
    const now: Date = new Date();
    const tagPrefix: string = [
        "deploy/",
        now.getFullYear().toString(),
        (now.getMonth() + 1).toString().padStart(2, '0'),
        now.getDate().toString().padStart(2, '0'),
        "."
    ].join("");

    let dayDeployCount: Number = 0;

    if (typeof previousTag === "string" && previousTag.startsWith(tagPrefix)) {
        dayDeployCount = parseInt(previousTag.replace(tagPrefix, '')) + 1;
    }

    return tagPrefix + dayDeployCount.toString();
}

deploy();