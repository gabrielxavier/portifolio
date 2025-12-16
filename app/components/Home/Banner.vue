<template>
  <section id="banner" class="section-banner pt-4 py-10 xl:py-20">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-12 lg:col-span-6 lg:col-start-2">
          <div class="text-lg text-white">Olá, eu sou</div>
          <div class="text-xl lg:text-2xl text-amber-600 font-bold mt-1">Gabriel Xavier</div>
          <div class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white font-bold mt-1">
            Desenvolvedor Front-end
          </div>
          <p class="lg:text-lg text-white mt-2">
            Bem-vindo ao meu portfólio! Aqui você encontrará informações sobre minhas habilidades, projetos,
            experiências profissionais e como entrar em contato comigo.
          </p>
          <BaseButton @click="onClickContact" class="mt-6">Contato</BaseButton>
        </div>
        <div class="col-span-12 lg:col-span-3 lg:col-start-9 hidden lg:block">
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
  </section>
</template>

<script setup lang="ts">
const { scrollToTarget } = useScroll()

function onClickContact() {
  const targetElement = document.getElementById('contact')

  if (targetElement) {
    scrollToTarget(targetElement)
  }
}
</script>
