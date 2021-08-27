<template>
  <div id="mypage">

    <!-- Header Area Start -->
    <Header></Header>

    <!--   CONTENTS AREA START  -->
    <div id="contents">

      <!-- Back -->
      <div class="back" v-show="isLoggedIn">

        <a href="#"><span>{{ currentId }}</span> 님의 마이페이지 입니다 :&rpar;</a>

        <!-- Login & Logout  BTN Status Area -->
        <div class="status">

          <a href="#" v-on:click="logout" v-show="isLoggedIn">
            <i class="material-icons">power_settings_new</i>
            <span>LOGOUT</span>
          </a>

        </div>

      </div>


      <!-- User-infor Area Start -->
      <div class="user-infor" v-show="isLoggedIn">

        <ul class="index1">
          <div v-if="isLoggedIn">
            <li v-for="item in userinfor" v-bind:key="item.mypage_user_rank">
              <i class="fa fa-trophy" aria-hidden="true"></i>
              {{ item.mypage_user_rank }}
            </li>
          </div>
          <li>{{ currentUser }}</li>
          <li>
            <i class="fa fa-cog" aria-hidden="true"></i>
            </li>
        </ul>

        <ul class="index2">
          <li>
            <a href="#">
              <i class='fa fa-user-circle' aria-hidden='true'></i>
              <i class="fa fa-plus-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <ul>
              <li>
                <a href="#" v-if="isLoggedIn"><a href="#" v-for="item in userinfor"
                    v-bind:key="item.mypage_user_point">{{ item.mypage_user_point }}</a></a>
                <a href="#">포인트</a>
              </li>
              <li>
                <a href="#" v-if="isLoggedIn"><a href="#" v-for="item in userinfor"
                    v-bind:key="item.mypage_user_coupone">{{ item.mypage_user_coupone }}</a></a>
                <a href="#">쿠폰</a>
              </li>
              <li>
                <a href="#" v-if="isLoggedIn">
                  <a href="#" v-for="item in userinfor"
                    v-bind:key="item.mypage_user_shoplist">{{ item.mypage_user_shoplist  }}</a>
                </a>
                <a href="#">구매내역/<br>배송조회</a>
              </li>
            </ul>
          </li>
        </ul>

      </div>
      <!--// User-infor Area End -->

      <!-- Tab-wrap Area Start -->

      <div class="tab-wrap" v-show="isLoggedIn">


        <!-- tab-title -->
        <div class="tab-title">
          <ul>
            <li class="tab-active">
              <i class='fa fa-th' aria-hidden='true'></i>
              <a href="#">내 후기 (9)</a>
            </li>
            <li>
              <i class='fa fa-history' aria-hidden='true'></i>
              <a href="#">히스토리 (4)</a>
            </li>
            <li>
              <i class='fa fa-bookmark' aria-hidden='true'></i>
              <a href="#">스크랩 (7)</a>
            </li>
          </ul>
        </div>

        <!-- Tab-Cont -->
        <div class="tab-cont">

          <!-- Tab-Cont1 -->
          <div class="tabCont tab1">
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img1.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>10</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img2.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>5</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img3.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>23</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img4.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>9</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img5.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>14</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img6.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>30</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img7.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>3</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img8.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>23</span>
              </div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img9.png" alt="MyPage review image1"></a>

              <div class="tag">
                <i class='fa fa-heart' aria-hidden='true'></i>
                <span>45</span>
              </div>
            </li>
          </div>

          <!-- Tab-Cont2 -->
          <div class="tabCont tab2">
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img1.png" alt="MyPage review image1"></a>

              <div class="tag">10분 전</div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img2.png" alt="MyPage review image1"></a>

              <div class="tag">3시간 전</div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img3.png" alt="MyPage review image1"></a>

              <div class="tag">5시간 전</div>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img4.png" alt="MyPage review image1"></a>

              <div class="tag">3일 전</div>
            </li>

          </div>

          <!-- Tab-Cont3 -->
          <div class="tabCont tab3">
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img1.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img2.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img3.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img4.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img5.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img6.png" alt="MyPage review image1"></a>
            </li>
            <li>
              <img src="../assets/mypage/gallery-icon.png" alt="갤러리 아이콘">
              <a href="#"><img src="../assets/mypage/mypage-item-img7.png" alt="MyPage review image1"></a>
            </li>
          </div>
        </div>


      </div>
      <!--// Tab-wrap Area End -->

      <!-- Customer-Menu Area Start -->
      <div class="customer-menu" v-show="isLoggedIn">
        <ul>
          <li>
            <a href="#">주문내역/배송조회</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
          <li>
            <a href="#">취소/반품/환불내역</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
          <li>
            <a href="#">내 문의 내역</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
          <li>
            <a href="#">고객센터</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
          <li>
            <a href="#">공지사항</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
          <li>
            <a href="#">자주 묻는 질문</a>
            <i class='fa fa-angle-right' aria-hidden='true'></i>
          </li>
        </ul>
      </div>
      <!--// Customer-Menu Area End -->


      <!-- FIXED BUTTON2 : CUSTOMER SERVICE -->
      <div class="fixedBtn cs-btn" v-show="isLoggedIn">
        <a href="#">
          <img src="../assets/mypage/mypage-icon.png" alt="Customer Center">
        </a>
        <span>1:1<br>연결</span>
      </div>

    </div><!-- Contents Area End -->


    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import db from '../db'
  import Header from '../components/component/Header.vue'
  import Footer from '../components/component/Footer.vue'

  export default {
    name: 'Mypage',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        userinfor: {
          mypage_user_rank: '',
          mypage_user_point: '',
          mypage_user_coupone: '',
          mypage_user_shoplist: ''
        },
        currentId : '',

        isLoggedIn: false,
        currentUser: false

      }
    },
    created() {
      this.getUserInfor();

      if (firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
        this.IdPos = this.currentUser.indexOf('@');
        this.currentId = this.currentUser.slice(0, this.IdPos);
      }
    },
    mounted() {
      this.mypageTab();
      this.mypageScroll();
    },
    methods: {

      // Get Data Function
      getUserInfor() {
        db.collection('mypage_infor').get().then(querySnapshot => {

          const userinfor = []

          querySnapshot.forEach(doc => {

            // console.log(doc.data());

            userinfor.push(doc.data());
          });

          this.userinfor = userinfor;
        })
      },
      mypageTab() {

        $('#header .tab-menu ul li a').removeClass('on');
        $('#footer a').removeClass('on2');
        $('#footer a').eq(3).addClass('on2');

        var tabTitle = $('#mypage .tab-title>ul>li');
        var tabCont = $('#mypage .tabCont');

        tabTitle.click(function (e) {
          var index = $(this).index();
          
          tabTitle.removeClass('tab-active');
          tabTitle.eq(index).addClass('tab-active');
          tabCont.css('display', 'none');
          tabCont.eq(index).css('display', 'block');

          e.preventDefault();
        });
      },

      mypageScroll() {
        $(window).scroll(function () {

          var WinPos = $(window).scrollTop();
          //  var TabPos = $('#mypage .tab-title>ul>li').offset().top;
          var Tab = $('#mypage .tab-title>ul>li');

          //  console.log(TabPos);
          //  console.log(WinPos);

          if (WinPos >= 173) {
            Tab.addClass('sticky');
          } else {
            Tab.removeClass('sticky');
          }
        });
      },
      logout() {
        firebase
          .auth()
          .signOut()
          .then(() => {

            console.log('logout');
            
             this.$router.go({path: this.$router.path});
            // window.location.reload();
            
          });
      }
    }
  }

