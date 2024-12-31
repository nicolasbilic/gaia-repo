<script setup lang="ts"></script>
<template>
  <div>
    <div class="project-showcase">
      <div class="container">
        <h2 class="scrollShow">Project Showcase</h2>
        <div
          class="d-flex flex-column flex-lg-row justify-content-center align-items-center"
        >
          <div
            class="img-box scrollSlideRight d-flex justify-content-center align-items-start"
          >
            <img
              src="../assets/images/desert-sorcerer.webp"
              alt="Desert sorcerer"
              width="400"
              height="267"
              loading="lazy"
            />
          </div>
          <div
            class="img-box scrollSlideUp d-flex justify-content-center align-items-start"
          >
            <img
              src="../assets/images/cosmic-artisan.webp"
              alt="Cosmic artisan"
              width="400"
              height="267"
              loading="lazy"
            />
          </div>
          <div class="img-box d-flex justify-content-center align-items-start">
            <img
              src="../assets/images/soulkeeper-2.webp"
              alt="Soulkeeper"
              width="400"
              height="267"
              loading="lazy"
            />
          </div>
          <div
            class="img-box scrollSlideUp d-flex justify-content-center align-items-start"
          >
            <img
              src="../assets/images/ocean-priest.webp"
              alt="Ocean priest"
              width="400"
              height="267"
              loading="lazy"
            />
          </div>
          <div
            class="img-box scrollSlideLeft d-flex justify-content-center align-items-start"
          >
            <img
              src="../assets/images/druid-2.webp"
              alt="Druid of the rivers"
              width="400"
              height="267"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/******______ PROJECT SHOWCASE ______******/
h2 {
  text-align: center;
  padding-bottom: 5rem;
}

.project-showcase {
  padding: var(--section-gap) 0;
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

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
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

/****** >= 768px ******/
@media (width >= 768px) {
  .img-box {
    width: 600px;
  }
}

/****** >= 992px ******/
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
