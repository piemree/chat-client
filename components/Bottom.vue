<template>
  <div class="card-footer px-4 py-3  bg-light">
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
</template>

<script>
export default {
  data() {
    return {
      messageInput: ""
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
  }
};
</script>

<style></style>
