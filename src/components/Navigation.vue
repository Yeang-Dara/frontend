<template>
  <v-app>
    <v-app-bar app color="#1E90FF" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <div>INVENTORY MANAGEMENT SYSTEM</div>
      </div>
      <v-spacer></v-spacer>
      <v-menu
        offset-y
        origin="center center"
        :nudge-bottom="10"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <span>{{ user.username }}</span>
          <v-btn icon lagre flate v-bind="attrs" v-on="on" :ripple="false">
            <v-avatar size="30px" color="indigo">
              <v-icon> mdi-account-circle </v-icon>
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-icon>mdi-account</v-icon>
            <router-link
              :to="{ name: 'profile_page' }"
              class="blue--text pr-4 ml-2"
              style="text-decoration: none"
            >
              Profile</router-link
            >
          </v-list-item>
          <v-list-item>
            <v-icon>mdi-logout</v-icon>
            <span
              @click="logout"
              class="blue--text pr-4 ml-2"
              style="text-decoration: none"
              >Log Out</span
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet
        class="text-center d-flex flex-column align-center justify-center"
        height="150"
      >
        <img :src="images.sample" width="100%" height="100%" />
      </v-sheet>
      <v-list
        v-for="navigator in navigation"
        :key="navigator.title"
        class="list"
      >
        <div v-if="navigator.group">
          <v-list-group
            v-for="item in navigator.items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :to="child.link"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ child.icons }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
        <div v-else>
          <v-list-item
            v-for="item in navigator.items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icons }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
import User from "../apis/User";
export default {
  name: "navigation",
  data: () => ({
    isLoggedIn: false,
    drawer: null,
    user: {},
    images: {
      sample: require("../assets/logo.png"),
    },
    navigation: [
      {
        group: false,
        title: "Dashboard",
        items: [
          {
            title: "Dashboard",
            link: "/main_page/dashboard",
            icons: "mdi-view-dashboard",
          },
        ],
      },
      {
        group: true,
        title: "User Management",
        items: [
          {
            title: "Users ",
            action: "mdi-account-group",
            items: [
              {
                title: "List Users",
                link: "/main_page/users",
                icons: "mdi-account-multiple",
              },
              {
                title: "Add User  ",
                link: "/main_page/adduser",
                icons: "mdi-account-plus",
              },
            ],
          },
        ],
      },
      {
        group: false,
        title: "Order",
        items: [
          {
            title: "Incoming Machine ",
            link: "/main_page/order",
            icons: "mdi-text-box-check",
          },
        ],
      },
      {
        group: true,
        title: "ATM",
        items: [
          {
            title: "Machines",
            action: "mdi-warehouse",
            items: [
              {
                title: "List Machine",
                link: "/main_page/ATM",
                icons: "mdi-home-group",
              },
              {
                title: "Add Machine ",
                link: "/main_page/addnewatm",
                icons: "mdi-home-plus",
              },
            ],
          },
        ],
      },
      {
        group: false,
        title: "Report",
        items: [
          {
            title: "Report ",
            link: "/main_page/report",
            icons: "mdi-calendar-export",
          },
        ],
      },
      {
        group:false,
        title: "Spare parts",
        items: [
          {
              title: "Stock Spare Parts", 
              link: "/main_page/spare_part",
              icons:"mdi-toolbox",
          },
        ], 
      },
    ],
  }),
  created() {
    User.auth()
    .then((response) => {
      this.user = response.data;
      console.log(this.user);
    })
    .catch(error=>{
        localStorage.removeItem("token");
        this.$router.push({ name: "login" });
    });

    
  },
  mounted() {
    this.startTimer();
    this.$root.$on("login", () => {
      this.isLoggedIn = true;
    });
    console.log(localStorage);
    this.isLoggedIn = !!localStorage.getItem("token");
  },

  methods: {
    logout() {
      localStorage.removeItem("token");
      this.isLoggedIn = false;
      this.$router.push({ name: "login" });
    },
    startTimer() {
            this.timer = setTimeout(() => {
                alert('Session expired. You will be logged out.');
                localStorage.removeItem("token");
                this.$router.push('/');
            },1800000) // 30 minutes in milliseconds
        },
  },
};
</script>
<style lang="scss" scoped>
.list {
  padding: 0px;
  margin: 0px;
  color: #1979e7;
}
.navbar {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px 30px;
}
</style>
