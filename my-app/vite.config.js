import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: '/my-app/',
	plugins: [sveltekit()]
};

export default config;
