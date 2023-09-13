import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/',
	plugins: [sveltekit()]
};

export default config;
