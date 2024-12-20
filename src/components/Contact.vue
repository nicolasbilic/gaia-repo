<script setup lang="ts"></script>

<template>
  <div class="mx-3 mx-sm-0">
    <div class="container">
      <h2 class="mb-5">Reach me</h2>
      <form>
        <!-- First Name -->
        <label class="form-label mb-2" for="firstName">First name</label>
        <input
          class="form-control mb-3"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first name"
          pattern="[a-zA-Z]{2,}"
          required
        />
        <p class="mb-4">First name must be at least 2 letters long.</p>

        <!-- Last Name -->
        <label class="form-label mb-2" for="lastName">Last name</label>
        <input
          class="form-control mb-3"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last name"
          pattern="[a-zA-Z]{2,}"
          required
        />
        <p class="mb-4">Last name must be at least 2 letters long.</p>

        <!-- Email -->
        <label class="form-label mb-2" for="email">Email</label>
        <input
          class="form-control mb-3"
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
        />
        <p class="mb-4">
          Please enter a valid email address in the format example@domain.com.
        </p>

        <!-- Privacy Policy -->
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="checkbox"
            name="privacyPolicy"
            id="privacyPolicy"
            required
          />
          <label class="form-check-label" for="privacyPolicy">
            You agree to my friendly
            <RouterLink to="/legal" target="_blank">privacy policy</RouterLink>.
          </label>
        </div>

        <!-- Submit Button -->
        <button class="btn btn-lg mt-3" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Inputs */
.form-control {
  color: var(--color-text-secondary);
  border-bottom: 1px solid var(--color-input-border);
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.form-control:hover,
.form-control:focus {
  border-bottom: 1px solid var(--color-text-secondary);
}
.form-control:focus {
  box-shadow: none;
}

input:not([type="checkbox"]):invalid:not(:placeholder-shown) {
  border-color: red;
  background-image: url("../assets/svg/checked_red.svg");
}
input:not([type="checkbox"]):valid:not(:placeholder-shown) {
  background-image: url("../assets/svg/checked_green.svg");
}
input:not([type="checkbox"]):invalid:not(:placeholder-shown),
input:not([type="checkbox"]):valid:not(:placeholder-shown) {
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
}

/* Placeholder */
input::placeholder {
  color: var(--color-input-placeholder);
}

/* Privacy policy link */
label a {
  color: var(--color-text-primary);
}

/* Submit button */
button {
  color: var(--c-dark-blue);
  background-color: var(--color-text-primary);
  font-weight: 500;
  border-radius: var(--radius);
  transition: all 0.1s ease-in-out;
}
button:hover {
  color: var(--color-text-secondary);
  background-color: var(--color-background);
  outline: 2px solid var(--color-text-primary);
}

/* "~" sélectionne les frères à l'intérieur d'un conteneur, pas forcément directement à côté comme "+" */
input:invalid ~ button[type="submit"] {
  opacity: 0.6;
  pointer-events: none;
}

/* Text info */
p {
  color: var(--color-text-info);
  font-size: 14px;
}

input:invalid:not(:placeholder-shown) + p {
  color: red;
}
</style>
