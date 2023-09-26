<template>
  <v-main
    style="
      padding: 20px 20px 20px 20px;
      height: 100%;
      background-color: #d3d3d3;
    "
  >
    <v-card class="rounded-0 mt-2" width="100%">
      <v-card
        class="d-flex align-center rounded-0"
        height="65"
        style="padding: 15px"
        outlined
      >
        <v-card-text style="font-size: 20px; text-align: center; color: blue">
          YOUR ACCOUNT INFORMATION</v-card-text
        >
          <v-alert :value="success" type="success"
            >Updated Successfully!
          </v-alert>
          <v-alert :value="error" type="error"
            >Updated Unsuccessfully!
          </v-alert>
      </v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="4" sm="12">
            <v-card style="">
              <div class="text-center">
                <v-avatar color="surface-variant" size="250" class="ma-2">
                  <v-img src="../../assets/profile.jpg" />
                </v-avatar>
              </div>
              <div class="d-flex justify-center pa-2 mt-0 mb-2">
                <v-btn
                  large
                  color="blue"
                  class="mr-1 white--text"
                  @click="editItem()"
                >
                  <v-icon medium color="white"> mdi-pencil </v-icon>Update
                  information
                </v-btn>
              </div>
              <v-divider></v-divider>
            </v-card>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" md="6" sm="12" class="pb-0">
                <label>First Name</label>
                <v-text-field
                  v-model="user.first_name"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" class="pb-0">
                <label for="last_name">Last Name</label>
                <v-text-field
                  v-model="user.last_name"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" class="pb-0 pt-0">
                <label for="username">Username</label>
                <v-text-field
                  v-model="user.username"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" class="pb-0 pt-0">
                <label for="email">Email</label>
                <v-text-field
                  v-model="user.email"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" sm="12" class="pb-0 pt-0">
                <label for="password">Password</label>
                <v-text-field
                  v-model="user.c_password"
                  prepend-inner-icon="mdi-key"
                  :type="passwordShow ? 'text' : 'password'"
                  :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="passwordShow = !passwordShow"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="" sm="12" class="pb-0 pt-0">
                <label for="role">Role</label>
                <v-text-field
                  v-model="user.rules"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-dialog v-model="dialog" max-width="700px">
        <v-card>
          <v-card-title style="background-color: #35acd3" class="white--text"
            >Update information account</v-card-title
          >
          <v-card-text class="pt-2 pb-0">
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="user.last_name"
                    label="Last name"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    v-model="user.first_name"
                    label="First name"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    v-model="user.username"
                    label="Username"
                    outlined
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="red" text @click="close">Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save">Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-main>
</template>
<script>
import User from "../../apis/User";
export default {
  data: () => ({
    user: [],
    passwordShow: false,
    error:false,
    success: false,
    rules: ["admin", "employee"],
    dialog: false,
  }),
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  created() {
    User.auth().then((response) => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  mounted: function () {
      if (alert) {
      this.hide_success();
    }
  },
  methods: {
     hide_success: function (event) {
      console.log("Hide");
      window.setInterval(() => {
        this.success = false;
        this.error = false;
      }, 5000);
    },
    editItem(){
      this.dialog = true;
    },

    save(){
      const id = this.user.id;
      User.update(id, this.user)
      .then((Response)=>{
        this.dialog = false;
        this.success = true;
        console.log(Response.data);
      })
      .catch((Response)=>{
        this.dialog = false;
        this.error = true;
        console.log(Response.data);
      });
    },
    close() {
      this.dialog = false;
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
