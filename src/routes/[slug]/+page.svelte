<script lang="ts">
    export let data: PageData;
</script>

<h1>{data.title}</h1>

<p>Published: {data.date}</p>

{@html data.pageContent}