</script>

<style scoped>
  /* ************** MY PAGE AREA START **************** */
  /* *********** menubar-top *********** */
  #header {
    width: 100%;
    margin-bottom: 5px;
    position: fixed;
    top: 0px;
    z-index: 10;
    /* 최대 강도 : 10 */
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
  }

  /* *************** Back  Area Start ************* */
  #mypage .back {
    width: 100%;
    height: 71px;
    position: fixed;
    top: 128px;
    z-index: 10;
    /* 최대 강도 : 10 */
    background-color: #fff;
    border-bottom: 1px solid #e2e2e2;
    border-top: 1px solid #e2e2e2;
    box-shadow: none;
  }

  /* Mypage Area Start */
  #mypage .back a {
    display: block;
    width: 80%;
    height: 100%;
    margin: 0;
    text-align: center;
    font: 700 1.5rem/71px 'Nanum Gothic', sans-serif;
    color: #555;
    float:left
  }

   #mypage .back >a>span {
     border-bottom:1px solid #9066ab;
     color:#9066ab;
     font-size: 2rem;
   }

  /* Status Area Start */
  #mypage .back .status {
    width: 20%;
    height: 100%;
    float: right;
  }

  #mypage .back .status a {
    width:100%;
    height:100%;
  }

  #mypage .back .status a:hover {
    color:#9660a2;
  }

