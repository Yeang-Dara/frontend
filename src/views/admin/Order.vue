<template>
  <v-main style="padding: 20px 20px 20px 20px; background-color: #f2f7ff">
    <v-row style="padding: 10px; height: 90%">
      <v-card class="rounded-0" width="100%">
        <v-card
          class="d-flex rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px">INCOMING MACHINE INFORMATION</v-card-text>
          <v-alert :value="success" type="success">Successfully! </v-alert>
          <v-alert :value="error" type="error">Unsuccessfully! </v-alert>
          <v-alert :value="warning" type="warning">Can not delete order.
          </v-alert>
          <v-alert :value="info" type="info">Successfully. </v-alert>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#FF8C00" dark class="mb-2" v-bind="attrs" v-on="on"
                >Add New Incoming
              </v-btn>
            </template>
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
                    <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                      <label for="Type">Type</label>
                      <v-icon small color="orange">mdi-star</v-icon>
                      <v-select
                        :items="itemstypes"
                        v-model="editedItem.atm_type"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="my-0 pb-0">
                      <label for="model">Model</label>
                      <v-icon small color="orange">mdi-star</v-icon>
                      <v-select
                        :items="models"
                        v-model="editedItem.atm_model"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="amount">Quantity</label>
                      <v-icon small color="orange">mdi-star</v-icon>
                      <v-text-field
                        v-model="editedItem.amount"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="category">Category</label>
                      <v-icon small color="orange">mdi-star</v-icon>
                      <v-select
                        :items="itemscategories"
                        v-model="editedItem.category"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="order for"> Order for</label>
                      <v-icon small color="orange">mdi-star</v-icon>
                      <v-text-field
                        v-model="editedItem.order_for"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="Arrival Time">Arrival Time</label>
                      <v-text-field
                        v-model="editedItem.arrival_date"
                        type="date"
                        placeholder="YY-MM-DD"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="Warehouse">Warehouse</label>
                      <v-text-field
                        v-model="editedItem.warehouse"
                        outlined
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="6" class="py-0">
                      <label for="Status">Status</label>
                      <v-select
                        :items="statuss"
                        v-model="editedItem.status"
                        outlined
                      ></v-select>
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
          <v-dialog v-model="dialogDelete" max-width="550px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this order?</v-card-title
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
          <v-dialog v-model="dialogAddStock" max-width="700px">
            <v-card>
              <v-card-title
                style="
                  background-color: #35acd3;
                  text-align: center;
                  color: white;
                "
              >
                {{ formTitle1 }}</v-card-title
              >
              <v-card-text class="pt-2 pb-0">
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editStock.serail_number"
                        label="Serail number"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        :items="sellOrrental"
                        v-model="editStock.forSellorRest"
                        label="forSellorRental"
                        outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-select
                        :items="status1"
                        v-model="editStock.status"
                        label="Status"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="closeAddStock">Cancel </v-btn>
                <v-btn color="blue darken-1" text @click="saveToStock(stocks)"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="deleteStockItem" max-width="550px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="cancelDeleteStockItem"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue darken-1"
                  text
                  @click="comfirmDeleteStockItem"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
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
                item-key="id"
                :items-per-page="itemsPerPage"
                class="elevation-1"
                show-expand
                single-expand
                :headers="headers"
                :items="orders"
                :search="search"
              >
                <template v-slot:[`item.created_at`]="{ item }">
                  {{ formatDate(item.created_at) }}
                </template>
                <template v-slot:[`item.arrival_date`]="{ item }">
                  {{ formatDate(item.arrival_date) }}
                </template>
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
                <template v-slot:[`item.status`]="{ item }">
                  <v-chip color="#87CEEB" text-color="white">
                    {{ item.status }}
                  </v-chip>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn  
                        small
                        color="cyan"
                        class="ml-1"
                        v-bind="attrs"
                        v-on="on"
                        >
                           <v-icon small @click="editItem(item)" color="white">mdi-pencil</v-icon> 
                      </v-btn>
                    </template>
                      <span>Edit</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn  
                        small
                        color="error"
                        class="ml-1"
                        v-bind="attrs"
                        v-on="on"
                        >
                          <v-icon small @click="deleteItem(item)">mdi-delete </v-icon>
                      </v-btn>
                    </template>
                      <span>Delete</span>
                  </v-tooltip>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        small
                        color="blue"
                        class="ml-1"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon small @click="AddItemStock(item)" color="white"
                          >mdi-plus
                        </v-icon>
                      </v-btn>
                    </template>
                    <span>Add item</span>
                  </v-tooltip>
                
                </template>
                <template v-slot:[`item.username`]="{ item }">
                  {{ item.users.username }}
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length" class="px-0">
                    <v-data-table
                      :headers="headers1"
                      :items="item.stocks"
                      item-key="no"
                      hide-default-footer
                      class="sub-table elevation-0"
                    >
                      <template v-slot:[`item.action`]="{ item }">
                        <v-icon small @click="editItemStock(item)" color="cyan"
                          >mdi-pencil
                        </v-icon>
                        <v-icon
                          class="ml-2"
                          color="red"
                          small
                          @click="deleteItemStock(item)"
                          >mdi-delete
                        </v-icon>
                      </template>
                    </v-data-table>
                  </td>
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
import Order from "../../apis/Order";
import User from "../../apis/User";
import Stock from "../../apis/Stock";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  data: () => ({
    search: "",
    itemsPerPage: 10,
    dialog: false,
    dialogDelete: false,
    dialogAddStock: false,
    success: false,
    error: false,
    warning: false,
    info: false,
    deleteStockItem: false,
    sellOrrental:["Sell", "Rental"],
    status1: ["In stock", "On site"],
    itemstypes: ["ATM", "CRM", "DC365"],
    itemscategories: ["Gold", "Bronze", "Platinum", "Silver"],
    models: ["DN 200V", "DN 100D", "DC365", "DC365lx","PC 280"],
    statuss: ["Ordering", "Good Received"],
    headers: [
      { text: "Order ID", value: "id", class: " white--text", align: "start" },
      { text: "Order By", value: "username", class: " white--text" },
      { text: "Order for", value: "order_for", class: " white--text" },
      { text: "Type", value: "atm_type", class: " white--text" },
      { text: "Model", value: "atm_model", class: " white--text" },
      { text: "Category", value: "category", class: " white--text" },
      { text: "Quantity", value: "amount", class: " white--text" },
      { text: "Order Date", value: "created_at", class: " white--text" },
      { text: "Arrival Time", value: "arrival_date", class: " white--text" },
      { text: "Warehouse", value: "warehouse", class: " white--text" },
      { text: "Status", value: "status", class: " white--text" },
      {
        text: "Actions",
        value: "actions",
        sortable: false,
        class: " white--text",
      },
    ],
    headers1: [
      {
        text: "Serail Number",
        align: "start",
        value: "serail_number",
        class: " white--text",
      },
      { text: "forSellorRest", value: "forSellorRest", class: " white--text" },
      { text: "Status", value: "status", class: " white--text" },
      {
        text: "Actions",
        value: "action",
        sortable: false,
        class: " white--text",
      },
    ],
    stocks: [],
    editStock: {
      order_id: "",
      serail_number: "",
      status: "",
      forSellorRest: "",
    },
    defaultItem1: {
      order_id: "",
      serail_number: "",
      status: "",
      forSellorRest: "",
    },

    orders: [],
    user: {},
    editedIndex: -1,
    editedIndex1: -1,
    editedItem: {
      atm_type: "",
      atm_model: "",
      amount: "",
      category: "",
      user_id: "",
      order_for: "",
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
        ? "Add new incoming"
        : "Edit incoming information";
    },
    formTitle1() {
      return this.editedIndex1 === -1
        ? "Add machine to stock"
        : "Edit machine in stock";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },

    dialogDelete(val) {
      val || this.closeDelete();
    },
    dialogAddStock(val) {
      val || this.closeAddStock();
    },
    deleteStockItem(val) {
      val || this.cancelDeleteStockItem();
    },
  },
  created() {
    this.getOrder();
  },

  methods: {
    hide_success: function (event) {
      console.log("Hide");
      // `event` is the native DOM event
      window.setInterval(() => {
        this.success = false;
        this.error = false;
        this.info = false;
        this.warning = false;
      }, 5000);
    },
    formatDate(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    getOrder() {
      Order.list()
        .then((Response) => {
          this.orders = Response.data.data;
          console.log("hi", Response.data.data);
        })
        .catch((error) => {
          if (error.response) {
            this.errors = error.response.data.errors;
          }
          console.log(error.Response.data.errors);
        });
    },
    editItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },
    deleteItem(item) {
      this.editedIndex = this.orders.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const index = this.editedIndex;
      Order.deleteOrder(this.editedItem.id)
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            // this.info = true;
              Swal.fire({
              title:"Deleted successfully",
              icon: "warning",
            });
            this.orders.data.splice(index, 1);
          } else if (res.data.status == 300) {
            // this.warning = true;
              Swal.fire({
              title:"Deteted Unsuccess",
              icon: "warning",
            });
          }
        })
        .catch((err) => {
          console.log(err.response);
          // this.warning = true;
          this.close();
        });
      this.getOrder();
      this.closeDelete();
    },

    close() {
      this.dialog = false;
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

    save(item) {
      console.log("data", item.id);
      if (this.editedIndex > -1) {
        const index = this.editedIndex;
        console.log("id", this.editedItem.id);
        Order.update(this.editedItem.id, this.editedItem)
          .then((response) => {
            // this.info = true;
            Swal.fire({
              title:"Updated Success",
              icon: "success",
            });
            Object.assign(this.orders[index], response.data);
            console.log("data", response.data);
            this.close();
          })
          .catch((error) => {
            // this.error = true;
            Swal.fire({
              title:"Updated Unsuccess",
              icon: "warning",
            });
            console.log(error.response);
          });
      } else {
        let data = {};
        (this.editedItem.user_id = item.id), (data = this.editedItem);
        Order.create(data)
          .then((res) => {
            console.log(res);
            // this.success = true;
            Swal.fire({
              title: "Add new comming Successfully",
              icon: "success",
            })
            this.close();
          })
          .catch((err) => {
            // this.error = true;
              Swal.fire({
              title:"Add new comming Unsuccessful",
              icon: "warning",
            });
            console.dir(err);
          });
      }
      this.getOrder();
      this.close();
    },
    ///for function related to add delete and update data to stock
    AddItemStock(item) {
      this.stocks = item;
      this.editStock.order_id = item.id;
      this.dialogAddStock = true;

      console.log("order_id", this.editStock.order_id);
    },
    saveToStock(item) {
      if (this.editedIndex1 > -1) {
        const index = this.editedIndex1;
        console.log("id", this.editStock.id);
        Stock.update(this.editStock.id, this.editStock)
          .then((response) => {
            this.success = true;
            console.log("data", response.data.data);
            this.closeAddStock();
          })
          .catch((error) => {
            this.error = true;
            console.log(error.response.data.data);
          });
      } else {
        let data = {};
        (this.editStock.order_id = item.id), (data = this.editStock);
        Stock.create(data)
          .then((res) => {
            console.log(res);
            this.success = true;
            this.closeAddStock();
          })
          .catch((err) => {
            this.error = true;
            console.dir(err);
          });
      }
      this.getOrder();
    },
    closeAddStock() {
      this.dialogAddStock = false;
      this.$nextTick(() => {
        this.editStock = Object.assign({}, this.defaultItem1);
        this.editedIndex1 = -1;
      });
    },
    editItemStock(item) {
      this.editedIndex1 = 1;
      this.editStock = Object.assign({}, item);
      this.dialogAddStock = true;
    },
    deleteItemStock(item) {
      this.editStock.id = item.id;
      console.log(this.editStock.id);
      this.deleteStockItem = true;
    },
    cancelDeleteStockItem(item) {
      this.deleteStockItem = false;
      this.$nextTick(() => {
        this.editStock = Object.assign({}, this.defaultItem1);
        this.editedIndex1 = -1;
      });
    },
    comfirmDeleteStockItem() {

      Stock.delete(this.editStock.id)
        .then((res) => {
          this.success = true;
          this.deleteStockItem = false;
        })
        .catch((err) => {
          this.error = true;
          console.log(err.response.data.data);
        });
      this.getOrder();
    },
  },
  mounted: function () {
    if (alert) {
      this.hide_success();
    }
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
