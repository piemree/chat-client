<template>
  <nav
    class="card-header px-5 py-3 bg-primary text-light d-flex align-items-center justify-content-between"
    id="chat-nav"
  >
    <div class="d-flex align-items-center ">
      <h4><i class="bi bi-chat-fill"></i></h4>
      <p class="my-0 mx-3 font-weight-bold">Chat</p>
    </div>
    <button @click="logout" class="btn text-light">
      <h3><i class="bi bi-box-arrow-right"></i></h3>
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("login");
    }
  }
};
</script>

<style></style>
