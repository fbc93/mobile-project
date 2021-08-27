<template>
  <div id="diy">

    <!-- Header Area Start -->
    <div id="header">

      <!-- menubar-top -->
      <div class="menubar-top">
        <!-- 뒤로가기 -->
        <router-link to="/store" class="back">
          <i class='fa fa-angle-left' aria-hidden='true'></i>
        </router-link>

        <!-- title -->
        <div class="title">
          <h1 class="category-title">DIY</h1>
          <i class='fa fa-search' aria-hidden='true'></i>
        </div>
      </div>

      <!-- tab-menu -->
      <div class="tab-menu">
        <ul class="tabs">
          <li v-on:click="trendTab">
            <router-link to="/">트렌드</router-link>
          </li>
          <li v-on:click="bestTab">
            <router-link to="/best">베스트</router-link>
          </li>
          <li v-on:click="comTab">
            <router-link to="/community">커뮤니티</router-link>
          </li>
          <li v-on:click="storeTab">
            <router-link to="/store">스토어</router-link>
          </li>
        </ul>
      </div>

    </div><!-- Header Area End -->


    <!-- Contents Area Start -->
    <div id="contents">


      <div id="slider1">
        <div class="swiper-container">
          <!-- diy category -->
          <div class="category swiper-wrapper">
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon1.png" alt="DIY 메뉴 카테고리1">
              </div>
              <p>소파/거실</p>
            </a>
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon2.png" alt="DIY 메뉴 카테고리2">
              </div>
              <p>침실가구</p>
            </a>
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon3.png" alt="DIY 메뉴 카테고리3">
              </div>
              <p>수납/정리</p>
            </a>
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon4.png" alt="DIY 메뉴 카테고리4">
              </div>
              <p>식탁/테이블</p>
            </a>
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon5.png" alt="DIY 메뉴 카테고리5">
              </div>
              <p>홈데코조명</p>
            </a>
            <a href="#" class="swiper-slide">
              <div class="img-box">
                <img src="../assets/diy/diy-menu-icon6.png" alt="DIY 메뉴 카테고리6">
              </div>
              <p>반려동물</p>
            </a>
          </div>
        </div>
      </div>


      <!-- diy level -->
      <div id="slider2">
        <!-- diy-level-title -->
        <h2>조립 난이도별 추천!</h2>
        <div class="swiper-container">
          <!-- diy-level-content -->
          <div class="diy-level swiper-wrapper">
            <a href="#" class="swiper-slide">
              <div class="icon">
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
              <img src="../assets/diy/diy-level-img1.png" alt="DIY 난이도 이미지1">
            </a>
            <a href="#" class="swiper-slide">
              <div class="icon">
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
              <img src="../assets/diy/diy-level-img2.png" alt="DIY 난이도 이미지2">
            </a>
            <a href="#" class="swiper-slide">
              <div class="icon">
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
              <img src="../assets/diy/diy-level-img3.png" alt="DIY 난이도 이미지3">
            </a>
            <a href="#" class="swiper-slide">
              <div class="icon">
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
              <img src="../assets/diy/diy-level-img4.png" alt="DIY 난이도 이미지4">
            </a>
            <a href="#" class="swiper-slide">
              <div class="icon">
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
                <i class='fa fa-star' aria-hidden='true'></i>
              </div>
              <img src="../assets/diy/diy-level-img5.png" alt="DIY 난이도 이미지5">
            </a>
          </div>
        </div>
      </div>

      <!-- diy product -->
      <div class="product-list">
        <p>상품 1,540 건
          <span>
            인기순 <i class="fa fa-angle-down" aria-hidden="true"></i> <i class="fa fa-filter" aria-hidden="true"></i> 필터
          </span>
        </p>
        <!-- diy product list -->
        <ul>
          <li v-for="product in diyProducts" v-bind:key="product.diy_product_id">
            <router-link to="/product">
              <div class="img-box">
                <img v-bind:src="product.diy_product_img">
                <div class="bookmark">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
              </div>
              <h3 class="product-title">{{ product.diy_product_name }}</h3>
              <div class="price"><span>{{ product.diy_product_price_discount }}</span>{{ product.diy_product_price }}
              </div>
              <div class="rating">
                <i class='fa fa-star' aria-hidden='true'></i>{{ product.diy_product_rating_star }}
                <span>{{ product.diy_product_rating_review }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

    </div><!-- Contents Area End -->

    <Footer></Footer>

  </div>
</template>

<script>
  import Footer from '../components/component/Footer'
  import db from '../db'

  export default {
    name: 'Diy',
    data() {
      return {
        diyProducts: []
      }
    },
    components: {
      Footer
    },
    mounted() {
      this.storeTab();
      this.swiperSlide1();
      this.swiperSlide2();
      this.getDiyProduct();
    },
    methods: {
      trendTab() {
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(0).addClass('on');
        $('#footer a').eq(0).addClass('on2');
      },
      bestTab() {
        $('#footer a').removeClass('on2');
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(1).addClass('on');
      },
      comTab() {
        $('#footer a').removeClass('on2');
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(2).addClass('on');
      },
      storeTab() {
        $('#footer a').removeClass('on2');
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(3).addClass('on');
      },
      swiperSlide1() {
        var swiper = new Swiper('#slider1 .swiper-container', {
          // Optional parameters
          // Default parameters
          slidesPerView: 4,
          spaceBetween: 8,
          freeMode: true,

          // Optional parameters
          direction: 'horizontal',
          loop: false,
          autoplay: false

        });
      },
      swiperSlide2() {
        var swiper = new Swiper('#slider2 .swiper-container', {
          // Optional parameters
          // Default parameters
          slidesPerView: 4,
          spaceBetween: 10,
          freeMode: true,

          // Optional parameters
          direction: 'horizontal',
          loop: false,
          autoplay: false

        });
      },
      getDiyProduct() {
        db.collection('diy_product').orderBy('diy_product_id').get().then(querySnapshot => {
          const diyProducts = []

          querySnapshot.forEach(doc => {
            // console.log(doc.data());
            diyProducts.push(doc.data());
          })
          this.diyProducts = diyProducts;
        })
      }
    }
  }
</script>

<style scoped>
  /* ******************* Header Area Start ******************* */
  #diy {
    padding-top: 129px;
  }

  #diy #header {
    width: 100%;
    margin-bottom: 5px;
    background-color: #fff;
    z-index: 10;
    position: fixed;
    top: 0;
  }

  /*  menubar-top  */
  #diy #header .menubar-top {
    width: 100%;
    height: auto;
    padding: 40px 23px 0;
    text-align: center;
  }

  #diy #header .menubar-top::after {
    content: '';
    display: block;
    clear: both;
  }

  /* logo */
  #diy #header .menubar-top .logo {
    display: block;
    width: 13%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
  }

  /* search */
  #diy #header .menubar-top .search {
    width: 81%;
    height: 34px;
    float: right;
    color: #7b7979;
  }

  #diy #header .menubar-top .search .search-bar {
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

  #diy #header .menubar-top .search i {
    width: 12%;
    float: left;
    font-size: 2.7rem;
    height: 100%;
    line-height: 34px;
  }

  /* back button */
  #diy #header .menubar-top .back {
    display: block;
    width: 5%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
    color: #7b7979;
  }

  #diy #header .menubar-top .back i {
    font-size: 3.4rem;
    line-height: 34px;
  }

  /* title */
  #diy #header .menubar-top .title {
    width: 81%;
    height: 34px;
    float: right;
    color: #7b7979;
  }

  #diy #header .menubar-top .title h1 {
    width: 69%;
    padding-right: 0;
    margin: 0;
  }

  #diy #header .menubar-top .title {
    width: 81%;
    height: 34px;
    float: right;
    color: #7b7979;
  }

  #diy #header .menubar-top .title .category-title {
    width: 80%;
    height: 100%;
    font: bold 2rem/34px '맑은 고딕', sans-serif;
    color: #2d2d2d;
    text-align: center;
    float: left;
    margin-right: 19px;
  }

  #diy #header .menubar-top .title i {
    float: left;
    font-size: 2.7rem;
    height: 100%;
    line-height: 34px;
    position: absolute;
    right: 0;
    right: 33px;
  }

  /* *********** tab-menu *********** */
  #diy .tab-menu {
    width: 100%;
    height: 35px;
    margin: 15px 0 0;
  }

  #diy .tab-menu .tabs {
    height: 40px;
  }

  #diy .tab-menu ul li {
    width: 25%;
    height: 100%;
    text-align: center;
    float: left;
  }

  #diy .tab-menu ul li a {
    display: block;
    width: 100%;
    height: 100%;
    font: bold 1.5rem/34px 'Nanum Gothic', sans-serif;
    color: #7b7979;
    position: relative;
  }

  #diy .tab-menu ul li a:hover {
    color: #9660a2;
  }

  #diy .tab-menu ul li a:hover::after {
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


  /* ******************* Contents Area Start ******************* */
  /* content */
  #diy #contents {
    width: 100%;
    padding: 31px 23px;
  }

  /* category */
  #diy #contents .category {
    width: 100%;
  }

  #diy #contents .category>a {
    width: 71px;
    height: 97px;
    text-align: center;
    display: inline-block;
    margin-right: 24px;
    padding: 0 2%;
    margin-bottom: 20px;
  }

  #diy #contents .category>a .img-box {
    width: 70px;
    height: 70px;
    position: relative;
    margin: 0 auto;
    background-color: #ecebeb;
    border-radius: 50%;

  }

  #diy #contents .category>a .img-box:hover {
    background-color: rgb(228, 228, 228);
  }

  #diy #contents .category>a>div>img {
    width: 45px;
    height: 45px;
    position: absolute;
    left: 50%;
    top: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #diy #contents .category>a p {
    width: 71px;
    color: #464646;
    font: bold 1.3rem/18px '맑은 고딕', sans-serif;
    text-align: center;
    margin-top: 11px;
  }


  /* diy-level */
  #diy #contents #slider2 {
    border-top: 1px solid #e2e2e2;
  }

  #diy #contents .diy-level {
    margin-bottom: 29px;
  }

  #diy #contents h2 {
    margin: 22px auto;
    font: bold 1.8rem/24px '맑은고딕', sans-serif;
    color: #464646;
  }

  #diy #contents .diy-level::after {
    content: '';
    display: block;
    clear: both;
  }

  #diy #contents .diy-level a {
    display: block;
    float: left;
    margin-right: 20px;
  }

  #diy #contents .diy-level a:last-child {
    margin-right: 0;
  }

  #diy #contents .diy-level a .icon {
    font-size: 1.2rem;
    color: #9f5ba6;
    margin: 0 0 6px;
    padding: 0;
  }

  #diy #contents .diy-level a:last-child .icon {
    width: 73px;
  }


  /* product-list */
  #diy #contents .product-list {
    width: 100%;
    height: 857px;

    padding-top: 29px;
    margin-bottom: 100px;
    border-top: 1px solid #e2e2e2;
  }

  #diy #contents .product-list p {
    width: 100%;
    margin: 0 0 22px;
    font: 400 1.2rem/13px '맑은고딕', sans-serif;
  }

  #diy #contents .product-list p span {
    margin-left: 40%;
  }

  #diy #contents .product-list p span i:first-child {
    margin-right: 28px;
  }

  #diy #contents .product-list h2 {
    color: #464646;
    font: bold 1.8rem/24px '맑은 고딕', sans-serif;
    margin-bottom: 22px;
  }

  #diy #contents .product-list ul {
    width: 100%;
    height: auto;
  }

  #diy #contents .product-list ul li {
    width: 46%;
    height: 253px;
    float: left;
    margin: 0 23px 23px 0;
    color: #2d2d2d;
  }

  #diy #contents .product-list ul li:first-child img {
    border: 3px solid #7b7979;
    border-radius: 12px;
  }

  #diy #contents .product-list ul li:nth-child(2n) {
    margin-right: 0;
  }

  #diy #contents .product-list ul li .img-box {
    width: 160px;
    height: 160px;
    position: relative;
  }

  #diy #contents .product-list ul li .img-box a {
    right: 30px;
    bottom: 30px;
  }

  #diy #contents .product-list ul li .img-box img {
    width: 100%;
    height: 100%;
  }

  #diy #contents .product-list ul li .img-box .bookmark {
    position: absolute;
    right: 7px;
    bottom: 5px;
    color: #9f5ba6;
    font-size: 2rem;
    cursor: pointer;
  }

  #diy #contents .product-list ul li .product-title {
    width: 100%;
    height: 42px;
    margin: 12px 0 3px;
    font: 400 1.5rem/20px '맑은 고딕', sans-serif;

  }

  #diy #contents .product-list ul li .price {
    width: 100%;
    height: 20px;
    margin-bottom: 4px;
    font: bold 1.4rem/18px '맑은 고딕', sans-serif;
  }

  #diy #contents .product-list ul li .price span {
    font: bold 1.5rem/20px '맑은 고딕', sans-serif;
    color: #9f5ba6;
    margin-right: 8px;
  }

  #diy #contents .product-list ul li .rating {
    width: 100%;
    height: 12px;
    font: bold 0.9rem/12px '맑은 고딕', sans-serif;

  }

  #diy #contents .product-list ul li .rating i {
    font-size: 1rem;
    margin-right: 4px;
    color: #9f5ba6;
  }

  #diy #contents .product-list ul li .rating span {
    color: #7b7979;
    margin-left: 7px;
  }

  /* swiper-container */
  #diy .swiper-container {
    width: 100%;
  }
</style>