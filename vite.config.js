import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react", "react-dom", 'react-router-dom'],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: {
      react: 'react', // specify the path to the react module
    },
    // specify the base URL for resolving module specifiers
    // this should be the root of your project directory
    baseUrl: './', 
  },
})

