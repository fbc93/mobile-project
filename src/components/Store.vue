<template>
  <div id="store">

    <!-- Header Area Start -->
    <Header></Header>

    <!-- Contents Area Start -->
    <div id="contents">

      <!-- category -->
      <div class="category">
        <router-link to="/diy">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon1.png" alt="스토어 카테고리 아이콘1">
          </div>
          <p>DIY</p>
        </router-link>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon2.png" alt="스토어 카테고리 아이콘2">
          </div>
          <p>소파/거실</p>
        </a>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon3.png" alt="스토어 카테고리 아이콘3">
          </div>
          <p>침구</p>
        </a>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon4.png" alt="스토어 카테고리 아이콘4">
          </div>
          <p>침실가구</p>
        </a>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon5.png" alt="스토어 카테고리 아이콘5">
          </div>
          <p>주방</p>
        </a>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon6.png" alt="스토어 카테고리 아이콘6">
          </div>
          <p>가전</p>
        </a>
        <a href="#">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon7.png" alt="스토어 카테고리 아이콘7">
          </div>
          <p>수납/정리</p>
        </a>
        <a href="#" v-on:click="popUp">
          <i class='fa fa-plus' aria-hidden='true'></i>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon8.png" alt="스토어 카테고리 아이콘8">
          </div>
          <p>러그/카페트</p>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon9.png" alt="스토어 카테고리 아이콘9">
          </div>
          <p>반려동물</p>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon10.png" alt="스토어 카테고리 아이콘10">
          </div>
          <p>홈데코조명</p>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon11.png" alt="스토어 카테고리 아이콘11">
          </div>
          <p>식탁/테이블</p>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon12.png" alt="스토어 카테고리 아이콘12">
          </div>
          <p>생활용품</p>
        </a>
        <a href="#" class="act">
          <div class="img-box">
            <img src="../assets/store/store-menu-icon13.png" alt="스토어 카테고리 아이콘13">
          </div>
          <p>커튼/블라인드</p>
        </a>
      </div>


      <!-- product-list -->
      <div class="product-list">
        <h2>오늘의 추천상품!</h2>
        <ul>
          <li v-for="product in storeProducts" v-bind:key="product.store_product_id">
            <a href="#">
              <div class="img-box">
                <img v-bind:src="product.store_product_img">
                <div class="bookmark">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
              </div>
              <h3 class="product-title">{{ product.store_product_name }}</h3>
              <div class="price">
                <span>{{ product.store_product_price_discount }}</span>{{ product.store_product_price }}</div>
              <div class="rating">
                <i class='fa fa-star' aria-hidden='true'></i>{{ product.store_product_rating_star }}
                <span>{{ product.store_product_rating_review }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div><!-- Contents Area End -->

    <!-- Footer Area Start -->
    <Footer></Footer>


  </div>
</template>

<script>
  import Header from '../components/component/Header.vue'
  import Footer from '../components/component/Footer.vue'
  import db from '../db'

  export default {
    name: 'Store',
    components: {
      Header,
      Footer
    },
    data() {
      return {
        storeProducts: []
      }
    },
    mounted() {
      this.storeTab();
      this.popUp();
      this.getStroeProduct();
    },
    methods: {
      storeTab() {
        $('#footer a').removeClass('on2');
        $('#header .tab-menu ul li a').removeClass('on');
        $('#header .tab-menu ul li a').eq(3).addClass('on');
      },
      getStroeProduct() {
        db.collection("store_product").orderBy("store_product_id").get().then((querySnapshot) => {
          const storeProducts = []
          querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            storeProducts.push(doc.data());
          });
          this.storeProducts = storeProducts;
        });
      },
      popUp() {
        //store category btn
        $('#store #contents .category>a:nth-child(8)').click(
          function (e) {
            $(this).css('display', 'none');
            $('#store #contents .category>a:nth-child(n+9)').removeClass('act').css('display', 'block');
            e.preventDefault();
          });
      }
    }
  }
</script>

