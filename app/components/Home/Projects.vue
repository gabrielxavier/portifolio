<template>
  <section id="projects" class="section-about pb-10 lg:pb-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4 mb-6 lg:mb-12">
        <div class="col-span-12 lg:col-span-8 lg:col-start-3">
          <BaseHeading
            title="Projetos em destaque"
            subtitle="Soluções web inovadoras desenvolvidas com tecnologias modernas, arquitetura escalável e melhores práticas de engenharia de software."
          />
        </div>
      </div>
      <div class="embla overflow-hidden">
        <div class="embla__viewport" ref="emblaRef">
          <div class="embla__container flex -ms-6">
            <div
              v-for="project in projects"
              :key="project.title"
              class="embla__slide flex-[0_0_100%] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] min-w-0 ps-6"
            >
              <div class="mb-4">
                <img :src="project.image" :alt="project.title" width="600" height="300" />
              </div>
              <div class="text-xl font-bold mb-1">{{ project.title }}</div>
              <div class="text-gray-300 mb-4">{{ project.description }}</div>
              <div>
                <BaseTag v-for="tag in project.tags" :key="tag" size="compact" class="me-2 mb-4">{{ tag }}</BaseTag>
              </div>
            </div>
          </div>
        </div>
        <div class="embla__controls relative block mt-4 lg:mt-8 mb-1 ms-1">
          <div class="embla__buttons flex items-center">
            <button
              @click="onClickPrev"
              title="Anterior"
              class="embla__button embla__button--prev cursor-pointer appearance-none touch-manipulation flex items-center justify-center bg-transparent w-15 h-15 b-0 p-0 m-0 z-1 rounded-full"
              type="button"
              :disabled="!canScrollPrev"
            >
              <svg class="embla__button__svg w-1/3" viewBox="0 0 532 532" :class="{ 'opacity-25': !canScrollPrev }">
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                ></path>
              </svg>
            </button>

            <button
              @click="onClickNext"
              title="Próximo"
              class="embla__button embla__button--next cursor-pointer appearance-none touch-manipulation flex items-center justify-center bg-transparent w-15 h-15 b-0 p-0 m-0 z-1 rounded-full"
              type="button"
              :disabled="!canScrollNext"
            >
              <svg class="embla__button__svg w-1/3" viewBox="0 0 532 532" :class="{ 'opacity-25': !canScrollNext }">
                <path
                  fill="currentColor"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="embla__dots hidden lg:flex flex-wrap justify-center items-center absolute bottom-0 top-1/2 left-1/2 -translate-1/2"
          >
            <button
              v-for="page in slidesPages"
              :key="page - 1"
              @click="onClickDot(page - 1)"
              class="embla__dot appearance-none bg-transparent touch-manipulation cursor-pointer b-0 m-0 p-0 w-8 h-8 flex items-center justify-center rounded-full"
              type="button"
              :title="`Ir para slide ${page}`"
            >
              <div
                class="dot w-3 h-3 rounded-full flex items-center"
                :class="{ 'bg-white': slideIndex !== page - 1, 'bg-amber-600': slideIndex == page - 1 }"
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

const projects = ref([
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Plataforma Urus ',
    description:
      'Desenvolvimento de uma restruturação da plataforma, desde a diagramação das telas, implementação do código e arquitetura, tornando a plataforma mais moderna, organizada e escalável.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vuetify']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Portal Global Tigre S/A',
    description:
      'Desenvolvimento do novo portal global da Tigre S/A, baseado em uma arquitetura moderna, robusta e escalável, com suporte nativo a 3 idiomas e operação em 10 países.',
    tags: ['Vue.js', 'Nuxt.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Portal B2B Tigre',
    description:
      'Desenvolvimento do novo portal B2B da Tigre S/A, construído sobre uma arquitetura moderna e escalável, com foco em performance, segurança e acessibilidade.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Design System CRM Giver',
    description:
      'Desenvolvimento de um Design System com tecnologias modernas e aplicação de boas práticas, garantindo maior performance, usabilidade e acessibilidade para a aplicação.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Website Giver',
    description:
      'Desenvolvimento do website da marca com foco em performance e boas práticas, resultando em nota A nas principais ferramentas de análise, como GTMetrix e PageSpeed Insights.',
    tags: ['Vue.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Website shoppings Grupo Almeida Junior',
    description:
      'Desenvolvimento de um projeto multi-site para os shoppings do Grupo Almeida Junior, focando em design responsivo, otimização para SEO, alta performance e acessibilidade.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Web Site Grupo Almeida Junior',
    description:
      'Desenvolvimento do website do Grupo Almeida Junior, com foco em design responsivo, SEO otimizado, performance e acessibilidade para melhor experiência do usuário.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Portal Global do Grupo BRF',
    description:
      'Desenvolvimento de um portal responsivo e multi-idioma do Grupo BRF, uma das maiores companhias de alimentos do mundo.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Loja Online da BRF',
    description:
      'Desenvolvimento de um e-commerce da Loja Online BRF desenvolvido na plataforma B Seller do grupo B2W.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Portal 3M Inovação',
    description:
      'Desenvolvimento de um projeto robusto com gamificação, forte interação com os usuários e outros recursos complexos.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Website Viqua',
    description: 'Desenvolvimento do novo portal da marca focando em performance, acessbilidade e SEO.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  },
  {
    image: 'https://placeholdit.com/600x300/dddddd/999999',
    title: 'Website Dafra Bikes',
    description:
      'Desenvolvimento de website responsivo e de alta performance para Dafra Bikes, com foco em experiência do usuário e um catálogo de produtos interativo.',
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)']
  }
])

const slidesToScrollDesktop = 3
const slidesPages = computed<number>(() => projects.value.length / slidesToScrollDesktop)

const [emblaRef, emblaApi] = emblaCarouselVue({
  loop: false,
  slidesToScroll: 1,
  breakpoints: {
    '(min-width: 640px)': {
      slidesToScroll: 2
    },
    '(min-width: 1280px)': {
      slidesToScroll: 3
    }
  }
})

const slideIndex = ref<number>(0)
const canScrollPrev = ref<boolean>(false)
const canScrollNext = ref<boolean>(true)

function onClickPrev() {
  emblaApi.value?.scrollPrev()
}

function onClickNext() {
  emblaApi.value?.scrollNext()
}

function onClickDot(index: number) {
  emblaApi.value?.scrollTo(index)
}

onMounted(() => {
  emblaApi.value?.on('select', () => {
    canScrollNext.value = !!emblaApi.value?.canScrollNext()
    canScrollPrev.value = !!emblaApi.value?.canScrollPrev()
    slideIndex.value = emblaApi.value?.selectedScrollSnap() ?? 0
  })
})
</script>
