<template>
  <section id="skills" class="section-about pb-10 lg:pb-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-6 lg:col-start-4">
          <BaseHeading
            title="Habilidades técnicas"
            subtitle="Tecnologias que domino e utilizo no desenvolvimento de aplicações web modernas, robustas e escaláveis."
            align="center"
            class="mb-12"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-6 text-center lg:text-end order-last lg:order-first">
          <div class="pe-8">
            <BaseTag v-for="skill in skills" :key="skill" class="ms-4 mb-4">{{ skill }}</BaseTag>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 order-first lg:order-last">
          <div class="ps-8">
            <BaseProgressbar
              v-for="skill in mainlySkills"
              :key="skill.name"
              :label="skill.name"
              :caption="`${currentYear - skill.startedWorkingOn} anos`"
              :value="skill.percentage"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = ref<string[]>([
  'Vue.js',
  'Nuxt.js',
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'TypeScript',
  'Composition API',
  'Pinia',
  'Node.js',
  'Express',
  'NestJS',
  'Cypress',
  'RESTfull APIs',
  'Design System',
  'TailwindCSS',
  'Segurança',
  'Performance',
  'Qualidade',
  'Observabilidade',
  'Testes',
  'Core Web Vitals',
  'SEO',
  'SSR',
  'Integração Contínua (CI/CD)'
])

const currentYear = new Date().getFullYear()

const mainlySkills = ref<{ name: string; percentage: number; startedWorkingOn: number }[]>([
  {
    name: 'HTML5',
    percentage: 1,
    startedWorkingOn: 2012
  },
  {
    name: 'CSS3',
    percentage: 1,
    startedWorkingOn: 2012
  },
  {
    name: 'JavaScript (ES6+)',
    percentage: 1,
    startedWorkingOn: 2012
  },
  {
    name: 'Vue.js',
    percentage: 0.98,
    startedWorkingOn: 2019
  },
  {
    name: 'Nuxt.js',
    percentage: 0.95,
    startedWorkingOn: 2021
  }
])
</script>
