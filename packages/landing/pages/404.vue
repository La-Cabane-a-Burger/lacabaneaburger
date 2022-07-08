<template>
  <div class="min-h-full pt-16 pb-12 flex flex-col bg-white">
    <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-40">
      <div class="py-16">
        <div class="text-center">
          <p class="text-sm font-semibold text-primary-900 uppercase tracking-wide">404</p>
          <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page introuvable.</h1>
          <p class="mt-2 text-base text-gray-500">Désolé, la page recherchée n'existe pas.</p>
          <div class="mt-6">
            <a href="/" class="text-base font-medium text-primary-900 hover:text-primary-500">Retourner à la page d'accueil<span aria-hidden="true"> &rarr;</span></a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Page Introuvage - La Cabane à Burger'
})
</script>
