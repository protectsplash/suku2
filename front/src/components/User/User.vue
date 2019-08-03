<template>
  <v-app>
      <!-- =======================왼쪽 네비============ -->
    <v-navigation-drawer
      v-model="drawer_L"
      clipped
      app
      width="300"
      hide-overlay
      color="#201E1E"
      class="U-U-nav-1"
    >
    <div class="text-center U-U-AV-1">
        <v-avatar
        size="100"
        >
            <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
            >
        </v-avatar>
    </div>
    <v-layout row>
        <v-flex xs4>
            <v-card flat color="transparent">
                <div class="U-U-div-2 text-center">개인글</div>
                <div class="U-U-div-3 text-center">30</div>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card flat color="transparent">
                <div class="U-U-div-2 text-center">공유글</div>
                <div class="U-U-div-3 text-center">50</div>
            </v-card>
        </v-flex>
        <v-flex xs4>
            <v-card flat color="transparent">
                <div class="U-U-div-2 text-center">일정</div>
                <div class="U-U-div-3 text-center">10</div>
            </v-card>
        </v-flex>
    </v-layout>
    <v-layout wrap>
        <v-flex xs12>
            <div class="text-left U-U-div-4">
                <v-btn text color="#707070" class="U-U-btn-2" large to="/user/individual">
                <!-- <v-icon class="pr-1">mdi-account-key</v-icon> -->
                Individual
                </v-btn>
            </div>
        </v-flex>
        <v-flex xs12>
            <div class="text-left U-U-div-5">
                <v-btn text color="#707070" class="U-U-btn-2" large to="/user/with">
                <!-- <v-icon class="pr-1">mdi-account-heart</v-icon> -->
                With
                </v-btn>
            </div>
        </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs12>
              <div class="text-center">
                <div class="datepicker-trigger">
                  <AirbnbStyleDatepicker
                    class="calender-1"
                    :trigger-element-id="'datepicker-trigger'"
                    :mode="'single'"
                    :inline="true"
                    :min-date="new Date()"
                    :fullscreen-mobile="true"
                    :date-one="dateOne"
                    :offset-y="30"
                    :months-to-show="1"
                  />
                  <v-layout row pt-5>
                  <v-flex xs12>
                      <div class="text-center">
                          <v-btn outlined color="#707070" class="U-U-btn-3">일정 등록</v-btn>
                      </div>
                  </v-flex>
                  <v-flex xs0>
                  <input
                    type="text"
                    id="datepicker-trigger"
                    :value="formatDates(dateOne)"
                  >
                  </v-flex>
                  </v-layout>
                </div>
              </div>
        </v-flex>
    </v-layout>
    </v-navigation-drawer>
    <!-- =======================오른쪽 네비============ -->
    <v-navigation-drawer
      v-model="drawer_R"
      right
      app
      width="50%"
      color="#262525"
      hide-overlay
    >
    <v-layout wrap>
        <v-flex xs3>
            <v-layout wrap>
                <v-flex xs12>
                    <v-card color="#262525" class="U-U-card-1 m1--text pt-2" flat>
                        Filter
                    </v-card>
                </v-flex>
                <v-flex xs12 class="pt-12 mt-10 pl-6">
                    <v-layout justify-start>
                        <v-checkbox v-model="F_check_S" class="U-U-check-1" label="All" value="All" dark></v-checkbox>
                    </v-layout>
                    <v-layout justify-start>
                        <v-checkbox v-model="F_check_S" class="U-U-check-1" label="Individual" value="Individual" dark></v-checkbox>
                    </v-layout>
                    <v-layout justify-start>
                        <v-checkbox v-model="F_check_S" class="U-U-check-1" label="With" value="With" dark></v-checkbox>
                    </v-layout>
                    <v-layout justify-start>
                        <v-checkbox v-model="F_check_S" class="U-U-check-1" label="Schedule" value="Schedule" dark></v-checkbox>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs9>
            <v-layout wrap>
                <v-flex xs12>
                    <v-card color="#464141" class="U-U-card-2 m1--text pt-2" flat>
                        <v-layout>
                             {{ F_check_S.toString()}}
                             <!-- <v-spacer></v-spacer> -->
                             <!-- <v-spacer v-show="this.F_check_S.length < 3"></v-spacer> -->
                             <v-text-field                   
                              class="mx-5 U-U-input-1 pt-2"
                              flat
                              height="32"
                              hide-details
                              label="검색"
                              color="black"
                              prepend-inner-icon="mdi-magnify"
                              solo-inverted
                              dark
                            ></v-text-field>
                       </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
    </v-navigation-drawer>
    <!-- =======================위쪽 네비 바============ -->
    <v-app-bar
      clipped-left
      app
      color="#201E1E"
      dark
      flat
    >
    <div>
        <v-img
        width="40"
        contain
        :src="require('../../image/icon/01.png')"
        ></v-img>
    </div>
    <div class="U-U-div-1">
        000 님 환영합니다.
    </div>
      <v-spacer></v-spacer>
       <v-btn text color="#6F5454" class="U-U-btn-1">Logout</v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <div>
            <template>
              <div>하이</div>
            </template>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import format from 'date-fns/format'
