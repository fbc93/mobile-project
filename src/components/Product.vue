<template>
  <div id="product">
    <!-- Header Area Start -->
    <div id="header">

      <!-- menubar-top -->
      <div class="menubar-top">
        <!-- 뒤로가기 -->
        <router-link to="/diy" class="back">
          <i class='fa fa-angle-left' aria-hidden='true'></i>
        </router-link>

        <!-- title -->
        <div class="icon">
          <i class='fa fa-search' aria-hidden='true'></i>
          <i class='fa fa-shopping-bag' aria-hidden='true'></i>
        </div>
      </div>

    </div><!-- Header Area End -->


    <!-- Contents Area Start -->
    <div id="contents">

      <div class="product-category">DIY > 소파/거실</div>

      <!-- product img slider -->
      <div class="product-img">

        <!-- swiper Image -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/product/product-img1.png" alt="상품이미지1"></div>
            <div class="swiper-slide"><img src="../assets/product/product-img2.png" alt="상품이미지2"></div>
            <div class="swiper-slide"><img src="../assets/product/product-img3.png" alt="상품이미지3"></div>
          </div>

          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>

        </div>

      </div>

      <!-- product title -->
      <div class="product-title">
        <a href="#">모던하우스 <i class='fa fa-angle-right' aria-hidden='true'></i></a>
        <h2>거실 우드 수납장</h2>
        <div class="price">22%<span>67,900원</span></div>
        <div class="rating">
          <i class='fa fa-star' aria-hidden='true'></i>4.6
          <span>리뷰 165개</span>
        </div>
      </div>

      <!-- product information -->
      <div class="product-infor">
        <!-- level -->
        <div class="level">
          조립 난이도
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <span>조립 고수들만 가능!</span>
        </div>

        <!-- delivery -->
        <div class="delivery">
          배송 정보 <i class='fa fa-angle-right' aria-hidden='true'></i>
          <span>무료 배송</span>
        </div>

        <!-- tab-menu -->
        <div class="tab-wrap">
          <ul>
            <li>
              <a href="#">상품 정보</a>
              <div class="tab-content tab-content1">
                상품 정보
              </div>
            </li>
            <li>
              <a href="#">리뷰 (165)</a>
              <div class="tab-content tab-content2">
                리뷰 목록
              </div>
            </li>
            <li>
              <a href="#">문의 (185)</a>
              <div class="tab-content tab-content3">
                문의 목록
              </div>
            </li>
            <li>
              <a href="#">배송/환불</a>
              <div class="tab-content tab-content4">
                배송/환불 안내 정보
              </div>
            </li>
          </ul>


        </div>

      </div>

    </div><!-- Contents Area End -->

    <!-- Footer Area Start -->
    <div id="footer">
      <i class='fa fa-bookmark-o' aria-hidden='true'></i>
      <a href="#" class="btn">구매하기</a>
    </div><!-- Footer Area End -->

  </div>
</template>

<script>
  export default {
    name: 'Product',
    mounted() {
      this.swiperSlider();
      this.tabActive();
    },
    methods: {
      swiperSlider() {
        const swiper = new Swiper('#product .swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,

          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

        });
      },
      tabActive() {
        var tabMenu = $('.tab-wrap>ul>li>a');
        var tabContent = $('.tab-wrap .tab-content');

        //초기값 설정
        $('.tab-wrap>ul>li:first-child>a').addClass('on').next().css('display', 'block');

        tabMenu.click(function (e) {
          tabMenu.removeClass('on');
          tabContent.css('display', 'none');

          $(this).addClass('on').next().css('display', 'block');
          e.preventDefault();
        });

      }
    }
  }
</script>

