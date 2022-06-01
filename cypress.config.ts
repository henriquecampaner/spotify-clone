import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'id3qtv',
  viewportWidth: 1980,
  viewportHeight: 1080,

  env: {
    TAGS: 'not @ignore',
  },

  e2e: {
    baseUrl: 'http://staging-spotify-clone-campaner.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
