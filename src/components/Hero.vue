<script setup lang="ts">
import { ref, onMounted } from "vue";
// import bootstrap, { Carousel } from "bootstrap";
import { Carousel } from "bootstrap";

const indexActuel = ref(0);

const title = ref([
  "The Cosmic Artisan",
  "The Soulkeeper",
  "The Druid",
  "The Celestial Huntress",
  "The Fey",
]);
const desc1 = ref([
  "This project was created for Moonlight Nexus, a visionary brand dedicated to merging innovation with artistic inspiration.",
  "This project was crafted for Eternal Haven, a brand devoted to preserving the essence of timeless connections and profound emotional resonance.",
  "This project was created for Verdant Horizon, a brand rooted in harmonizing nature’s wisdom with modern sustainability.",
  "This project was created for Starbound, a brand dedicated to exploring the potential of the cosmos through innovation and artistry.",
  "This project was created for Whispering Grove, a brand that blends the allure of ancient myths with a modern, mystical touch.",
]);
const desc2 = ref([
  "The Cosmic Artisan serves as a figure representing the brand’s core values: strength, precision, and a commitment to transformative ideas.",
  "The Soulkeeper embodies the brand’s philosophy: compassion, guardianship, and a deep reverence for the intangible bonds that unite us.",
  "The Druid symbolizes the brand’s ethos: balance, renewal, and an unwavering connection to the natural world.",
  "The Celestial Huntress represents the brand’s ideals: determination, grace, and an unyielding pursuit of excellence among the stars.",
  "The Fey symbolizes the brand’s essence: elegance, magic, and a profound connection to the realms of imagination and nature.",
]);
const desc3 = ref([
  "The artwork reflects their mission to explore uncharted territories.",
  "The artwork reflects their mission to safeguard and celebrate the ethereal beauty of human experiences and memories.",
  "The artwork reflects their mission to cultivate a deeper appreciation for the beauty and resilience of the environment.",
  "The artwork reflects their mission to inspire awe and curiosity by charting new frontiers and embracing the mysteries of the universe.",
  "The artwork reflects their mission to explore the hidden dimensions of nature, revealing its quiet strength and transformative power.",
]);

