<template>
  <header class="fixed top-0 bg-zinc-900 w-full xl:py-4 2xl:py-6 z-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="ms-4 xl:ms-0">
          <a href="/" @click.prevent="onClickLogo">
            <div class="text-md lg:text-xl text-white font-bold -mb-1 mb-md-0">Gabriel Xavier</div>
            <div class="text-md lg-text-xl text-gray-400">Desenvolvedor Front-end</div>
          </a>
        </h1>

        <button class="cursor-pointer p-4 block xl:hidden" :aria-label="toggleButtonTitle">
          <IconsMenu
            @click="onClickToggleMenu"
            width="32"
            height="32"
            class="hover:fill-amber-600 transition"
            :class="{ 'fill-white': !isMenuOpen, 'fill-amber-600': isMenuOpen }"
          />
        </button>
        <nav
          class="dropdown-menu items-center hidden xl:flex bg-neutral-800 xl:bg-transparent"
          :class="{ '--is-open': isMenuOpen }"
        >
          <ul class="flex flex-col xl:flex-row mb-2 xl:mb-0">
            <li v-for="link in links" :key="link.value" class="block me-2">
              <a
                :href="`#${link.value}`"
                @click.prevent="onClickAnchor"
                class="block text-sm xl:text-lg text-white hover:text-amber-600 p-3 transition"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <BaseButton
            tag="a"
            class="xl:ms-4"
            href="/documents/curriculo_Gabriel_Xavier_Desenvolvedor_Frontend_Senior.pdf"
            target="_blank"
            >Baixar currículo</BaseButton
          >
        </nav>
      </div>
    </div>
  </header>
  <Transition name="fade-backdrop">
    <div
      v-if="isMenuOpen"
      class="backdrop bg-black/80 fixed z-2 left-0 top-0 w-full h-full"
      @click="onClickHideMenu"
    ></div>
  </Transition>
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

const isMenuOpen = ref<boolean>(false)
function onClickToggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function onClickHideMenu() {
  isMenuOpen.value = false
}

const toggleButtonTitle = computed<string>(() => {
  return isMenuOpen.value ? 'Ocultar menu' : 'Exibir menu'
})
</script>

<style lang="scss">
@media screen and (max-width: 79rem) {
  .dropdown-menu {
    position: absolute;
    right: 0;
    top: 64px;
    display: flex;
    flex-direction: column;
    max-width: 300px;
    padding: 0 16px 16px 16px;
    z-index: 4;
    align-items: start;
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0;
    transform: translateX(100%);

    &.--is-open {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .fade-backdrop-enter-active,
  .fade-backdrop-leave-active {
    transition: opacity 0.3s;
  }
  .fade-backdrop-enter,
  .fade-backdrop-leave-to {
    opacity: 0;
  }
}
</style>
