<template>
  <header class="header">
    <nav class="nav" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
      <img
        src="../assets/logo.png"
        alt="Bankist logo"
        class="nav__logo"
        id="logo"
      />
      <ul class="nav__links">
        <li class="nav__item" v-for="link in navLinks" :key="link">
          <a class="nav__link" :href="'#section--' + link.id">{{
            link.linkTitle
          }}</a>
        </li>

        <div class="user-auth">
          <li class="nav__item" v-if="!user">
            <a
              class="nav__link nav__link--btn btn--show-modal"
              href="#"
              @click="openAccount"
              >Open account</a
            >
          </li>
          <li class="nav__item nav__link" v-if="user">{{ user.email }}</li>
          <li class="nav__item" v-if="user">
            <a
              class="nav__link nav__link--btn btn--show-modal"
              href="#"
              @click="logoutAcc"
              >Logout</a
            >
          </li>
        </div>
      </ul>
    </nav>

    <div class="header__title">
      <h1>
        When
        <!-- Green highlight effect -->
        <span class="highlight">banking</span>
        meets<br />
        <span class="highlight">minimalist</span>
      </h1>
      <h4>A simpler banking experience for a simpler life.</h4>
      <a href="#section--1">
        <button class="btn--text btn--scroll-to header__btn">
          Learn more &DownArrow;
        </button>
      </a>
      <img
        src="../assets/hero.png"
        class="header__img"
        alt="Minimalist bank items"
      />
    </div>
  </header>
</template>

<script>
// import { ref } from "vue";
import { useRouter } from "vue-router";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    const router = useRouter();
    const { logout, error } = useLogout();
    const { user } = getUser();

    const navLinks = [
      {
        linkTitle: "Features",
        id: 1,
      },
      {
        linkTitle: "Operations",
        id: 2,
      },
      {
        linkTitle: "Testimonials",
        id: 3,
      },
    ];

    const openAccount = () => {
      router.push({ name: "Login" });
    };

    const handleMouseOver = (e) => {
      if (e.target.classList.contains("nav__link")) {
        const hovered = e.target;
        const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
        const logo = hovered.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
          if (el !== hovered) el.style.opacity = 0.5;
        });
        logo.style.opacity = 0.5;
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.classList.contains("nav__link")) {
        const hovered = e.target;
        const siblings = hovered.closest(".nav").querySelectorAll(".nav__link");
        const logo = hovered.closest(".nav").querySelector("img");

        siblings.forEach((el) => {
          if (el !== hovered) el.style.opacity = 1;
        });
        logo.style.opacity = 1;
      }
    };

    const logoutAcc = async () => {
      await logout();
      if (!error.value) {
        console.log("logged out");
      }
    };

    return {
      navLinks,
      openAccount,
      handleMouseOver,
      handleMouseOut,
      logoutAcc,
      user,
    };
  },
};
</script>

<style>
/* NAVIGATION */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 9rem;
  width: 100%;
  padding: 0 6rem;
  z-index: 100;
}
.user-auth {
  display: flex;
  align-items: center;
}
/* nav and stickly class at the same time */
.nav.sticky {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.95);
}

.nav__logo {
  height: 4.5rem;
  transition: all 0.3s;
}

.nav__links {
  display: flex;
  align-items: center;
  list-style: none;
}

.nav__item {
  margin-left: 4rem;
}

.nav__link,
.nav__link:link,
.nav__link:visited {
  font-size: 1.7rem;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  display: block;
  transition: all 0.3s;
}

.nav__link--btn:link,
.nav__link--btn:visited {
  padding: 0.8rem 2.5rem;
  border-radius: 3rem;
  background-color: var(--color-primary);
  color: #222;
}

.nav__link--btn:hover,
.nav__link--btn:active {
  color: inherit;
  background-color: var(--color-primary-darker);
  color: #333;
}

/* HEADER */
.header {
  padding: 0 3rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__title {
  flex: 1;

  max-width: 115rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  row-gap: 3rem;
  align-content: center;
  justify-content: center;

  align-items: start;
  justify-items: start;
}

h1 {
  font-size: 5.5rem;
  line-height: 1.35;
}

h4 {
  font-size: 2.4rem;
  font-weight: 500;
}

.header__img {
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / span 4;
  transform: translateY(-6rem);
}

.highlight {
  position: relative;
}

.highlight::after {
  display: block;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.7;
  transform: scale(1.07, 1.05) skewX(-15deg);
  background-image: var(--gradient-primary);
}
</style>
