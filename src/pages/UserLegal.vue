<script setup lang="ts">
import { ref, onMounted } from "vue";
import UserNavBar from "../components/Layout/UserNavBar.vue";
import UserFooter from "../components/Layout/UserFooter.vue";

const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <transition name="fade-slide">
    <section v-if="show">
      <UserNavBar />
      <div class="relative-container">
        <div class="centered-container">
          <div class="padding-container">
            <h1 class="animated-text">Legal Notices</h1>
            <p class="sub-text pt-3">Effective as of 12/25/2024</p>
          </div>
        </div>
      </div>

      <div class="relative-background">
        <div class="content-container">
          <section>
            <article>
              <p>
                In accordance with the provisions of Articles 6-III and 19 of
                Law No. 2004-575 of June 21, 2004, on Confidence in the Digital
                Economy (L.C.E.N.), the following legal notices are brought to
                the attention of users and visitors, hereinafter referred to as
                the "User," of the website www.gaia.com, hereinafter referred to
                as the "Site."
              </p>
              <p>
                Connection and navigation on the Site by the User implies full
                and unconditional acceptance of these legal notices.
              </p>
              <h2>ARTICLE 1 - THE PUBLISHER</h2>
              <p>
                The publishing and management of the Site is carried out by
                Nicolas Bilic, contactable at 30 Bd Jean Moulin, 83780 Flayosc,
                whose phone number is 0645901345 and email address is
                <b>nicolasbilic.dev@nicolasbilic.com</b>, hereinafter referred
                to as the "Publisher."
              </p>
              <h2>ARTICLE 2 - THE HOST</h2>
              <p>
                The Site is hosted by the company VERCEL Inc., whose
                headquarters are located at Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, phone number (559) 288-7060.
              </p>
              <h2>ARTICLE 3 - ACCESS TO THE SITE</h2>
              <p>
                The Site is accessible from any location, 24/7, except in cases
                of force majeure, scheduled or unscheduled interruptions, or
                maintenance requirements. In the event of modification,
                interruption, or suspension of the Site, the Publisher cannot be
                held liable.
              </p>
              <h2>ARTICLE 4 - DATA COLLECTION</h2>
              <p>
                The Site ensures the collection and processing of personal
                information in compliance with privacy laws, in accordance with
                Law No. 78-17 of January 6, 1978, on Information Technology,
                Files, and Freedoms.
              </p>
              <h3>4.1 Nature of Data Collected</h3>
              <p>
                The Site collects only users' email addresses when they choose
                to contact us via the link on the site.
              </p>
              <h3>4.2 Purpose of Data Collection</h3>
              <p>
                The collected email addresses are used solely to respond to
                users' contact requests.
              </p>
              <h3>4.3 Legal Basis for Processing</h3>
              <p>
                The collection and processing of email addresses are based on
                the user's consent, expressed when they choose to send us an
                email.
              </p>
              <h3>4.4 Data Retention Period</h3>
              <p>
                Email addresses and associated messages are retained for as long
                as necessary to process and respond to users' requests. They may
                be retained further if necessary for follow-up or project
                management.
              </p>
              <h3>4.5 Data Sharing</h3>
              <p>
                Email addresses and messages are not shared with third parties,
                except when necessary to respond to a specific user request or
                if required by law.
              </p>
              <h3>4.6 User Rights</h3>
              <p>
                Users have the right to access, rectify, or request the deletion
                of their personal data. To exercise these rights, they can
                contact us at the following email address:
                nicolasbilic.dev@nicolasbilic.com.
              </p>
              <p>
                Users also have the right to lodge a complaint with the
                Commission Nationale de l’Informatique et des Libertés (CNIL) if
                they believe their rights are not being respected. For more
                information, they can visit the CNIL website: www.cnil.fr.
              </p>
              <h3>4.7 Data Security</h3>
              <p>
                We take the necessary measures to protect personal data from
                unauthorized access, alteration, or destruction.
              </p>
              <br />
              <p>
                Any use, reproduction, distribution, commercialization, or
                modification of all or part of the Site without the Publisher's
                authorization is prohibited and may lead to legal actions as
                provided by the Intellectual Property Code and the Civil Code.
              </p>
              <h2>ARTICLE 5 - ATTRIBUTION</h2>
              <span>This website used :</span>
              <ul>
                <li>
                  An image from Vecteezy :
                  <a
                    href="https://fr.vecteezy.com/png-gratuit/lierre"
                    target="_blank"
                    >Lierre PNGs from Vecteezy</a
                  >
                </li>
                <li>
                  Music from #Uppbeat (free for Creators!):
                  <a
                    href="https://uppbeat.io/t/brock-hewitt-stories-in-sound/lover"
                    target="_blank"
                    >https://uppbeat.io/t/brock-hewitt-stories-in-sound/lover</a
                  >
                  <br />
                  License code: XY7DTL3LQSS7VSBB
                </li>
              </ul>
            </article>
          </section>
        </div>
      </div>
      <UserFooter />
    </section>
  </transition>
</template>

<style scoped>
ul {
  padding-left: 25px;
}
li {
  list-style-type: disc;
}
/****** Transition de la page au chargement ******/
.fade-slide-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/****** Global ******/
.relative-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 1.5rem;
}

.centered-container {
  text-align: center;
  padding: 1.25rem;
}

.padding-container {
  text-align: center;
  padding: 1.25rem;
}

.relative-container h1 {
  font-size: 1.625rem;
  font-weight: bold;
  font-family: var(--font-family-secondary);
  color: var(--text-color-secondary);
}

.sub-text {
  font-size: 0.875rem;
  opacity: 0.75;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.relative-background {
  position: relative;
  padding: 0 1.5rem;
}

.content-container {
  margin: 0 auto;
  max-width: 40rem;
}

article {
  padding-bottom: 5rem;
}

article h2 {
  font-size: var(--text-20px-size);
  font-family: var(--font-family-secondary);
  color: var(--text-color-secondary);
  margin: 30px 0 15px;
}

article h3 {
  font-size: 1.25rem;
  font-family: var(--font-family-secondary);
  color: var(--text-color-secondary);
  margin: 20px 0 10px;
}

article p {
  padding-bottom: 10px;
}

/****** MEDIA QUERIES ******/
@media screen and (min-width: 700px) {
  .relative-container {
    padding-bottom: 3rem;
  }

  .relative-container h1 {
    font-size: 50px;
  }

  article h2 {
    font-size: 1.5rem;
    margin: 40px 0 20px;
  }
}
</style>
