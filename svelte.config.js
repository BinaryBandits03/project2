import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),	
	kit: {
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/project2' : '',
		  },
		  prerender: {
			handleHttpError: ({ path, referrer, message }) => {
			  // Prevents build failures on 404s during prerendering
			  return false;
			},
			entries: ['*']
		  },
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ pages: "build", assets: "build", fallback: undefined, precompress: false, strict: true })
	},
};

export default config;