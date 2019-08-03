<template>
<div>
  <v-app-bar
  absolute
  flat
  color="transparent"
  >
  <div>
    <v-img
    width="50"
    contain
    :src="require('../../../image/icon/01.png')"
    ></v-img>
  </div>
    <v-toolbar-title class="M-N-title-1 white--text">Main</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn outlined color="#707070" class="M-N-btn-1">Login</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
@font-face {
  font-family: 'COREGTD6';
  src: url('../../../fonts/COREGTD6.OTF');
}
.M-N-title-1{
  font-family: 'COREGTD6';
  font-size: 40px !important;
}
.M-N-btn-1{
  font-family: 'COREGTD6';
  font-size: 16px !important;
  border: 1px solid #846330 !important;
}
</style>
