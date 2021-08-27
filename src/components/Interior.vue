<template>
  <div id="interior">

    <!-- Header Area Start -->
    <Header></Header>

    <!-- CONTENTS AREA START -->
    <div id="contents">

      <!-- Back to Gallery Arrow-Btn -->
      <div class="back">
        <router-link to="/community"><i class='fa  fa-angle-left' aria-hidden='true'></i></router-link>
        <a href="#">갤러리</a>
      </div>

      <!-- Interior-title Area Start -->
      <div class="interior-title">
        <div>
          <h1>인테리어 참견<img src="../assets/interior/interior-icon1.png" alt="인테리어참견 아이콘"></h1>
          <p>내 방에 어울리는 아이템은 무엇일까?</p>
          <br>
          <p>
            나홀로 유저들의 참견을<br>
            받아보세요!
          </p>
          <p>A <span>OR</span> B?</p>
          <br>
          <a href="#">
            <span>참견톡 쓰기</span>
            <img src="../assets/interior/interior-icon2.png" alt="참견톡 쓰기 아이콘">
          </a>
        </div>
      </div><!-- Interior-title Area End -->

      <!-- Interior-content Area Start -->
      <div class="interior-content">

        <!-- Content1 Area Start -->
        <div class="content c1">

          <!-- interior-content Top -->
          <div class="top">
            <i class='fa fa-user-circle' aria-hidden='true'></i>
            <p>USER<br>5시간 전</p>
            <p>#모던 #20평</p>
          </div>
          <!-- interior-content Mid -->
          <div class="mid">
            <img src="../assets/interior/interior-item1-img1.png" alt="공간이미지1">
            <div>
              <div class="choice">
                <img src="../assets/interior/interior-item1-img2.png" alt="아이템1">
                <a href="#" class="chk"><span>22</span><i class='fa fa-check' aria-hidden='true'></i></a>
              </div>
              <div class="choice">
                <img src="../assets/interior/interior-item1-img3.png" alt="아이템2">
                <a href="#">
                  <span>22</span>
                  <i class='fa fa-check' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </div>

          <!-- interior-content Bottom -->
          <div class="bottom">
            <a href="#">
              <i class='fa  fa-comment' aria-hidden='true'></i>
              코멘트 쓰기
            </a>
          </div>

        </div><!-- Content1 Area End -->


        <!-- Content1 Area Start -->
        <div class="content c2">

          <!-- interior-content Top -->
          <div class="top">
            <i class='fa fa-user-circle' aria-hidden='true'></i>
            <p>USER<br>6시간 전</p>
            <p>#화이트감성</p>
          </div>
          <!-- interior-content Mid -->
          <div class="mid">
            <img src="../assets/interior/interior-item2-img1.png" alt="공간2">
            <div>
              <div class="choice">
                <img src="../assets/interior/interior-item2-img2.png" alt="공간2 아이템1">
                <a href="#" class="chk"><span>22</span><i class='fa fa-check' aria-hidden='true'></i></a>
              </div>
              <div class="choice">
                <img src="../assets/interior/interior-item2-img3.png" alt="공간2 아이템2">
                <a href="#">
                  <span>22</span>
                  <i class='fa fa-check' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </div>

          <!-- interior-content Bottom -->
          <div class="bottom">
            <a href="#">
              <i class='fa  fa-comment' aria-hidden='true'></i>
              코멘트 쓰기
            </a>
          </div>

        </div><!-- Content1 Area End -->

        <!-- Content1 Area Start -->
        <div class="content c3">

          <!-- interior-content Top -->
          <div class="top">
            <i class='fa fa-user-circle' aria-hidden='true'></i>
            <p>USER<br>6시간 전</p>
            <p>#공부방 #20평</p>
          </div>
          <!-- interior-content Mid -->
          <div class="mid">
            <img src="../assets/interior/interior-item3-img1.png" alt="공간3">
            <div>
              <div class="choice">
                <img src="../assets/interior/interior-item3-img2.png" alt="공간3 아이템1">
                <a href="#" class="chk"><span>22</span><i class='fa fa-check' aria-hidden='true'></i></a>
              </div>
              <div class="choice">
                <img src="../assets/interior/interior-item3-img3.png" alt="공간3 아이템2">
                <a href="#">
                  <span>22</span>
                  <i class='fa fa-check' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </div>

          <!-- interior-content Bottom -->
          <div class="bottom">
            <a href="#">
              <i class='fa  fa-comment' aria-hidden='true'></i>
              코멘트 쓰기
            </a>
          </div>

        </div><!-- Content1 Area End -->


      </div><!-- Interior-content Area End -->

    </div><!-- CONTENTS AREA END -->

    <!-- Footer Area Start -->
    <Footer></Footer>


  </div>
</template>

