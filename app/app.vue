<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large',
  author: 'Farhan Madni',
  themeColor: '#187bff',
  ogLocale: 'en_US',
  ogType: 'website',
  twitterCreator: '@mfm347',
  twitterCard: 'summary_large_image',
  mobileWebAppCapable: 'yes',
  appleMobileWebAppCapable: 'yes',
})
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'author',
      href: 'https://twitter.com/@mfm347/',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@reference "@/style.css";

.page-enter-active,
.page-leave-active {
  @apply ta-300;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.125;
  filter: blur(0.8rem) saturate(125%);
}
</style>
