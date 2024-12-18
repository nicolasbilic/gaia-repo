<script setup lang="ts"></script>

<template>
  <!-- svg en fond via l'outil pen de figma -->
  <div class="artist-container position-relative container g-0 my-5">
    <!-- The Artist in an imaginary world -->
    <div id="artist-from-the-side">
      <img
        src="../assets/webp/artiste-2.webp"
        alt="The artist from the side draws her creations in an imaginary world"
        width="300"
        height="auto"
        loading="lazy"
      />
    </div>
    <!-- title container -->
    <div class="title-container position-absolute text-left">
      <h3>
        The <br />
        Artist
      </h3>
    </div>
    <!-- ARTIST CONTENT-->
    <div class="artist-content position-relative">
      <!-- intro text -->
      <p>
        Crafting worlds and characters born from imagination, I bring unique
        visions to life through bold, evocative design.
      </p>
      <!-- The Artist -->
      <img
        id="artist-picture"
        src="../assets/webp/artiste-7.webp"
        alt="Picture of the artist"
        width="300"
        height="auto"
        loading="lazy"
      />
      <!-- Description text -->
      <p>
        Graphic designer for six years, I've worked with multiple companies to
        create original artworks.
      </p>
      <!-- Elf with a sword -->
      <img
        id="sword-elf"
        class="position-absolute"
        src="../assets/webp/elf.webp"
        alt="Elf with a sword"
        width="200"
        height="auto"
        loading="lazy"
      />
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
    <!-- Elf with a bow -->
    <img
      src="../assets/webp/elf-2.webp"
      alt="Elf with a bow"
      width="300"
      height="auto"
      loading="lazy"
    />
  </div>
</template>
<style scoped>
/******______ ARTIST SECTION ______******/
.artist-section {
  padding: var(--section-gap) 0;
}

.artist-container img {
  border-radius: 150px;
}

.artist-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Titre */
.artist-container .title-container {
  width: 100%;
  top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
}

/* The Artist in an imaginary world */
.artist-container #artist-from-the-side img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 0px;
  clip-path: circle(100% at 50% 85%);
  /* découpe l’image en forme de cercle. 100% indique que le cercle est très grand; at : Où placer le cercle? On dit où le centre du cercle sera placé. 	•	50% = au milieu horizontalement (de gauche à droite),	85% = en bas, à 85% de la hauteur de l’image*/
}

.artist-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: right;
}

.artist-content p {
  text-align: right;
  width: 65vw;
  padding-right: 30px;
}

.artist-content #artist-picture {
  max-width: 100%;
  height: auto;
  z-index: 2;
}
.artist-content #sword-elf {
  top: 50px;
  left: -70px;
  width: 50vw;
}

/* The Artist */
/* Elf with a sword */
/* The Artist from behind in an imaginary world  */
/* Druid */
/*  Elf with a bow */
</style>
