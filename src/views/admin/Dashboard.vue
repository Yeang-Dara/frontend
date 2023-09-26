<template>
  <v-main style="padding: 30px 30px 30px 30px; background-color:	#F2F7FF;">
    <v-row class="mt-5 ml-0 text-h5 text-start" style="color: gray;">The Number of Terminal</v-row>
    <v-row class="mt-3">
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                 <v-img src="@/assets/atm1.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">Total
              <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;">{{ total.totals }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                  <v-img src="@/assets/atm2.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;"> Actives
              <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;">{{ total.active }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col v-col cols="6">
                <v-img src="@/assets/atm.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;" >Non-Actives
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;">{{ total.nonactive }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px" >
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/order.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">Orders
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.order }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-10 ml-0 text-h5 text-start" style="color: gray;">The Number of Terminal Type</v-row>
    <v-row class="mt-3">
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                 <v-img src="@/assets/atm3.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">ATM
              <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;">{{ total.atm }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                  <v-img src="@/assets/crm.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;"> CRM
              <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;">{{ total.crm }}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/dc365.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">DC365
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.dc365}}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-10 ml-0 text-h5 text-start" style="color: gray;">The Number of Terminal in</v-row>
    <v-row>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/logo.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">BTI
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.bti}}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/aba.png" style="width: 80px; height: 100px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">ABA
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.aba}}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
       <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/amk.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">AMK
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.amk}}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
        <v-col cols="12" md="3" sm="6">
        <v-card class="max-auto widget-card" max-width="400" style="background-color:white; height:150px">
          <v-card-text class="py-2">
            <v-row no-gutters align="center">
              <v-col cols="6">
                <v-img src="@/assets/wing.png" style="width: 80px; height: 80px"></v-img>
              </v-col>
              <v-col class="text-h5 text-start mt-6" cols="6" style="width: 140px; color: gray;">Wing
                <v-col class="text-start text-h2 px-0" style="color: gray; font-size:bold; font-weight:normal;"> {{ total.wing}}</v-col>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>
<script>
import Using from "../../apis/Using";
import Order from "../../apis/Order";
import BarChart from "@/components/BarChart.vue";
export default {
  components: {
    BarChart,
  },
  data: () => ({
    total: [],
    orders: [],
  }),
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      Order.list().then((Response) => {
        this.orders = Response.data;
        console.log(this.order);
      });
    },
  },
  mounted: function () {
    Using.getTotal().then((Response) => {
      this.total = Response.data;
      console.log(this.total);
    });
  },
};
</script>
<style scoped>
.widget-card {
  border-radius: 5%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.21);
  background-color: transparent;
}
::v-deep .v-data-table-header {
  background-color: #35acd3;
}
v-data-table >>> div > table {
  border-spacing: 0 0.5rem;
}
</style>
