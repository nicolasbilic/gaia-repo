<script setup lang="ts"></script>

<template>
  <!-- <template> -->
  <div>
    <div class="container border border-primary g-0">
      <!-- Hero Section -->
      <div
        class="hero-container d-flex flex-column align-items-end border border-light"
      >
        <!-- Projects Row -->
        <div
          class="project-row d-flex flex-row justify-content-center align-items-center flex-wrap"
        >
          <!-- Project Title -->
          <div class="project-title border border-warning text-end p-3">
            <h1 class="m-0">
              Queen <br />
              Lunar Archer
            </h1>
          </div>
          <!-- Image Slider -->
          <div
            class="slider d-flex flex-row justify-content-center align-items-center flex-wrap border border-warning gap-3"
          >
            <!-- Main Project -->
            <div
              class="first-project d-flex flex-column align-items-start justify-content-center border border-info"
            >
              <img
                class="img-fluid w-auto rounded-circle"
                src="../assets/webp/lunar-archer.webp"
                alt="Queen Lunar Archer aiming a bow"
                width="250"
              />
              <button class="btn-explore mt-3">
                Explore<i class="bi bi-arrow-right-short"></i>
              </button>
            </div>
            <!-- Other Projects -->
            <img
              class="d-none d-md-block img-fluid grayscale"
              src="../assets/webp/sorceress.webp"
              alt="Sorceress"
              width="200"
            />
            <img
              class="d-none d-lg-block img-fluid grayscale"
              src="../assets/webp/moon-sorceress.webp"
              alt="Moon Sorceress"
              width="200"
            />
          </div>
        </div>
        <!-- Project Summary -->
        <div
          class="project-summary w-100 d-flex flex-column flex-md-row justify-content-center align-items-center border border-success"
        >
          <div class="text px-3 py-2">
            <p class="m-0">
              This project was created for Moonlight Nexus, a visionary brand
              dedicated to merging innovation with artistic inspiration.
            </p>
          </div>
          <div class="vertical-line d-none d-md-block"></div>
          <div class="text px-3 py-2">
            <p class="m-0">
              The Lunar Archer serves as a symbolic figure representing the
              brand’s core values: strength, precision, and a commitment to
              transformative ideas.
            </p>
          </div>
          <div class="vertical-line d-none d-md-block"></div>
          <div class="text px-3 py-2 d-none d-lg-block">
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
/* General */
h1 {
  line-height: clamp(40px, 14vw, 55px);
  padding-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
}
img {
  border-radius: 10px;
}

.hero-container {
  min-height: 88vh;
}

.project-row {
  flex-grow: 1;
  gap: 1rem;
}

.project-title {
  text-align: right;
}

/* Slider */
.slider {
  gap: 1rem;
}

.first-project img {
  border: 3px solid rgba(255, 213, 133, 0.9);
  padding: 8px;
}

.grayscale {
  filter: grayscale(1);
}

/* Buttons */
.btn-explore {
  all: unset;
  font-size: 16px;
  color: #007bff;
  cursor: pointer;
  text-transform: uppercase;
}

.btn-explore i {
  font-size: 1.2rem;
}

/* Project Summary */
.project-summary {
  padding: 2rem 0;
}

.project-summary .text {
  max-width: 400px;
}

/* Lines */
.vertical-line {
  border-left: 1px solid #ccc;
  height: 50px;
}

/* Media Queries */
@media (min-width: 768px) {
  .project-summary .text {
    padding: 0 2rem;
  }
}
</style>
