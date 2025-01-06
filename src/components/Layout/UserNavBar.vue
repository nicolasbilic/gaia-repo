<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg mx-3 mx-md-5">
    <div class="container-fluid gx-0">
      <RouterLink
        to="/"
        class="navbar-brand active d-block d-lg-none"
        aria-current="page"
      >
        Gaia
      </RouterLink>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse position-relative"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ path: '/', hash: '#artist' }">
              Artist
            </RouterLink>
          </li>
          <li class="nav-item ps-lg-2">
            <RouterLink class="nav-link" :to="{ path: '/', hash: '#artworks' }">
              Artworks
            </RouterLink>
          </li>
        </ul>
        <RouterLink
          to="/"
          class="navbar-brand active d-none d-lg-flex position-absolute top-50 start-50 translate-middle"
          aria-current="page"
        >
          Gaia
        </RouterLink>
        <ul class="ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ path: '/', hash: '#contact' }">
              Reach Me
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/******* Global *******/
a {
  font-family: var(--font-family-primary);
  color: var(--text-color-secondary);
  font-size: 40px;
  line-height: clamp(40px, 14vw, 55px);
}

.navbar-collapse {
  padding-left: 2px;
}

.navbar-brand {
  font-size: 45px;
}
.nav-link:hover,
.nav-link:focus,
.navbar-brand:hover,
.navbar-brand:focus {
  color: var(--text-color-secondary);
}

/* Change la couleur des barres */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='white' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Change la couleur de la bordure */
.navbar-toggler {
  border-color: var(--outline-light);
  z-index: 20;
}
.navbar-toggler:hover,
.navbar-toggler:focus {
  color: var(--outline-light);
  box-shadow: 0 0 0 0.25rem;
}
</style>
