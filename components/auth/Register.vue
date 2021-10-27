<template>
  <form @submit.prevent="register">
    <div class="form-group">
      <label for="exampleInputEmail1">Username</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter email"
        v-model="credentials.username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input
        type="text"
        class="form-control"
        placeholder="Enter email"
        v-model="credentials.email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="credentials.password"
      />
    </div>
    <button type="submit" class="btn btn-primary mt-3">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async register() {
      const result = await this.$axios.post("users/create", {
        username: this.credentials.username,
        email: this.credentials.email,
        password: this.credentials.password
      });

      console.log(result);
    }
  }
};
</script>

<style></style>
