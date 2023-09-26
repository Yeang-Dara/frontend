<template>
  <v-main style="padding: 20px 20px 20px 20px; background-color: #F2F7FF">
    <v-row style="padding: 10px 10px 10px 10px; height: 90%">
      <v-card class="rounded-0 mt-0" width="100%">
        <v-card
          class="d-flex align-center rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px; text-align: center; color: blue"
            >VIEW DETAIL INFORMATION MACHINE</v-card-text
          >
        </v-card>
        <v-card>
          <v-card-text>
            <v-container>
              <v-row class="pt-2">
                <v-col class="pb-0 py-0" cols="12" sm="6" md="4">
                  <label for="atm_id">ATM ID</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field v-model="using.atm_id" outlined></v-text-field>
                </v-col>
                <v-col class="pb-0 py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Alias ATM ID</label>
                  <v-text-field
                    v-model="using.alias_id"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="pb-0 py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Install Date</label>
                  <v-text-field
                    v-model="using.install_date"
                    type="date"
                    prepend-inner-icon="mdi-calendar"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0 pb-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Delivery Date</label>
                  <v-text-field
                    v-model="using.delivery_date"
                    label=""
                    type="date"
                    prepend-inner-icon="mdi-calendar"
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
                    prepend-inner-icon="mdi-calendar-end"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Category</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.category_name"
                    label=""
                    outlined
                  ></v-text-field>
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
                  <v-text-field
                    v-model="using.model_name"
                    label=""
                    outlined
                  ></v-text-field>
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
                  <v-text-field
                    v-model="using.status"
                    label=""
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col class="py-0" cols="12" sm="6" md="4">
                  <label for="alias_id">Type</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.type_name"
                    label=""
                    outlined
                  ></v-text-field>
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
                  <v-text-field
                    v-model="using.bank_name"
                    label=""
                    outlined
                  ></v-text-field>
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
                  <label for="alias_id">Site Name</label>
                  <v-icon small color="orange">mdi-star </v-icon>
                  <v-text-field
                    v-model="using.site_name"
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
                    prepend-inner-icon="mdi-map-marker-outline"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <h3 style="color: blue">NOTE: {{ date.status }}</h3>
              </v-row>
              <v-row class="d-flex justify-end pa-2 ">
                <v-btn color="red" style="color: white">
                  <router-link
                    :to="{ name: 'atmemployee' }"
                    class="white--text"
                    style="text-decoration: none"
                    >Back</router-link
                  >
                </v-btn>
                <v-btn color="blue" style="color: white" class="mx-2">
                  <router-link
                    :to="{ name: 'updatemachine' }"
                    class="white--text"
                    style="text-decoration: none"
                    >To Update</router-link
                  >
                </v-btn>
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
export default {
  data: () => ({
    using: [],
    date: [],
  }),
  created() {
    const id = this.$route.params.id;
    console.log(id);
    Using.show(id).then((Response) => {
      this.using = Response.data.data;
      console.log(Response.data.data);
    });
  },
  methods: {},
  mounted() {
    const id = this.$route.params.id;
    Using.getWarranty(id).then((Response) => {
      this.date = Response.data;
      console.log(Response.data);
    });
  },
};
</script>
<style scoped></style>
