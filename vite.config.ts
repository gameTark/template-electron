import electron from 'vite-plugin-electron/simple'
import react from '@vitejs/plugin-react-swc'

export default {
  plugins: [
    react(),
    electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: 'src/app/main.ts',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`
        input: 'src/app/preload.ts',
      },
      // Optional: Use Node.js API in the Renderer process
      renderer: {
      },
    }),

  ],
}
