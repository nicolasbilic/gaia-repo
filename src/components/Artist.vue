<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const show = ref(false);
const isElementVisible = ref([false, false]);
const hasElementBeenVisible = ref([false, false]);

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
  <!-- IMAGINARY ARTISTE -->
  <div class="container-sm g-0">
    <div
      class="artist-intro transition-section position-relative d-flex flex-column justify-content-center g-0 pb-5"
      :class="{ visible: isElementVisible[0] }"
    >
      <h2 class="mb-5 mb-lg-4 scrollShow">The Artist</h2>
      <!-- Imaginary Artist -->
      <div class="imaginary-artist">
        <img
          class="img-fluid d-md-none scrollClipSM"
          src="../assets/images/artiste-2.webp"
          alt="The artist from the side draws her creations in an imaginary world"
          width="300"
          height="562.5"
          loading="lazy"
        />
        <img
          class="img-fluid d-none d-md-block d-lg-none scrollClipMD"
          src="../assets/images/artiste-md.webp"
          alt="The artist from the side draws her beautiful creations in an imaginary world"
          width="auto"
          height="auto"
          loading="lazy"
        />
        <img
          class="img-fluid d-none d-lg-block scrollClipLG"
          src="../assets/images/artiste-lg.webp"
          alt="The artist from the side draws her beautiful creations in an imaginary world"
          width="auto"
          height="auto"
          loading="lazy"
        />
      </div>
    </div>

    <!-- ARTIST CONTENT-->
    <div
      class="artist-content text-center position-relative d-flex flex-column"
    >
      <div
        class="artist-crafting-worlds transition-section mx-md-2 d-flex flex-column flex-md-row justify-content-center align-items-center"
        :class="{ visible: isElementVisible[1] }"
      >
        <p class="mx-4 mx-md-3 scrollShow">
          Crafting worlds and characters born from imagination, I bring unique
          visions to life.
        </p>
        <!-- The Artist -->
        <img
          class="mx-0 mx-md-3 scrollColorRound"
          id="artist"
          src="../assets/images/artiste-7.webp"
          alt="Picture of the artist"
          width="300"
          height="auto"
          loading="lazy"
        />
      </div>
      <div
        class="dual-img d-flex flex-row justify-content-center align-items-center"
      >
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/elf-2.webp"
          alt="Elf with a bow"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/elf.webp"
          alt="Elf with a sword"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
      </div>
      <p class="scrollShow">
        Graphic designer for six years, I've worked with multiple companies to
        create original artworks.
      </p>
      <div
        class="dual-img d-flex flex-row justify-content-center align-items-center"
      >
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/siren-bard.webp"
          alt="Mushroom Druid"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/celestial-sorceress.webp"
          alt="Elf with a bow"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/******______ GENERAL ______******/

/* TITRE */
h3,
p {
  line-height: 70px;
}

/******______ DETAILS ______******/
h2 {
  padding-left: 2rem;
}
p {
  margin: 0;
}

/*** ARTIST CONTENT ***/
.artist-intro {
  margin-bottom: 5rem;
}
.artist-intro img {
  width: 100%;
  border-radius: var(--radius);
  object-fit: cover;
}

.artist-crafting-worlds {
  gap: 5rem;
}

.artist-content {
  align-items: center;
  justify-content: center;
  gap: 8rem;
}

.artist-content p {
  font-family: var(--font-family-primary);
  font-size: 50px;
}
.artist-content > p {
  padding: 0 1.5rem;
}

.artist-crafting-worlds img {
  border-radius: var(--radius);
  max-width: 300px;
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: grayscale(1);
  }
}

/*** Dual image ***/
.dual-img {
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.dual-img img {
  width: 50%;
  object-fit: cover;
  border-radius: var(--radius);
  transition: transform 0.3s ease-in-out;
}
.dual-img img:nth-child(1):active {
  transform: translateZ(200px) translateX(50%) scale(1.2);
}
.dual-img img:nth-child(2):active {
  transform: translateZ(200px) translateX(-50%) scale(1.2);
}

/******______ MEDIA QUERIES ______******/
/*  >= 576px */
@media (width >= 576px) {
  h2 {
    padding-left: 0rem;
  }
  .artist-content > p {
    padding: 0 3rem;
  }
}

/*  >= 768px */
@media (width >= 768px) {
  .dual-img img:nth-child(1):active {
    transform: translateZ(100px) translateX(50%) scale(1.05);
  }
  .dual-img img:nth-child(2):active {
    transform: translateZ(100px) translateX(-50%) scale(1.05);
  }
}

/*  >= 992px */
@media (width >= 992px) {
  .artist-crafting-worlds > * {
    width: 40%;
  }
  .dual-img {
    gap: 4.5rem;
  }
  .dual-img img {
    max-width: 360px;
  }
  .artist-intro {
    margin-bottom: 10rem;
  }
  .artist-content {
    gap: 13rem;
  }
  .artist-content > p {
    padding: 0 7rem;
  }
}

/* >= 1200px  */
@media (width >= 1200px) {
  .artist-crafting-worlds > * {
    width: 50%;
  }
  .dual-img {
    gap: 10rem;
  }
}
</style>
