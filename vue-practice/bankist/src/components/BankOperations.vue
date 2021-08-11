<template>
  <section class="section" id="section--2">
    <div class="section__title">
      <h2 class="section__description">Operations</h2>
      <h3 class="section__header">
        Everything as simple as possible, but no simpler.
      </h3>
    </div>

    <div class="operations">
      <div class="operations__tab-container">
        <button
          :class="{
            btn: true,
            operations__tab: true,
            'operations__tab--1': true,
            'operations__tab--active': tabOne,
          }"
          @click="handleTabOne"
        >
          <span>01</span>Instant Transfers
        </button>
        <button
          :class="{
            btn: true,
            operations__tab: true,
            'operations__tab--2': true,
            'operations__tab--active': tabTwo,
          }"
          @click="handleTabTwo"
        >
          <span>02</span>Instant Loans
        </button>
        <button
          :class="{
            btn: true,
            operations__tab: true,
            'operations__tab--3': true,
            'operations__tab--active': tabThree,
          }"
          @click="handleTabThree"
        >
          <span>03</span>Instant Closing
        </button>
      </div>
      <div
        :class="{
          operations__content: true,
          'operations__content--1': true,
          'operations__content--active': tabOne,
        }"
      >
        <div class="operations__icon operations__icon--1">
          <svg>
            <use xlink:href="../assets/icons.svg#icon-upload"></use>
          </svg>
        </div>
        <h5 class="operations__header">
          Tranfser money to anyone, instantly! No fees, no BS.
        </h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div
        :class="{
          operations__content: true,
          'operations__content--2': true,
          'operations__content--active': tabTwo,
        }"
      >
        <div class="operations__icon operations__icon--2">
          <i class="fas fa-tachometer-alt"></i>
        </div>
        <h5 class="operations__header">
          Buy a home or make your dreams come true, with instant loans.
        </h5>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
      <div
        :class="{
          operations__content: true,
          'operations__content--3': true,
          'operations__content--active': tabThree,
        }"
      >
        <div class="operations__icon operations__icon--3">
          <i class="fas fa-closed-captioning"></i>
        </div>
        <h5 class="operations__header">
          No longer need your account? No problem! Close it instantly.
        </h5>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BankOperations",
  data() {
    return {
      tabOne: true,
      tabTwo: false,
      tabThree: false,
    };
  },
  methods: {
    handleTabOne() {
      this.tabOne = true;
      this.tabTwo = false;
      this.tabThree = false;
    },
    handleTabTwo() {
      this.tabOne = false;
      this.tabTwo = true;
      this.tabThree = false;
    },
    handleTabThree() {
      this.tabOne = false;
      this.tabTwo = false;
      this.tabThree = true;
    },
  },
};
</script>

<style scoped>
/* OPERATIONS */
.operations {
  max-width: 100rem;
  margin: 12rem auto 0 auto;

  background-color: #fff;
}

.operations__tab-container {
  display: flex;
  justify-content: center;
}

.operations__tab {
  margin-right: 2.5rem;
  transform: translateY(-50%);
}

.operations__tab span {
  margin-right: 1rem;
  font-weight: 600;
  display: inline-block;
}

.operations__tab--1 {
  background-color: var(--color-secondary);
}

.operations__tab--1:hover {
  background-color: var(--color-secondary-darker);
}

.operations__tab--3 {
  background-color: var(--color-tertiary);
  margin: 0;
}

.operations__tab--3:hover {
  background-color: var(--color-tertiary-darker);
}

.operations__tab--active {
  transform: translateY(-66%);
}

.operations__content {
  display: none;

  /* JUST PRESENTATIONAL */
  font-size: 1.7rem;
  padding: 2.5rem 7rem 6.5rem 7rem;
}

.operations__content--active {
  display: grid;
  grid-template-columns: 7rem 1fr;
  column-gap: 3rem;
  row-gap: 0.5rem;
}

.operations__header {
  font-size: 2.25rem;
  font-weight: 500;
  align-self: center;
}

.operations__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
}

.operations__icon svg,
.operations__icon i {
  height: 2.75rem;
  width: 2.75rem;
  font-size: 2.75rem;
}

.operations__content p {
  grid-column: 2;
}

.operations__icon--1 {
  background-color: var(--color-secondary-opacity);
}
.operations__icon--2 {
  background-color: var(--color-primary-opacity);
}
.operations__icon--3 {
  background-color: var(--color-tertiary-opacity);
}
.operations__icon--1 svg {
  fill: var(--color-secondary-darker);
}
.operations__icon--2 i {
  color: var(--color-primary);
}
.operations__icon--3 i {
  color: var(--color-tertiary);
}
</style>
