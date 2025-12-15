<template>
  <section id="about" class="section-about pb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-8 col-start-3">
          <BaseHeading title="Sobre mim" />
          <p class="mt-6 text-center">
            Sou Desenvolvedor Front-end Sênior com mais de {{ currentYear - 2012 }} anos de experiência em
            desenvolvimento de aplicações web, formado pela Sociesc no Tecnólogo em Sistemas para Internet, especialista
            em Vue.js e com sólido conhecimento em Nuxt, HTML5, CSS3, JavaScript (ES6+), Pinia e Cypress. Possuo
            vivência em CI/CD, arquiteturas modernas (CSR, SSR, SSG), soluções serverless e integração com APIs REST.
            Tenho experiência consolidada na aplicação de boas práticas de SEO, Core Web Vitals, Acessibilidade (A11y),
            Clean Code, garantindo código de qualidade, performance e escalabilidade.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
