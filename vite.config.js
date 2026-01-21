import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Code splitting configuration
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': [
            'react',
            'react-dom',
            'react-router'
          ],
          'ui-libs': [
            'framer-motion',
            '@headlessui/react',
            '@heroicons/react',
            'lucide-react'
          ],
          'utilities': [
            '@emailjs/browser',
            'react-scroll',
            'react-simple-typewriter',
            'sweetalert2'
          ]
        }
      }
    },
    // Optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Better sourcemap for production
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // CSS code splitting
    cssCodeSplit: true,
    // Output directory
    outDir: 'dist',
    assetsDir: 'assets',
    // Asset inlining
    assetsInlineLimit: 4096,
  },
  // Performance optimization
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  // Server configuration for development
  server: {
    headers: {
      'Cache-Control': 'public, max-age=0'
    }
  }
})

