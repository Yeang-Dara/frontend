<template>
  <main style="padding: 20px 20px 20px 20px; background-color: #F2F7FF">
    <v-row style="padding: 10px; height: 90%">
      <v-card class="rounded-0" width="100%">
        <v-card
          class="d-flex rounded-0"
          height="65"
          style="padding: 15px"
          outlined
        >
          <v-card-text style="font-size: 20px"
            >INFORMATION MACHINE NON-ACTIVE</v-card-text
          >
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
                :items-per-page="itemsPerPage"
                :headers="headers"
                :items="reports"
                :search="search"
              >
                <template v-slot:[`item.created_at`]="{ item }">
                  {{ formatDate(item.created_at) }}
                </template>
                <template v-slot:[`item.arrival_date`]="{ item }">
                  {{ formatDate(item.take_over_date) }}
                </template>
                <template v-slot:[`item.status`]="{ item }">
                  <v-chip color="blue" text-color="white">
                    {{ item.status }}
                  </v-chip>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                  <v-btn small color="cyan" class="mr-1">
                    <router-link
                      :to="'./viewdetail/' + item.id"
                      class="white--text"
                      style="text-decoration: none"
                    >
                      <v-icon small color="white">mdi-eye-outline </v-icon>
                    </router-link>
                  </v-btn>
                  <router-link
                    :to="'./update/' + item.id"
                    class="white--text"
                    style="text-decoration: none"
                  >
                    <v-btn color="error" small>
                      <v-icon small outlined>mdi-pencil </v-icon>
                    </v-btn>
                  </router-link>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-card-container>
      </v-card>
    </v-row>
  </main>
</template>
<script>
import Using from "../../apis/Using";
export default {
  data: () => ({
    search: "",
    itemsPerPage: 10,
    headers: [
      { text: "ATM ID", value: "atm_id", class: " white--text" },
      { text: "Bank Name", value: "bank_name", class: " white--text" },
      { text: "Type", value: "type_name", class: " white--text" },
      { text: "Model", value: "model_name", class: " white--text" },
      { text: "Serial Number", value: "serial_number", class: " white--text" },
      { text: "Warranty", value: "warranty_days", class: " white--text" },
      { text: "Take Over Date", value: "take_over_date", class: " white--text", },
      { text: "Location", value: "location", class: " white--text" },
      { text: "Region",value: "region_name",class: " white--text",},
      { text: "Status",value: "status",class: " white--text",sortable: false},
      { text: "Actions",value: "actions",sortable: false,class: " white--text",},
    ],
    reports: [],
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
  created() {
    this.report();
  },
  methods: {
    report() {
      Using.getReport().then((response) => {
        this.reports = response.data;
        console.log(this.reports);
      });
    },
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
