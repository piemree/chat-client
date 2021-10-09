<template>
  <!-- <Chat :sendMessage="sendMessage" /> -->
  <div class="card">
    
    <Chat />
    <Bottom :sendMessage="sendMessage" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.socket = this.$socket
    this.socket.on("connect",() => {
      this.socket.emit("credentials",this.$auth.user)
    })
    this.socket.on("setId", ({ id }) => {
      this.$store.commit("setOwnId", id);
    });
    this.socket.on("message", paylaod => {
       console.log(payload)
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