<script>
  import Header from '../components/component/Header.vue'
  import Footer from '../components/component/Footer.vue'

  export default {
    name: 'Interior',
    components: {
      Header,
      Footer
    },
    mounted() {
      this.interiorTab();
      this.inScroll();
      this.talkScroll();
      this.inTalk1();
      this.inTalk2();
      this.inTalk3();
    },
    methods: {
      interiorTab(){
        $('#footer a').removeClass('on2');
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(2).addClass('on');

      },
      inScroll() {
        $(window).scroll(function () {

          var WinPos = $(window).scrollTop();
          // var BackPos = $('#interior .back').offset().top;
          var Back = $('#interior .back');
          var upBtn = $('#interior .interior-title>div>a ');

          //  console.log(TabPos);
          //  console.log(WinPos);

          if (WinPos >= 100) {
            Back.addClass('back-active');
            upBtn.addClass('upBtn');
          } else {
            Back.removeClass('back-active');
            upBtn.removeClass('upBtn');
          }
        });
      },
      
      talkScroll(){

        $(window).scroll(function () {

          var WinPos = $(window).scrollTop();
          // var BackPos = $('#interior .back').offset().top;
          var Back = $('#interior .back');
          var upBtn = $('#interior .interior-title>div>a ');

          //  console.log(TabPos);
          //  console.log(WinPos);

          if (WinPos >= 100) {
            Back.addClass('back-active');
            upBtn.addClass('upBtn');
          } else {
            Back.removeClass('back-active');
            upBtn.removeClass('upBtn');
          }
        });

      },

      inTalk1() {
        var $item1 = $('.c1 .choice').on('click', function (e) {
          var idx = $(this).index();

          if (idx == 0) {
            $item1.find('a').removeClass('chk');
            $item1.find('a').eq(0).addClass('chk');
          } else {
            $item1.find('a').removeClass('chk');
            $item1.find('a').eq(1).addClass('chk')
          }
          e.preventDefault();
        });
      },

      inTalk2() {
        var $item2 = $('.c2 .choice').on('click', function (e) {
          var idx = $(this).index();

          if (idx == 0) {
            $item2.find('a').removeClass('chk');
            $item2.find('a').eq(0).addClass('chk');
          } else {
            $item2.find('a').removeClass('chk');
            $item2.find('a').eq(1).addClass('chk')
          }
          e.preventDefault();
        });
      },

        inTalk3() {
        var $item3 = $('.c3 .choice').on('click', function (e) {
          var idx = $(this).index();

          if (idx == 0) {
            $item3.find('a').removeClass('chk');
            $item3.find('a').eq(0).addClass('chk');
          } else {
            $item3.find('a').removeClass('chk');
            $item3.find('a').eq(1).addClass('chk')
          }
          e.preventDefault();
        });
      }
    }
  }

</script>

