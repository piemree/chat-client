<template>
  <div
    class="card-body position-relative"
    style="overflow-y: auto; max-height:calc(100vh - 160px);min-height:calc(100vh - 160px)"
  >
    <div
      class="d-flex flex-column justify-content-end p-2"
      id="chat-messages-box"
      ref="mcon"
    >
      <Message
        v-for="(payload, i) in messages"
        :key="i"
        :message="payload.message"
        :isMe="payload.isMe"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    sendMessage: { type: Function }
  },
  methods: {
    scrollToEnd() {
      // window.document.getElementById("scroll-to-bottom").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
      //window.scrollBy(0, window.innerHeight);
      window.scrollBy(0, 300);
    }
  },
  computed: mapState({
    // arrow functions can make the code very succinct!
    messages: state => state.messages,
    id: state => state.id
  })
};
</script>

<style scoped></style>
