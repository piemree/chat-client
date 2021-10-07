<template>
  <!-- <Chat :sendMessage="sendMessage" /> -->
  <div class="card">
    <Navbar />
    <Chat />
    <Bottom :sendMessage="sendMessage" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      persist: true
    });

    this.socket.on("connect",() => {
      this.socket.emit("credentials",this.$auth.user)
    })
    this.socket.on("setId", ({ id }) => {
      this.$store.commit("setOwnId", id);
    });
    this.socket.on("message", paylaod => {
      this.$store.commit("addMessage", paylaod);
    });
  },
  methods: {
    sendMessage(msg) {
      this.socket.emit("sendMessage", msg);
    }
  }
};
</script>