<style scoped>
  /* ******************* 레이아웃 구성시작 **************** */
  .wrap {
    width: 100%;
    height: 100%;
  }

  /* ******************* 공통영역 선언시작 **************** */
  /* *********** menubar-top *********** */
  #header {
    width: 100%;
    margin-bottom: 5px;

    /* 수정사항1 - 상단바 배경, 하단 라인, fixed 설정, z-index 최고강도(10) */

    position: fixed;
    top: 0px;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid #e2e2e2;
  }

  #header .menubar-top {
    width: 100%;
    height: auto;
    padding: 40px 23px 0;
    text-align: center;
  }

  #header .menubar-top::after {
    content: '';
    display: block;
    clear: both;
  }

  /* logo */
  #header .menubar-top .logo {
    display: block;
    width: 13%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
  }

  /* search */
  #header .menubar-top .search {
    width: 81%;
    height: 34px;
    float: right;
    color: #7b7979;
  }

  #header .menubar-top .search .search-bar {
    width: 80%;
    height: 100%;
    border-radius: 10px;
    background-color: rgba(173, 173, 173, 0.27);
    font: 400 1.5rem/34px 'Nanum Gothic', sans-serif;
    text-indent: 10px;
    text-align: left;
    float: left;
    margin-right: 19px;
  }

  #header .menubar-top .search i {
    width: 12%;
    float: left;
    font-size: 2.7rem;
    height: 100%;
    line-height: 34px;
  }


  /* *********** tab-menu *********** */
  .tab-menu {
    width: 100%;
    height: 35px;
    margin: 15px 0 0;
  }

  .tab-menu ul li {
    width: 25%;
    height: 100%;
    text-align: center;
    float: left;
  }

  .tab-menu ul li a {
    display: block;
    width: 100%;
    height: 100%;
    font: bold 1.5rem/34px 'Nanum Gothic', sans-serif;
    color: #7b7979;
    position: relative;
  }

  .tab-menu ul li a:hover {
    color: #9660a2;
  }

  .tab-menu ul li a:hover::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    color: #9660a2;
    background-color: #9660a2;
    position: absolute;
    left: 0;
    bottom: 0px;
  }

  /* 탭 활성화 클래스 */
  .on {
    color: #9660a2 !important;
    position: relative;
  }

  .on::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    color: #9660a2;
    background-color: #9660a2 !important;
    position: absolute;
    left: 0;
    bottom: 0px;
  }

  /* 수정2 하단 탭 활성화 */
  .on2 {
    color: #9660a2 !important;
  }


  /* *********** footer *********** */
  #footer {
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e2e2e2;
    background-color: #fff;
  }

  #footer a {
    display: block;
    width: 25%;
    height: 84px;
    float: left;
    text-align: center;
    padding-top: 15px;
    color: #7b7979;
    font: bold 1.4rem/14px 'Nanum Gothic', sans-serif;
  }

  #footer a:hover {
    color: #9660a2;
  }

  #footer a span {
    display: block;
    font-size: 2.6rem;
    margin-bottom: 10px;
  }



  /* ******************* 개별영역 선언시작 **************** */

  /* ********************************** INTERIOR AREA START **************** */

  /* 스크롤 시, 박스 쉐도우 효과 */
  #interior .back {
    -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    -moz-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    -o-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  /* 돌아가기 버튼 Sticky 동작 CLASS */
  .back-active {
    -webkit-box-shadow: 0px 10px 15px rgb(0 0 0 / 10%) !important;
    -moz-box-shadow: 0px 10px 15px rgb(0 0 0 / 10%) !important;
    -o-box-shadow: 0px 10px 15px rgb(0 0 0 / 10%) !important;
    box-shadow: 0px 10px 15px rgb(0 0 0 / 10%) !important;
  }

  /* 참견톡 쓰기 스크롤 동작 CLASS */
  .upBtn {
    background-color: #333 !important;
    transform: translateY(-10px) !important;
    box-shadow: 0px 3px 10px rgb(0 0 0 / 60%) !important;
  }

  #interior #contents {
    width: 100%;
    height: 1210px;
    position: relative;
    top: 194px;
  }

  /* *****  BACK Area Start ***** */
  #interior .back {
    width: 100%;
    height: 70px;
    position: fixed;
    top: 128px;
    z-index: 9;
    /* 최대강도 : 10 */
    background-color: #fff;
  }

  #interior .back a {
    display: block;
    width: 100px;
    height: 100%;
    margin-left: 5%;
    font: 700 2rem/70px 'Nanum Gothic', sans-serif;
    position: absolute;
    left: 0;
    top: 0;
  }

  #interior .back a:nth-child(2){
    position: absolute;
    left: 30px;
    top: -7px;
  }

  #interior .back a i {
    font-size: 4rem;
    margin-right: 15px;
  }


  /* *************  Interior Title Area Start ************* */
  #interior .interior-title {
    width: 100%;
    height: 548px;
    margin-bottom: 30px;
    margin-top: 14px;
  }

  #interior .interior-title>div {
    width: 80%;
    height: 100%;
    margin: auto;
  }

  #interior .interior-title>div>h1 {
    width: 100%;
    height: 118px;
    margin: 8px 0px 45px;
    color: #333;
    font: 700 3.5rem/90px 'Nanum Gothic', sans-serif;
    position: relative;
  }

  #interior .interior-title>div>h1>img {
    width: 28%;
    position: absolute;
    top: 20px;
    right: 0;
  }

  #interior .interior-title>div>img {
    width: 25%;
    position: absolute;
    right: 0;
    top: 16px;
  }

  #interior .interior-title>div>p {
    width: 100%;
    text-align: center;
    color: #7B7979;
    font: 700 1.8rem/1.7 'Nanum Gothic', sans-serif;
  }

  #interior .interior-title>div>p:nth-child(5) {
    margin-top: 10px;
    color: #9F5BA6;
    font: 700 55px/1.5 'Nanum Gothic', sans-serif;
  }

  #interior .interior-title>div>p:nth-child(5) span {
    font: 700 4rem/1.5 'Nanum Gothic', sans-serif;
  }

  #interior .interior-title>div>a {
    display: block;
    width: 85%;
    height: 50px;
    position: relative;
    border-radius: 26px;
    margin: 30px auto;
    background-color: #9660a2;
    color: #fff;
    font: 700 1.8rem/50px 'Nanum Gothic', sans-serif;

    -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    -moz-box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    -o-box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
    box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);

    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  #interior .interior-title>div>a:hover {
    background-color: #333;

    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -o-transform: translateY(-10px);
    transform: translateY(-10px);

    -webkit-box-shadow: 0px 3px 10px rgb(0 0 0 / 60%);
    -moz-box-shadow: 0px 3px 10px rgb(0 0 0 / 60%);
    -o-box-shadow: 0px 3px 10px rgb(0 0 0 / 60%);
    box-shadow: 0px 3px 10px rgb(0 0 0 / 60%);

  }

  #interior .interior-title>div>a>span {
    margin-left: 60px;
  }

  #interior .interior-title>div>a>img {
    position: absolute;
    right: 60px;
    top: 9px;
  }


  /* *************  Interior Contents Area Start ************* */
  #interior #contents .interior-content {
    width: 100%;
    height: 100%;
  }


  /* *************  Content1 ************* */
  #interior #contents .interior-content .content {
    width: 90%;
    height: 344px;
    margin: auto;
    background-color: #9660a2;
    margin-bottom: 30px;
    overflow: hidden;
  }

  /* top */
  #interior #contents .interior-content .content .top {
    position: relative;
    width: 100%;
    height: 27%;
    color: #fff;
  }

  /* 티켓모양  */
  #interior #contents .interior-content .content .top::before {
    content: '';
    display: block;
    width: 30px;
    height: 40px;
    background: #fff;
    position: absolute;
    left: -23px;
    top: 60px;

    -webkit-transform: rotate(64deg) skewY(-34deg);
    -moz-transform: rotate(64deg) skewY(-34deg);
    -o-transform: rotate(64deg) skewY(-34deg);
    transform: rotate(64deg) skewY(-34deg);
  }

  #interior #contents .interior-content .content .top::after {
    content: '';
    display: block;
    width: 30px;
    height: 40px;
    background: #fff;
    position: absolute;
    right: -19px;
    top: 58px;

    -webkit-transform: rotate(60deg) skewY(-34deg);
    -moz-transform: rotate(60deg) skewY(-34deg);
    -o-transform: rotate(60deg) skewY(-34deg);
    transform: rotate(60deg) skewY(-34deg);
  }


  #interior #contents .interior-content .content .top>i {
    position: absolute;
    left: 7%;
    top: 20%;
    font-size: 4rem;
  }

  #interior #contents .interior-content .content .top>p:nth-child(2) {
    position: absolute;
    top: 20%;
    left: 23%;
    font: 700 1.5rem/1.3 'Nanum Gothic, sans-serif';
  }

  #interior #contents .interior-content .content .top>p:nth-child(3) {
    position: absolute;
    bottom: 39%;
    right: 10%;
    font: 700 1.5rem/1.3 'Nanum Gothic, sans-serif';
  }

  /* mid */

  /* 체크 버튼 활성화 클래스 */
  .chk {
    background-color: #fff !important;
  }

  .chk i {
    color: #1FB7B7 !important;
  }


  #interior #contents .interior-content .content .mid {
    position: relative;
    width: 100%;
    height: 60%;
  }

  #interior #contents .interior-content .content .mid>img {
    position: absolute;
    left: 5%;
    top: 10%;
    box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
    border-radius: 7%;
  }

  #interior #contents .interior-content .content .mid>div:nth-child(2) {
    width: 44%;
    height: 100%;
    float: right;
    padding: 11% 0;
  }

  #interior #contents .interior-content .content .mid>div:nth-child(2)>div {
    margin-bottom: 5%;
    transition: all 0.2s ease;
  }

  #interior #contents .interior-content .content .mid>div>div>a {
    display: inline-block;
    width: 55px;
    height: 55px;
    background: #ccc;
    float: right;
    margin-right: 16%;
    margin-top: 3%;
    border-radius: 27.5px;
    position: relative;
    transition: all 0.2s ease;
  }

  #interior #contents .interior-content .content .mid>div>div>a:hover {
    background-color: #fff;
  }

  #interior #contents .interior-content .content .mid>div>div>a:hover i {
    color: #1FB7B7;
  }

  #interior #contents .interior-content .content .mid>div>div>a>i {
    position: absolute;
    font-size: 3.5rem;
    color: #9660a2;
    top: 16%;
    left: 18%;
  }

  #interior #contents .interior-content .content .mid>div>div>a>span {
    position: relative;
    top: -14%;
    right: -72%;
    display: block;
    width: 25px;
    height: 25px;
    background: #333;
    border-radius: 12.5px;
    text-align: center;
    color: #fff;
    font: 700 1.2rem/25px 'Nanum Gothic,sans-serif';
  }

  #interior #contents .interior-content .content .bottom {
    position: relative;
    width: 100%;
    height: 13%;
    background-color: #EEDCF2;
  }

  #interior #contents .interior-content .content .bottom>a {
    position: absolute;
    top: 10%;
    left: 5%;
    font: 700 1.5rem/2.5 'Nanum Gothic, sans-serif';
    color: #9660a2;
  }

  #interior #contents .interior-content .content .bottom>a>i {
    font-size: 2.5rem;
  }

</style>
