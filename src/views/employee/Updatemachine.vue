<template>
  <v-main style="padding: 20px 20px 20px 20px; background-color: #f2f7ff">
    <v-row style="padding: 10px 10px 10px 10px; height: 90%">
      <v-card class="rounded-0 mt-0" width="100%">
        <v-card
          class="d-flex align-center rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px; text-align: center; color: blue"
            >UPDATE INFORMATION MACHINE</v-card-text
          >
          <v-alert :value="success" type="success"
            >Updated Successfully!
          </v-alert>
          <v-alert :value="error" type="error"
            >Updated Unsuccessfully!
          </v-alert>
        </v-card>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row class="pt-2">
                <v-col class="pb-0 pt-0" cols="12" sm="6" md="4">
                  <label for="atm_id">ATM ID</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.atm_id"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="pb-0 pt-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Alias ATM ID</label>
                  <v-text-field
                    v-model="using.alias_id"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="pb-0 pt-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Install Date</label>
                  <v-text-field
                    v-model="using.install_date"
                    label=""
                    type="date"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Delivery Date</label>
                  <v-text-field
                    v-model="using.delivery_date"
                    label=""
                    type="date"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Take Over Date</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.take_over_date"
                    label=""
                    type="date"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Category</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-select
                    :items="itemscategories"
                    v-model="using.category_name"
                    label=""
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Serial Number</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.serial_number"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Model</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-select
                    :items="model_name"
                    v-model="using.model_name"
                    label=""
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Warranty Days</label>
                  <v-text-field
                    v-model="using.warranty_days"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Status</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-select
                    :items="status"
                    v-model="using.status"
                    label=""
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Type</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-select
                    :items="itemstypes"
                    v-model="using.type_name"
                    label=""
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">APK Version</label>
                  <v-text-field
                    v-model="using.apk_version"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Android Version</label>
                  <v-text-field
                    v-model="using.andriod_version"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Image Version</label>
                  <v-text-field
                    v-model="using.image_version"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Mainboard Version</label>
                  <v-text-field
                    v-model="using.mainboard_version"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Bank name</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-select
                    :items="banks"
                    v-model="using.bank_name"
                    label=""
                    outlined
                  ></v-select>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Site ID</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.site_id"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="comment">Comment</label>
                  <v-text-field
                    v-model="using.comment"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Region</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.region_name"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Site Name</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.site_name"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Location</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.location"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">City/Provinces</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.city"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">State</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.state_name"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Accessibility</label>
                  <v-text-field
                    v-model="using.accessibility"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="12">
                  <label for="alias_id">Address</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.address"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-end pa-2">
                <v-btn color="red" style="color: white">
                  <router-link
                    :to="{ name: 'atmemployee' }"
                    class="white--text"
                    style="text-decoration: none"
                    >Back</router-link
                  >
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  outlinetext
                  style="color: white; margin-left: 6px"
                  @click="Update"
                  >Update</v-btn
                >
                <v-dialog v-model="dialog" width="500">
                  <v-card>
                    <v-card-title>
                      Are you sure you want to update this machine?
                    </v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="red darken-1"
                        outlinetext
                        style="color: white; margin-left: 6px"
                        @click="dialog = false"
                      >
                        No
                      </v-btn>
                      <v-btn
                        color="blue darken-1"
                        outlinetext
                        style="color: white; margin-left: 6px"
                        @click="updateComfirm"
                      >
                        Yes
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-card>
    </v-row>
  </v-main>
</template>
<script>
import Using from "../../apis/Using";
import Swal from "sweetalert2";
export default {
  data: () => ({
    itemstypes: ["ATM", "CRM", "DC365"],
    banks:["ABA Bank","AMK MFI","Wing","Philip Bank" ],
    itemscategories: ["Gold", "Bronze", "Platinum", "Silver"],
    model_name: ['DN 200V','DN 100D','DC365','DC365lx','PC 280'],
    status: ["non-active", "active"],
    success: false,
    error: false,
    dialog: false,
    using: {
      atm_id: "",
      alias_id: "",
      install_date: "",
      delivery_date: "",
      take_over_date: "",
      category_name: "",
      serial_number: "",
      model_name: "",
      warranty_days: "",
      comment: "",
      type_name: "",
      status: "",
      bank_name: "",
      site_id: "",
      region_name: "",
      site_name: "",
      location: "",
      city: "",
      state_name: "",
      accessibility: "",
      address: "",
      apk_version: "",
      mainboard_version: "",
      android_version: "",
      image_version: "",
    },
  }),
  created() {
    const id = this.$route.params.id;
    console.log(id);
    Using.show(id).then((Response) => {
      this.using = Response.data.data;
      console.log(this.using);
    });
  },
  methods: {
    hide_success: function (event) {
      console.log("Hide");
      window.setInterval(() => {
        this.success = false;
        this.error = false;
      }, 5000);
    },
    Update() {
      this.dialog = true;
    },
    updateComfirm() {
      const id = this.using.id;
      Using.update(id, this.using)
        .then((Response) => {
          this.dialog = false;
          // this.success = true;
            Swal.fire({
                title: "Updated Successfully",
                icon: "success",
            });
          // console.log(Response.data);
          setTimeout(() => {
            this.$router.push({ name: "atmemployee" });
          }, 3000);
        })
        .catch((Response) => {
          this.dialog = false;
          // this.error = true;
          // console.log(Response.data);
            Swal.fire({
                title: "Updated Unsuccessfully",
                icon: "error",
            });
        });
    },
  },
  mounted: function () {
    if (alert) {
      this.hide_success();
    }
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
