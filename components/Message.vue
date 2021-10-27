<template>
  <div
    class="d-flex my-2"
    :class="isMe ? 'justify-content-end' : 'justify-content-start'"
  >
    <div
      class="px-3 py-1 rounded text-light"
      :class="isMe ? 'bg-primary' : 'bg-secondary'"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    message: { type: String, required: false },
    isMe: { type: Boolean, required: false, default: false }
  }
};
</script>

<style></style>
