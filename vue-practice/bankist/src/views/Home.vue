<template>
  <TheHeader />
  <BankFeatures />
  <BankOperations />
  <FeedbackSlider />
  <OpenAccount v-if="!user" />
  <TheFooter />
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import BankFeatures from "../components/BankFeatures.vue";
import BankOperations from "../components/BankOperations.vue";
import FeedbackSlider from "../components/FeedbackSlider.vue";
import OpenAccount from "../components/OpenAccount.vue";
import TheFooter from "../components/TheFooter.vue";
import getUser from "../composables/getUser";

export default {
  name: "Home",
  components: {
    TheHeader,
    BankFeatures,
    BankOperations,
    FeedbackSlider,
    OpenAccount,
    TheFooter,
  },
  setup() {
    const { user } = getUser();
    return { user };
  },
};
</script>

<style>
:root {
  --color-primary: #5ec576;
  --color-secondary: #ffcb03;
  --color-tertiary: #ff585f;
  --color-primary-darker: #4bbb7d;
  --color-secondary-darker: #ffbb00;
  --color-tertiary-darker: #fd424b;
  --color-primary-opacity: #5ec5763a;
  --color-secondary-opacity: #ffcd0331;
  --color-tertiary-opacity: #ff58602d;
  --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
  --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
}

/* Breakpoints */
/*1) 1000px - 62.5em */
/* 2) 800px - 50em  */
/* 3) 660px - 41.25em */
/* 4) 550 px - 34.375em */

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: #444;
  line-height: 1.9;
  background-color: #f3f3f3;
}

/* GENERAL ELEMENTS */
.section {
  padding: 15rem 3rem;
  border-top: 1px solid #ddd;

  transition: transform 1s, opacity 1s;
}

.section--hidden {
  opacity: 0;
  transform: translateY(8rem);
}

.section__title {
  max-width: 80rem;
  margin: 0 auto 8rem auto;
}

.section__description {
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.section__header {
  font-size: 4rem;
  line-height: 1.3;
  font-weight: 500;
}

.btn {
  display: inline-block;
  background-color: var(--color-primary);
  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 500;
  border: none;
  padding: 1.25rem 4.5rem;
  border-radius: 10rem;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:hover {
  background-color: var(--color-primary-darker);
}

.btn--text {
  display: inline-block;
  background: none;
  font-size: 1.7rem;
  font-family: inherit;
  font-weight: 500;
  color: var(--color-primary);
  border: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
  cursor: pointer;
  transition: all 0.3s;
}

p {
  color: #666;
}

/* This is BAD for accessibility! Don't do in the real world! */
button:focus {
  outline: none;
}

img {
  transition: filter 0.5s;
}

.lazy-img {
  filter: blur(20px);
}
@media only screen and (max-width: 62.5em) {
  html {
    font-size: 50%;
  }
}
@media only screen and (max-width: 62.5em) {
  html {
    font-size: 50%;
  }
}
@media only screen and (max-width: 50em) {
  .nav {
    flex-direction: column;
    height: 15rem;
  }

  .nav__logo {
    margin-top: 2rem;
  }

  .nav__links {
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .header {
    /* padding: 0 3rem; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header__title {
    flex: 1;

    max-width: 100rem;
    display: grid;
    grid-template-columns: 3fr 2fr;
    row-gap: 3rem;
    align-content: center;
    justify-content: center;

    align-items: start;
    justify-items: start;
  }

  h1 {
    font-size: 5rem;
    line-height: 1.5;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }

  .header__img {
    width: 90%;
    grid-column: 2 / 3;
    grid-row: 1 / span 4;
    transform: translateY(-6rem);
  }

  .features {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 4rem;
    margin: 0 10rem;
  }

  .features__img {
    width: 100%;
    margin-bottom: -5rem;
    display: flex;
    justify-self: center;
  }
  .features__img--2 {
    grid-row: 3/4;
  }
  .features__img--3 {
    grid-row: 5/6;
  }

  .features__feature {
    width: 100%;
    font-size: 2.5rem;
  }

  .features__icon {
    display: none;
  }

  .features__header {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .section__header {
    font-size: 3rem;
  }
}

@media only screen and (max-width: 41.25em) {
  .features__feature {
    font-size: 1.3rem;
    width: 100%;
  }

  .nav__link--btn:link,
  .nav__link--btn:visited {
    padding: 0;
    border-radius: 0;
    background-color: transparent;
    color: var(--color-primary);
    font-weight: 400;
    text-align: center;
  }

  .header__title {
    margin-top: 7rem;
    grid-template-columns: 1fr;
  }

  .header__img {
    width: 60%;
    display: flex;
    justify-self: center;
    margin-top: 5rem;
    grid-column: 1 / span 1;
    grid-row: 4 / span 1;
    transform: translateY(-6rem);
  }

  h1 {
    grid-row: 1 / span 1;
    justify-self: center;
  }

  h4 {
    grid-row: 2 / span 1;
    justify-self: center;
  }
  .header__btn {
    grid-row: 3 / span 1;
    justify-self: center;
    margin-bottom: 2rem;
  }
  .dots {
    bottom: 3%;
  }

  .footer {
    padding: 8rem 3rem;
  }

  .footer__nav {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer__item {
    margin-right: 3rem;
  }

  .footer__link {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 34.375em) {
  .nav__links {
    flex-wrap: wrap;
    justify-content: center;
  }
  .features__feature {
    font-size: 1.2rem;
    width: 100%;
  }
  .dots {
    bottom: 0%;
  }
}
@media only screen and (max-width: 440px) {
  html {
    font-size: 45%;
  }
  .nav__links {
    margin-top: 10px;
  }

  /* .operations {
    display: none;
  } */

  .modal__header {
    font-size: 3.25rem;
    margin-bottom: 4.5rem;
    line-height: 1.5;
  }

  .modal__form {
    margin: 0 0;
  }

  .modal__form input {
    font-size: 1.5rem;
  }
  .header__img {
    width: 70%;
  }

  .features__feature {
    font-size: 1.2rem;
    width: 100%;
  }

  .header__title {
    margin-top: -5rem;
  }

  .slide {
    height: 50rem;
  }

  .slider__btn {
    height: 5rem;
    width: 5rem;
    font-size: 3rem;
  }

  .testimonial__text {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  .testimonial__author {
    display: none;
  }
}

@media only screen and (max-width: 360px) {
  .features__feature {
    font-size: 0.9rem;
  }
}

@media only screen and (max-width: 385px) {
  .operations__tab-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .operations__tab {
    margin-right: 0rem;
    margin-bottom: 2rem;

    align-items: stretch;
  }

  .operations__tab--3 {
    margin: 1rem;
  }

  .operations__tab--active {
    transform: translateY(-55%);
  }
  .operations__content--active {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 3rem;
    row-gap: 0.5rem;
  }

  .operations__header {
    font-size: 2rem;
    font-weight: 500;
    align-self: center;
  }

  .operations__icon svg {
    height: 2.75rem;
    width: 2.75rem;
  }
  .operations__icon {
    justify-self: center;
  }

  .operations__content p {
    grid-column: 1;
  }
}
</style>
