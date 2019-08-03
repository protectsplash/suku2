<template>
  <v-app>
    <router-view name="head"/>
    <router-view name="body"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
};
</script>
