import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    // vite config
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  }
})
