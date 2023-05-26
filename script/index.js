import * as fs from 'fs';

async function getUrls() {
	const files = await (
		await fetch('https://api.github.com/repos/sveltejs/sites/git/trees/master?recursive=1')
	).json();
	const blogArticles = files.tree.filter(({ path }) => /\/blog\/.*\.md/.test(path));
	return blogArticles.map(({ path }) => path);
}

async function getAllLinks(paths) {
	const base = 'https://raw.githubusercontent.com/sveltejs/sites/master/';

	const links = (
		await Promise.all(paths.map(async (path) => (await fetch(`${base}${path}`)).text())).then(
			(res) => res.map((content) => content.match(/\[[^\]]+\]\([^)]+\)/g))
		)
	)
		.flat()
		.map((link) => link.replace('[', '').replace(')', '').split(']('));

	await fs.writeFile('./links.json', JSON.stringify(links, null, 2), () => {
		/** */
	});

	return links;
}

function readLinks() {
	return JSON.parse(fs.readFileSync('./links.json'));
}

// const paths = await getUrls();
// await getAllLinks(paths);
const links = readLinks();
console.log(links.length);

const LinksObj = links
	.map(([name, link]) => ({ name, link }))
	.sort((l1, l2) => l1.link.localeCompare(l2.link));
// console.log(LinksObj);

let a = LinksObj.filter(({ link }) => !link.startsWith('/'));
console.log('a', a.length);

a = a.filter(({ link }) => !link.includes('svelte.dev'));
console.log(a.length);

a = a.filter(({ link }) => link.startsWith('https://'));
console.log(a.length);

a = a.filter(
	({ link }) =>
		!['github.com', 'www.youtube.com'].some((unwantedSite) => link.includes(unwantedSite))
);
console.log(a.length);

a = a.filter(({ link }) => !!link);
console.log(a.length);

// a = a.filter(({link}) => link.includes('blog') || link.includes('post'));
// console.log(a.length)

const canonicalUrls = [
	...new Set(
		a
			.map(({ link }) => link)
			.map((link) => new URL(link))
			.map(({ origin }) => origin)
	)
]
	.map((url) => ({
		url,
		pages: a.filter(({ link }) => link.startsWith(url))
	}))
	.sort((u1, u2) => u2.pages.length - u1.pages.length);

console.log('canonicalUrls', canonicalUrls.length);

await fs.writeFile('./sites.json', JSON.stringify(canonicalUrls, null, 2), () => {
	/** */
});