<style scoped>
  /* *********** btn *********** */
  .btn {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font: bold 1.5rem/39px '맑은 고딕', sans-serif;
    color: #fff;
    background-color: #9f5ba6;
    border-radius: 30px;
  }

  .btn:hover {
    background-color: #952fa0;
  }

  /* *********** Header Area Start *********** */
  #header {
    width: 100%;
  }

  /* menubar-top */
  #header .menubar-top {
    width: 100%;
    height: auto;
    padding: 40px 23px 0 24px;
    text-align: center;
    border-bottom: 1px solid #E2E2E2;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
  }

  #header .menubar-top::after {
    content: '';
    display: block;
    clear: both;
  }

  #product #header .menubar-top .icon {
    height: 34px;
    line-height: 34px;
    color: #7b7979;
    font-size: 2.7rem;
    position: absolute;
    right: 0;
    right: 33px;
  }

  #product #header .menubar-top .icon i:first-child {
    margin-right: 10px;
  }

  #product #header .menubar-top {
    padding-bottom: 24px;
    border-bottom: 1px solid #E2E2E2;
  }

  /* back button */
  #header .menubar-top .back {
    display: block;
    width: 5%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
    color: #7b7979;
  }

  #header .menubar-top .back i {
    font-size: 3.4rem;
    line-height: 34px;
  }

  /* *********** Contents Area Start *********** */
  #product #contents {
    padding: 125px 23px 25px 23px;
  }

  /* product-category */
  #product #contents .product-category {
    width: 100%;
    height: 16px;
    font: 400 1.2rem/16px '맑은고딕', sans-serif;
    color: #464646;
    margin-bottom: 25px;
  }

  /* product-img */
  #product #contents .product-img {
    width: 344px;
    height: 314px;
    margin-bottom: 22px;
  }

  /* product-title */
  #product #contents .product-title {
    width: 100%;
    height: 120px;
    margin-bottom: 15px;
  }

  #product #contents .product-title a {
    display: block;
    width: 100%;
    height: 16px;
    font: bold 1.2rem/16px '맑은고딕', sans-serif;
    color: #7b7979;
    margin-bottom: 3px;
  }

  #product #contents .product-title a i {
    font-size: 1.4rem;
  }

  #product #contents .product-title h2 {
    width: 100%;
    height: 31px;
    font: bold 2.3rem/31px '맑은고딕', sans-serif;
    color: #2d2d2d;
    margin-bottom: 4px;
  }

  #product #contents .product-title .price {
    width: 100%;
    height: 27px;
    font: bold 2rem/27px '맑은고딕', sans-serif;
    color: #9f5ba6;
    margin-bottom: 7px;
  }

  #product #contents .product-title .price span {
    font-size: 1.7rem;
    line-height: 23px;
    color: #2d2d2d;
    margin-left: 7px;
  }

  #product #contents .product-title .rating {
    width: 100%;
    height: 15px;
    font: bold 1.1rem/15px '맑은고딕', sans-serif;
    color: #2d2d2d;
  }

  #product #contents .product-title .rating i {
    font-size: 1.2rem;
    color: #9f5ba6;
    margin-right: 4px;
  }

  #product #contents .product-title .rating span {
    color: #7b7979;
    margin-left: 4px;
  }

  /* product-infor */
  #product #contents .product-infor {
    width: 100%;
    height: auto;
  }

  #product #contents .product-infor .level,
  #product #contents .product-infor .delivery,
  #product #contents .product-infor .tab-menu {
    width: 100%;
    height: 50px;
    border-top: 1px solid #e2e2e2;
  }

  /* level */
  #product #contents .product-infor .level {
    font: bold 1.5rem/50px '맑은고딕', sans-serif;
    color: #2d2d2d;
  }

  #product #contents .product-infor .level i {
    color: #9f5ba6;
  }

  #product #contents .product-infor .level span {
    float: right;
  }

  /* delivery */
  #product #contents .product-infor .delivery {
    font: bold 1.3rem/50px '맑은고딕', sans-serif;
    color: #2d2d2d;
  }

  #product #contents .product-infor .delivery i {
    font-size: 1.5rem;
  }

  #product #contents .product-infor .delivery span {
    margin-left: 15px;
    color: #7b7979;
  }

  /* tab-menu */
  #product #contents .product-infor .tab-wrap {
    width: 100%;
    height: 170px;
    margin: 0;
    border-bottom: 1px solid #e2e2e2;
  }

  #product #contents .product-infor .tab-wrap>ul {
    width: 100%;
    height: 100%;
    position: relative;
  }

  #product #contents .product-infor .tab-wrap>ul>li {
    float: left;
    width: 25%;
    text-align: center;
  }

  #product #contents .product-infor .tab-wrap>ul>li>a {
    display: block;
    width: 100%;
    height: 50px;
    font: bold 1.3rem/50px 'Nanum Gothic', sans-serif;
    line-height: 50px;
    color: #7b7979;
  }

  #product #contents .product-infor .tab-wrap>ul>li>a:hover {
    color: #9f5ba6;
  }

  #product #contents .product-infor .tab-wrap .tab-content {
    padding-top: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }

  /* 메뉴 활성화 클래스 */
  .on {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
  }

  .on::after {
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

  /* footer */
  #product #footer {
    width: 100%;
    height: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    /* 최대강도 : 10 */
    border-top: 1px solid #e2e2e2;
    background-color: #fff;
  }

  #product #footer i {
    font-size: 3.6rem;
    width: 8%;
    display: block;
    float: left;
    margin: 15px 0 14px 23px;
    color: #9f5ba6;
  }

  #product #footer .btn {
    float: right;
    display: block;
    width: 75%;
    height: 39px;
    margin: 15px 23px 14px 18px;
    font: bold 1.8rem/39px '맑은고딕', sans-serif;
    padding-top: 0;
    color: #fff;
  }



  /* swiper */
  .swiper-container {
    width: 344px;
    height: 314px;
    margin: 0;
  }

  .swiper-container>.swiper-pagination-bullet-active {
    background-color: #ecebeb;
  }
</style>