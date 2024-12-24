<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import LoadingScreen from "./components/Layout/LoadingScreen.vue";

const isLoading = ref(true);

// const audio: HTMLAudioElement = new Audio(
//   "./assets/music/lover-brock-hewitt.mp3"
// );

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
    setTimeout(() => {
      isLoading.value = false; // Fin du chargement
      localStorage.setItem("hasVisited", "true"); // Marque comme visité globalement
    }, 5500);
  } else {
    // Si déjà visité
    isLoading.value = false; // Pas de chargement
  }
});
</script>

<template>
  <LoadingScreen v-if="isLoading" />
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>
