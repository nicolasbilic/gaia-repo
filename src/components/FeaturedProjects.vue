<script setup lang="ts"></script>

<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center"
  >
    <h2 class="scrollShow text-center">Artworks</h2>
    <div class="featured-projects position-relative">
      <div class="project position-absolute scrollBlurToFocus">
        <img
          src="../assets/images/national-gal.jpg"
          alt="Celestian Artisan"
          style="height: 345px; width: 230px; object-fit: cover"
        />
      </div>
      <div class="project position-absolute scrollBlurToFocus">
        <img
          src="../assets/images/europeana-YIfFVwDcgu8-un.jpg"
          alt="Sorceress"
          style="height: 345px; width: 230px; object-fit: cover"
        />
      </div>
      <div class="project scrollBlurToFocus">
        <img
          src="../assets/images/europeana-VsnDYMWollM-un.jpg"
          alt="Star nomad"
          style="height: 345px; width: 230px; object-fit: cover"
        />
      </div>
      <div class="project position-absolute scrollBlurToFocus">
        <img
          src="../assets/images/art-as.jpg"
          alt="Lunar archer"
          style="height: 345px; width: 230px; object-fit: cover"
        />
      </div>
      <div class="project position-absolute scrollBlurToFocus">
        <img
          src="../assets/images/fwcefvrcds.jpg"
          alt="Oracle"
          style="height: 345px; width: 230px; object-fit: cover"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/******______ FEATURED PROJECTS SECTION ______******/
h2 {
  padding-bottom: 5rem;
}

.featured-projects {
  transform-style: preserve-3d;
  transform: var(--perspective-medium);
  width: fit-content;
}

.featured-projects .project {
  transition:
    transform 0.6s ease,
    filter 0.5s ease;
  filter: brightness(0.8);
  transform: translateZ(0);
  will-change: transform, filter;
  backface-visibility: hidden;
}

/*** shuffle cards ***/
.featured-projects .project:nth-child(1) {
  top: 0;
  left: -27%;
  /* Simule une carte plus en arrière */
  transform: translateZ(-50px);
}
.featured-projects .project:nth-child(2) {
  top: 0;
  left: -13%;
  transform: translateZ(-25px);
}
.featured-projects .project:nth-child(3) {
  transform: translateZ(0);
}
.featured-projects .project:nth-child(4) {
  top: 0;
  right: -13%;
  transform: translateZ(-25px);
}
.featured-projects .project:nth-child(5) {
  top: 0;
  right: -27%;
  transform: translateZ(-50px);
}

.featured-projects .project:hover {
  filter: brightness(1);
  transform: translateZ(200px);
}
.featured-projects .project:hover + * {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(25deg);
}
.featured-projects .project:hover + * + * {
  filter: brightness(0.4);
  transform: translateZ(70px) rotateY(15deg);
}
.featured-projects .project:hover + * + * + * {
  filter: brightness(0.3);
  transform: translateZ(30px) rotateY(10deg);
}
.featured-projects .project:hover + * + * + * + * {
  filter: brightness(0.2);
  transform: translateZ(10px) rotateY(5deg);
}
.featured-projects .project:has(+ *:hover) {
  filter: brightness(0.6);
  transform: translateZ(150px) rotateY(-25deg);
}
.featured-projects .project:has(+ * + *:hover) {
  filter: brightness(0.4);
  transform: translateZ(70px) rotateY(-15deg);
}
.featured-projects .project:has(+ * + * + *:hover) {
  filter: brightness(0.3);
  transform: translateZ(30px) rotateY(-10deg);
}
.featured-projects .project:has(+ * + * + * + *:hover) {
  filter: brightness(0.2);
  transform: translateZ(10px) rotateY(-5deg);
}

.featured-projects .project img {
  border-radius: var(--radius);
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
  .featured-projects .project:nth-child(1) {
    top: 0;
    left: -55%;
  }
  .featured-projects .project:nth-child(2) {
    top: 0;
    left: -30%;
  }
  .featured-projects .project:nth-child(4) {
    top: 0;
    right: -30%;
  }
  .featured-projects .project:nth-child(5) {
    top: 0;
    right: -55%;
  }
}

/****** >= 768px ******/
@media (width >= 768px) {
  .featured-projects .project:nth-child(1) {
    top: 0;
    left: -95%;
  }
  .featured-projects .project:nth-child(2) {
    top: 0;
    left: -55%;
  }
  .featured-projects .project:nth-child(4) {
    top: 0;
    right: -55%;
  }
  .featured-projects .project:nth-child(5) {
    top: 0;
    right: -95%;
  }
}

/****** >= 992px ******/
@media (width >= 992px) {
  .featured-projects .project:nth-child(1) {
    top: 0;
    left: -145%;
  }
  .featured-projects .project:nth-child(2) {
    top: 0;
    left: -80%;
  }
  .featured-projects .project:nth-child(4) {
    top: 0;
    right: -80%;
  }
  .featured-projects .project:nth-child(5) {
    top: 0;
    right: -145%;
  }
}

/****** >= 1200px ******/
@media (width >= 1200px) {
  .featured-projects .project:nth-child(1) {
    top: 0;
    left: -185%;
  }
  .featured-projects .project:nth-child(2) {
    top: 0;
    left: -95%;
  }
  .featured-projects .project:nth-child(4) {
    top: 0;
    right: -95%;
  }
  .featured-projects .project:nth-child(5) {
    top: 0;
    right: -185%;
  }
}

/****** >= 1400px ******/
@media (width >= 1400px) {
  .featured-projects .project:nth-child(1) {
    top: 0;
    left: -212%;
  }
  .featured-projects .project:nth-child(2) {
    top: 0;
    left: -105%;
  }
  .featured-projects .project:nth-child(4) {
    top: 0;
    right: -105%;
  }
  .featured-projects .project:nth-child(5) {
    top: 0;
    right: -212%;
  }
}
</style>
