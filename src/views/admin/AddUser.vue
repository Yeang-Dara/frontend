<template>
  <v-main
    style="
      padding: 20px 20px 20px 20px;
      background-color: #F2F7FF;"
  >
    <v-row style="padding: 0px 10px 10px 10px; height: 10%">
      <v-card class="rounded-0 mt-2" width="100%">
        <v-card
          class="d-flex align-center rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px; text-align: center; color: blue"
            >ADD NEW USER MANAGEMENT</v-card-text
          >
        </v-card>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="user.first_name"
                label="First name"
                :rules="firstnameRules"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6" md="6">
              <v-text-field
                v-model="user.last_name"
                :rules="lastnameRules"
                label="Last name"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6" md="6">
              <v-text-field
                v-model="user.username"
                :rules="usernameRules"
                label="Username"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6" md="6">
              <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                prepend-inner-icon="mdi-account"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6" md="6">
              <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6" md="6">
              <v-text-field
                v-model="user.c_password"
                :rules="CpasswordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Comfirm Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
                outlined
              ></v-text-field>
            </v-col>
            <v-col clos="12" sm="6">
              <v-select
                :items="rule"
                :rules="Rules"
                v-model="user.rules"
                label="Roles"
                outlined
                required
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-start pa-2">
            <v-btn
              type="submit"
              color="blue darken-1"
              outlinetext
              style="color: white; margin-left: 6px"
              @click="adduser"
              >Add User</v-btn
            >
          </v-row>
        </v-card-text>
      </v-card>
    </v-row>
  </v-main>
</template>
<script>
import User from "../../apis/User";
import Swal from "sweetalert2";
export default {
  data: () => ({
    success: false,
    error: false,
    loading: false,
    passwordShow: false,
    user: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      c_password: "",
      rules: "",
    },
    rule: ["admin", "employee"],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 6) || "Password must be 6  characters or more!",
    ],
    CpasswordRules: [
      (v) => !!v || "Comfirm Password is required",
      (v) =>
        (v && v.length >= 6) || "Comfirm Password must be the same Password!",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    Rules: [(v) => !!v || "Rules is required"],
    firstnameRules: [
      (v) => !!v || "firstname is required",
      (v) =>
        (v && v.length >= 2) || "first name  must be 2 characters or more!",
    ],
    lastnameRules: [
      (v) => !!v || "firstname is required",
      (v) => (v && v.length >= 2) || "last name  must be 2 characters or more!",
    ],
    usernameRules: [
      (v) => !!v || "username is required",
      (v) => (v && v.length >= 4) || "username  must be 4 characters or more!",
    ],
  }),
  methods: {
    adduser() {
      User.create(this.user)
        .then(() => {
          Swal.fire({
            title: "Add user successfully",
            icon: "success",
          });
          setTimeout(() => {
            this.$router.push({ name: "users_page" });
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: error.response.data.message,
          });
        });
    },
  },
};
</script>
<style scoped>
::v-deep .v-alert {
  width: 300px;
  margin-top: 20px;
  position: fixed;
  right: 0%;
  z-index: 1;
  top: 50px;
}
</style>
