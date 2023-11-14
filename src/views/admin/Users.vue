<template>
  <v-main
    style="padding: 20px 20px 20px 20px; background-color:#F2F7FF"
    class=""
  >
    <v-row style="padding: 10px; height: 90%">
      <v-card class="rounded-0" width="100%">
        <v-card
          class="d-flex align-center rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px">USERS INFORMATION</v-card-text>
          <v-alert :value="success" type="success">Save Successfully</v-alert>
          <v-alert :value="info" type="error">Invalid input! </v-alert>
          <v-alert :value="error" type="error">Delete Successfully! </v-alert>
          <v-btn type="submit" color="#FF8C00" style="margin-left: 6px">
            <router-link
              :to="{ name: 'adduser_page' }"
              class="white--text"
              style="text-decoration: none"
              >Add New User</router-link
            >
          </v-btn>
          <v-dialog v-model="dialog" max-width="700px">
            <v-card>
              <v-card-title
                style="background-color: #35acd3; text-align: center"
              >
                <div class="white--text" style="text-align: center">
                  {{ formTitle }}
                </div>
              </v-card-title>
              <v-card-text class="pt-2 pb-0">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.last_name"
                        label="Last name"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.first_name"
                        label="First name"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-text-field
                        v-model="editedItem.username"
                        label="Username"
                        outlined
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                      <v-select
                        :items="rules"
                        v-model="editedItem.rules"
                        label="Roles"
                        outlined
                        required
                      ></v-select>
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
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this user?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
        <v-card-container>
          <v-card class="d-flex mb-6" flat style="height: 30px">
            <v-card class="pa-2 mr-auto" flat>
              <v-container
                style="padding: 0; margin: 0; margin-top: 10px; width: 230px"
                class="d-flex justify-start mb-6"
                flat
                tile
              >
              </v-container>
            </v-card>
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
                :items-per-page="itemsPerPage"
                :headers="headers"
                :items="users"
                :search="search"
              >
                <template v-slot:[`item.created_at`]="{ item }">
                  {{ formatDate(item.created_at) }}
                </template>
                <template v-slot:[`item.updated_at`]="{ item }">
                  {{ formatDate(item.updated_at) }}
                </template>
                <template v-slot:[`item.action`]>
                  <v-btn
                    class="ma-2"
                    :loading="loading2"
                    :disabled="loading2"
                    color="success"
                    @click="loader = 'loading2'"
                  >
                    Pend
                    <template v-slot:loader>
                      <span>Pending</span>
                    </template>
                  </v-btn>
                </template>
                <template v-slot:[`item.image`]="{ item }">
                  <img :src="item" />
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn small color="cyan" class="mr-1">
                    <v-icon small @click="editItem(item)" color="white">
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                  <v-btn color="error" small>
                    <v-icon small @click="deleteItem(item)" outlined>
                      mdi-delete
                    </v-icon>
                  </v-btn>
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
import User from "../../apis/User";
import moment from "moment";
import Swal from "sweetalert2";
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
    info: false,
    rules: ["admin", "employee"],
    headers: [
      { text: "Last Name", align: "start", sortable: false, value: "last_name",class: " white--text",},
      { text: "First Name", value: "first_name", class: " white--text" },
      { text: "Username", value: "username", class: " white--text" },
      { text: "Rules", value: "rules", class: " white--text" },
      { text: "Email", value: "email", class: " white--text" },
      { text: 'Created At', value: 'created_at',class: " white--text"  },
      { text: 'Updated At', value: 'updated_at',class: " white--text"  },
      { text: "Actions",value: "actions",sortable: false,class: " white--text",},
    ],

    users: [],
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
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Complete Information to add employeee"
        : "Update User Information";
    },
  },
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
  },
  created() {
    this.getUser();
  },
  methods: {
    hide_success: function (event) {
      console.log("Hide");
      // `event` is the native DOM event
      window.setInterval(() => {
        this.success = false;
        this.error = false;
        this.info = false;
      }, 5000);
    },
    formatDate(value) {
      return moment(value).format("DD-MM-YYYY")
  },
    getUser() {
      User.list()
        .then((Response) => {
          this.users = Response.data;
          console.log(Response.data);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },

    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },

    showItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogShow = true;
    },

    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      console.log(item);
    },

    deleteItemConfirm() {
      const index = this.editedIndex;
      console.log("id", this.editedItem.id);
      User.delete(this.editedItem.id)
        .then((res) => {
          console.log(res.data);
          this.users.data.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response);
        });
      this.users.splice(this.editedIndex, 1);
      this.getUser();
      // this.error = true;
       Swal.fire({
              title: "Deleted user Success",
              icon: "success",
            })
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeShow() {
      this.dialogShow = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        const index = this.editedIndex;
        console.log("id", this.editedItem.id);
        User.update(this.editedItem.id, this.editedItem)
          .then((response) => {
            Object.assign(this.users[index], response.data);
            console.log("data", response.data);
            // this.success = true;
            Swal.fire({
              title: "Updated Success",
              icon: "success",
            })
            this.close();
          })
          .catch((err) => {
            console.log(err.response);
            // this.info = true;
             Swal.fire({
              title: "Updated Unsuccess",
              icon: "warning",
            })
          });
      }
      this.getUser();
      // this.close();
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
</style>