/* Logout Btn */
 #mypage .back .status i {
   display: block;
    width: 100%;
    height: 60%;
    line-height: 50px;
 }

 #mypage .back .status span {
   font-size: 1rem;
    display: block;
    width: 100%;
    height: 40%;
    line-height: 10px;
 }
  

  /****** User-infor Area Start ******/
  #mypage .user-infor {
    position: absolute;
    top: 208px;
    width: 100%;
    height: 174px;
    border-bottom: 1px solid #e2e2e2;
    background-color: #fff;
  }


  /* User-infor INDEX1 Area Start */
  #mypage .index1 {
    width: 100%;
    height: 60px;
  }

  #mypage .index1>div {
    height: 100%;
    width: 33.33333333333333%;
    display: inline-block;
    float: left;
  }

  #mypage .index1>div>li {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 54px;
    font-weight:bold;
    color:#9660a2;
  }

  #mypage .index1>li {
    width: 40%;
    height: 100%;
    text-align: center;
    color: #555;
    font: 700 1.4rem/4 'Nanum Gothic', sans-serif;
  }

  #mypage .index1 li:nth-child(1) {
    float: left;
  }

  #mypage .index1 li:nth-child(1)>i {
    font-size: 2.7rem;
    margin-right: 3%;
    vertical-align: -3px;
    color: #9660a2;
  }

  #mypage .index1 li:nth-child(2) {
    float: left;
  }

  /* 환경설정 : cog icon  */
  #mypage .index1 li:nth-child(3) {
    width:20%;
    float: right;
    text-align: center;
  }

  #mypage .index1 li:nth-child(3)>i {
    font-size: 2.5rem;
    vertical-align: -4px;
    color: #9066ab;
  }


  /* User-infor INDEX2 Area Start */
  #mypage .index2 {
    width: 90%;
    height: 114px;
    margin: auto;
  }

  #mypage .index2>li {
    width: 33.33333%;
    height: 100%;
    text-align: center;
  }

  #mypage .index2>li:nth-child(1) {
    float: left;
  }

  #mypage .index2>li>a {
    display: block;
    position: relative;
    height: 80%;
  }

  #mypage .index2>li:nth-child(1)>a {
    width: 66%;
    margin: 0% 25% 8% 8%;
  }

  #mypage .index2>li:nth-child(1)>a>i:nth-child(1) {
    position: absolute;
    left: 50%;
    top: 44%;
    color: #9660a2;
    font-size: 7.5rem;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #mypage .index2>li:nth-child(1)>a>i:nth-child(2) {
    position: absolute;
    font-size: 3rem;
    top: 52%;
    left: 86%;
    color: #555;
  }

  #mypage .index2>li:nth-child(2) {
    width: 66.66667%;
    height: 100%;
    float: right;
  }

  #mypage .index2>li:nth-child(2)>ul>li {
    display: inline-block;
    float: left;
    width: 33.33333%;
    height: 95px;
  }

  #mypage .index2>li:nth-child(2)>ul>li>a {
    display: block;
    height: 50%;
    color: #9660a2;
    text-align: center;
    font: 500 2.5rem/2 'Nanum Gothic, sans-serif';
  }

  /* 포인트, 쿠폰, 구매내역&배송조회 */
  #mypage .index2>li:nth-child(2)>ul>li>a:nth-child(2) {
    display: block;
    text-align: center;
    color: #333;
    font: 400 1.4rem/2 'Nanum Gothic, sans-serif';
  }

  /* 구매내역 & 배송조회 a */
  #mypage .index2>li:nth-child(2)>ul>li:nth-child(3)>a:nth-child(2) {
    line-height: 1.3;
  }

