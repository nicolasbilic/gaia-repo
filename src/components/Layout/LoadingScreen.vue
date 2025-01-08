<script setup lang="ts">
import { ref, onMounted } from "vue";

// Détection mobile
const isMobile = ref(false);

// Fonction pour détecter si l'utilisateur est sur mobile
const checkMobile = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad|ipod|windows phone/.test(userAgent)) {
    isMobile.value = true;
  }
};

// Au montage du composant, vérifier si l'utilisateur est sur mobile
onMounted(() => {
  checkMobile();
});

const isBlurred = ref(true);
const isAnimated = ref(false);
const isButtonVisible = ref(true);

// définit les événements que le composant émet. Cela permet de spécifier quels événements ce composant peut déclencher pour communiquer avec ses parents.
// il est utilisé pour émettre l’événement "finish-loading". Cela signifie que ce composant peut signaler à son parent que le chargement est terminé.
// const emit = defineEmits();
const emit = defineEmits<{
  (event: "finish-loading"): void;
}>();

const audio: HTMLAudioElement = new Audio("/lover-brock-hewitt.mp3");
audio.volume = 0.8;

const playAudioWithFadeOut = () => {
  if (isMobile.value) {
    return; // Ne pas jouer la musique si l'utilisateur est sur mobile
  }
  // Démarre la musique
  audio.play();
  // Enlève le flou
  isBlurred.value = false;
  // Démarre l'animation
  isAnimated.value = true;
  // Fait disparaitre le bouton
  isButtonVisible.value = false;
  // Le code pour baisser le son est préparé avant les 7 secondes, mais il ne s’exécute qu’après un délai de 7 secondes grâce à un timeout
  setTimeout(() => {
    const fadeInterval = 50; // Intervalle en millisecondes pour le fade-out, le volume sera ajusté toutes les 50 millisecondes.
    const totalFadeOutDuration = 2000; // Durée totale du fade-out en ms, le volume baisse en 2 secondes
    const fadeStep = audio.volume / (totalFadeOutDuration / fadeInterval); // Quantité de volume à diminuer à chaque fadeInterval, totalFadeOutDuration / intervalDuration indique combien de fois (ici 2000/50=40 fois) le volume sera mis à jour pendant toute la durée du fondu. // 0.8 / 40 = 0.02 Le volume diminuera de 0.02 toutes les 50 millisecondes

    // Créer un intervalle pour diminuer le volume progressivement
    const fadeOutInterval = setInterval(() => {
      if (audio.volume > fadeStep) {
        audio.volume -= fadeStep; // Réduire le volume
      } else {
        audio.volume = 0; // Assurer que le volume est à zéro
        audio.pause(); // Arrêter la musique
        clearInterval(fadeOutInterval); // Supprimer l'intervalle
      }
    }, fadeInterval);
    emit("finish-loading"); // Cache la page de chargement après 7 secondes
  }, 7000);
};
</script>

