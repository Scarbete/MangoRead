import react from '@vitejs/plugin-react'
import env from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


export default defineConfig({
    server: {
        port: 8000
    },
    plugins: [
        react(),
        env({
            include: ['VITE_APP_API_URL']
        })
    ],
})