// Utilisation de onMounted pour ajouter un écouteur d'événement quand le composant est monté
onMounted(() => {
  const carouselElement = document.querySelector(
    "#carousel-hero"
  ) as HTMLElement;
  // Vérifie que l'élément existe avant d'ajouter l'écouteur d'événement
  if (carouselElement) {
    // début bug
    // Initialisation manuelle du carousel Bootstrap
    const bootstrapCarousel = new Carousel(carouselElement, {
      ride: "carousel", // Active le slider automatique
      interval: 5000, // Intervalle entre chaque slide
    });
    // fin bug
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
    <div class="container hero-component g-0">
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
            data-bs-interval="5000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="../assets/images/cosmic-artisan-black-white.webp"
                  class="d-block w-100"
                  alt="Cosmic Artisan in black and white"
                />
                <!-- <img 
                  src="../assets/images/cosmic-artisan-color.webp"
                  class="d-block d-lg-none w-100 hover-image"
                  alt="Cosmic Artisan"
                />
                <img
                  src="../assets/images/cosmic-artisan-color-lg.webp"
                  class="d-none d-lg-block w-100 hover-image"
                  alt="Cosmic Artisan"
                /> -->
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/soulkeeper-black-white.webp"
                  class="d-block w-100"
                  alt="Soulkeeper in black and white"
                />
                <!-- <img
                  src="../assets/images/soulkeeper-colors.webp"
                  class="d-block d-md-none w-100 hover-image"
                  alt="Soulkeeper in color"
                />
                <img
                  src="../assets/images/soulkeeper-colors-lg.webp"
                  class="d-none d-md-block w-100 hover-image"
                  alt="Soulkeeper in color"
                /> -->
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/druid-black-white.webp"
                  class="d-block w-100"
                  alt="Druid in black and white"
                />
                <!-- <img
                  src="../assets/images/druid-colors.webp"
                  class="d-block d-lg-none w-100 hover-image"
                  alt="Druid in color"
                />
                <img
                  src="../assets/images/druid-colors-lg.webp"
                  class="d-none d-lg-block w-100 hover-image"
                  alt="Soulkeeper in color"
                /> -->
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/celestral-huntress-black-white.webp"
                  class="d-block w-100"
                  alt="Celestial Huntress in black and white"
                />
                <!-- <img
                  src="../assets/images/celestial-huntress-colors.webp"
                  class="d-block d-md-none w-100 hover-image"
                  alt="Celestial Huntress in black and white"
                />
                <img
                  src="../assets/images/celestial-huntress-colors-lg.webp"
                  class="d-none d-md-block w-100 hover-image"
                  alt="Celestial Huntress in black and white"
                /> -->
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/fey-black-white.webp"
                  class="d-block w-100"
                  alt="Celestial Huntress in color"
                />
                <!-- <img
                  src="../assets/images/fey-colors.webp"
                  class="d-block d-lg-none w-100 hover-image"
                  alt="Celestial Huntress in black and white"
                />
                <img
                  src="../assets/images/fey-colors-lg.webp"
                  class="d-none d-lg-block w-100 hover-image"
                  alt="Celestial Huntress in black and white"
                /> -->
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
            <div
              class="project-title d-xl-flex justify-content-center align-items-center order-xl-1 py-3"
              :key="indexActuel"
            >
              <h1>{{ title[indexActuel] }}</h1>
            </div>
          </transition>
        </div>
        <transition name="fade-slide" mode="out-in">
          <div
            class="project-summary px-3 w-100 d-flex flex-column flex-xl-row justify-content-center align-items-center"
            :key="indexActuel"
          >
            <div class="text">
              <p class="m-0">
                {{ desc1[indexActuel] }}
              </p>
            </div>
            <!-- horizontal line -->
            <hr class="d-block d-xl-none w-50" />
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
.hero-component {
  padding-bottom: var(--section-gap);
}

.hero-container {
  height: 720px;
}

/* Images */
.carousel-item {
  max-height: 400px;
  position: relative;
}
.carousel-item img {
  object-fit: cover;
  /* transition: opacity 0.3s ease-in-out; */
}

/* .carousel-item img:nth-child(1) {
  opacity: 1;
} */

/* .carousel-item .hover-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
}
.carousel-item:hover .hover-image {
  opacity: 1;
}  */

/* Button */
button {
  all: unset;
  position: relative;
  font-size: var(--text-18px-size);
  color: var(--text-color-secondary);
}

button::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0px;
  width: 65%;
  height: 1px;
  background-color: var(--underline-light);
  margin-left: 16px;
}
button:hover,
button:focus {
  color: var(--text-color-secondary);
}
h1 {
  font-size: clamp(80px, 14vw, var(--heading-size));
  line-height: clamp(70px, 14vw, 90px);
  text-align: center;
}
/*** Project title ***/
.project-title {
  height: 100%;
  padding: 0 3rem;
  z-index: 2;
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
  height: 1px;
  color: var(--divider);
  opacity: 0.6;
}
/* Line for desktop */
.vertical-line {
  border-left: 1px solid var(--divider);
  height: 80px;
  margin-right: 15px;
  opacity: 0.6;
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
  .carousel-inner,
  .carousel-item img {
    border-radius: var(--radius);
  }
  button::after {
    width: 78%;
    margin: 0px;
  }
}

/****** >= 768px ******/
@media (width >= 768px) {
  .project-summary .text {
    width: 50%;
  }
}

/****** >= 1200px ******/
@media (width >= 1200px) {
  .hero-component {
    padding-bottom: 0;
  }
  .carousel {
    width: 70%;
  }
  .project-title {
    width: 30%;
  }
  .project-summary {
    padding-top: 70px;
  }
  .project-summary .text {
    padding: 0 65px;
  }
}
</style>
