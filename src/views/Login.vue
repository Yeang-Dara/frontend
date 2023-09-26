<template>
  <v-app>
    <div class="background"></div>
      <v-alert
        :value="success"
        type="success">
          Login Successfully!
        </v-alert>
        <v-alert
        :value="error"
        type="error">
          Invalid Input
      </v-alert>
      <v-main>
        <v-img src="@/assets/logo.png" style="width: 250px; height: 100px"></v-img>
      </v-main>
      <v-main class="d-flex justify-center ">
        <v-col cols="10" lg="4" class="mx-auto">
            <v-card class="pa-4">
              <div class="text-center">
                <h3>
                  Login Into Your Account 
                </h3>
              </div>
               <v-form @submit.prevent="submitHandler" ref="form">
                  <v-card-text>
                    <v-text-field
                      v-model="user.email"
                      :rules="emailRules"
                      label="E-mail"
                      prepend-inner-icon="mdi-account"
                      required
                      outlined
                    ></v-text-field>
                    <v-text-field
                      v-model="user.password"
                      :rules="passwordRules"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
                      outlined
                    ></v-text-field>
                     <v-row class="mb-0">
                        <v-col cols="12"  >
                            <p class="forgot-password text-right">
                              <router-link to="/forgot-password" style="text-decoration: none;">Forgot password ?</router-link>
                            </p>
                         </v-col>
                      </v-row>
                  </v-card-text>
                   <v-row class="mt-0">
                      <v-col cols="12" class="d-flex justify-center align-baseline">
                        <p>Don't have account yet?</p>
                        <p class="white--text">d</p>
                        <!-- <router-link :to="{name: 'register'}" class="red--text" >Register</router-link> -->
                      </v-col>
                      </v-row>
                      <v-card-actions class="justify-center">
                        <v-btn :loading="loading" type="submit" color="blue" @click="login">
                            <span class="white--text px-8">Login</span>
                        </v-btn>
                      </v-card-actions>
               </v-form>
            </v-card>
        </v-col>
      </v-main>
  </v-app>
</template>
<style scoped>
 
  .background{
    background-image: url("../assets/login.jpg") !important;
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }

</style>
<script>
import User from "../apis/User";
  export default {
    name: 'Login',
    data: () => ({
        loading: false,
        passwordShow: false,
        error: false,
        success: false,
        email: '',
        password: '',
        passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail not  valid'
    ],
    user: {
      email: '',
      password: '',	
      device_name: "Browser"
    },
     processing:false,
      value: String,
      errors: []

    }),
      methods:{
       hide_success: function (event) {
        console.log('Hide')
        window.setInterval(() => {
        this.success = false;
        this.error = false;
        
      }, 5000)  
  },
    login() {
      this.processing = true
      User.login(this.user)
        .then(response => {
          this.$root.$emit("login", true);
          localStorage.setItem("token", response.data.data.token);
          setTimeout(()=> {
            if (response.data.data.rules == 'admin'){
              this.$router.push({ name: 'dashboard' });
            }else {
              this.$router.push({ name: 'dashboardemployee' });
            }
          },1000)
          console.log(response.data);
        })
        .catch(error => {
          this.error=true
          this.processing = false
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
            console.log(response.data.errors);
          }
        });

    },
    props: {
    source: String
  } ,
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
        },1000)
      }
    }
  },
  mounted: function () {
    if(alert){
      this.hide_success();
    }
   }
};
</script>