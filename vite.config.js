import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({
  command
}) => {
  if (command === 'serve') {
    return {
      // dev specific config
      plugins: [react(), ],
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      plugins: [react(), ],
      base: "./"
    }
  }
})