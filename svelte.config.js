import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'


/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
		}),
		mdsvex({
			extensions: ['.md', '.mdx'],
		})],

	extensions: ['.svelte', '.md', '.mdx'],

	kit: {
		adapter: adapter({
			precompress: true
		})
	}
};

export default config;
