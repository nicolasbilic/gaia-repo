<script setup lang="ts"></script>

<template>
  <!-- IMAGINARY ARTISTE -->
  <div class="container-sm g-0">
    <h2 class="mb-5 mb-lg-4">The Artist</h2>
    <div
      class="artist-intro position-relative d-flex flex-column justify-content-center align-items-center g-0 pb-5"
    >
      <!-- Imaginary Artist -->
      <div class="imaginary-artist">
        <img
          class="img-fluid d-md-none"
          src="../assets/images/artiste-2.webp"
          alt="The artist from the side draws her creations in an imaginary world"
          width="300"
          height="562.5"
          loading="lazy"
        />
        <img
          class="img-fluid d-none d-md-block d-lg-none"
          src="../assets/images/artiste-md.webp"
          alt="The artist from the side draws her beautiful creations in an imaginary world"
          width="auto"
          height="auto"
          loading="lazy"
        />
        <img
          class="img-fluid d-none d-lg-block"
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
        class="artist-crafting-worlds mx-md-2 d-flex flex-column flex-md-row justify-content-center align-items-center"
      >
        <p class="mx-4 mx-md-3">
          Crafting worlds and characters born from imagination, I bring unique
          visions to life.
        </p>
        <!-- The Artist -->
        <img
          class="mx-0 mx-md-3"
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
          class="img-fluid"
          src="../assets/images/elf-2.webp"
          alt="Elf with a bow"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
        <img
          class="img-fluid"
          src="../assets/images/elf.webp"
          alt="Elf with a sword"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
      </div>
      <p>
        Graphic designer for six years, I've worked with multiple companies to
        create original artworks.
      </p>
      <div
        class="dual-img d-flex flex-row justify-content-center align-items-center"
      >
        <img
          class="img-fluid"
          src="../assets/images/siren-bard.webp"
          alt="Mushroom Druid"
          width="187.5"
          height="281.25"
          loading="lazy"
        />
        <img
          class="img-fluid"
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
  clip-path: circle(100% at 50% 85%);
  object-fit: cover;
  /* découpe l’image en forme de cercle. 100% indique que le cercle est très grand; at : Où placer le cercle? On dit où le centre du cercle sera placé. 	•	50% = au milieu horizontalement (de gauche à droite),	85% = en bas, à 85% de la hauteur de l’image*/
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

.artist-content #artist {
  border-radius: 150px;
  max-width: 300px;
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: grayscale(1);
  }
}

/*** Dual image ***/
.dual-img {
  gap: 1rem;
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
  .artist-intro img {
    clip-path: circle(90% at 50% 85%);
  }
  .dual-img img:nth-child(1):active {
    transform: translateZ(100px) translateX(50%) scale(1.05);
  }
  .dual-img img:nth-child(2):active {
    transform: translateZ(100px) translateX(-50%) scale(1.05);
  }
}

/*  >= 992px */
@media (width >= 992px) {
  .artist-intro img {
    clip-path: circle(100% at 50% 160%);
  }
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
    /* outline: 3px solid plum; */
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
