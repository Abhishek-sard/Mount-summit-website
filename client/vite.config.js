import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),        // ✅ This enables React JSX transform
    tailwindcss(),  // Tailwind plugin
  ],
})
