<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-gray-100 focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg"
    >Skip to content</a
  >
  <div class="flex min-h-screen flex-col">
    <main id="main" role="main" class="container mx-auto flex-grow px-4 pt-6 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