export default {
    data: () => ({
      drawer_L: true,
      drawer_R: true,
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: '',
      F_check_S: ['All']
    }),
    mounted() {
        console.log(this.F_check_S)
    },
    methods: {
      formatDates(dateOne, dateTwo) {
        let formattedDates = ''
        if (dateOne) {
          formattedDates = format(dateOne, this.dateFormat)
        }
        return formattedDates
      }
    }
}
</script>
<style>
@font-face {
  font-family: 'COREGTD6';
  src: url('../../fonts/COREGTD6.OTF');
}
@font-face {
  font-family: 'COREGTD4';
  src: url('../../fonts/COREGTD4.OTF');
}
@font-face {
  font-family: 'COREGTD3';
  src: url('../../fonts/COREGTD3.OTF');
}
.calender-1{
    width: 220px !important;
    height: 238px !important;
    margin: 0 auto;
}
.calender-1 .asd__days-legend{
    width: 220px !important;
    height: 200px !important;
}
.calender-1 .asd__month-table{
    width: 71% !important;
}
.calender-1 .asd__day{
    line-height: 24px !important;
    height: 24px;
}
.calender-1 .asd__month-name{
    padding-right: 80px;
    padding-top: 5px;
    font-size: 0.9em;
    margin-bottom: 35px;
}
.U-U-div-1{
    font-family: 'COREGTD3';
    font-size: 20px !important;
    color: #707070;
    padding-left: 10px;
    letter-spacing: 1.5px;
}
.U-U-div-2{
    font-family: 'COREGTD6';
    color: #BB9797;
    font-size: 18px;
}
.U-U-div-3{
    font-family: 'COREGTD3';
    color: #BB9797;
    font-size: 16px;
}
.U-U-div-4{
    padding-left: 50px;
    padding-top: 40px;
}
.U-U-div-5{
    padding-top: 20px;
    padding-left: 50px;
    padding-bottom: 40px;
}
.U-U-btn-1{
  font-family: 'COREGTD3';
  font-size: 16px !important;
}
.U-U-btn-2{
  font-family: 'COREGTD3';
  font-size: 25px !important;
}
.U-U-btn-3{
    height: 24px !important;
    font-size: 16px !important;
    border-radius: 50px;
}
.U-U-check-1 label{
    font-family: 'COREGTD3';
    font-size: 24px !important;
}
.U-U-nav-1{
    border-top: 1px #707070 solid !important;
    border-right: 1px #707070 solid !important;
}
.U-U-AV-1{
    padding-top: 30px;
    padding-bottom: 20px;
}
.U-U-card-1{
    font-family: 'COREGTD4';
    height: 64px;
    font-size: 30px;
    padding-left: 20px;
    border-radius: 0px;
    border-bottom: 1px #707070 solid !important;
    border-right: 1px #707070 solid !important;
    border-left: 1px #707070 solid !important;
}
.U-U-card-2{
    font-family: 'COREGTD4';
    height: 64px;
    padding-left: 20px;
    font-size: 30px;
    border-radius: 0px;
    border-bottom: 1px #707070 solid !important;
}
.U-U-input-1 .v-input__control{
    min-height: 32px !important;
    width: 0px;
    min-width: 0px;
    max-width: 200px;
}
</style>
