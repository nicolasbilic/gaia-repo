<script setup lang="ts">
import { ref, onMounted } from "vue";
const indexActuel = ref(0);

const title = ref([
  "The Cosmic Artisan",
  "The soulkeeper",
  "The Druid",
  "The Celestral Huntress",
]);
const desc1 = ref([
  "This project was created for Moonlight Nexus, a visionary brand dedicated to merging innovation with artistic inspiration.",
  "This project was crafted for Stellar Odyssey, a pioneering brand that seeks to blend technology with human expression.",
  "This creation was made for Celestial Innovations, a forward-thinking company focused on the intersection of science and art.",
  "This creation was made for Celestial Innovations, a forward-thinking company focused on the intersection of science and art.",
]);
const desc2 = ref([
  "The Cosmic Artisan serves as a symbolic figure representing the brand’s core values: strength, precision, and a commitment to transformative ideas.",
  "The Digital Alchemist embodies the brand’s essence: creativity, ingenuity, and a drive for groundbreaking solutions.",
  "The Horizon Seeker symbolizes the brand’s foundational principles: exploration, vision, and a quest for the unknown.",
  "The Horizon Seeker symbolizes the brand’s foundational principles: exploration, vision, and a quest for the unknown.",
]);
const desc3 = ref([
  "The artwork reflects their mission to explore uncharted territories.",
  "The design captures their vision of pushing the boundaries of the digital realm.",
  "The piece resonates with their goal to expand the horizons of possibility.",
  "The piece resonates with their goal to expand the horizons of possibility.",
]);

// Utilisation de onMounted pour ajouter un écouteur d'événement quand le composant est monté
onMounted(() => {
  const carouselElement = document.querySelector(
    "#carousel-hero"
  ) as HTMLElement;
  // Vérifie que l'élément existe avant d'ajouter l'écouteur d'événement
  if (carouselElement) {
    // Ajoute un écouteur pour l'événement 'slid.bs.carousel'
    carouselElement.addEventListener("slid.bs.carousel", (event: Event) => {
      // Récupère l'index de la diapositive active
      const activeIndex = Array.from(
        carouselElement.querySelectorAll(".carousel-item")
      ).indexOf(carouselElement.querySelector(".active") as HTMLElement);
      // Met à jour l'indexActuel
      indexActuel.value = activeIndex;
    });
  }
});
</script>

