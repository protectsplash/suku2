<template>
    <v-layout class="M-L-lay-1" align-center>
        <v-flex xs12 v-show="IdOK===false">
            <v-layout class="M-L-div-1 text-center white--text" wrap justify-center>
                <v-flex xs12>
                    <div class="M-L-div-2">
                        Login
                    </div>
                </v-flex>
                <v-flex xs4>
                    <div class="M-L-div-3">
                     <v-text-field
                       v-model="Idinput"
                       label="ID"
                       placeholder="아이디를 입력 해주세요."
                       outlined
                       color="white"
                       clearable
                       dark
                       autofocus
                       rounded
                       :error-messages="wrongId?'아이디가 틀렸습니다.':''"
                     ></v-text-field>
                    </div>
                 </v-flex>
                 <v-flex xs12>
                     <div>
                         <v-btn outlined dark class="M-L-btn-1" @click="next_1">다음</v-btn>
                     </div>
                 </v-flex>
                 <v-flex xs12>
                 <v-divider color="white" width="60%" style="margin: 0 auto;" class="M-L-divider-1"></v-divider>
                 </v-flex>
                 <v-flex xs12>
                     <v-layout justify-center>
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="#707070" dark v-on="on" class="M-L-btn-2" text large  :ripple="false">ID를 까먹었어요.</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">ID 찾기</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs12>
                                  <v-text-field label="Email*" required></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*필수 입력</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog = false">취소</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog = false">이메일 전송</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-layout>
                 </v-flex>
                 <v-flex xs12>
                     <div class="M-L-div-4">
                         CopyRight.YS/LG
                     </div>
                 </v-flex>
            </v-layout>
        </v-flex>
        <!-- =========================================비밀번호 입력 부분================== -->
         <v-flex xs12 v-show="IdOK===true">
            <v-layout class="M-L-div-1 text-center white--text" wrap justify-center>
                <v-flex xs12>
                    <div class="M-L-div-2">
                        Login
                    </div>
                </v-flex>
                <v-flex xs4>
                    <div class="M-L-div-3">
                     <v-text-field
                       class="Pwinput"
                       v-model="Pwinput"
                       label="Password"
                       placeholder="패스워드를 입력 해주세요."
                       outlined
                       color="white"
                       clearable
                       dark
                       autofocus
                       rounded
                       :error-messages="wrongPw?'비밀번호가 틀렸습니다.':''"
                     ></v-text-field>
                    </div>
                 </v-flex>
                 <v-flex xs12>
                     <div>
                         <v-btn outlined dark class="M-L-btn-1" @click="next_2">로그인</v-btn>
                     </div>
                 </v-flex>
                 <v-flex xs12>
                 <v-divider color="white" width="60%" style="margin: 0 auto;" class="M-L-divider-1"></v-divider>
                 </v-flex>
                 <v-flex xs12>
                     <v-layout justify-center>
                      <v-dialog v-model="dialog_1" persistent max-width="600px">
                        <template v-slot:activator="{ on }">
                          <v-btn color="#707070" dark v-on="on" class="M-L-btn-2" text large  :ripple="false">비밀번호를 까먹었어요.</v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">비밀번호 찾기</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container grid-list-md>
                              <v-layout wrap>
                                <v-flex xs12>
                                  <v-text-field label="Email*" required></v-text-field>
                                </v-flex>
                              </v-layout>
                            </v-container>
                            <small>*필수 입력</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="dialog_1 = false">취소</v-btn>
                            <v-btn color="blue darken-1" text @click="dialog_1 = false">이메일 전송</v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-layout>
                 </v-flex>
                 <v-flex xs12>
                     <div class="M-L-div-4">
                         CopyRight.YS/LG
                     </div>
                 </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
    data() {
        return {
            Idinput:'',
            Pwinput:'',
            dialog: false,
            dialog_1: false,
            wrongId: false,
            wrongPw: false,
            IdOK:false
        }
    },
    methods: {
        next_1(){
            if(this.Idinput==='규화찡'){
                this.wrongId=false
                this.IdOK=true
            }else{
                this.wrongId=true
            }
        },
        next_2(){
            if(this.Pwinput==='규화찡'){
                this.wrongPw=false
                this.$router.push('/user')
            }else{
                this.wrongPw=true
            }
        }
    },
}
</script>
<style>
.Pwinput legend{
    width: 60px !important;
}
.M-L-lay-1{
    background: url('../../image/pic/02.jpg');
    background-size: cover;
}
.M-L-div-1{
    margin: 0 auto;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    border: 1px #251FC0 solid;
}
.M-L-div-2{
    padding-top: 150px;
    font-size: 80px;
    color: #83808C;
}
.M-L-div-3{
    padding-top: 120px;
}
.M-L-div-4{
    padding-top: 70px;
}
.M-L-btn-1{
    margin-bottom: 30px;
    border-radius: 50px;
    font-size: 24px;
    width: 140px;
    height: 48px !important;
}
.M-L-btn-2{
    font-size: 20px;
    text-decoration: underline;
    text-underline-position: under;
    margin-top: 10px;
}
</style>
