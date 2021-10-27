<template>
  <!-- <Chat :sendMessage="sendMessage" /> -->
  <div class="card position-relative">
    <div class="row">
      <div v-show="toggle" class="col-3 border-right p-0 overflow-auto" style="max-height:calc(100vh - 83px)">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
      <div class="p-0" :class="toggle ? 'col-9' : 'col-12'">
        <Chat />
        <Bottom :sendMessage="sendMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.socket = this.$socket;
    this.socket.on("connect", () => {
      this.socket.emit("credentials", this.$auth.user);
    });
    this.socket.on("setId", ({ id }) => {
      this.$store.commit("setOwnId", id);
    });
    this.socket.on("message", payload => {
      console.log(payload);
      this.$store.commit("addMessage", payload);
    });
  },
  methods: {
    sendMessage(msg) {
      this.socket.emit("sendMessage", { roomName: "oda1", message: msg });
    }
  },
  computed: mapState({
    toggle: state => state.leftBarStatus
  })
};
</script>
