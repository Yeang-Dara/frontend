<template>
    <v-main style="padding: 20px 20px 20px 20px; background-color: #f2f7ff">
      <v-row style="padding: 10px 10px 10px 10px; height: 90%">
        <v-card class="rounded-0" width="100%">
          <v-card
            class="d-flex align-center rounded-0"
            height="65"
            style="padding: 15px"
            outlined
          >
            <v-card-text style="font-size: 20px; text-align: start"
              >SPARE PART INFORMATION</v-card-text
            >
            <v-dialog v-model="dialog" max-width="700px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="#FF8C00" dark class="mb-2" v-bind="attrs" v-on="on"
                  >Add new spare part</v-btn
                >
              </template>
              <v-card>
                <v-card-title
                  style="
                    background-color: #35acd3;
                    text-align: center;
                    color: white;
                  "
                  >{{ formTitle }}</v-card-title
                >
                <v-card-text class="pt-2 pb-0">
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                        <label for="name">Spare Part Name</label>
                        <v-icon small color="orange">mdi-star</v-icon>
                        <v-text-field
                          v-model="editedItem.spareparts_name"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                        <label for="name">Quantity</label>
                        <v-icon small color="orange">mdi-star</v-icon>
                        <v-text-field
                          v-model="editedItem.quantity"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                        <label for="name">For Model</label>
                        <v-icon small color="orange">mdi-star</v-icon>
                        <v-select
                          :items="models"
                          v-model="editedItem.for_machine_model"
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                        <label for="name">Part Number</label>
                        <!-- <v-icon small color="orange">mdi-star</v-icon> -->
                        <v-text-field
                          v-model="editedItem.part_number"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" text @click="close">Cancel </v-btn>
                  <v-btn color="blue darken-1" text @click="save(user)"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
          <v-dialog v-model="deleteData" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="cancel">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="okDelete">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card-container>
            <v-card class="d-flex mb-6" flat style="height: 30px">
              <v-card class="pa-2 mr-auto" flat></v-card>
              <v-card class="pa-2" flat>
                <v-container
                  style="
                    padding: 0;
                    margin: 0;
                    margin-top: 10px;
                    margin-right: 10px;
                    width: 500px;
                  "
                  class="d-flex justify-start mb-6"
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
                </v-container>
              </v-card>
            </v-card>
            <v-card style="margin-top: 30px; padding: 20px; width: 100%" flat>
              <v-card>
                <v-data-table
                  class="elevation-1"
                  :items-per-page="itemsPerPage"
                  :headers="headers"
                  :items="spareparts"
                  :search="search"
                >
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
                          <v-icon small @click="editItem(item)" color="white"
                            >mdi-pencil</v-icon
                          >
                        </v-btn>
                      </template>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          small
                          color="error"
                          class="mr-1"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon small @click="deleteItem(item)" color="white"
                            >mdi-delete</v-icon
                          >
                        </v-btn>
                      </template>
                      <span>Delete</span>
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
  import Sparepart from "@/apis/Sparepart";
  import User from "../../apis/User";
  import Swal from "sweetalert2";
  export default {
    data: () => ({
      itemsPerPage: 10,
      dialog: false,
      deleteData: false,
      editedIndex: -1,
      search: "",
      models: ["DN 200V", "DN 100D", "DC365", "DC365lx","PC 280"],
      spareparts: [],
      headers: [
        { text: "Spare part Name", value: "spareparts_name", class: " white--text"},
        { text: "Part Number", value: "part_number", class: " white--text" },
        { text: "Total Quantity", value: "quantity", class: " white--text" },
        { text: "Quantity Used", value: "quantity_used", class: " white--text" },
        { text: "Quantity Remain", value: "quantity_used", class: " white--text"},
        { text: "For Model", value: "for_machine_model", class: " white--text" },
        { text: "Actions", value: "actions", class: " white--text" },
      ],
      user: {},
      editedItem: {
        spareparts_name: "",
        quantity: "",
        for_machine_model: "",
        quantity_used: "",
        user_id: "",
      },
      defaultItem: {
        no: 0,
        name: "",
      },
    }),
    computed: {
      formTitle() {
        return this.editedIndex === -1
          ? "Add new spare part"
          : "Edit spare pare information";
      },
    },
    watch: {
      dialog(val) {
        val || this.close();
      },
      deleteData(val) {
        val || this.cancel();
      },
    },
    created() {
      this.getSparepart();
    },
    methods: {
      close() {
        this.dialog = false;
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
      getSparepart() {
        Sparepart.list()
          .then((Response) => {
            this.spareparts = Response.data;
            console.log(this.spareparts);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      editItem(item) {
        this.editedIndex = 1;
        this.editedItem = Object.assign({}, item);
        this.dialog = true;
        console.log(item);
      },
      save(item) {
        if (this.editedIndex > -1) {
          console.log("edit id", this.editedItem.id);
          Sparepart.update(this.editedItem.id, this.editedItem)
            .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Updated Successfully",
                icon: "success",
              });
              this.close();
            })
            .catch((err) => {
              Swal.fire({
                title: "Updated Unsuccessful",
                icon: "warning",
              });
              console.dir(err);
            });
        } 
        else {
          let data = {};
          (this.editedItem.user_id = item.id), (data = this.editedItem);
          Sparepart.create(data)
            .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Add new Successfully",
                icon: "success",
              });
              this.close();
            })
            .catch((err) => {
              Swal.fire({
                title: "Add new Unsuccessful",
                icon: "warning",
              });
              console.dir(err);
            });
        }
        this.getSparepart();
      },
      cancel(){
        this.deleteData= false;
          this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      },
      okDelete(){
          console.log("id",this.editedItem.id);
          Sparepart.delete(this.editedItem.id)
           .then((res) => {
              console.log(res);
              Swal.fire({
                title: "Deleted Successfully",
                icon: "success",
              });
              this.cancel();
            })
            .catch((err) => {
              Swal.fire({
                title: "Deleted Unsuccessful",
                icon: "warning",
              });
              console.dir(err);
            });
          this.getSparepart();
      },
      deleteItem(item) {
        this.editedItem.id = item.id;	
        this.deleteData= true;
      },
    },
    mounted: function () {
      User.auth().then((response) => {
        this.user = response.data;
        console.log(response.data);
      });
    },
  };
  </script>
  
  <style scoped>
  ::v-deep .v-data-table-header {
    background-color: #35acd3;
  }
  ::v-deep .sub-table .v-data-table-header {
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
  </style>
  