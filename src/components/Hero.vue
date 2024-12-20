<script setup lang="ts"></script>

<template>
  <div>
    <div class="container border border-primary g-0">
      <!-- Display column -->
      <div
        class="hero-container d-flex flex-column align-items-center justify-content-center"
      >
        <!-- Display row -->
        <div
          class="d-flex flex-row justify-content-center align-items-center border border-danger"
        >
          <!-- 1ere colonne -->
          <div class="project-title border border-warning">
            <h1>
              Queen <br />
              Lunar Archer
            </h1>
          </div>
          <!-- 2ème colonne (slider) -->
          <div
            class="slider d-flex flex-row justify-content-center align-items-center"
          >
            <!-- First project -->
            <div
              class="first-project d-flex flex-column align-items-start justify-content-center border border-info"
            >
              <img
                class="img-fluid"
                src="../assets/webp/lunar-archer.webp"
                alt="Queen Lunar Archer aiming a bow"
                width="250"
                height="auto"
              />
              <button>Explore<i class="bi bi-arrow-right-short"></i></button>
            </div>
            <!-- Next projects -->
            <img
              class="d-none d-md-block img-fluid"
              src="../assets/webp/sorceress.webp"
              alt="Queen Lunar Archer aiming a bow"
              width="200"
              height="auto"
            />
            <img
              class="d-none"
              src="../assets/webp/moon-sorceress.webp"
              alt="Queen Lunar Archer aiming a bow"
              width="200"
              height="auto"
            />
          </div>
        </div>
        <div
          class="project-summary w-100 d-flex flex-column flex-md-row justify-content-center align-items-center border border-success"
        >
          <div class="text">
            <p>
              This project was created for Moonlight Nexus, a visionary brand
              dedicated to merging innovation with artistic inspiration. The
              artwork reflects their mission to explore uncharted territories.
            </p>
          </div>
          <hr />
          <div class="text">
            <p>
              The Lunar Archer serves as a symbolic figure representing the
              brand’s core values: strength, precision, and a commitment to
              transformative ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-container {
  min-height: 100vh;
}
h1 {
  line-height: clamp(40px, 14vw, 55px);
  text-align: left;
  padding-left: 25px;
}

img {
  border-radius: 150px;
}

button {
  all: unset;
  color: var(--color-text-primary);
  font-size: 16px;
  text-decoration: underline;
}
.project-summary {
  padding-top: 1rem;
}
.first-project img {
  /* arc de cercle */
  outline: 1px solid rgba(255, 213, 133, 0.4);
  padding: 8px;
  min-width: 250px;
}
hr {
  color: var(--color-divider);
  width: 90%;
  height: 10px;
}

.project-title {
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.slider {
  gap: 1rem;
}

/******______ MEDIA QUERIES ______******/
/****** >= 576px ******/
@media (width >= 576px) {
}

/****** >= 768px ******/
@media (width >= 768px) {
}

/****** >= 992px ******/
@media (width >= 992px) {
}
</style>
