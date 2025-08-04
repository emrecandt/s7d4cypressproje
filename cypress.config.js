const { defineConfig } = require("cypress");

module.exports = defineConfig({
 e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  },
});
