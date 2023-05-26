<script lang="ts">
	import { blogs } from '$lib/data';
	import { getLanguage } from '$lib/utils';
	import { Checkbox } from 'chyme-svelte';

	let filter: {
		type: Array<string>;
	} = {
		type: []
	};

	$: _blogs = blogs.filter(
		(blog) => !filter.type.length || blog.features.some((feature) => filter.type.includes(feature))
	);
</script>

<section>
	<h1>Liste de ressources Svelte & SvelteKit</h1>

	<p>
		Cette page référence des sites internets diffusant un contenu Svelte (articles, podcasts,
		vidéos).
	</p>

	<p style:font-weight="bold">{_blogs.length} résultats</p>

	<details>
		<summary>Filtrer les résultats</summary>
		<Checkbox
			label="Type"
			bind:value={filter.type}
			name="type"
			options={[
				...new Set(
					blogs
						.map((blog) => blog.features)
						.flat()
						.sort()
				)
			]}
		/>
	</details>

	{#each _blogs as blog}
		<div>
			<h2 style:margin-top="0">
				<a href={blog.url}>{blog.title}</a>
			</h2>
			<p>Le site est rédigé en {getLanguage(blog.locale)}.</p>
			{#if blog.githubRepo}
				<p>Le site est disponible sur <a href={blog.githubRepo}>Github</a>.</p>
			{/if}
			<p>Le site présente :</p>
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