<style scoped>
  /* *********** Header Area Start *********** */
  #store {
    padding-top: 129px;
  }

  #store #header {
    width: 100%;
    margin-bottom: 5px;
  }

  /* menubar-top */
  #store #header .menubar-top {
    width: 100%;
    height: auto;
    padding: 40px 23px 0;
    text-align: center;
  }

  #store #header .menubar-top::after {
    content: '';
    display: block;
    clear: both;
  }

  /* logo */
  #store #header .menubar-top .logo {
    display: block;
    width: 13%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
  }

  /* search */
  #store #header .menubar-top .search {
    width: 81%;
    height: 34px;
    float: right;
    color: #7b7979;
  }

  #store #header .menubar-top .search .search-bar {
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

  #store #header .menubar-top .search i {
    width: 12%;
    float: left;
    font-size: 2.7rem;
    height: 100%;
    line-height: 34px;
  }

  /* back button */
  #store #header .menubar-top .back {
    display: block;
    width: 5%;
    height: 34px;
    margin-right: 19px;
    float: left;
    cursor: pointer;
    color: #7b7979;
  }

  #store #header .menubar-top .back i {
    font-size: 3.4rem;
    line-height: 34px;
  }

  /* *********** Contents Area Start *********** */
  #store #contents {
    width: 100%;
    padding: 31px 23px;
  }

  /* category */
  #store #contents .category {
    /* padding: 29px 23px; */
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 9px;
  }

  #store #contents .category>a {
    display: block;
    width: 25%;
    height: 97px;
    padding: 0 2%;
    margin-bottom: 20px;
  }

  #store #contents .category>a:first-child .img-box {
    border: 3px solid #7b7979;
  }

  #store #contents .category>a .img-box {
    width: 68px;
    height: 68px;
    background-color: #ecebeb;
    position: relative;
    margin: 0 auto;
    border-radius: 10px;
  }

  #store #contents .category>a .img-box:hover {
    background-color: rgb(228, 228, 228);
  }

  #store #contents .category>a>div>img {
    width: 56px;
    height: 56px;
    position: absolute;
    left: 50%;
    top: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #store #contents .category>a p {
    color: #464646;
    font: bold 1.3rem/18px '맑은 고딕', sans-serif;
    text-align: center;
    margin-top: 11px;
  }

  #store #contents .category>a:nth-child(8) {
    text-align: center;
    line-height: 97px;
    font-size: 2.5rem;
    color: #7b7979;
  }

  /* product-list */
  #store #contents .product-list {
    width: 100%;
    height: 593px;
    padding-top: 29px;
    margin-bottom: 120px;
    border-top: 1px solid #e2e2e2;
  }

  #store #contents .product-list h2 {
    color: #464646;
    font: bold 1.8rem/24px '맑은 고딕', sans-serif;
    margin-bottom: 22px;
  }

  #store #contents .product-list ul {
    width: 100%;
    height: auto;
  }

  #store #contents .product-list ul li {
    width: 46%;
    height: 253px;
    float: left;
    margin: 0 23px 23px 0;
    color: #2d2d2d;
  }

  #store #contents .product-list ul li:nth-child(2n) {
    margin-right: 0;
  }

  #store #contents .product-list ul li .img-box {
    width: 160px;
    height: 160px;
    position: relative;
  }

  #store #contents .product-list ul li .img-box img {
    width: 100%;
    height: 100%;
  }

  #store #contents .product-list ul li .img-box .bookmark {
    position: absolute;
    right: 7px;
    bottom: 5px;
    color: #9f5ba6;
    font-size: 2rem;
    cursor: pointer;
  }

  #store #contents .product-list ul li .product-title {
    width: 100%;
    height: 42px;
    margin: 12px 0 3px;
    font: 400 1.5rem/20px '맑은 고딕', sans-serif;

  }

  #store #contents .product-list ul li .price {
    width: 100%;
    height: 20px;
    margin-bottom: 4px;
    font: bold 1.4rem/18px '맑은 고딕', sans-serif;
  }

  #store #contents .product-list ul li .price span {
    font: bold 1.5rem/20px '맑은 고딕', sans-serif;
    color: #9f5ba6;
    margin-right: 8px;
  }

  #store #contents .product-list ul li .rating {
    width: 100%;
    height: 12px;
    font: bold 0.9rem/12px '맑은 고딕', sans-serif;

  }

  #store #contents .product-list ul li .rating i {
    font-size: 1rem;
    margin-right: 4px;
    color: #9f5ba6;
  }

  #store #contents .product-list ul li .rating span {
    color: #7b7979;
    margin-left: 7px;
  }

  /* + button 활성화 */
  .act {
    display: none !important;
  }
</style>