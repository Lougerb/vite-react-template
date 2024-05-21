import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// For github purposes: index page is /vite-react-template/
export default defineConfig({
	base: "/vite-react-template/",
	plugins: [react()],
	assetsInclude: ["**/*.riv"],
});
