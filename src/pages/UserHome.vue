<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import UserNavBar from "../components/Layout/UserNavBar.vue";
import UserFooter from "../components/Layout/UserFooter.vue";
import Hero from "../components/Hero.vue";
import Artist from "../components/Artist.vue";
import FeaturedProjects from "../components/FeaturedProjects.vue";
import ProjectShowcase from "../components/ProjectShowcase.vue";
import ProjectGallery from "../components/ProjectGallery.vue";
import Contact from "../components/Contact.vue";

const show = ref(false);
const isElementVisible = ref([false, false, false, false, false]);
const hasElementBeenVisible = ref([false, false, false, false, false]);

const checkVisibility = () => {
  const elements = [
    document.getElementById("artist"),
    document.getElementById("featured-projects"),
    document.getElementById("project-showcase"),
    document.getElementById("project-gallery"),
    document.getElementById("contact"),
  ];

  elements.forEach((element, index) => {
    if (element && !hasElementBeenVisible.value[index]) {
      const rect = element.getBoundingClientRect();
      // -200 on soustrait 200 pixels à la hauteur de la fenêtre. (800 à 600) donc on retarde l'affichage du conteneur cible
      if (rect.top < window.innerHeight - 200 && rect.bottom > 0) {
        isElementVisible.value[index] = true;
        hasElementBeenVisible.value[index] = true;
      }
    }
  });
};

onMounted(() => {
  show.value = true;
  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("resize", checkVisibility);
  checkVisibility();
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkVisibility);
  window.removeEventListener("resize", checkVisibility);
});
</script>

<template>
  <transition name="fade-slide">
    <div v-if="show">
      <UserNavBar />
      <!-- <Hero /> -->

      <div
        id="artist"
        class="section transition-section"
        :class="{ visible: isElementVisible[0] }"
      >
        <Artist />
      </div>

      <!-- <section class="section">
        <FeaturedProjects
          id="featured-projects"
          class="transition-section"
          :class="{ visible: isElementVisible[1] }"
        />
        <ProjectShowcase
          id="project-showcase"
          class="transition-section"
          :class="{ visible: isElementVisible[2] }"
        />
        <ProjectGallery
          id="project-gallery"
          class="transition-section"
          :class="{ visible: isElementVisible[3] }"
        />
      </section> -->

      <!-- <section
        id="contact"
        class="contact-section transition-section"
        :class="{ visible: isElementVisible[4] }"
      >
        <Contact />
      </section> -->

      <UserFooter />
    </div>
  </transition>
</template>

<style scoped>
/****** Transition de la page au chargement ******/
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/****** Animation de chargement de section ******/
.transition-section {
  opacity: 0;
  transform: translateY(250px);
  transition: all 0.9s ease-in-out;
}
.transition-section.visible {
  opacity: 1;
  transform: translateY(0);
}

/****** General ******/
.section {
  padding: var(--section-gap) 0;
}
</style>
