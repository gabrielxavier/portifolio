<template>
  <section id="experience" class="section-about pb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4 items-center mb-12">
        <div class="col-span-8 col-start-3">
          <BaseHeading title="Experiência profissional" />
        </div>
      </div>
      <div class="relative ps-20">
        <div class="absolute h-full left-10 w-1 bg-neutral-600"></div>
        <div>
          <div v-for="experience in experiences" :key="experience.date" class="relative">
            <div
              class="timeline-dot w-6 h-6 bg-amber-600 absolute rounded-full -ms-[50px] top-1/2 -mt-3 flex items-center justify-center"
            ></div>
            <div class="text-xl font-bold">{{ experience.title }}</div>
            <div class="text-lg">{{ experience.company }}</div>
            <div class="text-neutral-400">{{ experience.date }}</div>
            <div class="text-neutral-300 mb-4">{{ experience.description }}</div>
            <div>
              <BaseTag v-for="tag in experience.tags" :key="tag" size="compact" class="me-2 mb-4">
                {{ tag }}
              </BaseTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface WorkExperience {
  title: string
  company: string
  date: string
  description: string
  tags?: string[]
}

const experiences = ref<WorkExperience[]>([
  {
    title: 'Desenvolvedor Front-end Sênior',
    company: 'Urus Intermediadora de Pagamentos',
    date: 'abril de 2025 - agosto 2025 · 4 meses',
    description:
      'Responsável pelo desenvolvimento de uma nova versão do produto, desde a diagramação até a implementação das telas, desenvolvendo uma arquitetura mais moderna, organizada e escalável. Além de implementar um facelift e reestruturar a arquitetura da plataforma, implementei uma série de melhorias que tornaram a experiência do usuário muito mais amigável.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Desenvolvedor Front-end Sênior',
    company: 'Grupo Tigre',
    date: 'maio de 2021 - agosto de 2024 · 3 anos 4 meses',
    description:
      'Responsável pelo desenvolvimento e sustentação do novo portal global, atendendo 10 países e 3 idiomas, utilizando Vue.js e Nuxt e uma arquitetura serverless com integração contínua (CI/CD). Implementei uma arquitetura moderna, robusta e escalável, seguindo boas práticas de SEO, acessibilidade (A11y), Core Web Vitals, Clean Code e SOLID, garantindo alta disponibilidade e performance. O tempo de resposta da aplicação foi otimizado, tornando-se aproximadamente 40x mais rápido.',
    tags: ['Vue.js', 'Nuxt.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Desenvolvedor Front-end Sênior',
    company: 'Giver',
    date: 'junho de 2019 - maio de 2021 · 2 anos',
    description:
      'Responsável pela implementação de um novo Design System do produto, transformando o sistema em uma aplicação híbrida. As novas páginas passaram a ser desenvolvidas com Vue.js e microserviços, enquanto as páginas legadas continuaram operando no modelo monolítico, possibilitando uma migração gradual e segura. Essa abordagem resultou em uma otimização do tempo de carregamento das páginas, tornando-as até 60x mais rápidas, além de elevar significativamente a qualidade do código.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Desenvolvedor Front-end Pleno',
    company: 'A2C Agencia',
    date: 'dezembro de 2013 - agosto de 2018 · 4 anos 9 meses',
    description:
      'Responsável pelo desenvolvimento de sites, hotsites, landing pages, blogs e e-mail marketings para clientes nacionais e internacionais, como Senior, Grupo Almeida Junior, BRF, 3M, Docol, Tecnisa, Cooperforte e Bunge. Atuei seguindo boas práticas de SEO e acessibilidade (A11y) para otimizar resultados, utilizando ferramentas como GTMetrix e PageSpeed Insights para análise de performance.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Desenvolvedor Fullstack Júnior',
    company: 'VH Soluções',
    date: 'janeiro de 2013 - junho de 2013 · 6 meses',
    description:
      'Responsável pelo desenvolvimento e manutenção de sistemas da intranet e portais da prefeitura de Joinville.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    title: 'Desenvolvedor Fullstack Júnior',
    company: 'A2C Agencia',
    date: 'jul de 2012 - dez de 2012 · 6 meses',
    description:
      'Desenvolvimento de websites/blogs como Tecnisa Ideias, Mundo Tigre,  MVAgusta Blog, Clicheria, Dafrabikes.  Manutenção de sites como Tecnisa Wiki, Mundo Tigre, Dafra, Ciplak, Lwart, Lepper entre outros.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  }
])
</script>

<style lang="scss" scoped></style>
