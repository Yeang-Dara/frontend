<template>
    <v-main style="padding: 20px 20px 20px 20px; background-color:#F2F7FF;"  class="" >
        <v-row style="padding:10px 10px 10px 10px ; height: 90%;">
            <v-card class="rounded-0 " width="100%">
                <v-card class="d-flex align-center rounded-0" height="65" style="padding:15px;" outlined>
                    <v-card-text style="font-size: 20px; text-align:center; color:blue;">ADD NEW MACHINE USING</v-card-text>
                    <v-alert
                        :value="success"
                        type="success">Created Successfully!
                    </v-alert>
                    <v-alert
                        :value="error"
                        type="error">Invalid Input!
                    </v-alert>
                </v-card>
                <v-card>
                    <v-card-text >
                        <v-card-container>
                            <v-row class="pt-2" >
                                <v-col class="pb-0 py-0 " 
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="atm_id">ATM ID</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                            
                                    <v-text-field
                                        v-model="uses.atm_id"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="pb-0 py-0 "
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="alias_id">Alias ATM ID</label>
                                    <v-text-field
                                        v-model="uses.alias_id"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                    <v-col class="pb-0 py-0 "
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="alias_id">Install Date</label>
                                    <v-text-field
                                        v-model="uses.install_date"
                                        type="date"
                                        prepend-inner-icon="mdi-calendar"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0 pb-0"
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="alias_id">Delivery Date</label>
                              
                                    <v-text-field
                                        v-model="uses.delivery_date"
                                        label=""
                                        type="date"
                                        prepend-inner-icon="mdi-calendar"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="alias_id">Take Over Date</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.take_over_date"
                                        label=""
                                        type="date"
                                        prepend-inner-icon="mdi-calendar-end"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="alias_id">Category</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select
                                        :items=" itemscategories"
                                        v-model="uses.category_name"
                                        label=""
                                        outlined
                                    ></v-select>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Serial Number</label>
                                    <v-icon small color="orange">mdi-star </v-icon>
                                    <v-text-field
                                        v-model="uses.serial_number"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Model</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select
                                        :items="models"
                                        v-model="uses.model_name"
                                        label=""
                                        outlined
                                    ></v-select>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Warranty Days</label>                              
                                    <v-text-field
                                        v-model="uses.warranty_days"
                                        label="" 
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                  <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Status</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select
                                        :items="itemsstatus"
                                        v-model="uses.status"
                                        label=""
                                        outlined
                                    ></v-select>  
                                </v-col>
                                 <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Type</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select
                                        :items="itemstypes"
                                        v-model="uses.type_name"
                                        label=""
                                        outlined
                                    ></v-select>  
                                </v-col>
                                   <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">APK Version</label>
                              
                                    <v-text-field
                                        v-model="uses.apk_version"
                                        label="" 
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                   <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Android Version</label>                              
                                    <v-text-field
                                        v-model="uses.andriod_version"
                                        label="" 
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                   <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Image Version</label>                              
                                    <v-text-field
                                        v-model="uses.image_version"
                                        label="" 
                                        outlined
                                    ></v-text-field>
                                </v-col>                                  
                                   <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Mainboard Version</label>                              
                                    <v-text-field
                                        v-model="uses.mainboard_version"
                                        label="" 
                                        outlined
                                    ></v-text-field>
                                </v-col>                             
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Bank name</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select
                                        :items="banks"
                                        v-model="uses.bank_name"
                                        label=""
                                        outlined
                                    ></v-select>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Site ID</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.site_id"
                                        label=""
                                        outlined                                        
                                    ></v-text-field>
                                </v-col>
                                 <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                    <label for="comment">Comment</label>
                                    <v-text-field
                                        v-model="uses.comment"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Site Name</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model ="uses.site_name"
                                        label =""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Region</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.region_name"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4">
                                  <label for="alias_id">Location</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.location"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                  <label for="alias_id">City/Provinces</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-select 
                                        :items="citys"
                                        v-model="uses.city"
                                        label=""
                                        outlined
                                    ></v-select>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                  <label for="alias_id">State</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.state_name"
                                        label=""
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="6"
                                md="4"
                                >
                                  <label for="alias_id">Accessibility</label>                                 
                                    <v-text-field
                                        v-model="uses.accessibility"
                                        label=" "
                                        outlined
                                    ></v-text-field>
                                </v-col>
                                <v-col class="py-0"
                                cols="12"
                                sm="12"
                                >
                                  <label for="alias_id">Address</label>
                                    <v-icon
                                        small
                                        color="orange">mdi-star
                                    </v-icon>
                                    <v-text-field
                                        v-model="uses.address"
                                        label=""
                                        prepend-inner-icon="mdi-map-marker-outline"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row class="d-flex justify-end pa-2 mb-2">
                                <v-btn color="red" style="color: white">
                                    <router-link
                                        :to="{ name: 'atm_page' }"
                                        class="white--text"
                                        style="text-decoration: none"
                                        >Back</router-link>
                                </v-btn>
                                <v-btn color="blue darken-1" outlinetext style="color:white; margin-left:6px;" @click="addItem">Add Machine</v-btn>
                            </v-row>
                        </v-card-container>
                    </v-card-text>
                </v-card>
            </v-card>
        </v-row>
    </v-main>