<template>
  <div
    :class="[
      'banner',
      'position-relative d-flex justify-content-center align-items-center overflow-hidden',
      { blurred: isBlurred, animated: isAnimated },
    ]"
  >
    <div>
      <svg
        width="250"
        height="250"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.327 10.488C3.207 10.488 3.079 10.476 2.943 10.452C2.399 10.34 1.951 10.084 1.599 9.684C1.255 9.284 0.999 8.796 0.831 8.22C0.671 7.636 0.591 7.02 0.591 6.372C0.591 5.828 0.671 5.284 0.831 4.74C0.999 4.196 1.227 3.684 1.515 3.204C1.803 2.724 2.135 2.3 2.511 1.932C2.895 1.556 3.303 1.264 3.735 1.056C4.175 0.84 4.623 0.732 5.079 0.732C5.471 0.732 5.787 0.812 6.027 0.972C6.267 1.124 6.443 1.328 6.555 1.584C6.667 1.832 6.723 2.104 6.723 2.4C6.723 2.688 6.671 2.98 6.567 3.276C6.471 3.564 6.331 3.832 6.147 4.08C5.963 4.328 5.743 4.528 5.487 4.68C5.231 4.824 4.947 4.896 4.635 4.896C4.483 4.896 4.315 4.872 4.131 4.824C4.067 4.8 4.035 4.776 4.035 4.752C4.035 4.712 4.083 4.692 4.179 4.692C4.227 4.692 4.263 4.696 4.287 4.704C4.375 4.728 4.459 4.74 4.539 4.74C4.763 4.74 4.979 4.668 5.187 4.524C5.403 4.38 5.595 4.192 5.763 3.96C5.931 3.728 6.063 3.476 6.159 3.204C6.255 2.924 6.303 2.652 6.303 2.388C6.303 2.052 6.211 1.756 6.027 1.5C5.843 1.244 5.535 1.088 5.103 1.032C5.063 1.024 5.019 1.02 4.971 1.02C4.923 1.012 4.879 1.008 4.839 1.008C4.455 1.008 4.079 1.112 3.711 1.32C3.351 1.52 3.015 1.8 2.703 2.16C2.399 2.512 2.131 2.92 1.899 3.384C1.667 3.848 1.483 4.34 1.347 4.86C1.219 5.372 1.155 5.888 1.155 6.408C1.155 7.032 1.219 7.624 1.347 8.184C1.475 8.736 1.679 9.2 1.959 9.576C2.247 9.952 2.623 10.184 3.087 10.272C3.127 10.28 3.167 10.284 3.207 10.284C3.247 10.292 3.283 10.296 3.315 10.296C3.715 10.296 4.011 10.108 4.203 9.732C4.403 9.356 4.503 8.896 4.503 8.352C4.503 8.072 4.479 7.784 4.431 7.488C4.159 7.52 3.887 7.576 3.615 7.656C3.351 7.736 3.087 7.832 2.823 7.944C2.807 7.952 2.787 7.956 2.763 7.956C2.723 7.956 2.691 7.936 2.667 7.896C2.651 7.856 2.643 7.808 2.643 7.752C2.643 7.696 2.655 7.644 2.679 7.596C2.703 7.54 2.743 7.504 2.799 7.488C3.087 7.376 3.375 7.296 3.663 7.248C3.951 7.2 4.243 7.176 4.539 7.176C4.859 7.176 5.183 7.204 5.511 7.26C5.847 7.316 6.187 7.4 6.531 7.512C6.667 7.552 6.735 7.6 6.735 7.656C6.735 7.672 6.711 7.68 6.663 7.68C6.623 7.68 6.543 7.668 6.423 7.644C6.199 7.572 5.971 7.52 5.739 7.488C5.515 7.456 5.291 7.44 5.067 7.44C4.987 7.44 4.907 7.444 4.827 7.452C4.747 7.452 4.667 7.456 4.587 7.464C4.755 7.904 4.839 8.32 4.839 8.712C4.839 9.24 4.699 9.668 4.419 9.996C4.139 10.324 3.775 10.488 3.327 10.488ZM7.08356 8.904C6.93956 8.904 6.83556 8.844 6.77156 8.724C6.70756 8.596 6.67556 8.448 6.67556 8.28C6.67556 8.064 6.71156 7.812 6.78356 7.524C6.86356 7.236 6.96756 6.94 7.09556 6.636C7.22356 6.324 7.36756 6.04 7.52756 5.784C7.69556 5.52 7.87156 5.308 8.05556 5.148C8.23956 4.98 8.41956 4.896 8.59556 4.896C8.75556 4.896 8.89156 4.968 9.00356 5.112C9.12356 5.248 9.18356 5.404 9.18356 5.58C9.18356 5.684 9.16756 5.772 9.13556 5.844C9.10356 5.908 9.06756 5.94 9.02756 5.94C8.99556 5.94 8.96756 5.916 8.94356 5.868C8.86356 5.684 8.77556 5.552 8.67956 5.472C8.59156 5.392 8.49956 5.352 8.40356 5.352C8.24356 5.352 8.08356 5.444 7.92356 5.628C7.77156 5.804 7.64756 6.008 7.55156 6.24C7.47156 6.416 7.39556 6.628 7.32356 6.876C7.25956 7.116 7.20356 7.356 7.15556 7.596C7.11556 7.828 7.09556 8.02 7.09556 8.172C7.09556 8.444 7.15956 8.58 7.28756 8.58C7.44756 8.58 7.65156 8.404 7.89956 8.052C8.08356 7.796 8.24756 7.5 8.39156 7.164C8.54356 6.828 8.67156 6.536 8.77556 6.288C8.81556 6.208 8.85956 6.156 8.90756 6.132C8.95556 6.108 8.99956 6.096 9.03956 6.096C9.13556 6.096 9.19556 6.136 9.21956 6.216C9.25156 6.296 9.26756 6.364 9.26756 6.42C9.26756 6.628 9.24756 6.816 9.20756 6.984C9.16756 7.144 9.14756 7.34 9.14756 7.572C9.14756 7.74 9.15956 7.896 9.18356 8.04C9.21556 8.176 9.26756 8.244 9.33956 8.244C9.42756 8.244 9.53956 8.132 9.67556 7.908C9.70756 7.844 9.75556 7.812 9.81956 7.812C9.89156 7.812 9.92756 7.848 9.92756 7.92C9.92756 8.024 9.85556 8.136 9.71156 8.256C9.56756 8.368 9.42356 8.424 9.27956 8.424C9.08756 8.424 8.95156 8.344 8.87156 8.184C8.73556 7.92 8.66756 7.684 8.66756 7.476C8.66756 7.26 8.66356 7.112 8.65556 7.032C8.61556 7.128 8.53956 7.28 8.42756 7.488C8.31556 7.688 8.18356 7.9 8.03156 8.124C7.87956 8.34 7.71956 8.524 7.55156 8.676C7.38356 8.828 7.22756 8.904 7.08356 8.904ZM11.0759 4.992C11.0039 4.992 10.9519 4.956 10.9199 4.884C10.8959 4.804 10.8839 4.748 10.8839 4.716C10.8839 4.588 10.9199 4.468 10.9919 4.356C11.0719 4.236 11.1599 4.172 11.2559 4.164H11.2919C11.3879 4.164 11.4519 4.188 11.4839 4.236C11.5239 4.276 11.5439 4.328 11.5439 4.392C11.5439 4.512 11.4919 4.644 11.3879 4.788C11.2839 4.924 11.1799 4.992 11.0759 4.992ZM10.4639 9.288C10.1919 9.288 10.0079 9.184 9.91191 8.976C9.81591 8.768 9.76791 8.528 9.76791 8.256C9.76791 7.984 9.79591 7.7 9.85191 7.404C9.91591 7.1 9.98391 6.824 10.0559 6.576C10.1359 6.328 10.1959 6.152 10.2359 6.048C10.3239 5.864 10.4119 5.708 10.4999 5.58C10.5879 5.444 10.6839 5.376 10.7879 5.376C10.8599 5.376 10.9119 5.404 10.9439 5.46C10.9839 5.508 11.0039 5.572 11.0039 5.652C11.0039 5.812 10.9599 5.976 10.8719 6.144C10.7839 6.304 10.7039 6.456 10.6319 6.6C10.4719 6.928 10.3439 7.22 10.2479 7.476C10.1599 7.732 10.1159 8.052 10.1159 8.436C10.1159 8.684 10.1399 8.864 10.1879 8.976C10.2439 9.088 10.3199 9.144 10.4159 9.144C10.5439 9.144 10.6919 9.072 10.8599 8.928C11.0279 8.776 11.1999 8.576 11.3759 8.328C11.5519 8.08 11.7079 7.812 11.8439 7.524C11.9319 7.34 11.9999 7.248 12.0479 7.248C12.0799 7.248 12.0959 7.28 12.0959 7.344C12.0959 7.432 12.0599 7.56 11.9879 7.728C11.9239 7.888 11.8439 8.052 11.7479 8.22C11.6599 8.388 11.5759 8.52 11.4959 8.616C11.3599 8.792 11.2039 8.948 11.0279 9.084C10.8519 9.22 10.6639 9.288 10.4639 9.288ZM12.2047 8.904C12.0607 8.904 11.9567 8.844 11.8927 8.724C11.8287 8.596 11.7967 8.448 11.7967 8.28C11.7967 8.064 11.8327 7.812 11.9047 7.524C11.9847 7.236 12.0887 6.94 12.2167 6.636C12.3447 6.324 12.4887 6.04 12.6487 5.784C12.8167 5.52 12.9927 5.308 13.1767 5.148C13.3607 4.98 13.5407 4.896 13.7167 4.896C13.8767 4.896 14.0127 4.968 14.1247 5.112C14.2447 5.248 14.3047 5.404 14.3047 5.58C14.3047 5.684 14.2887 5.772 14.2567 5.844C14.2247 5.908 14.1887 5.94 14.1487 5.94C14.1167 5.94 14.0887 5.916 14.0647 5.868C13.9847 5.684 13.8967 5.552 13.8007 5.472C13.7127 5.392 13.6207 5.352 13.5247 5.352C13.3647 5.352 13.2047 5.444 13.0447 5.628C12.8927 5.804 12.7687 6.008 12.6727 6.24C12.5927 6.416 12.5167 6.628 12.4447 6.876C12.3807 7.116 12.3247 7.356 12.2767 7.596C12.2367 7.828 12.2167 8.02 12.2167 8.172C12.2167 8.444 12.2807 8.58 12.4087 8.58C12.5687 8.58 12.7727 8.404 13.0207 8.052C13.2047 7.796 13.3687 7.5 13.5127 7.164C13.6647 6.828 13.7927 6.536 13.8967 6.288C13.9367 6.208 13.9807 6.156 14.0287 6.132C14.0767 6.108 14.1207 6.096 14.1607 6.096C14.2567 6.096 14.3167 6.136 14.3407 6.216C14.3727 6.296 14.3887 6.364 14.3887 6.42C14.3887 6.628 14.3687 6.816 14.3287 6.984C14.2887 7.144 14.2687 7.34 14.2687 7.572C14.2687 7.74 14.2807 7.896 14.3047 8.04C14.3367 8.176 14.3887 8.244 14.4607 8.244C14.5487 8.244 14.6607 8.132 14.7967 7.908C14.8287 7.844 14.8767 7.812 14.9407 7.812C15.0127 7.812 15.0487 7.848 15.0487 7.92C15.0487 8.024 14.9767 8.136 14.8327 8.256C14.6887 8.368 14.5447 8.424 14.4007 8.424C14.2087 8.424 14.0727 8.344 13.9927 8.184C13.8567 7.92 13.7887 7.684 13.7887 7.476C13.7887 7.26 13.7847 7.112 13.7767 7.032C13.7367 7.128 13.6607 7.28 13.5487 7.488C13.4367 7.688 13.3047 7.9 13.1527 8.124C13.0007 8.34 12.8407 8.524 12.6727 8.676C12.5047 8.828 12.3487 8.904 12.2047 8.904Z"
          fill="white"
          :class="{ animated: isAnimated }"
        />
      </svg>
    </div>
  </div>
  <button
    v-if="isButtonVisible"
    @click="playAudioWithFadeOut"
    class="play-button position-absolute top-50 start-50 translate-middle"
  >
    Enter
  </button>
