<template>
  <section class="section" id="section--1">
    <div class="section__title">
      <h2 class="section__description">Features</h2>
      <h3 class="section__header">
        Everything you need in a modern bank and more.
      </h3>
    </div>

    <div class="features">
      <img src="../assets/digital.jpg" alt="Computer" class="features__img" />
      <div class="features__feature">
        <div class="features__icon">
          <svg>
            <use xlink:href="../assets/icons.svg#icon-monitor"></use>
          </svg>
        </div>
        <h5 class="features__header">100% digital bank</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
          sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
          debitis ducimus.
        </p>
      </div>

      <div class="features__feature">
        <div class="features__icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <h5 class="features__header">Watch your money grow</h5>
        <p>
          Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
          inventore ab? Nulla incidunt eius numquam sequi iste pariatur
          quibusdam!
        </p>
      </div>
      <img
        src="../assets/grow.jpg"
        alt="Plant"
        class="features__img features__img--2"
      />

      <img
        src="../assets/card.jpg"
        alt="Credit card"
        class="features__img features__img--3"
      />
      <div class="features__feature">
        <div class="features__icon">
          <i class="far fa-credit-card"></i>
        </div>
        <h5 class="features__header">Free debit card included</h5>
        <p>
          Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
          eveniet consequatur odit quam quos possimus assumenda dicta fuga
          inventore ab.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BankFeatures",
};
</script>

<style>
/* FEATURES */
.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 0 12rem;
}

.features__img {
  width: 100%;
}

.features__feature {
  align-self: center;
  justify-self: center;
  width: 70%;
  font-size: 1.5rem;
}

.features__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-opacity);
  height: 5.5rem;
  width: 5.5rem;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.features__icon svg,
.features__icon i {
  height: 2.5rem;
  width: 2.5rem;
  font-size: 2.5rem;
  color: var(--color-primary);
  fill: var(--color-primary);
}

.features__header {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
