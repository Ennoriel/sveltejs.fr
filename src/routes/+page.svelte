<script>
	import { blogs } from "$lib/data";
	import { getLanguage } from "$lib/utils";
</script>

<section>
    <h1>Liste de ressources Svelte & SvelteKit</h1>

    <p style:font-weight="bold">{blogs.length} résultats</p>

    {#each blogs as blog}
        <div>
            <h2 style:margin-top="0">
                <a href={blog.url}>{blog.title}</a>
            </h2>
            <p>Le site est rédigé en {getLanguage(blog.locale)}.</p>
            <p>Le site présente : </p>
            <ul style:margin-bottom="0">
                {#each blog.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        </div>
    {/each}
</section>

<style>
    section {
        padding: 16px;
        max-width: 768px;
        margin: auto;
    }

    div {
        margin: 16px 0;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid var(--text-color-secondary);
    }
</style>