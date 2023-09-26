<template>
  <v-main style="padding: 20px 20px 20px 20px; background-color: #f2f7ff">
    <div>
      <v-row class="d-flex mr-4 mt-4 justify-end" >
        <v-dialog v-model="importfile" max-width="550px">
          <v-card>
            <v-card-title>
              Import file
            </v-card-title>
            <v-file-input  
              outlined 
              dense 
              v-model="file"
              label="Choose file" 
              class="mr-2"
              >
            </v-file-input>
            <v-form class="mr-2 d-flex justify-end pb-2">
              <v-btn class="mr-2 white--text" color="red darken-1"  @click="closeImport">Cancel</v-btn>
              <v-btn color="blue darken-1" class="white--text" >Submit</v-btn>
            </v-form>
          </v-card>
        </v-dialog>
        <v-btn class="mr-2 white--text" color="#FF8C00" @click="Import">Import data</v-btn>
        <v-btn color="blue" class="white--text" @click="Export">Export Data</v-btn>
      </v-row>
      <v-row class="py-0 mt-2">
        <v-col cols="3" sm="3" md="2">
          <v-select
            :items="itemstypes"
            v-model="filter.type_name"
            @change="getUsing(filter)"
            label="Terminal Type"
            clearable
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="3" sm="3" md="2">
          <v-select
            :items="banks"
            v-model="filter.bank_name"
            @change="getUsing(filter)"
            label="Bank Name"
            clearable
            outlined
            dense
          ></v-select>
        </v-col>
        <v-col cols="3" sm="3" md="2">
          <v-select
            :items="models"
            v-model="filter.model_name"
            @change="getUsing(filter)"
            label="Terminal Model"
            clearable
            outlined
            dense
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <v-row style="padding: 0px 10px 10px 10px; height: 10%">
      <v-card width="100%">
        <v-card-container>
          <v-card
            class="d-flex rounded-0"
            height="65"
            style="padding: 15px"
            outlined
          >
            <v-card-text
              style="font-size: 20px; color: blue; text-align: center"
              >MACHINE ARE USING INFORMATION</v-card-text
            >
          </v-card>
          <v-card class="d-flex mb-6 justify-end" flat style="height: 30px">
            <v-card class="pa-2" flat>
              <v-container
                style="
                  padding: 0;
                  margin-top: 10px;
                  margin-right: 10px;
                  width: 600px;
                "
                class="d-flex mb-6"
                flat
                tile
              >
                <v-subheader style="font-size: 15px">Search</v-subheader>
                <v-text-field
                  v-model="search"
                  outlined
                  dense
                  append-icon="mdi-magnify"
                ></v-text-field>
                <v-btn color="#FF8C00" style="margin-left: 6px">
                  <router-link
                    :to="{ name: 'addnewatm_page' }"
                    class="white--text"
                    style="text-decoration: none"
                    >Add New</router-link
                  >
                </v-btn>
              </v-container>
            </v-card>
          </v-card>
          <v-card style="margin-top: 30px; padding: 20px; width: 100%" flat>
            <v-card>
              <v-data-table
                :items-per-page="itemsPerPage"
                :headers="headers"
                :items="usings"
                :search="search"
                @event="getUsing"
              >
                <template v-slot:[`item.action`]>
                  <v-btn
                    class="ma-2"
                    :loading="loading2"
                    :disabled="loading2"
                    color="success"
                    @click="loader = 'loading2'"
                    >Pend
                    <template v-slot:loader>
                      <span>Pending</span>
                    </template>
                  </v-btn>
                </template>
                <template v-slot:[`item.image`]="{ item }">
                  <img :src="item" />
                </template>
                 <template v-slot:[`item.install_date`]="{ item }">
                  {{ formatDate(item.install_date) }}
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        small
                        color="cyan"
                        class="mr-1"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <router-link
                          :to="'./viewdetailatm/' + item.id"
                          class="white--text"
                          style="text-decoration: none"
                        >
                          <v-icon small color="white">mdi-eye-outline </v-icon>
                        </router-link>
                      </v-btn>
                    </template>
                    <span>View detail</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="error" small v-bind="attrs" v-on="on">
                        <router-link
                          :to="'./updatemachine/' + item.id"
                          class="white--text"
                          style="text-decoration: none"
                        >
                          <v-icon small outlined>mdi-pencil </v-icon>
                        </router-link>
                      </v-btn>
                    </template>
                    <span>Edit</span>
                  </v-tooltip>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-card-container>
      </v-card>
    </v-row>
  </v-main>
</template>
<script>
import Using from "../../apis/Using";
import { excelParser } from "@/components/excel-parser";
import moment from "moment";

export default {
  name: "dashboard",
  data: () => ({
    search: "",
    itemsPerPage: 10,
    dialog: false,
    dialogDelete: false,
    dialogShow: false,
    success: false,
    error: false,
    importfile: false,
    banks:["ABA Bank","AMK MFI","Wing","Philip Bank" ],
    itemstypes: ["ATM", "CRM", "DC365"],
    models: ["DN 200V", "DN 100D", "DC365", "DC365lx","PC 280"],
    headers: [
      { text: "ATM ID", value: "atm_id", class: " white--text" },
      { text: "Serail Number", value: "serial_number", class: " white--text" },
      { text: "Bank Name", value: "bank_name", class: " white--text" },
      { text: "Type", value: "type_name", class: " white--text" },
      { text: "Model", value: "model_name", class: " white--text" },
      { text: "Install Date", value: "install_date", class: " white--text" },
        { text: "Status", value: "status", class: " white--text" },
      { text: "Addess", value: "address", class: " white--text", width: '40%'  },
      { text: "Actions",value: "actions",sortable: false,class: " white--text",},
    ],
    filter: {
      type_name: "",
      bank_name: "",
      model_name: "",
    },
    file:null,
    exports:[],
    usings: [],
    editedIndex: -1,
    editedItem: {
      no: 0,
      name: "",
      description: "",
      image: "",
    },
    defaultItem: {
      no: 0,
      name: "",
      description: "",
      image: "",
    },
  }),

  computed: {},
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogShow(val) {
      val || this.closeShow();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    importfile(val) {
      val || this.closeImport();
    },
  },

  created() {
    this.getUsing();
  },

  methods: {
    hide_success: function (event) {
      console.log("Hide");
      // `event` is the native DOM event
      window.setInterval(() => {
        this.success = false;
        this.error = false;
      }, 5000);
    },
      formatDate(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    getUsing() {
      Using.getdata(this.filter)
        .then((Response) => {
          this.usings = Response.data;
          console.log(Response.data);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
    Export(){
      Using.getExport()
       .then((Response) => {
          this.exports = Response.data;
          console.log(this.exports);
          excelParser().exportDataFromJSON(this.exports, null, null);
       })
        .catch((error) => {
          if (error.response ) {
            this.errors = error.response.data.errors;
          }
        });
    },
    Import(){
      let data = this.file
      this.importfile=true;
      console.log(data);
    },
    closeImport(){
      this.importfile=false;
    },
  },
  mounted: function () {
    this.getUsing(this.params);
    if (alert) {
      this.hide_success();
    }
  },
};
</script>
<style scoped>
::v-deep .v-data-table-header {
  background-color: #35acd3;
}
v-data-table >>> div > table {
  border-spacing: 0 0.5rem;
}
::v-deep .v-alert {
  width: 300px;
  margin-top: 20px;
  position: fixed;
  right: 0%;
  z-index: 1;
  top: 50px;
}
.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: blue !important;
}
</style>
