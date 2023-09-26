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
          <!-- <v-alert :value="success" type="success"
            >Successfully!
          </v-alert>
          <v-alert :value="error" type="error">Unsuccessfully! </v-alert>
          <v-alert :value="warning" type="warning"
            >Can not delete order.
          </v-alert>
          <v-alert :value="info" type="info">Successfully. </v-alert> -->
          <!-- <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#FF8C00" dark class="mb-2" v-bind="attrs" v-on="on"
                >Add New Order
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
                <v-btn color="blue darken-1" text @click="save(user)"
                  >Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
          <!-- <v-dialog v-model="dialogDelete" max-width="550px">
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
          </v-dialog> -->
          <!-- <v-dialog v-model="dialogAddStock" max-width="700px">
            <v-card>
              <v-card-title style="background-color: #35acd3; text-align: center; color: white;"> {{ formTitle1 }}</v-card-title>
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
                      <v-text-field
                        v-model="editStock.forSellorRest"
                        label="forSellorRent"
                        outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editStock.status"
                        label="Status"
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red" text @click="closeAddStock">Cancel </v-btn>
                <v-btn color="blue darken-1" text @click="saveToStock(stocks)">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
          <!-- <v-dialog v-model="deleteStockItem" max-width="550px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="cancelDeleteStockItem"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="comfirmDeleteStockItem">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog> -->
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
                  <v-chip color="#00BFFF" text-color="white">
                    {{ item.status }}
                  </v-chip>
                </template>
                <template  v-slot:[`item.username`]="{ item }">
                  {{item.users.username }}
                </template>
                <template v-slot:expanded-item="{ headers,item}">
                  <td :colspan="headers.length" class="px-0">
                    <v-data-table
                      :headers="headers1"
                      :items="item.stocks"
                      item-key="no"
                      hide-default-footer
                      class="sub-table elevation-0"
                    >
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
import moment from "moment";

export default {
  data: () => ({
    search: "",
    itemsPerPage: 10,
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
    ],
    headers1: [
      { text: "Serail Number",align: "start", value: "serail_number", class: " white--text"},
      { text: "forSellorRest", value: "forSellorRest", class: " white--text" },
      { text: "Status", value: "status", class: " white--text" },
    ],
    stocks:[],
    orders: [],
  }),

  computed: {
  },

  watch: {
  },
  created() {
    this.getOrder();
  },

  methods: {
    formatDate(value) {
      return moment(value).format("DD-MM-YYYY");
    },
    getOrder() {
      Order.list()
        .then((Response) => {
          this.orders = Response.data.data;
          console.log("hi",Response.data.data);
        })
        .catch((error) => {
          if (error.response) {
            this.errors = error.response.data.errors;
          }
          console.log(error.Response.data.errors);
        });
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
