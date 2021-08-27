<template>
  <div id="refur">

    <!-- Header Area Start -->
    <Header></Header>

    <div class="top-section">
        <div class="sub-menu">
          <li v-on:click="ecoTab"><router-link to="/eco">에코마켓</router-link></li>
          <li v-on:click="refurTab"><router-link to="/refur" class="sub-on">리퍼마켓</router-link></li>
        </div>

        <div class="category">
          <a href="#">
            <img src="../assets/eco/eco-refur-icon1.png" alt="카테고리1">
            <p>DIY</p>
          </a>
          <a href="#">
            <img src="../assets/eco/eco-refur-icon2.png" alt="카테고리2">
            <p>소파/거실</p>
          </a>
          <a href="#">
            <img src="../assets/eco/eco-refur-icon3.png" alt="카테고리3">
            <p>침구</p>
          </a>
          <a href="#">
            <i class='fa fa-plus' aria-hidden='true'></i>
          </a>
        </div>
      </div>

      <div class="tab-wrap">
        
            <div class="tab-content">
              <p>전체 321건</p>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img1.png" alt="리퍼 이미지1"></a>
                <div class="tag">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
                <div class="text-box">
                  <h3>라스 세라믹 식탁 6인용 (의자 미포함)</h3>
                  <p><strong>50%</strong> <strong>219,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img2.png" alt="리퍼 이미지2"></a>
                <div class="tag">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
                <div class="text-box">
                  <h3>컬럼 가죽 소파 4인용</h3>
                  <p><strong>50%</strong> <strong>30,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img3.png" alt="리퍼 이미지3"></a>
                <div class="text-box">
                  <h3>멜로우 풀커버 패브릭 3인용소파 2colors</h3>
                  <p><strong>65%</strong> <strong>349,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img4.png" alt="리퍼 이미지4"></a>
                <div class="tag">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
                <div class="text-box">
                  <h3>헤이드 원목 3단 서랍장</h3>
                  <p><strong>73%</strong> <strong>179,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img5.png" alt="리퍼 이미지5"></a>
                <div class="text-box">
                  <h3>DIY 옷걸이 스티커 수납장 12칸 (화이트)</h3>
                  <p><strong>34%</strong> <strong>45,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>

              <li>
                <a href="#"><img src="../assets/eco/eco-refur-img6.png" alt="리퍼 이미지6"></a>
                <div class="tag">
                  <i class='fa fa-bookmark' aria-hidden='true'></i>
                </div>
                <div class="text-box">
                  <h3>루디 익스텐션</h3>
                  <p><strong>54%</strong> <strong>89,000원</strong></p>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i> 4.2</span> 리뷰 365개</p>
                </div>
              </li>
              
            </div>
      </div>

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Refur',
  components : {
    Header,
    Footer
  },
  mounted(){
    this.ecoTab();
    this.refurTab();
  },
  methods : {
    ecoTab(){
      $('#header .tab-menu ul li a').removeClass('on');
     $('#footer a').eq(0).removeClass('on2');
     $('#footer a').eq(1).addClass('on2');
    },
    refurTab(){
      $('#header .tab-menu ul li a').removeClass('on');
      $('#footer a').eq(0).removeClass('on2');
      $('#footer a').eq(1).addClass('on2');
    }
  }
}
</script>

<style scoped>

  #refur {
    padding-top: 129px;
  }

  #refur .sub-menu{
    width: 60%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 37px;
    list-style: none;
  }
  #refur .sub-menu a{
    font-size: 1.8rem;
    font-weight: bold;
    color: #7B7979;
    border: 2px solid #7B7979;
    padding: 11px 16px;
    border-radius: 15px;
  }
  #refur .sub-menu a:hover{
    color: #fff;
    background-color: #9660a2;
    border-color: transparent;
  }

  /* 서브메뉴 활성화 클래스 */
  .sub-on{
    color: #fff !important;
    background-color: #9660a2 !important;
    border-color: transparent !important;
  }


  #refur .category{
    width: 80%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    margin: 35px auto 20px;
  }
  #refur .category a{
    text-align: center;
  }
  #refur .category a img{
    width: 50px;
    height: 50px;
    background-color: #e2e2e2;
    padding: 4px;
    border-radius: 10px;
  }
  #refur .category a img:hover{
    background-color: #cccccc;
  }
  #refur .category a p{
    font-weight: bold;
  }
  #refur .category a:last-child{
    width: 40px;
    height: 40px;
    margin-top: 10px;
  }
  #refur .category a i{
    width: 100%;
    height: 100%;
    line-height: 37px;
    text-align: center;
    font-size: 25px;
    color: #7B7979;
    border: 3px solid #7B7979;
    border-radius: 50%;
  }
  #refur .top-section{
    width: 100%;
    height: auto;
    background-color: #EEEEEE;
    padding: 3px 0;
  }

  #refur .tab-wrap .tab-content{
    width: 90%;
    height: 740px;
    margin: auto;
  }
  #refur .tab-wrap .tab-content>p{
    font-size: 1.2rem;
    font-weight: bold;
    color: #464646;
    margin: 20px 0;
  }
  #refur .tab-wrap .tab-content li{
    width: 164px;
    height: 200px;
    list-style: none;
    margin-bottom: 10px;
    float: left;
    position: relative;
  }
  #refur .tab-wrap .tab-content li:nth-child(odd){
    float: right;
  }

  #refur .tab-wrap .tab-content li .text-box h3{
    font-size: 1.5rem;
    font-weight: normal;
    margin: 0;
  }
  #refur .tab-wrap .tab-content li .text-box p strong:first-child{
    font-size: 1.5rem;
    font-weight: bold;
    color: #9F5BA6;
  }
  #refur .tab-wrap .tab-content li .text-box p strong:last-child{
    font-size: 1.4rem;
    font-weight: bold;
  }
  #refur .tab-wrap .tab-content li .text-box p:last-child{
    font-size: 1rem;
    font-weight: bold;
    color: #7B7979;
  }
  #refur .tab-wrap .tab-content li .text-box p span{
    color: #2d2d2d;
  }
  #refur .tab-wrap .tab-content li .text-box p span i{
    color: #9F5BA6;
  }

  #refur .tag{
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    color: #9660a2;
    position: absolute; right: 6px; bottom: 105px;
  }

</style>