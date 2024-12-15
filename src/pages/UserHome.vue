/* prettier-ignore */
<script setup lang="ts"></script>

<template>
  <div>
    <!-- <section class="hero-section">
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
    </section> -->

    <section class="projects-section">
      <!--________ Project Showcase ________-->
      <div class="project-showcase">
        <div class="container bg-danger">
          <h2>Project Showcase</h2>
          <div
            class="d-flex flex-column flex-lg-row justify-content-center align-items-center"
          >
            <div
              class="img-box d-flex justify-content-center align-items-start"
            >
              <img
                src="../assets/webp/desert-sorcerer.webp"
                alt="Desert sorcerer"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
            <div
              class="img-box d-flex justify-content-center align-items-start"
            >
              <img
                src="../assets/webp/cosmic-artisan.webp"
                alt="Cosmic artisan"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
            <div
              class="img-box d-flex justify-content-center align-items-start"
            >
              <img
                src="../assets/webp/soulkeeper-2.webp"
                alt="Soulkeeper"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
            <div
              class="img-box d-flex justify-content-center align-items-start"
            >
              <img
                src="../assets/webp/ocean-priest.webp"
                alt="Ocean priest"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
            <div
              class="img-box d-flex justify-content-center align-items-start"
            >
              <img
                src="../assets/webp/druid-2.webp"
                alt="Druid of the rivers"
                width="400"
                height="267"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!--________ Project Gallery ________-->
      <div class="project-gallery">
        <div class="container bg-warning">
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

/***______ Projects Gallery ______***/
.projects-section {
  padding: var(--section-gap) 0;
}

.projects {
  columns: 350px;
}

.projects img {
  width: 100%;
  margin-bottom: 16px;
}

/***______ Project Showcase ______***/
.project-showcase {
  padding: var(--section-gap) 0;
}

.project-showcase h2 {
  text-align: center;
  padding-bottom: 4rem;
}

.img-box {
  width: 350px;
  height: 140px;
  margin: 3px;
  filter: grayscale(1);
  /* cache les parties de l'image contenue qui dépassent (car l'image a 300px de largeur) */
  overflow: hidden;
  /* crée une animation originale */
  transition: all 0.6s cubic-bezier(0.87, -0.5, 0.03, 1.54);
  /* cubic-bezier(x1, y1, x2, y2); Si y2 > 1, l’animation dépasse sa cible puis revient (rebond).; Si y1 < 0, l’animation/image se rétrécit puis revient (rebond). */
  /* •	0.87 : Indique une accélération initiale rapide.
	•	-0.5 : Introduit une remontée brutale, simulant un rebond.
	•	0.03 : Ralentit rapidement après le pic.
	•	1.54 : Permet un effet de dépassement et de retour. */
}
.img-box:hover {
  height: 255px;
  filter: grayscale(0);
}

.img-box img {
  width: 400px;
  object-fit: cover;
  object-position: center;
}

/****** Media Queries ******/
@media (width >= 576px) {
  .img-box {
    width: 500px;
  }
  .img-box:hover {
    height: 380px;
  }

  .img-box img {
    width: 600px;
    height: auto;
  }
}

@media (width >= 768px) {
  .img-box {
    width: 600px;
  }
}

@media (width >= 992px) {
  .img-box {
    width: 180px;
    height: 400px;
  }
  .img-box:hover {
    width: 530px;
    height: 400px;
  }

  .img-box img {
    height: 400px;
  }
}
</style>
