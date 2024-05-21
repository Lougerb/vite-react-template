import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// For github purposes: index page is /portfolio-renew/
// https://vitejs.dev/config/
export default defineConfig({
	base: '/tite/',
	plugins: [react()],
	resolve: {
		alias: {
			'@Project': path.resolve(__dirname, './src/Project'),
			'@Assets': path.resolve(__dirname, './src/assets'),
		},
	},
	assetsInclude: ["**/*.riv"],
});
