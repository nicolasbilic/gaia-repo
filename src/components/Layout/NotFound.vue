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
  background-image: url("../../assets/images/not-found.webp");
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
  font-size: var(--text-20px-size);
  color: var(--text-color-secondary);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px 10px;
  margin-bottom: 5px;
  transition: 0.3s ease-in-out;
  border-radius: var(--radius);
}

.error-404 a {
  font-size: var(--text-20px-size);
  color: var(--btn-color);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px;
  background-color: var(--background-light-color);
  border-radius: var(--radius);
  outline: var(--outline-dark);
}

.error-404 a:hover {
  color: var(--btn-color-hover);
  background-color: var(--btn-background-color-hover);
  outline: 2px solid var(--outline-light);
}
</style>
