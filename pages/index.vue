<template>
  <Chat :sendMessage="sendMessage" />
</template>

<script>
export default {
  mounted() {
    this.socket = this.$nuxtSocket({
      persist: true
    });
    this.socket.on("setId", ({ id }) => {
      console.log(id);
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
