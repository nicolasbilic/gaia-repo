<script setup lang="ts"></script>

<template>
  <footer class="text-center text-white py-4">
    <p class="brand">Gaia</p>
    <a
      href="https://www.facebook.com/"
      target="_blank"
      class="text-white fs-4 me-3"
    >
      <i class="bi bi-facebook"></i>
    </a>
    <a href="https://x.com/" target="_blank" class="text-white fs-4 me-3">
      <i class="bi bi-twitter-x"></i>
    </a>
    <a
      href="https://www.instagram.com/"
      target="_blank"
      class="text-white fs-4"
    >
      <i class="bi bi-instagram"></i>
    </a>
    <RouterLink to="/legal" class="legal text-white mt-4">Legal</RouterLink>
    <p class="mt-4">&copy; 2024 Gaia</p>
  </footer>
</template>

<style scoped>
/****** Global ******/
footer .brand {
  display: block;
  font-family: var(--font-family-primary);
  color: var(--text-color-primary);
  font-size: clamp(100px, 13vw, 160px);
}
.legal {
  display: block;
  font-size: var(--text-16px-size);
}
</style>
