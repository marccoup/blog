<script lang="ts">
    export let data: PageData;
</script>

<h1>Blog</h1>
<p>This is my blog and all that</p>

<ul>
    {#each data.posts as post}
        <li>
            <a href={post.url}>{post.title}</a> - {post.date.toLocaleDateString()}
        </li>
    {/each}
</ul>
