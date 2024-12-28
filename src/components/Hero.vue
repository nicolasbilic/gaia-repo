<script setup lang="ts"></script>

<template>
  <div>
    <div class="container g-0">
      <!-- Display column -->
      <div class="hero-container d-flex flex-column align-items-center">
        <!-- Display row -->
        <div
          class="project-row d-flex flex-column flex-lg-row justify-content-center align-items-center"
        >
          <div
            id="carousel-hero"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="6000">
                <img
                  src="../assets/images/lunar-archer.webp"
                  class="d-block w-100"
                  alt="Queen Lunar Archer aiming a bow"
                />
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img
                  src="../assets/images/sorceress.webp"
                  class="d-block w-100"
                  alt="Sorceress with a purple cloak"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="../assets/images/moon-sorceress.webp"
                  class="d-block w-100"
                  alt="Moon sorceress"
                />
              </div>
            </div>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carousel-hero"
              data-bs-slide="next"
            >
              Explore<i class="bi bi-arrow-right-short"></i>
              <!-- <span class="carousel-control-next-icon" aria-hidden="true">
              </span> -->
            </button>
          </div>
          <div class="project-title d-md-none">
            <h1>
              Queen <br />
              Lunar Archer
            </h1>
          </div>
        </div>
        <div
          class="project-summary w-100 d-flex flex-column flex-md-row justify-content-center align-items-center"
        >
          <div class="text">
            <p class="m-0">
              This project was created for Moonlight Nexus, a visionary brand
              dedicated to merging innovation with artistic inspiration.
            </p>
          </div>
          <hr class="d-block d-md-none" />
          <div class="vertical-line d-none d-md-block"></div>
          <div class="text">
            <p class="m-0">
              The Lunar Archer serves as a symbolic figure representing the
              brand’s core values: strength, precision, and a commitment to
              transformative ideas.
            </p>
          </div>
          <div class="vertical-line d-none d-md-block"></div>
          <div class="text d-none d-md-block">
            <p class="m-0">
              The artwork reflects their mission to explore uncharted
              territories.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/*** General ***/
h1 {
  line-height: clamp(40px, 14vw, 55px);
  text-align: left;
}
img {
  /* border-radius: var(--radius); */
}

/* 2 row containers */
.hero-container {
  min-height: 88vh;
}
.project-row {
  flex-grow: 1;
}

/* Project title */
.project-title {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}
.project-row > div {
}

/* Slider */
.slider {
  gap: 1rem;
  flex-grow: 1;
}

/* Images */
.first-project {
  flex-grow: 1;
  height: 100%;
}

.first-project > img {
  padding: 8px;
  max-width: 400px;
}

.slider > img {
  width: 100%;
  height: auto;
  max-width: 300px;
  filter: grayscale(1);
}

/* Button */
button {
  all: unset;
  color: var(--color-text-primary);
  font-size: 16px;
  text-decoration: underline;
  text-transform: uppercase;
}

/* Project summary */
.project-summary {
  padding: 2rem 0;
}

/* Lines separating text columns */
hr {
  width: 90%;
  height: 10px;
  color: var(--color-divider);
}
.vertical-line {
  border-left: 1px solid var(--color-text-secondary);
  height: 80px;
  margin-right: 15px;
  opacity: 0.6;
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
}

/****** >= 768px ******/
@media (width >= 768px) {
  .project-summary .text {
    width: 50%;
    padding: 0 45px;
  }
}

/****** >= 992px ******/
@media (width >= 992px) {
}
/****** >= 1200px ******/
@media (width >= 1200px) {
  .project-summary .text {
    padding: 0 65px;
  }
}
</style>
