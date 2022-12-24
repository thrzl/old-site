// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { presetUno, presetTypography, presetAttributify } from 'unocss'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		Unocss({
			presets: [
				presetUno(),
				// presetTypography(),
				// presetAttributify()
			],
		})],
	// server: {
	// 	fs: {
	// 		allow: ['./static']
	// 	}
	// }
};

export default config;
