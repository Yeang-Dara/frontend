<template>
  <v-app>
    <div class="background"></div>
     <v-alert
        :value="success"
        type="success">
          Register Successfully!
        </v-alert>
        <v-alert
        :value="error"
        type="error">
          Invalid Input
        </v-alert>
    <v-main class="d-flex jutify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">

          <div class="text-center">
            <h3>Register Your Account</h3>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form" class="mx-6">
            <v-card-text >
              <v-text-field
                  v-model="user.first_name"
                  :rules="firstnameRules"
                  label="First name"
                  required
                  outlined
              ></v-text-field>
              <v-text-field
                v-model="user.last_name"
                :rules="lastnameRules"
                label="Last name"
                required
                outlined
              ></v-text-field>
               <v-text-field
                v-model="user.username"
                :rules="usernameRules"
                label="Username"
                required
                outlined
              ></v-text-field>
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
                   <v-text-field
                      v-model="user.c_password"
                      :rules="CpasswordRules"
                      :type="passwordShow?'text':'password'"
                      label="Comfirm Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
                      outlined
                ></v-text-field>
            </v-card-text>
            <v-row>
              <v-col cols="12" class="d-flex justify-center align-baseline">
                <p>Already have account ?</p>
                <p class="white--text">d</p>
                <router-link :to="{name: 'login'}" class="red--text">Login</router-link>
              </v-col>
            </v-row>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="blue"  @click="register">
               <span class="white--text px-8">Register</span>
              
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
    background-image: url("../assets/register.jpg") !important;
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
    data: () => ({
      loading: false,
      passwordShow: false,
      success: false,
      error: false,
  
      passwordRules:[
         v => !!v || 'Password is required',
         v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
      ],
        CpasswordRules:[
         v => !!v || 'Comfirm Password is required',
         v => (v && v.length >= 6) || 'Comfirm Password must be the same Password!',
      ],
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      firstnameRules: [
        v =>!!v || 'firstname is required',
         v => (v && v.length >= 2) || 'first name  must be 2 characters or more!',
       
      ],
      lastnameRules: [
        v =>!!v || 'firstname is required',
        v => (v && v.length >= 2) || 'last name  must be 2 characters or more!',
      ],
      usernameRules: [
          v =>!!v || 'username is required',
           v => (v && v.length >= 4) || 'username  must be 4 characters or more!',
      ],
      user:{
        first_name:'',
        last_name:'',
        username:'',
        email: '',
        password: '',
        c_password: '',
        rules:'employee',
      },
    }),
    methods: {
      hide_success: function (event) {
      // `event` is the native DOM event
      this.success = false;
      this.error = false; 
     },
     register() {
        User.register(this.user)
          .then(() => {
            this.success=true
            setTimeout(()=> {
              this.$router.push({ name: "login" });
            },500)
          })
          .catch(error => {
            this.error=true
            if (error.response) {
              this.errors = error.response.data.errors;
              console.log(error.response.data.errors);
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
        },500)
      }
    }
  }, 
    mounted: function () {
    if(alert){
      this.hide_success();
    }
   }
  }
  
 
</script>