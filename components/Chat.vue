<template>
  <div class="position-relative" style="min-height: 100vh;">
    <nav
      class="px-5 py-3 bg-primary text-light d-flex align-items-center fixed-top"
      id="chat-nav"
    >
      <h4><i class="bi bi-chat-fill"></i></h4>
      <p class="my-0 mx-3 font-weight-bold">Chat</p>
    </nav>
    <div
      class="d-flex flex-column justify-content-end p-2"
      style="min-height: 100vh;"
      id="chat-messages-box"
    >
      <Message
        v-for="(payload, i) in messages"
        :key="i"
        :message="payload.message"
        :isMe="payload.isMe"
      />
    </div>
    <div class="px-4 py-3 fixed-bottom bg-light">
      <form @submit.prevent="submitMessage">
        <div class="input-group">
          <input type="text" class="form-control" v-model="messageInput" />
          <div class="input-group-append">
            <button class="btn btn-primary" type="submit" id="button-addon2">
              <i class="bi bi-cursor-fill"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      messageInput: "",
    };
  },
  props: {
    sendMessage: { type: Function }
  },
  methods: {
    submitMessage() {
      this.sendMessage(this.messageInput);
      this.messageInput = "";
    }
  },
  watch:{
    messages(){

    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    messages: state => state.messages,
    id: state => state.id
  })
};
</script>

<style scoped>
#chat-messages-box::before {
  content: "";
  display: block;
  height: 70px;
}
#chat-messages-box::after {
  content: "";
  display: block;
  height: 70px;
}
</style>
