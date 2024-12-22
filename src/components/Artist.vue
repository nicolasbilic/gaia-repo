<script setup lang="ts"></script>

<template>
  <div
    class="artist-container position-relative container d-flex flex-column align-items-center justify-content-center g-0 my-5 border border-primary"
  >
    <!-- ARTISTE PLUME IMAGE -->
    <div id="artist-feather">
      <img
        src="../assets/webp/artiste-2.webp"
        alt="The artist from the side draws her creations in an imaginary world"
        width="300"
        height="auto"
        loading="lazy"
      />
    </div>

    <!-- ARTISTE PLUME TITRE -->
    <div class="title-container text-left position-absolute top-0 start-50 p-3">
      <h3>
        The <br />
        Artist
      </h3>
    </div>
  </div>

  <!-- ARTIST CONTENT-->
  <div
    class="artist-content position-relative d-flex flex-column border border-success"
  >
    <div class="d-flex flex-row justify-content-center align-items-center">
      <!-- Elf with a sword -->
      <img
        id="sword-elf"
        src="../assets/webp/elf.webp"
        alt="Elf with a sword"
        width="200"
        height="auto"
        loading="lazy"
      />
      <!-- intro text -->
      <p>
        Crafting worlds and characters born from imagination, I bring unique
        visions to life.
      </p>
    </div>
    <!-- The Artist -->
    <img
      id="artist-picture"
      src="../assets/webp/artiste-7.webp"
      alt="Picture of the artist"
      width="300"
      height="auto"
      loading="lazy"
    />
    <!-- Elf with a bow -->
    <img
      src="../assets/webp/elf-2.webp"
      alt="Elf with a bow"
      width="300"
      height="auto"
      loading="lazy"
    />
    <!-- Description text -->
    <p class="text-center px-5">
      Graphic designer for six years, I've worked with multiple companies to
      create original artworks.
    </p>
  </div>
  <!-- The Artist from behind in an imaginary world -->
  <img
    src="../assets/webp/artiste-4.webp"
    alt="The artist, seen from behind draws her creations in an imaginary world"
    width="300"
    height="auto"
    loading="lazy"
  />
  <!-- Druid -->
  <img
    src="../assets/webp/druid.webp"
    alt="Mushroom Druid"
    width="300"
    height="auto"
    loading="lazy"
  />
</template>

<style scoped>
/******______ GENERAL ______******/

/* TITRE */
h3 {
  line-height: 70px;
}
/* IMAGES */
img {
  border-radius: 150px;
}

/******______ DETAILS ______******/

/* ARTISTE PLUME IMAGE */
.artist-container #artist-feather img {
  width: 100%;
  height: auto;
  border-radius: 0px;
  clip-path: circle(100% at 50% 85%);
  /* découpe l’image en forme de cercle. 100% indique que le cercle est très grand; at : Où placer le cercle? On dit où le centre du cercle sera placé. 	•	50% = au milieu horizontalement (de gauche à droite),	85% = en bas, à 85% de la hauteur de l’image*/
}

/* ARTISTE PLUME TITRE */
.artist-container .title-container {
  transform: translateX(-50%);
}

/* ARTISTE DESCRIPTION SWORD ELF IMAGE */
.artist-content #sword-elf {
  transform: translateX(-65px);
  z-index: 1;
}

/* ARTISTE DESCRIPTION TEXT 1 */
.artist-content > div p:nth-child(2) {
  padding-bottom: 50px;
}

/* ARTISTE DESCRIPTION ARTISTE IMAGE */
.artist-content #artist-picture {
  margin: 0 auto;
  transform: translateY(-100px);
  z-index: 2;
}

.artist-content img:hover img:not(:hover) {
  filter: grayscale(1) blur(10px);
}

/* ARTISTE DESCRIPTION TEXT 2 */
.artist-content p:nth-child(3) {
  transform: translateY(-50px);
}

/* The Artist */
/* Elf with a sword */
/* The Artist from behind in an imaginary world  */
/* Druid */
/*  Elf with a bow */

/*  >= 576px */
@media (width >= 576px) {
}

/*  >= 768px */
@media (width >= 768px) {
}

/*  >= 992px */
@media (width >= 992px) {
}

/* >= 1200px  */
@media (width >= 1200px) {
}
</style>
