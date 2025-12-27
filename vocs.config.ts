import { defineConfig } from 'vocs'

export default defineConfig({
  basePath: '/rollups-101-workshop',
  baseUrl: 'https://henriquemarlon.github.io',
  description: 'Cartesi Rollups 101 Workshop',
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
