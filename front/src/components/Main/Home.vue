<template>
    <v-layout class="M-H-lay-1">
        <v-flex xs7>
            <v-layout justify-center wrap>
                    <div class="M-H-div-1">
                        for the couple, by the couple.
                    </div>
                    <v-card class="text-center M-H-card-1" outlined color="#1F2122" >
                        <div class="M-H-div-2 text-center">intro</div>
                        <div class="M-H-div-3 text-center">that is the true season of love,<br>
                             when we believe that we alone an love,<br>
                             that no one could ever have loved so vefore us,<br>
                             and that no one will love in the same way after us.<br>
                             <br>
                             -Johann Wolfgang von Goethe-
                        </div>
                    </v-card>
            </v-layout>
            <div class="M-H-div-4 text-center">
                        CopyRight.YS/LG
            </div>
        </v-flex>
        <v-flex xs5>
            <v-img
            height="100%"
            :src="require('../../image/pic/01.jpg')"
            >
            </v-img>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    
}
</script>
<style>
@font-face {
  font-family: 'COREGTD6';
  src: url('../../fonts/COREGTD6.OTF');
}
@font-face {
  font-family: 'COREGTD3';
  src: url('../../fonts/COREGTD3.OTF');
}
.M-H-lay-1{
    background-color: #1F2122;
}
.M-H-div-1{
    font-family: 'COREGTD6';
    padding-top: 134px;
    font-size: 48px;
    color: #707070;
    text-shadow: 0px 3px 6px rgba(39, 19, 213, 0.33);
}
.M-H-card-1{
    font-family: 'COREGTD6';
    border-radius: 0px !important;
    margin-top: 50px;
    padding-top: 40px;
    border: 1px solid rgba(112, 112, 112, 1) !important;
}
.M-H-div-2{
    font-family: 'COREGTD6';
    padding-bottom: 50px;
    font-size: 100px;
    color: #707070;
}
.M-H-div-3{
    font-family: 'COREGTD3';
    padding-right: 180px;
    padding-left: 180px;
    padding-bottom: 60px;
    font-size: 20px;
    color: #707070;
}
.M-H-div-4{
    font-family: 'COREGTD6';
    padding-top: 60px;
    color: #707070;
    font-size: 20px;
    padding-bottom: 60px;
}
</style>