</template>
<style scoped>
.play-button {
  font-family: var(--font-family-primary);
  color: var(--text-color-secondary);
  font-size: 200px;
  cursor: pointer;
  z-index: 9999;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

.play-button:hover {
  color: var(--text-color-primary);
}

.banner {
  height: 100vh;
  filter: blur(5px);
  transition: filter 1s ease;
}
.banner.blurred {
  filter: blur(5px);
}
/* Sélectionne tous les éléments avec la classe banner qui n’ont pas la classe blurred */
.banner:not(.blurred) {
  filter: blur(0);
}

.banner::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("../../assets/images/loading-bg-before.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.2);
  z-index: -1;
  pointer-events: none;
}
.banner.animated::before {
  animation: bgZoomIn 5s ease-in-out 1 forwards;
}
@keyframes bgZoomIn {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}

.banner::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("../../assets/images/loading-arch-after.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1);
  z-index: -1;
  pointer-events: none;
}
.banner.animated::after {
  animation: bgZoomOut 5s ease-in-out 1 forwards;
}
@keyframes bgZoomOut {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.7);
  }
}

svg path {
  fill: transparent;
  stroke: var(--svg-path-color);
  stroke-width: 0.1;
  /* stroke-dasharray: 5 2
  [=====  =====  =====  ]
  Un segment de 5 unités visibles, suivi d’un espace de 2 unités invisibles
  stroke-dasharray: 55;
  Un segment de 55 unités visibles, suivi d’un espace de 55 unités invisibles*/
  stroke-dasharray: 55;
  stroke-dashoffset: 55;
}
svg path.animated {
  animation: titleAnimation 5s ease-in-out 1 forwards;
}
@keyframes titleAnimation {
  0% {
    stroke-dashoffset: 50;
  }
  85% {
    fill: transparent;
  }
  100% {
    fill: var(--svg-path-color);
    stroke-dashoffset: 0;
  }
}
</style>
