import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Gabriel Xavier - Frontend Developer',
      meta: [{ name: 'description', content: 'Portifólio Gabriel Xavier' }],
      htmlAttrs: {
        lang: 'pt-BR'
      }
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/styles/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true,
          'Fira Code': true
        },
        display: 'swap',
        download: true,
        inject: true
      }
    ]
  ]
})
