<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
// Une liste réactive indiquant si chaque élément spécifique est visible à l’écran.
const isElementVisible = ref([false, false, false]);
// Une liste réactive indiquant si chaque élément a déjà été visible au moins une fois.
const hasElementBeenVisible = ref([false, false, false]);

const checkVisibility = () => {
  // Surveille ces éléments HTML
  const elements = [
    document.getElementById("artist-intro"),
    document.getElementById("artist-crafting-worlds"),
    document.getElementById("artist-work"),
  ];

  // element : Un des éléments HTML de la liste. index : La position de l’élément dans le tableau.
  elements.forEach((element, index) => {
    // vérifie que l’élément existe et qu’il n’a jamais été visible auparavant.
    if (element && !hasElementBeenVisible.value[index]) {
      // Renvoie un objet avec des propriétés comme top, bottom, etc., indiquant la position de l’élément par rapport au viewport.
      const rect = element.getBoundingClientRect();
      // Vérifie si le haut de l’élément est dans la fenêtre visible, mais avec une marge de 130 pixels pour retarder son affichage. rect.bottom > 0 : Vérifie si le bas de l’élément est au-dessus du haut du viewport.
      if (rect.top < window.innerHeight - 130 && rect.bottom > 0) {
        // L’élément est marqué comme visible
        isElementVisible.value[index] = true;
        // 	L’élément est marqué comme ayant été visible au moins une fois
        hasElementBeenVisible.value[index] = true;
      }
    }
  });
};

onMounted(() => {
  // Ajoute un écouteur d’événements pour exécuter checkVisibility à chaque défilement.
  window.addEventListener("scroll", checkVisibility);
  // Fait de même pour le redimensionnement de la fenêtre.
  window.addEventListener("resize", checkVisibility);
  // Lance une première vérification pour détecter les éléments déjà visibles au chargement.
  checkVisibility();
});

// Supprime les écouteurs d’événements pour éviter les fuites de mémoire ou des appels inutiles une fois le composant détruit.
onUnmounted(() => {
  window.removeEventListener("scroll", checkVisibility);
  window.removeEventListener("resize", checkVisibility);
});
</script>

<template>
  <div id="artist" class="container-sm g-0">
    <div
      id="artist-intro"
      class="transition-section position-relative d-flex flex-column justify-content-center g-0 pb-5"
      :class="{ visible: isElementVisible[0] }"
    >
      <h2 class="mb-5 mb-lg-4 scrollShow">The Artist</h2>
      <!-- Imaginary Artist -->
      <div class="imaginary-artist">
        <img
          class="img-fluid d-md-none scrollClipSM w-100"
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
      class="artist-content text-center position-relative d-flex flex-column align-items-center justify-content-center"
    >
      <div
        id="artist-crafting-worlds"
        class="transition-section mx-md-2 d-flex flex-column flex-md-row justify-content-center align-items-center"
        :class="{ visible: isElementVisible[1] }"
      >
        <p class="mx-4 mx-md-3 scrollShow">
          Crafting worlds and characters born from imagination, I bring unique
          visions to life.
        </p>
        <!-- The Artist -->
        <img
          class="mx-0 mx-md-3 scrollColorRound"
          src="../assets/images/artiste-7.webp"
          alt="Picture of the artist"
          width="300"
          height="auto"
          loading="lazy"
        />
      </div>
      <p
        id="artist-work"
        class="scrollShow transition-section"
        :class="{ visible: isElementVisible[2] }"
      >
        Graphic designer for six years, I've worked with multiple companies to
        create original artworks.
      </p>
      <!-- <div
        id="dual-img-1"
        class="dual-img transition-section d-flex flex-row justify-content-center align-items-center"
        :class="{ visible: isElementVisible[3] }"
      >
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/artiste-4.webp"
          alt="Elf with a bow"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
        <img
          class="img-fluid scrollGrow"
          src="../assets/images/artiste-5.webp"
          alt="Elf with a sword"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
      </div> -->
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
#artist-intro {
  margin-bottom: 5rem;
}
#artist-intro img {
  object-fit: cover;
  border-radius: var(--radius);
}

#artist-crafting-worlds {
  gap: 5rem;
}

.artist-content {
  gap: 8rem;
}

.artist-content p {
  font-family: var(--font-family-primary);
  font-size: 50px;
}
.artist-content > p {
  padding: 0 1.5rem;
}

.artist-content > div img {
  max-width: 300px;
  border-radius: var(--radius);
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: grayscale(1);
  }
}

/******______ MEDIA QUERIES ______******/
/*  >= 576px */
@media (width >= 576px) {
  h2 {
    padding-left: 0;
  }
  .artist-content > p {
    padding: 0 3rem;
  }
}

/*  >= 992px */
@media (width >= 992px) {
  #artist-intro {
    margin-bottom: 10rem;
  }
  #artist-crafting-worlds > * {
    width: 40%;
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
  #artist-crafting-worlds > * {
    width: 50%;
  }
}
</style>
