<template>
  <section id="contact" class="section-about pb-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4 items-center">
        <div class="col-span-8 col-start-3">
          <BaseHeading title="Contato" />
          <p class="mt-6 text-center">Gostou do meu perfil? Vamos conversar!</p>
          <p class="text-center">Entre em contato comigo através dos canais abaixo.</p>
          <ul class="flex items-center justify-center mt-8">
            <li class="me-6">
              <a href="mailto:gabriel.xavier.joinville@gmail.com" title="E-mail" target="_blank">
                <IconsMail :width="40" :height="40" class="fill-white hover:fill-amber-600 transition" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5547999332010" title="Whatsapp" target="_blank">
                <IconsWhatsapp :width="40" :height="40" class="fill-white hover:fill-amber-600 transition" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
