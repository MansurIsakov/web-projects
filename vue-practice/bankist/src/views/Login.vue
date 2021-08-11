<template>
  <div class="modal ">
    <a class="create" @click="handleCreate">Create Account &RightArrow;</a>
    <h2 class="modal__header">
      Sign in into your <br />
      <span class="highlight">bank account </span>
    </h2>
    <form @submit.prevent="handleSubmit" class="modal__form">
      <label>Email Address</label>
      <input type="email" required v-model="email" />
      <label>Password</label>
      <input type="password" required v-model="password" />
      <div class="error">{{ error }}</div>
      <button class="btn">
        Sign In &rarr;
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { error, login } = useLogin();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        router.push({ name: "Home" });
      }
    };
    const handleCreate = () => {
      router.push({ name: "Signup" });
    };

    return {
      email,
      password,
      handleSubmit,
      handleCreate,
      error,
    };
  },
};
</script>

<style scoped>
/* MODAL WINDOW */
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 60rem;
  background-color: #f3f3f3;
  padding: 5rem 6rem;
  box-shadow: 0 4rem 6rem rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: all 0.5s;
}
.error {
  color: #ff3f80;
  font-size: 14px;
  width: 100%;
}
.create {
  float: right;
  text-align: right;
  width: 100%;
  font-size: 1.4rem;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  transition: all 0.5s;
}

.modal__header {
  font-size: 3.25rem;
  margin-bottom: 4.5rem;
  line-height: 1.5;
}

.modal__form {
  margin: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 2.5rem;
}

.modal__form label {
  font-size: 1.7rem;
  font-weight: 500;
}

.modal__form input {
  font-size: 1.7rem;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
}

.modal__form button {
  grid-column: 1 / span 2;
  justify-self: center;
  margin-top: 1rem;
}
.modal__form button a {
  color: #222;
  text-decoration: none;
}

.btn--close-modal {
  font-family: inherit;
  color: inherit;
  position: absolute;
  top: 0.5rem;
  right: 2rem;
  font-size: 4rem;
  cursor: pointer;
  border: none;
  background: none;
}

.hidden {
  visibility: hidden;
  opacity: 0;
}

/* COOKIE MESSAGE */
.cookie-message {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background-color: white;
  color: #bbb;
  font-size: 1.5rem;
  font-weight: 400;
}
</style>
