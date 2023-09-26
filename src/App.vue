<template>
  <router-view></router-view>
</template>

<script>
import mainTemplate from './components/Navigation.vue'
import MainPage from './components/EmployeePage.vue'
export default {
name: 'App',
components: {
          mainTemplate,
          MainPage,
      },

  data: () => ({
    //
  }),
};
</script>

