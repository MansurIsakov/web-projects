<template>
  <div class="container" v-if="user">
    <nav-bar></nav-bar>
    <chat-window></chat-window>
    <chat-form></chat-form>
  </div>
</template>

<script>
import ChatForm from "../components/ChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NavBar from "../components/NavBar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: {
    NavBar,
    ChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>

<style scoped></style>
