<script setup lang="ts">
</script>

<template>
  <div>
    <button class="btn btn-success btn-lg "><i class="bi bi-pencil-fill"></i> PAS DE BOUTONS</button>
    <p>Ce mage représente un arbitre intergalactique.</p>
    <h1>Hello World</h1>
    <a href="#" class="button">
      PAS DE BOUTONS
      <!-- <span>Graphisme</span> -->
    </a>
  </div>
</template>

<style scoped>
div {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* color: orange; */
  background-image: url('./../assets/webp/bg-hero-section.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

p {
  font-size: 20px;
}

.button {
  padding: 10px 25px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: var(--font-family-primary);
  color: #ffd585;
  background: #0C0C0C;
  border: 2px solid #555;
  transition: transform 0.3s, box-shadow 0.3s;
  border-radius: 40px 0px 40px 40px;
  border-radius: 40px 25px 40px 0px;
  /* position: relative;
  display: inline-block; */
  /* box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5), 6px 6px 10px rgba(0, 0, 0, 0.4); */
}
</style>