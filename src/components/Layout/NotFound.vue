<script setup lang="ts"></script>

<template>
  <div>
    <div class="error-404">
      <div
        class="error-404-content d-flex flex-column align-items-center justify-content-center gap-3"
      >
        <h1>Oops! The page you are looking for doesn’t exist.</h1>
        <a href="/" aria-label="Return to homepage"> Go Home </a>
        <a @click="$router.back" aria-label="Go back to the previous page">
          Go Back
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-404 {
  background-image: url("../../assets/images/not-found.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.error-404-content {
  min-height: 100vh;
  padding: 2rem;
}

.error-404 h1 {
  font-family: var(--font-family-secondary);
  font-size: var(--text-20px-size);
  color: var(--text-color-secondary);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px;
  margin-bottom: 5px;
  transition: 0.3s ease-in-out;
  border-radius: var(--radius);
}

.error-404 a,
.error-404 a:not([href]):not([class]) {
  font-size: var(--text-20px-size);
  color: var(--btn-color);
  font-weight: var(--font-weight-strong);
  text-transform: uppercase;
  padding: 10px 20px;
  background-color: var(--background-light-color);
  outline: var(--outline-dark);
  border-radius: var(--radius);
}

.error-404 a:hover,
.error-404 a:not([href]):not([class]):hover {
  color: var(--btn-color-hover);
  background-color: var(--btn-background-color-hover);
  outline: var(--outline-light);
}
</style>
