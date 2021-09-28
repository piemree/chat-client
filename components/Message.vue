<template>
  <div
    class="d-flex my-2"
    :class="isMe ? 'justify-content-end' : 'justify-content-start'"
  >
    <div class="bg-warning px-3 py-1 rounded ">lorem50</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMe: false
    };
  }
};
</script>

<style></style>
