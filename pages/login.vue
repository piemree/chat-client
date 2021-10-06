<template>
  <div
    class="container d-flex flex-column justify-content-center"
    style="min-height: 100vh;"
  >
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card p-5">
          <form @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                v-model="credentials.username"
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
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Check me out</label
              >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$auth.loginWith("local", { data: this.credentials });
    }
  }
};
</script>

<style></style>
