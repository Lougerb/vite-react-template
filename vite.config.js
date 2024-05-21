import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For github purposes: index page is /portfolio-renew/
export default defineConfig({
	base: "/portfolio-renew/",
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
		},
	},
	assetsInclude: ["**/*.riv"],
});
