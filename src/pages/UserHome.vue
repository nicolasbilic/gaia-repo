/* prettier-ignore */
<script setup lang="ts"></script>

<template>
  <div>
    <section class="hero-section">
      <div class="hero-projects-container">
        <div class="hero-projects">
          <div class="item">
            <img
              src="../assets/webp/artisan-celeste.webp"
              alt="Celestian Artisan"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/druid.webp"
              alt="Mushroom Druid"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/elf.webp"
              alt="Elf of the moon"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/elf-2.webp"
              alt="Elf of the wood with a bow"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/sorceress.webp"
              alt="Sorceress"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/pirate-galaxy.webp"
              alt="Galactic Pirate"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/alchemist.webp"
              alt="Alchemist"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/star-nomad.webp"
              alt="Star nomad"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/lunar-archer.webp"
              alt="Lunar archer"
              width="auto"
              height="300"
            />
          </div>
          <div class="item">
            <img
              src="../assets/webp/oracle.webp"
              alt="Oracle"
              width="auto"
              height="300"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="projects-section">
      <div class="projects-container">
        <div class="projects">
          <img
            src="../assets/webp/fey.webp"
            alt="Fey"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/barde.webp"
            alt="Barde"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/warrior.webp"
            alt="Warrior"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/emissary.webp"
            alt="Emissary"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/mage.webp"
            alt="Mage"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/blacksmith.webp"
            alt="Blacksmith"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/priest.webp"
            alt="Priest"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/pirate-galaxy-2.webp"
            alt="Female galactic pirate with a sword"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/spectral-sailor.webp"
            alt="Spectral sailor"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/soulkeeper.webp"
            alt="Soulkeeper"
            width="auto"
            height="auto"
          />
          <img
            src="../assets/webp/celestial-architect.webp"
            alt="Celestial architect"
            width="auto"
            height="auto"
          />
        </div>
      </div>

      <!-- More projects -->
      <div class="more-projects-container">
        <div class="more-projects">
          <div class="img-container">
            <img
              class="hey"
              src="../assets/webp/spectral-sailor.webp"
              alt="Spectral sailor"
            />
          </div>
          <div class="img-container">
            <img
              class="hey"
              src="../assets/webp/spectral-sailor.webp"
              alt="Spectral sailor"
            />
          </div>
          <div class="img-container">
            <img
              class="hey"
              src="../assets/webp/spectral-sailor.webp"
              alt="Spectral sailor"
            />
          </div>
          <div class="img-container">
            <img
              class="hey"
              src="../assets/webp/spectral-sailor.webp"
              alt="Spectral sailor"
            />
          </div>
          <div class="img-container">
            <img
              class="hey"
              src="../assets/webp/spectral-sailor.webp"
              alt="Spectral sailor"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/****** General ******/

/****** Hero section ******/
.hero-section {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("./../assets/webp/bg-hero-section.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-projects-container {
  overflow: hidden;
}

.hero-projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  padding: 70px 0;
  /* background-color: plum; */
}

.hero-projects .item {
  transition: 0.5s;
  filter: brightness(0);
  filter: brightness(0.9);
}

.hero-projects .item:hover {
  filter: brightness(1);
  transform: translateZ(200px);
}
.hero-projects .item:hover + * {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(40deg);
}
.hero-projects .item:hover + * + * {
  filter: brightness(0.4);
  transform: translateZ(70px) rotateY(20deg);
}
.hero-projects .item:hover + * + * + * {
  filter: brightness(0.2);
  transform: translateZ(30px) rotateY(10deg);
}
.hero-projects .item:has(+ *:hover) {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(-40deg);
}
.hero-projects .item:has(+ * + *:hover) {
  filter: brightness(0.6);
  transform: translateZ(70px) rotateY(-20deg);
}
.hero-projects .item:has(+ * + * + *:hover) {
  filter: brightness(0.2);
  transform: translateZ(30px) rotateY(-10deg);
}

.item img {
  /* border-radius: 150px; */
  border-radius: var(--radius);
}

/****** Projects section ******/
.projects-section {
  background-color: #242223;
  margin: 10rem 0;
  padding: 50px 0;
}

.projects {
  columns: 350px;
}

.projects img {
  width: 100%;
  margin-bottom: 16px;
  border-radius: var(--radius);
}

/****** More projects section ******/
.more-projects {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10rem 0;
}

.img-container {
  width: 180px;
  /* Largeur initiale du conteneur de l'image à 200px */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  /* Cache les parties de l'image contenue qui dépassent (car l'image a 300px de largeur) */
  filter: grayscale(1);
  transition: all 1s cubic-bezier(0.87, -0.5, 0.03, 1.54);
  /* Crée une animation originale */
  /* cubic-bezier(x1, y1, x2, y2); Si y2 > 1, l’animation dépasse sa cible puis revient (rebond).; Si y1 < 0, l’animation/image se rétrécit puis revient (rebond). */
  margin: 0 3px;
}

.img-container img {
  width: 525px;
  height: 350px;
  max-height: 525px;
  object-fit: cover;
}

.img-container:hover {
  /* Nouvelle largeur du conteneur de l'image au survol*/
  width: 400px;
  filter: grayscale(0);
}
</style>
