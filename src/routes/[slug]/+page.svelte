<script lang="ts">
    export let data: PageData;
</script>

<h1>{data.title}</h1>

<p style="{data.updated ? "margin-bottom: 0;" : ""}">Published: {data.date}</p>

{#if data.updated}
    <p>Updated: {data.updated}</p>
{/if}

{@html data.pageContent}