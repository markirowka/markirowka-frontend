import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
	
	resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
    },
  },
	server: {
		host: true,
		port: 3000,
	}
})