<template>
  <div class="pt-4">
    <div class="container g-0">
      <!-- Display column -->
      <div class="hero-container d-flex flex-column align-items-center">
        <!-- Display row -->
        <div
          class="d-flex flex-column flex-xl-row justify-content-center align-items-center"
        >
          <div
            id="carousel-hero"
            class="carousel slide order-xl-2"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="4000">
                <img
                  src="../assets/images/cosmic-artisan-black-white.webp"
                  class="d-block w-100"
                  alt="Cosmic Artisan in black and white"
                />
                <img
                  src="../assets/images/cosmic-artisan-color.webp"
                  class="d-block w-100 carousel-image"
                  alt="Cosmic Artisan"
                />
              </div>
              <div class="carousel-item" data-bs-interval="4000">
                <!-- <img
                  src="../assets/images/soulkeeper-2.webp"
                  class="d-block w-100"
                  alt="Soulkeeper in color"
                /> -->
                <img
                  src="../assets/images/soulkeeper-black-white.webp"
                  class="d-block w-100"
                  alt="Soulkeeper in black and white"
                />
              </div>
              <div class="carousel-item">
                <!-- <img
                  src="../assets/images/druid-2.webp"
                  class="d-block w-100"
                  alt="Druid in color"
                /> -->
                <img
                  src="../assets/images/druid-black-white.webp"
                  class="d-block w-100"
                  alt="Druid in black and white"
                />
              </div>
              <div class="carousel-item">
                <!-- <img
                  src="../assets/images/druid-2.webp"
                  class="d-block w-100"
                  alt="Celestial Huntress in color"
                /> -->
                <img
                  src="../assets/images/celestral-huntress-black-white.webp"
                  class="d-block w-100"
                  alt="Celestial Huntress in black and white"
                />
              </div>
            </div>
            <button
              class="carousel-control-next ps-3 ps-sm-0 pt-2"
              type="button"
              data-bs-target="#carousel-hero"
              data-bs-slide="next"
            >
              Explore<i class="bi bi-arrow-right-short"></i>
              <!-- <span class="carousel-control-next-icon" aria-hidden="true">
              </span> -->
            </button>
          </div>
          <transition name="fade-slide" mode="out-in">
            <!-- :key force vue à traiter le composant comme étant complètement ré-ajoutés au DOM-->
            <div class="project-title order-xl-1 py-3" :key="indexActuel">
              <h1>{{ title[indexActuel] }}</h1>
            </div>
          </transition>
        </div>
        <transition name="fade-slide" mode="out-in">
          <div
            class="project-summary py-3 pt-xl-5 w-100 d-flex flex-column flex-xl-row justify-content-center align-items-center"
            :key="indexActuel"
          >
            <div class="text">
              <p class="m-0">
                {{ desc1[indexActuel] }}
              </p>
            </div>
            <!-- horizontal line -->
            <hr class="d-block d-xl-none" />
            <!-- vertical line -->
            <div class="vertical-line d-none d-xl-block"></div>
            <div class="text">
              <p class="m-0">
                {{ desc2[indexActuel] }}
              </p>
            </div>
            <!-- vertical line -->
            <div class="vertical-line d-none d-xl-block"></div>
            <div class="text d-none d-xl-block">
              <p class="m-0">
                {{ desc3[indexActuel] }}
              </p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-container {
  min-height: 88vh;
}

/* Images */
.carousel-item {
  max-height: 400px;
  position: relative;
}
.carousel-item img {
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-item img:nth-child(1) {
  opacity: 1;
}
/* .carousel-item:hover img:nth-child(1) {
  opacity: 0;
} */
.carousel-item img:nth-child(2) {
  opacity: 0;
}
.carousel-item:hover img:nth-child(2) {
  opacity: 1;
}

/* Button */
button {
  all: unset;
  /* color: var(--color-text-primary); */
  color: var(--color-text-secondary);
  text-decoration: underline;
  font-size: 18px;
}
button:hover,
button:focus {
  /* color: var(--color-text-primary); */
  color: var(--color-text-secondary);
  text-decoration: underline;
}
h1 {
  font-size: 105px;
  font-size: clamp(80px, 14vw, 105px);
  font-weight: bolder;
  line-height: clamp(70px, 14vw, 90px);
  text-align: center;
}
/*** Project title ***/
.project-title {
  height: 100%;
  padding: 0 3rem;
  z-index: 2;
}
/* Project summary */
.project-summary {
  padding: 0 1rem;
}

/* État initial de l’élément (invisible et décalé vers le bas) */
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
/* Décrit comment la transition se déroule */
.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
/* État final de l’élément (visible et à sa position finale) */
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.project-summary .text {
  padding: 10px 0;
}

/* Lines separating text columns */
/* Line for mobile & tablet */
hr {
  width: 50%;
  height: 1px;
  color: var(--color-divider);
}
/* Line for desktop */
.vertical-line {
  border-left: 1px solid var(--color-divider);
  height: 80px;
  margin-right: 15px;
  opacity: 0.6;
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
  .carousel-inner {
    border-radius: var(--radius);
  }
  .carousel-item img {
    border-radius: var(--radius);
  }
}

/****** >= 768px ******/
@media (width >= 768px) {
  .project-summary .text {
    width: 50%;
  }
}

/****** >= 992px ******/
@media (width >= 992px) {
}

/****** >= 1200px ******/
@media (width >= 1200px) {
  .project-title {
    width: 30%;
  }
  .carousel {
    width: 70%;
  }
  .project-summary .text {
    padding: 0 65px;
  }
}
</style>
