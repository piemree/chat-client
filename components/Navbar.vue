<template>
  <nav
    class="px-5 py-3 bg-primary text-light d-flex align-items-center justify-content-between"
    id="chat-nav"
  >
    <div class="d-flex align-items-center ">
      <h4><i class="bi bi-chat-fill"></i></h4>
      <p class="my-0 mx-3 font-weight-bold">Chat</p>
    </div>
   <div>
     <button v-show="$auth.loggedIn"  @click="createRoom" class="btn text-light p-0 mr-3">
      <h2><i class="bi bi-plus"></i></h2>
    </button>
      <button v-show="$auth.loggedIn"  @click="logout" class="btn text-light p-0">
      <h3><i class="bi bi-box-arrow-right"></i></h3>
    </button>
   </div>
  </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("login");
    },
    createRoom(){
      this.$store.dispatch("room/createNewRoom","room1");
    }
  }
};
</script>

<style></style>
