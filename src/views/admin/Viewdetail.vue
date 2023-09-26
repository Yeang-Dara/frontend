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
                  <!-- <span style="text-color:red;">*</span> -->
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
              <v-row class="d-flex justify-end pa-2">
                <v-btn color="red" style="color: white">
                  <router-link
                    :to="{ name: 'atm_page' }"
                    class="white--text"
                    style="text-decoration: none"
                    >Back</router-link
                  >
                </v-btn>
                <v-btn color="blue" style="color: white" class="mx-2">
                  <router-link
                    :to="{ name: 'update_page' }"
                    class="white--text"
                    style="text-decoration: none"
                    >To Update</router-link
                  >
                </v-btn>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        <template>
          <div>
            <v-expansion-panels v-model="panel" :readonly="readonly" multiple >
              <v-expansion-panel>
                <v-expansion-panel-header style="font-size: 20px;">Replaced Mainpart Information</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="justify-end d-flex mb-2">
                     <v-btn color="#FF8C00" class="white--text" >Add Replace Mainpart</v-btn>
                  </div>
                  <v-data-table
                    class="elevation-1"
                    :items-per-page="itemsPerPage"
                    :headers="headers"
                    :items="spareparts"
                    :search="search"
                  >
                  <template v-slot:[`item.actions`]="{}">
                   <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        small
                        color="cyan"
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon small color="white"> mdi-pencil </v-icon>
                      </v-btn>
                    </template>
                    <span>Edit</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="error" small v-bind="attrs" v-on="on">
                        <v-icon small outlined>mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <span>Delete</span>
                  </v-tooltip>
                  </template>
                  </v-data-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header style="font-size: 20px;">Maintenace History</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="justify-end d-flex mb-2">
                     <v-btn color="#FF8C00" class="white--text">Add new Maintenace</v-btn>
                  </div>
                    <v-data-table
                    class="elevation-1"
                    :items-per-page="itemsPerPage"
                    :headers="headers1"
                    :items="spareparts"
                    :search="search"
                  >
                  </v-data-table>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </template>
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
    headers: [
      {
        text: "Spare part Name",
        value: "sparepart_name",
        class: " white--text",
      },
      {
        text: "Serail Number",
        value: "sparepart_quantity",
        class: " white--text",
      },
      {
        text: "Quantity",
        value: "take_to_replaced",
        class: " white--text",
      },
      {
        text: "Date",
        value: "take_to_replaced",
        class: " white--text",
      },
      {
        text: "Replace By",
        value: "take_to_replaced",
        class: " white--text",
      },
      {
        text: "Remark",
        value: "take_to_replaced",
        class: " white--text",
      },
      { text: "Actions", value: "actions", class: " white--text" },
    ],
    spareparts: [
      {
        sparepart_name: "Main Board",
        sparepart_quantity: 5,
        take_to_replaced: 1,
      },
      {
        sparepart_name: "Android Board",
        sparepart_quantity: 3,
        take_to_replaced: 2,
      },
      {
        sparepart_name: "CIS Cable",
        sparepart_quantity: 10,
        take_to_replaced: 1,
      },
      {
        sparepart_name: "Motor",
        sparepart_quantity: 5,
        take_to_replaced: 1,
      },
      {
        sparepart_name: "Screen",
        sparepart_quantity: 5,
        take_to_replaced: 1,
      },
    ],
    headers1:[
        {
        text: "Date",
        value: "take_to_replaced",
        class: " white--text",
      },
      {
        text: "Replace By",
        value: "take_to_replaced",
        class: " white--text",
      },
      { text: "Actions", value: "actions", class: " white--text" },
    ],
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
<style scoped>
::v-deep .v-data-table-header {
  background-color: #35acd3;
}
</style>
