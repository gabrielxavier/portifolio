<template>
  <header class="fixed top-0 bg-zinc-900 w-full xl:py-6 z-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <h1 class="ms-4 xl:ms-0">
          <a href="/" @click.prevent="onClickLogo">
            <div class="text-md lg:text-xl text-white font-bold -mb-1 mb-md-0">Gabriel Xavier</div>
            <div class="text-md lg-text-xl text-gray-400">Desenvolvedor Front-end</div>
          </a>
        </h1>

        <button class="cursor-pointer p-4 block xl:hidden">
          <IconsMenu
            @click="onClickToggleMenu"
            width="32"
            height="32"
            class="hover:fill-amber-600 transition"
            :class="{ 'fill-white': !isMenuOpen, 'fill-amber-600': isMenuOpen }"
          />
        </button>
        <nav class="dropdown-mobile items-center hidden xl:flex bg-neutral-800" :class="{ 'is-open': isMenuOpen }">
          <ul class="flex">
            <li v-for="link in links" :key="link.value" class="me-2">
              <a
                :href="`#${link.value}`"
                @click.prevent="onClickAnchor"
                class="text-sm lg:text-lg text-white hover:text-amber-600 p-3 transition"
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
  <Transition name="fade">
    <div v-if="isMenuOpen" class="backdrop" @click="onClickToggleMenu"></div>
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
</script>

<style lang="scss">
.dropdown-mobile {
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

  &.is-open {
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    flex-direction: column;
    margin-bottom: 8px;

    li {
      display: block;

      a {
        display: block;
      }
    }
  }
}

.backdrop {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
