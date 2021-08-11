<template>
  <section class="section section--sign-up">
    <div class="section__title">
      <h3 class="section__header">
        The best day to join Bankist was one year ago. The second best is today!
      </h3>
    </div>
    <button class="btn btn--show-modal" @click="handleClick">
      Open your free account today!
    </button>
  </section>
</template>

<script>
export default {
  name: "OpenAccount",
  methods: {
    handleClick() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
.section--sign-up {
  background-color: #37383d;
  border-top: none;
  border-bottom: 1px solid #444;
  text-align: center;
  padding: 10rem 3rem;
}

.section--sign-up .section__header {
  color: #fff;
  text-align: center;
}

.section--sign-up .section__title {
  margin-bottom: 6rem;
}

.section--sign-up .btn {
  font-size: 1.9rem;
  padding: 2rem 5rem;
}
</style>