#mypage .index2>li:nth-child(2)>ul>li>a>a {
  display: block;
    width: 100%;
    height: 100%;
    color: #9660a2;
}

  /* *************** My Page Tab-wrap Area Start ************** */
  #mypage .tab-wrap {
    position: absolute;
    top: 382px;
    width: 100%;
    height: auto;
  }


  /* ********* Tab-Title Area Start ********* */
  #mypage .tab-title {
    width: 100%;
    height: 130px;
    position: relative;
    z-index: 9;
    /* 최대 강도 : 10 */
  }

  #mypage .tab-title>ul>li {
    position: absolute;
    top: 0;
    width: 33.333333%;
    height: 140px;
    background-color: #fff;
    cursor: pointer;
  }

  #mypage .tab-title>ul>li:nth-child(2) {
    left: 33.333333%;
  }

  #mypage .tab-title>ul>li:nth-child(3) {
    right: 0;
  }


  /* 탭 타이틀 LIne */
  #mypage .tab-title>ul>li::after {
    content: '';
    display: block;
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: 0;
    background-color: #CAB7CC;
  }

  /* 탭 타이틀 활성화 CLASS */
  .tab-active a,
  .tab-active i {
    color: #9660a2 !important;
  }

  .tab-active::after {
    background-color: #9660a2 !important;
  }

  #mypage .tab-title>ul>li>i {
    display: block;
    width: 100%;
    height: 50%;
    font-size: 3.5rem;
    line-height: 2.5;
    text-align: center;
    color: #7F7D7D;
  }

  #mypage .tab-title ul li a {
    display: inline-block;
    width: 100%;
    height: 50%;
    text-align: center;
    font: 600 1.4rem/1.5 'Nanum Gothic, sans-serif';
    color: #7F7D7D;
  }

  /* Tab-menu Title : HOVER */
  #mypage .tab-title ul li:hover a {
    color: #9660a2;
  }

  #mypage .tab-title ul li:hover i {
    color: #9660a2;
  }


  /* ********* Tab-Cont Area Start ********* */
  #mypage .tab-cont {
    position: relative;
    top: 9px;
    width: 100%;
  }

  #mypage .tabCont {
    position: absolute;
    left: 0;
    top: 0;
  }


  /* 탭메뉴 초기화  */
  #mypage .tab1 {
    display: block;
  }

  #mypage .tab2 {
    display: none;
  }

  #mypage .tab3 {
    display: none;
  }


  /* 스티키 메뉴 동작 CLASS */
  .sticky {
    position: fixed !important;
    top: 199px !important;
    z-index: 10;
    /* 최대강도 : 10 */
  }


  #mypage .tabCont>li {
    display: block;
    width: 33.33333333333333%;
    height: 130px;
    float: left;
    position: relative;
  }

  /* 내후기 : 갤러리 아이콘 */
  #mypage .tabCont>li>img {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 1;
    /* 최대강도 : 10 */
  }

  #mypage .tabCont>li:nth-child(3)>img {
    -webkit-filter: brightness(0.7);
    -moz-filter: brightness(0.7);
    -o-filter: brightness(0.7);
    filter: brightness(0.7);
  }

  /* 내후기 : 갤러리 아이콘&텍스트 */
  #mypage .tabCont>li>.tag {
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
  }

  #mypage .tabCont>li>a {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  #mypage .tabCont>li>a>img {
    width: 100%;
    height: 100%;
    display: block;
  }

  /* 내후기 갤러리 : HOVER */
  #mypage .tabCont>li>a:hover>img {
    opacity: 0.8 !important;
  }

  #mypage .tabCont>li>a>i:nth-child(1) {
    position: absolute;
    top: 7%;
    left: 7%;
    color: #fff;
    opacity: 0.5;
    z-index: 1;
    /* 최대강도 : 10 */
  }


  /* *************** FIXED BUTTON : PROTO-TPYE ************** */
  .fixedBtn {
    position: fixed;
    width: 72px;
    height: 72px;
    border-radius: 36px;
    background-color: #C8EBE2;

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;

    -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
    -moz-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
    -o-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
    box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);

    /* 최상위 : 10 */
    z-index: 10;
  }


  /* *************** Customer-Menu Area Start ************** */
  #mypage .customer-menu {
    display: block;
    width: 100%;
    height: 494px;
    position: absolute;
    top: 950px;
  }

  #mypage .customer-menu>ul>li {
    width: 100%;
    height: 48px;
    position: relative;
    padding: 0 5%;
    margin-bottom: 1px;
    background: #9660a2;
  }

  #mypage .customer-menu>ul>li>i {
    display: none;
    position: absolute;
    right: 6%;
    bottom: 25%;
    font-size: 2.5rem;
    color: #fff;
  }

  /* Customer-Menu : HOVER */
  #mypage .customer-menu>ul>li:hover {
    background-color: #7F7D7D;
  }

  #mypage .customer-menu>ul>li:nth-child(2) {
    margin-bottom: 30px;
  }

  #mypage .customer-menu>ul>li>a {
    display: block;
    width: 100%;
    height: 100%;
    color: #fff;
    font: 500 1.4rem/48px 'Nanum Gothic, sans-serif';
  }

  #mypage .customer-menu>ul>li:hover>i {
    display: block;
  }


  /* *************** FIXED BUTTON : MY PAGE ************** */

  #mypage .cs-btn {
    bottom: 13%;
    right: 5%;
  }

  #mypage .cs-btn>a {
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
    /* 최대강도 : 10 */
  }

  #mypage .cs-btn>a>img {
    position: absolute;
    width: 55%;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #mypage .cs-btn>span {
    display: none;
    text-align: center;
    font-weight: 700;
    position: relative;
    color: #9660a2;
    font-size: 1.6rem;
    bottom: 80%;
  }

  /* FIXED BUTTON2 :HOVER */
  #mypage .cs-btn:hover {

    -webkit-box-shadow: 0px 0px 20px rgb(0 0 0 / 70%);
    -moz-box-shadow: 0px 0px 20px rgb(0 0 0 / 70%);
    -o-box-shadow: 0px 0px 20px rgb(0 0 0 / 70%);
    box-shadow: 0px 0px 20px rgb(0 0 0 / 70%);

    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);

    background-color: #fff;
  }

  #mypage .cs-btn:hover>a>img {
    display: none;
  }

  #mypage .cs-btn:hover>span {
    display: block;
  }

</style>