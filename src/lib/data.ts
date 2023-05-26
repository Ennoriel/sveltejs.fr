export const blogs = [
	{
		title: 'ByteAtATime',
		url: 'https://byteatati.me/',
		type: 'Blog personnel',
		githubAccount: 'https://github.com/ByteAtATime/',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Phil Kruft',
		url: 'https://www.philkruft.dev/',
		type: 'Blog personnel',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'PuruVj.dev',
		url: 'https://puruvj.dev/',
		type: 'Blog personnel',
		githubRepo: 'https://github.com/PuruVJ/puruvjdev4/',
		githubAccount: 'https://github.com/puruvj',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Rodney Lab',
		url: 'https://rodneylab.com/',
		type: 'Blog personnel',
		locale: 'en',
		features: ['Blog']
	},
	{
		title: 'Connor Rothschild',
		url: 'https://www.connorrothschild.com/',
		type: 'Blog personnel',
		githubRepo: 'https://github.com/connorrothschild/.com',
		githubAccount: 'https://github.com/connorrothschild/',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'David W Parker',
		url: 'https://www.davidwparker.com/posts',
		type: 'Blog personnel',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Scott Spence',
		url: 'https://scottspence.com/',
		type: 'Blog personnel',
		githubRepo: 'https://github.com/spences10/scottspence.com',
		githubAccount: 'https://github.com/spences10',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Geoff Rich',
		url: 'https://geoffrich.net/',
		type: 'Blog personnel',
		githubAccount: 'https://github.com/geoffrich',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Captain Codeman',
		url: 'https://www.captaincodeman.com/',
		type: 'Blog personnel',
		githubAccount: 'https://github.com/CaptainCodeman',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Willow (aka GHOST)',
		url: 'https://ghostdev.xyz/',
		type: 'Blog personnel',
		githubRepo: 'https://github.com/ghostdevv/website',
		githubAccount: 'https://github.com/ghostdevv',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Tan Li Hau',
		url: 'https://lihautan.com/',
		type: 'Blog personnel',
		githubRepo: 'https://github.com/tanhauhau/tanhauhau.github.io',
		githubAccount: 'https://github.com/tanhauhau',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Dev.to, section Svelte',
		url: 'https://dev.to/t/svelte',
		type: 'blog partagé',
		locale: 'en',
		features: ['Blog']
	},
	{
		title: 'Css-tricks, section Svelte',
		url: 'https://css-tricks.com/tag/svelte/',
		type: 'blog partagé',
		locale: 'en',
		features: ['Blog']
	},
	{
		title: 'Medium, recherche Svelte',
		url: 'https://medium.com/search?q=svelte',
		type: 'blog partagé',
		locale: 'en',
		features: ['Blog']
	},
	{
		title: 'Svelte.dev, section blog',
		url: 'https://svelte.dev/blog',
		type: "Listes d'articles",
		githubRepo: 'https://github.com/sveltejs/sites/tree/master/sites/svelte.dev/content/blog',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Reddit, tag Svelte',
		url: 'https://www.reddit.com/r/sveltejs/',
		type: 'Forum autour de Svelte',
		locale: 'en',
		features: ['Forum']
	},
	{
		title: 'Svelte Radio',
		url: 'https://www.svelteradio.com/',
		type: 'Podcasts autour de Svelte',
		locale: 'en',
		features: ['Podcasts']
	},
	{
		title: 'Okupter',
		url: 'https://www.okupter.com/',
		type: 'Agence de développement spécialisé avec Svelte',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Paul Lavender-Jones',
		url: 'https://paullj.github.io/',
		type: 'Blog personnel',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Raqueebuddin Aziz',
		url: 'https://raqueebuddinaziz.com/',
		type: 'Blog personnel',
		githubRepo: '',
		githubAccount: 'https://github.com/vanillacode314',
		locale: 'en',
		features: ['Fait en Svelte', 'Blog']
	},
	{
		title: 'Svelte Society',
		url: 'https://www.youtube.com/@SvelteSociety',
		type: 'Chaîne Youtube',
		locale: 'en',
		features: ['Videos']
	}
	// {
	//     title: "",
	//     url: "",
	//     type: "Blog personnel",
	//     githubRepo: "",
	//     githubAccount: "",
	//     locale: "en",
	//     features: [
	//         "Fait en Svelte",
	//         "Articles"
	//     ]
	// },
	// {
	//     title: "",
	//     url: "",
	//     type: "Blog personnel",
	//     githubRepo: "",
	//     githubAccount: "",
	//     locale: "en",
	//     features: [
	//         "Fait en Svelte",
	//         "Articles"
	//     ]
	// },
	// {
	//     title: "",
	//     url: "",
	//     type: "Blog personnel",
	//     githubRepo: "",
	//     githubAccount: "",
	//     locale: "en",
	//     features: [
	//         "Fait en Svelte",
	//         "Articles"
	//     ]
	// },
].sort((blogA, blogB) => blogA.title.localeCompare(blogB.title));
