<script setup lang="ts">
import { ref } from "vue";
// import emailjs from '@emailjs/browser';
// const apiKey = import.meta.env.VITE_EMAIL_API_KEY; // à changer dans .env
const form = ref<HTMLFormElement | null>(null);
const isEmailSent = ref(false);

//Prénom
const firstName = ref("");
const firstNameValid = ref(false);
const firstNameTouched = ref(false);

const validateFirstName = () => {
  const firstNameRegex = /^[a-zA-ZÀ-ÿ\s']*$/;
  firstNameValid.value =
    firstNameRegex.test(firstName.value) &&
    firstName.value.length >= 2 &&
    firstName.value.length <= 80;
  firstNameValid.value = firstNameValid.value && firstName.value !== "";
};
const markFirstNameTouched = () => {
  firstNameTouched.value = true;
};

//Nom
const name = ref("");
const nameValid = ref(false);
const nameTouched = ref(false);

const validateName = () => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s']*$/;
  nameValid.value =
    nameRegex.test(name.value) &&
    name.value.length >= 2 &&
    name.value.length <= 80;
  nameValid.value = nameValid.value && name.value !== "";
};
const markNameTouched = () => {
  nameTouched.value = true;
};

//Email
const email = ref("");
const emailValid = ref(false);
const emailTouched = ref(false);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailValid.value = emailRegex.test(email.value) && email.value.length <= 100;
  emailValid.value = emailValid.value && email.value !== "";
};
const markEmailTouched = () => {
  emailTouched.value = true;
};

//Message
const messageTouched = ref(false);
const markMessageTouched = () => {
  messageTouched.value = true;
};

