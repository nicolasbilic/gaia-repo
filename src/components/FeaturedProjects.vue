<script setup lang="ts"></script>

<template>
  <div class="featured-projects-container">
    <div class="container">
      <h2>Featured Projects</h2>
      <div class="featured-projects">
        <div class="project">
          <img
            src="../assets/webp/artisan-celeste.webp"
            alt="Celestian Artisan"
            width="230"
            height="auto"
          />
        </div>
        <div class="project">
          <img
            src="../assets/webp/sorceress.webp"
            alt="Sorceress"
            width="230"
            height="auto"
          />
        </div>
        <div class="project">
          <img
            src="../assets/webp/star-nomad.webp"
            alt="Star nomad"
            width="230"
            height="auto"
          />
        </div>
        <div class="project">
          <img
            src="../assets/webp/lunar-archer.webp"
            alt="Lunar archer"
            width="230"
            height="auto"
          />
        </div>
        <div class="project">
          <img
            src="../assets/webp/oracle.webp"
            alt="Oracle"
            width="230"
            height="auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/******______ FEATURED PROJECTS SECTION ______******/
h2 {
  text-align: center;
  padding-bottom: 2rem;
}
.featured-projects {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  transform-style: preserve-3d;
  transform: perspective(1800px);
  padding: 0 50px;
}

.featured-projects .project {
  transition: all 0.5s ease-in-out;
  filter: brightness(0.8);
}

/*** shuffle cards ***/
.featured-projects .project {
  transform: translateX(410px);
  /* outline: 3px solid lightblue; */
}
.featured-projects .project + * {
  transform: translateX(205px);
  /* outline: 3px solid purple; */
}
.featured-projects .project + * + * {
  transform: translateX(0px);
  /* outline: 3px solid yellow; */
}
.featured-projects .project + * + * + * {
  transform: translateX(-205px);
  /* outline: 3px solid red; */
}
.featured-projects .project + * + * + * + * {
  transform: translateX(-410px);
  /* outline: 3px solid green; */
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

.featured-projects .project:nth-child(1) {
  z-index: 1;
}
.featured-projects .project:nth-child(2) {
  z-index: 2;
}
.featured-projects .project:nth-child(3) {
  z-index: 3;
}
.featured-projects .project:nth-child(4) {
  z-index: 2;
}
.featured-projects .project:nth-child(5) {
  z-index: 1;
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
  /*** shuffle cards ***/
  .featured-projects .project {
    transform: translateX(350px);
  }
  .featured-projects .project + * {
    transform: translateX(175px);
  }
  .featured-projects .project + * + * {
    transform: translateX(0px);
  }
  .featured-projects .project + * + * + * {
    transform: translateX(-175px);
  }
  .featured-projects .project + * + * + * + * {
    transform: translateX(-350px);
  }
}
/****** >= 768px ******/
@media (width >= 768px) {
  /*** shuffle cards ***/
  .featured-projects .project {
    transform: translateX(275px);
  }
  .featured-projects .project + * {
    transform: translateX(125px);
  }
  .featured-projects .project + * + * {
    transform: translateX(0px);
  }
  .featured-projects .project + * + * + * {
    transform: translateX(-125px);
  }
  .featured-projects .project + * + * + * + * {
    transform: translateX(-275px);
  }
}
/****** >= 992px ******/
@media (width >= 992px) {
  /*** shuffle cards ***/
  .featured-projects .project {
    transform: translateX(150px);
  }
  .featured-projects .project + * {
    transform: translateX(75px);
  }
  .featured-projects .project + * + * {
    transform: translateX(0px);
  }
  .featured-projects .project + * + * + * {
    transform: translateX(-75px);
  }
  .featured-projects .project + * + * + * + * {
    transform: translateX(-150px);
  }
}

/****** >= 1200px ******/
@media (width >= 1200px) {
  /*** shuffle cards ***/
  .featured-projects .project {
    transform: translateX(50px);
  }
  .featured-projects .project + * {
    transform: translateX(25px);
  }
  .featured-projects .project + * + * {
    transform: translateX(0px);
  }
  .featured-projects .project + * + * + * {
    transform: translateX(-25px);
  }
  .featured-projects .project + * + * + * + * {
    transform: translateX(-50px);
  }
}

/****** >= 1400px ******/
@media (width >= 1400px) {
  /*** shuffle cards ***/
  .featured-projects .project {
    transform: translateX(0px);
  }
}
</style>
