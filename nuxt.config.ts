import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Gabriel Xavier | Desenvolvedor Front-end Sênior',
      meta: [
        {
          name: 'title',
          content: 'Gabriel Xavier | Desenvolvedor Front-end Sênior'
        },
        {
          name: 'description',
          content:
            'Desenvolvedor Front-end Sênior com mais de 13 anos de experiência em desenvolvimento de aplicações web.'
        }
      ],
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
