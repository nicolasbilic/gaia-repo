<script setup lang="ts">
import { ref, onMounted } from "vue";
import LoadingScreen from "./components/Layout/LoadingScreen.vue";

const isLoading = ref(true);

// Récupère la date de la dernière visite et compare-la avec la date actuelle
const lastVisit = localStorage.getItem("lastVisit");
const now = new Date().getTime();

// Si aucune visite ou si la dernière visite remonte à plus de 1h, réinitialise le statut
if (!lastVisit || now - parseInt(lastVisit) > 60 * 60 * 1000) {
  localStorage.removeItem("hasVisited"); // Réinitialise "hasVisited"
  localStorage.setItem("lastVisit", now.toString()); // Met à jour la date de la dernière visite
} else {
  localStorage.setItem("lastVisit", now.toString()); // Met à jour la date de la dernière visite si moins de 24h
}

onMounted(() => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    // Si c'est la première visite
    // setTimeout(() => {
    isLoading.value = true;
    localStorage.setItem("hasVisited", "true"); // Marque comme visité globalement
    // }, 7000);
  } else {
    // Si déjà visité
    isLoading.value = false; // N'affiche pas l'écran de chargement
  }
});
const handleFinishLoading = () => {
  isLoading.value = false;
};
</script>

<template>
  <LoadingScreen v-if="isLoading" @finish-loading="handleFinishLoading" />
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
