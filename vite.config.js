import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/second-upgrade/',  // Your repo name
  plugins: [react()],
})
