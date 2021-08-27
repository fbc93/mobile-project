<template>
  <div id="best">

    <!-- Header Area Start -->
    <Header></Header>

    <!-- Content Area Start -->
    <div id="tab-wrap">

        <div class="sub-menu">
            <a href="#" class="tab-on">Today</a>
            <a href="#">Week</a>
            <a href="#">Month</a>
        </div>

        <h2>가장 인기있는 제품이에요!</h2>
        <div class="filter"><a href="#"><i class='fa fa-filter' aria-hidden='true'></i> 필터</a></div>
        
          
          <div class="tab-content">
            <ul>
              <li v-for="product in bestProduct" v-bind:key="product.best_product_id">
                <p><span><i class="xi-crown"></i></span>{{ product.best_product_id }}</p>
                <a href="#"><img v-bind:src="product.best_product_img"></a>
                <div class="tag">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
                <div>
                  <h3>{{ product.best_product_name }}</h3>
                  <p><strong>{{ product.best_product_price_discount }}</strong> {{ product.best_product_price }}</p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i>{{ product.best_product_rating_star }}</span> {{ product.best_product_rating_review }}</p>
                </div>
              </li>
            </ul>
          </div>
            
            

      </div>

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import db from '../db'
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Best',
  components : {
    Header,
    Footer
  },
  data(){
    return {
      bestProduct: []
    }
  },
  mounted(){
    this.bestTab();
    this.bestJs();
    this.getBestProduct();
  },
  methods :{
    bestTab(){
     $('#footer a').removeClass('on2');
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(1).addClass('on');
   },
    bestJs(){

      var tabMenu = $('.sub-menu>a');

      tabMenu.click(function(e){
      tabMenu.removeClass('tab-on');
      $(this).addClass('tab-on').next().css('display', 'block');
      e.preventDefault();
      });
    },

    getBestProduct(){
      db.collection("best_product").orderBy("best_product_id").get().then(querySnapshot => {
        const bestProduct = []

        querySnapshot.forEach(doc => {
          bestProduct.push(doc.data());
        });

        this.bestProduct = bestProduct;

      });
    }
  }
}
</script>

<style scoped>

  /* ******************* Best Area Start **************** */
  #best {
  padding-top: 129px;
}

  #best #tab-wrap{
    position: relative;
  }
  #best #tab-wrap .sub-menu{
    width: 90%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
  }
  #best #tab-wrap .sub-menu a{
    font-size: 2rem;
    font-weight: bold;
    color: #7B7979;
    border: 2px solid #7B7979;
    border-radius: 10px;
    padding: 11px 16px;
  }
  #best #tab-wrap .sub-menu a:hover{
    color: #fff;
    background-color: #9660a2;
    border-color: transparent;
  }

  #best #tab-wrap h2{
    font: bold 2rem/21px 'Nanum Gothic', sans-serif;
    color: #464646;
    margin-left: 35px;
  }
  #best #tab-wrap .filter{
    position: absolute;
    right: 0; top: 100px;
    margin-right: 30px;
  }
  #best #tab-wrap .filter a{
    font-size: 1.3rem;
    color: #464646;
  }

  .tag{
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    color: #9660a2;
    position: absolute; right: 30px; bottom: 10px;
  }
  #best .tab-content{
    width: 90%;
    height: auto;
    margin: 30px auto;
    padding-bottom: 55px;
  }
  #best .tab-content ul li{
    width: 100%;
    height: 107px;
    content: '';
    display: block;
    clear: both;
    position: relative;
    margin: 30px 0;
  }
  #best .tab-content ul li a{
    width: 135px;
    height: 100%;
    float: left;
    margin-left: 30px;
  }
  #best .tab-content ul li div{
    width: 155px;
    float: right;
    margin: 13px 20px 0 0;
  }
  #best .tab-content ul li>p{
    position: absolute;
    left: 0; top: 30px;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    color: #2d2d2d;
  }
  #best .tab-content ul li:first-child>p{
    left: -4px; top: 15px;
  }
  #best .tab-content ul li>p span{
    width: 25px;
    height: 25px;
    line-height: 25px;
    display: block;
    font-size: 2.5rem;
    color: #fc0;
  }
  #best .tab-content ul li:nth-child(n+2)>p span{
    display: none;
  }
  #best .tab-content ul li div h3{
    font: 400 1.5rem/20px 'Nanum Gothic', sans-serif;
  }
  #best .tab-content ul li>div p{
    font-size: 1.4rem;
    font-weight: bold;
  }
  #best .tab-content ul li>div p strong{
    font-size: 1.5rem;
    color: #9660a2;
  }
  #best .tab-content ul li>div span{
    font-size: 1rem;
    font-weight: bold;
    color: #2d2d2d;
    margin-right: 10px;
  }
  #best .tab-content ul li>div span i{
    color: #9660a2;
  }
  #best .tab-content ul li>div p:last-child{
    font-size: 1rem;
    font-weight: bold;
    color: #7B7979;
  }

  /* 탭메뉴 활성화 클래스 */
  #best .tab-on {
    color: #fff !important;
    background-color: #9660a2 !important;
    border-color: transparent !important;
    position: relative !important;
  }

</style>