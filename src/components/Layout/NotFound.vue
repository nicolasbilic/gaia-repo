<template>
  <div>
    <div class="error-404">
      <div class="error-404-content">
        <h1>Oops! The page you are looking for doesn’t exist.</h1>
        <a href="/" aria-label="Retourner à l'accueil"> Go Home </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.error-404 {
  background-image: url("../../assets/webp/not-found.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.error-404-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
}

.error-404 h1 {
  font-family: var(--font-family-secondary);
  font-size: 22px;
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px 10px;
  margin-bottom: 5px;
  background-color: var(--color-background);
  transition: 0.3s ease-in-out;
  border-radius: var(--radius);
}

.error-404 a {
  font-size: 20px;
  color: var(--c-white-mute);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px;
  background-color: var(--color-background-dark);
  border-radius: var(--radius);
}

.error-404 a:hover {
  color: var(--color-text-accent-dark);
  background-color: var(--color-background-light);
  outline: 2px solid var(--color-outline-dark);
}
</style>
