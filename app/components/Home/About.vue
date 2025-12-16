<template>
  <section id="about" class="section-about pb-10 xl:pb-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-12 lg:col-span-8 lg:col-start-3">
          <BaseHeading title="Sobre mim" subtitle="Lorem ipsum dolor ist" />
          <p class="mt-6 text-center">
            Sou Desenvolvedor Front-end Sênior com mais de {{ currentYear - 2012 }} anos de experiência em
            desenvolvimento de aplicações web, formado pela Sociesc no Tecnólogo em Sistemas para Internet, especialista
            em Vue.js e com sólido conhecimento em Nuxt, HTML5, CSS3, JavaScript (ES6+), Pinia e Cypress. Possuo
            vivência em CI/CD, arquiteturas modernas (CSR, SSR, SSG), soluções serverless e integração com APIs REST.
            Tenho experiência consolidada na aplicação de boas práticas de SEO, Core Web Vitals, Acessibilidade (A11y),
            Clean Code, garantindo código de qualidade, performance e escalabilidade.
          </p>
          <div class="mt-8 lg:hidden">
            <img
              alt="Gabriel Xavier"
              src="@/assets/images/profile-image.webp"
              class="rounded-full border-amber-600 border-2 w-60 lg:w-full mx-auto"
              width="400"
              height="400"
              fetchpriority="high"
            />

            <ul class="flex items-center justify-center mt-8">
              <li class="me-6">
                <a href="https://github.com/gabrielxavier" title="Github" target="_blank">
                  <IconsGithub :width="40" :height="40" class="fill-white hover:fill-amber-600 transition" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gabrielxavier/" title="LinkedIn" target="_blank">
                  <IconsLinkedin :width="40" :height="40" class="fill-white hover:fill-amber-600 transition" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
