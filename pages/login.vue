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
                @change="saveFormData = !saveFormData"
                type="checkbox"
                ref="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Remember me</label
              >
            </div>
            <button type="submit" class="btn btn-primary mt-3">Submit</button>
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
      saveFormData: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", { data: this.credentials });
      } catch (error) {
        console.log(error);
      }
      this.saveFormDataToLocalStorage(this.credentials, this.saveFormData);
    },
    saveFormDataToLocalStorage(credentials, willItBeRecorded) {
      if (willItBeRecorded) {
        localStorage.setItem("credentials", JSON.stringify(credentials));
        return;
      }
      localStorage.removeItem("credentials");
    }
  },
  mounted() {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    if (!credentials) return;
    this.credentials.username = credentials.username;
    this.credentials.password = credentials.password;
    this.$refs.checkbox.checked = true;
  }
};
</script>

<style></style>
