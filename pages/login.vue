<template>
  <div
    class="container d-flex flex-column justify-content-center"
    style="min-height: 100vh;"
  >
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card p-5">
          <Login v-if="isLoginForm" />
          <Register v-else />
          <div class="m-auto">
            <span>Or </span>
            <a
              v-if="isLoginForm"
              @click="isLoginForm = !isLoginForm"
              style="cursor:pointer"
              >Register</a
            >
            <a v-else @click="isLoginForm = !isLoginForm" style="cursor:pointer"
              >Login</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      saveFormData: false,
      isLoginForm: true,
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
