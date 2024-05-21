import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// For github purposes: index page is /portfolio-renew/
// https://vitejs.dev/config/
export default defineConfig({
	base: '/vite-react-template/',
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
			'@Project': path.resolve(__dirname, './src/Project'),
			'@Assets': path.resolve(__dirname, './src/assets'),
		},
	},
	assetsInclude: ["**/*.riv"],
});
