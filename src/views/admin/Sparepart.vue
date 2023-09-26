<template>
  <v-main
    style="padding: 20px 20px 20px 20px; background-color: #f2f7ff">
    <v-row style="padding: 10px 10px 10px 10px; height: 90%">
      <v-card class="rounded-0" width="100%">
        <v-card
          class="d-flex align-center rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px; text-align: start">SPARE PART INFORMATION</v-card-text>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{on, attrs}">
                <v-btn color="#FF8C00" dark class="mb-2" v-bind="attrs" v-on="on">Add new spare part</v-btn>
            </template>
            <v-card>
                <v-card-title style="background-color: #35acd3; text-align: center; color:white;">{{formTitle}}</v-card-title>
                <v-card-text class="pt-2 pb-0">
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                                <label for="name">Spare part Name</label>
                                <v-icon small color="orange">mdi-star</v-icon>
                                <v-text-field
                                    v-model="editItem.sparepart_name"
                                    outlined
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                                <label for="name">Quantity</label>
                                <v-icon small color="orange">mdi-star</v-icon>
                                <v-text-field
                                    v-model="editItem.sparepart_quantity"
                                    outlined
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                                <label for="name">Take to Replaced</label>
                                <v-icon small color="orange">mdi-star</v-icon>
                                <v-text-field
                                    v-model="editItem.take_to_replaced"
                                    outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="red" text @click="close">Cancel </v-btn>
                  <v-btn color="blue darken-1" text @click="save(user)">Save</v-btn>
                </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
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
export default {
  data: () => ({
    itemsPerPage: 10,
    dialog:false,
    editedIndex: -1,
    search:"",
    headers: [
      {
        text: "Spare part Name",
        value: "sparepart_name",
        class: " white--text",
      },
      { text: "Quantity", value: "sparepart_quantity", class: " white--text" },
      {
        text: "Take to Replaced",
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
    editItem:{
      sparepart_name: "",
      sparepart_quantity:"",
      take_to_replaced: "",
    },
    defaultItem: {
      no: 0,
      name: "",
    },
  }),
  computed:{
    formTitle() {
      return this.editedIndex === -1
        ? "Add new spare part"
        : "Edit spare pare information";
    },
  },
  watch:{
    dialog(val) {
      val || this.close();
    },
  },
  methods: {
    close(){
      this.dialog=false;
      this.$nextTick(()=>{
        this.editItem = Object.assign({}, this.defaultItem);
        this.editedIndex= -1;
      })
    },
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