const message = ref("");
const messageValid = ref(true);
const validateMessage = () => {
  const messageRegex = /^[a-zA-ZÀ-ÿ0-9\s,.!?()'"`\-–—$€£:]*$/; //autorise les lettres, chiffres, espaces, ponctuation Courante, certains caractères spéciaux et symboles monétaires
  messageValid.value =
    messageRegex.test(message.value) &&
    message.value.length >= 5 &&
    message.value.length <= 1000;
  messageValid.value = messageValid.value && message.value !== "";
};

//Consent
const consent = ref(false);
const consentValid = ref(false);
const consentTouched = ref(false);

const validateConsent = () => {
  consentValid.value = consent.value;
};
const markConsentTouched = () => {
  consentTouched.value = true;
};

// Validate form
const validateForm = () => {
  validateFirstName();
  validateName();
  validateEmail();
  validateMessage();
  validateConsent();
  return (
    firstNameValid.value &&
    nameValid.value &&
    emailValid.value &&
    messageValid.value &&
    consentValid.value
  );
};

// const sendEmail = () => {
//   if (form.value && validateForm()) {
//     emailjs
//       .sendForm('contact_service_aaaa', 'template_aaaa', form.value, apiKey)
//       .then(
//         () => {
//           console.log('SUCCESS! it is sent');
//           isEmailSent.value = true;
//           resetForm();
//         },
//         (error) => {
//           console.log('FAILED to send...', error.text);
//         },
//       );
//   } else {
//     console.log('Form reference is null, aucun élément html de formulaire trouvé');
//   }
// };

// Inputs touched
const markAllTouched = () => {
  firstNameTouched.value = true;
  nameTouched.value = true;
  emailTouched.value = true;
  messageTouched.value = true;
  consentTouched.value = true;
};

// Submit form
const handleSubmit = () => {
  markAllTouched();
  if (validateForm()) {
    // sendEmail();
  }
};

// Reset form & confirmation messages
const resetForm = () => {
  firstName.value = "";
  firstNameValid.value = true;
  firstNameTouched.value = false;
  name.value = "";
  nameValid.value = true;
  nameTouched.value = false;
  email.value = "";
  emailValid.value = true;
  emailTouched.value = false;
  message.value = "";
  messageValid.value = true;
  messageTouched.value = false;
  consent.value = false;
  consentValid.value = true;
  consentTouched.value = false;
};
const resetConfirmationMessage = () => {
  isEmailSent.value = false;
};
</script>

<template>
  <div class="mx-3 mx-sm-0">
    <div class="container">
      <h2 class="mb-5 scrollShow">Reach me</h2>
      <form id="contact" ref="form" @submit.prevent="handleSubmit">
        <!-- First Name -->
        <label class="form-label mb-2" for="firstName">First name</label>
        <input
          class="form-control mb-3"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Your first name"
          pattern="[a-zA-Zàâäéèêëïîôöùûüç]{2,}"
          maxlength="80"
          required
          v-model="firstName"
          @input="validateFirstName"
          @blur="markFirstNameTouched"
          @click="resetConfirmationMessage"
        />
        <span
          class="mb-4"
          v-if="firstNameTouched && (!firstNameValid || firstName === '')"
        >
          First name is required and must contain only letters.
        </span>
        <p class="mb-4">First name must be at least 2 letters long.</p>

        <!-- Last Name -->
        <label class="form-label mb-2" for="lastName">Last name</label>
        <input
          class="form-control mb-3"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Your last name"
          pattern="[a-zA-Zàâäéèêëïîôöùûüç]{2,}"
          maxlength="80"
          required
          v-model="name"
          @input="validateName"
          @blur="markNameTouched"
          @click="resetConfirmationMessage"
        />
        <span class="mb-4" v-if="nameTouched && (!nameValid || name === '')">
          Last name is required and must contain only letters.
        </span>
        <p class="mb-4">Last name must be at least 2 letters long.</p>

        <!-- Email -->
        <label class="form-label mb-2" for="email">Email</label>
        <input
          class="form-control mb-3"
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          pattern=".+@.+\..+"
          required
          v-model="email"
          @input="validateEmail"
          @blur="markEmailTouched"
          @click="resetConfirmationMessage"
        />
        <span class="mb-4" v-if="emailTouched && (!emailValid || email === '')">
          Your email is required and must be a valid email address.
        </span>
        <p class="mb-4">
          Please enter a valid email address in the format example@domain.com.
        </p>

        <!-- Message -->
        <label class="form-label mb-2" for="message">Message</label>
        <textarea
          class="form-control mb-3"
          name="message"
          id="message"
          placeholder="My message"
          required
          v-model="message"
          @input="validateMessage"
          @blur="markMessageTouched"
          @click="resetConfirmationMessage"
        >
        </textarea>
        <span
          v-if="messageTouched && (!messageValid || message === '')"
          class="error-message"
        >
          This field is mandatory and must consist of valid symbols only
        </span>
        <div class="invalid-feedback">
          Please enter a message in the textarea.
        </div>

        <!-- Privacy Policy -->
        <div class="form-check mb-4">
          <input
            class="form-check-input"
            type="checkbox"
            name="privacyPolicy"
            id="privacyPolicy"
            v-model="consent"
            @blur="markConsentTouched"
            @change="validateConsent"
          />
          <label class="form-check-label" for="privacyPolicy">
            You agree to my friendly
            <RouterLink to="/legal" target="_blank">privacy policy</RouterLink>.
          </label>
        </div>
        <p class="mb-4 error" v-if="consentTouched && !consentValid">
          You must accept the privacy policy.
        </p>

        <!-- Submit Button -->
        <button class="btn btn-lg mt-3" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: var(--text-color-primary);
}
/* Inputs */
.form-control {
  color: var(--text-color-secondary);
  border-bottom: 1px solid var(--input-border-color);
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.form-control:hover,
.form-control:focus {
  color: var(--text-color-secondary);
  border-bottom: 1px solid var(--input-border-color-hover);
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
.form-control:focus {
  box-shadow: none;
}

input:not([type="checkbox"]):invalid:not(:placeholder-shown),
input:not([type="checkbox"]):valid:not(:placeholder-shown) {
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: calc(100% - 10px);
}
input:not([type="checkbox"]):invalid:not(:placeholder-shown) {
  border-color: var(--error-color);
  background-image: url("../assets/svg/checked_red.svg");
}
input:not([type="checkbox"]):valid:not(:placeholder-shown) {
  background-image: url("../assets/svg/checked_green.svg");
}

/* Placeholder */
input::placeholder,
textarea::placeholder {
  color: var(--input-placeholder-color);
}
textarea {
  height: 120px;
}

/* Privacy policy link */
label a {
  color: var(--text-color-primary);
}

/* Submit button */
button {
  color: var(--btn-color);
  background-color: var(--btn-background-color);
  font-weight: var(--btn-font-weight);
  border-radius: var(--btn-radius);
  transition: all 0.3s ease-in-out;
}
button:hover {
  color: var(--btn-color-hover);
  background-color: var(--btn-background-color-hover);
  outline: var(--btn-outline-hover);
}

/* "~" sélectionne les frères à l'intérieur d'un conteneur, pas forcément directement à côté comme "+" */
input:invalid ~ button[type="submit"] {
  opacity: 0.6;
  pointer-events: none;
}

/* Text info */
p {
  font-size: var(--text-14px-size);
  color: var(--text-color-info);
}
span {
  font-size: var(--text-14px-size);
  color: var(--error-color);
}
.error {
  color: var(--error-color);
}

input:invalid:not(:placeholder-shown) + p {
  color: var(--error-color);
}

/* Pour Safari */
/* supprime l'icône de remplissage automatique sur Safari */
input::-webkit-contacts-auto-fill-button {
  display: none !important;
  visibility: hidden !important;
}
</style>