</template>
<script>
import User from "../../apis/User";
import Using from "../../apis/Using";
import Swal from "sweetalert2";
export default {
    data:() =>({
        itemstypes:['ATM','CRM','DC365'],
        itemscategories:['Gold','Bronze','Platinum','Silver',],
        banks:["ABA Bank","AMK MFI","Wing","Philip Bank" ],
        models:['DN 200V','DN 100D','DC365','DC365lx','PC 280'],
        itemsstatus:['non-active','active',],
        citys:['Banteay Meanchey','Battambang','Kampong Cham','Kampong Chhnang','Kampong Speu','Kampong Thom','Kampot','Kandal','Koh Kong','Kratié','Mondulkiri','Phnom Penh','Preah Vihear','Prey Veng','Pursat','Ratanakiri','Siem Reap','Preah Sihanouk','Stung Treng','Svay Rieng','Takéo','Oddar Meanchey','Kep','Pailin','Tboung Khmum'],
        success: false,
        error: false,
        Rules:[
                v => !!v || 'is required',
            ],
        user:{}, 
        uses:{
            user_id:'',
            atm_id:'',
            alias_id:'',
            install_date:'',
            delivery_date:'',
            take_over_date:'',
            category_name:'',
            serial_number:'',
            model_name:'',
            warranty_days:'',
            comment:'',
            type_name:'',
            status:'',
            bank_name:'',
            site_id:'',
            region_name:'',
            site_name:'',
            location:'',
            city:'',
            state_name:'',
            accessibility:'',
            address:'',
            apk_version:'',
            mainboard_version:'',
            android_version:'',
            image_version:'',
        },
    }),
    methods:{
         hide_success: function (event) {
        console.log('Hide')
        window.setInterval(() => {
        this.success = false;
        this.error = false;
      }, 5000)    
    },
      addItem(){
        User.auth()
        .then(Response=>{
            this.user = Response.data;
             let data = {}
            this.uses.user_id =Response.data.id
            data = this.uses
            Using.create(data)
            .then(()=>{
                Swal.fire({
                    title: "Add machine successfully",
                    icon: "success",
                });
                setTimeout(()=>{
                    this.$router.push({ name: 'atm_page' }); 
                },3000)
            })
            .catch(error => {
                 Swal.fire({
                    icon: "error",
                    title: "Information invalid",
                });
            })
        })
      }  
    },
    mounted: function () {
    if(alert){
      this.hide_success();
    }
   }
}
</script>
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
.v-text-field .prepend-inner-icon{
    color: blue;
}
</style>