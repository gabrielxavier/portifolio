<template>
  <header class="fixed top-0 bg-zinc-900 w-full py-6 z-2">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <h1>
          <a href="/" @click.prevent="onClickLogo">
            <div class="text-xl text-white font-bold">Gabriel Xavier</div>
            <div class="text-xl text-gray-400">Desenvolvedor Front-end</div>
          </a>
        </h1>

        <nav class="flex items-center">
          <ul class="flex">
            <li v-for="link in links" :key="link.value" class="me-2">
              <a
                :href="`#${link.value}`"
                @click.prevent="onClickAnchor"
                class="text-lg text-white hover:text-amber-600 p-3 transition"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <BaseButton
            tag="a"
            class="ms-4"
            href="/documents/curriculo_Gabriel_Xavier_Desenvolvedor_Frontend_Senior.pdf"
            target="_blank"
            >Baixar currículo</BaseButton
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface LinksItem {
  label: string
  value: string
}

const links = ref<LinksItem[]>([
  {
    label: 'Início',
    value: 'banner'
  },
  {
    label: 'Sobre mim',
    value: 'about'
  },
  {
    label: 'Habilidades',
    value: 'skills'
  },
  {
    label: 'Projetos',
    value: 'projects'
  },
  {
    label: 'Experiência',
    value: 'experience'
  },
  {
    label: 'Contato',
    value: 'contact'
  }
])

const { scrollToTarget } = useScroll()

function onClickAnchor(e: MouseEvent) {
  const element = e.target as HTMLAnchorElement
  const [_, sectionId] = element.href.split('#')

  if (sectionId) {
    const targetElement = document.getElementById(sectionId)

    if (targetElement) {
      scrollToTarget(targetElement)
    }
  }
}

function onClickLogo() {
  const targetElement = document.getElementById('banner')

  if (targetElement) {
    scrollToTarget(targetElement)
  }
}
</script>
