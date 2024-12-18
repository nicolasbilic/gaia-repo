<script setup lang="ts">
import FeaturedProjects from "../components/FeaturedProjects.vue";
import ProjectShowcase from "../components/ProjectShowcase.vue";
import ProjectGallery from "../components/ProjectGallery.vue";
import Contact from "../components/Contact.vue";
import Artist from "../components/Artist.vue";
import Hero from "../components/Hero.vue";
</script>

<template>
  <div>
    <!-- ________ HERO SECTION ________ -->
    <section class="section">
      <Hero />
    </section>

    <!-- ________ ARTIST SECTION ________ -->
    <div class="section">
      <!-- <Artist /> -->
    </div>

    <!-- ________ PROJECTS SECTION ________ -->
    <section class="section">
      <FeaturedProjects />
      <ProjectShowcase />
      <ProjectGallery />
    </section>

    <!-- ________ CONTACT SECTION ________ -->
    <section class="contact-section">
      <!-- <Contact /> -->
    </section>
  </div>
</template>

<style scoped>
/****** General ******/

/****** PROJECT SECTION ******/
.section {
  padding: var(--section-gap) 0;
}

/****** MEDIA QUERIES ******/
/****** >= 576px ******/
@media (width >= 576px) {
}

/****** >= 768px ******/
@media (width >= 768px) {
}

/****** >= 992px ******/
@media (width >= 992px) {
}
</style>
