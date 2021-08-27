<template>
  <div id="eco">
    
    <!-- Header Area Start -->
    <Header></Header>

    <div class="top-section">
        <div class="sub-menu">
          <router-link to="/eco" class="sub-on">에코마켓</router-link>
          <router-link to="/refur">리퍼마켓</router-link>
        </div>

        <h2>인기 키워드</h2>
        <div class="tag1">
          <a href="#">#공기 청정기</a>
          <a href="#">#러그</a>
        </div>

        <div class="tag2">
          <a href="#">#에어 프라이어</a>
          <a href="#">#캠핑</a>
          <a href="#">#턴테이블</a>
        </div>
      </div>

      <p>제 140건</p>
      <div class="filter">
        <a href="#"><i class='fa fa-filter' aria-hidden='true'></i> 제품</a>
        <a href="#"><i class='fa fa-filter' aria-hidden='true'></i> 지역</a>
      </div>

      <div class="tab-wrap">
        
            <div class="tab-content">
              
                <li>
                  <a href="#"><img src="../assets/eco/eco-used-img1.png" alt="Photo1"></a>
                  <div class="text-box">
                    <h3>이케아 야외테이블</h3>
                    <p><strong>-</strong></p>
                    <span><i class='fa fa-map-marker' aria-hidden='true'></i> 종로구</span>
                  </div>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i>4.2</span> 리뷰 365개</p>
                </li>

                <li>
                  <a href="#"><img src="../assets/eco/eco-used-img2.png" alt="Photo2"></a>
                  <div class="text-box">
                    <h3>4단 철제 선반</h3>
                    <p><strong>5,000원</strong></p>
                    <span><i class='fa fa-map-marker' aria-hidden='true'></i> 종로구</span>
                  </div>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i>4.2</span> 리뷰 365개</p>
                </li>

                <li>
                  <a href="#"><img src="../assets/eco/eco-used-img3.png" alt="Photo3"></a>
                  <div class="text-box">
                    <h3>오아 미니 공기 청정기 /<br> 미니 가습기</h3>
                    <p><strong>17,000원</strong></p>
                    <span><i class='fa fa-map-marker' aria-hidden='true'></i> 종로구</span>
                  </div>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i>4.2</span> 리뷰 365개</p>
                </li>
                
                <li>
                  <a href="#"><img src="../assets/eco/eco-used-img4.png" alt="Photo4"></a>
                  <div class="text-box">
                    <h3>패밀리침대 저상형침대 Q+Q<br> 퀸퀸 사이즈</h3>
                    <p><strong>240,000원</strong></p>
                    <span><i class='fa fa-map-marker' aria-hidden='true'></i> 종로구</span>
                  </div>
                  <p><span><i class='fa fa-star' aria-hidden='true'></i>4.2</span> 리뷰 365개</p>
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
  name : 'Eco',
  components : {
    Header,
    Footer
  },
  mounted(){
    this.ecoTab();
  },
  methods :{
    ecoTab(){
      $('#header .tab-menu ul li a').removeClass('on');
      $('#footer a').removeClass('on2');
      $('#footer a').eq(1).addClass('on2');
    }
  }
}
</script>

<style>

  #eco .sub-menu{
    width: 60%;
    height: auto;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  #eco .sub-menu a{
    font-size: 1.8rem;
    font-weight: bold;
    color: #7B7979;
    border: 2px solid #7B7979;
    padding: 10px 16px;
    border-radius: 15px;
  }
  #eco .sub-menu a:hover{
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


  #eco .top-section{
    width: 100%;
    height: auto;
    background-color: #EEEEEE;
    padding: 3px 0;
  }
  #eco .top-section h2{
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin: 20px 0;
  }
  #eco .top-section .tag1{
    width: 80%;
    height: auto;
    margin: 20px auto;
  }
  #eco .top-section .tag1 a{
    font-weight: bold;
    margin-right: 63px;
    padding: 10px 0;
  }
  #eco .top-section .tag2{
    width: 80%;
    height: auto;
    margin: 20px auto;
  }
  #eco .top-section .tag2 a{
    font-weight: bold;
    margin-right: 50px;
    padding: 10px 0;
  }
  #eco .top-section .tag2 a:last-child{
    margin-right: 0;
  }

  #eco{
    padding: 129px 0 70px;
  }
  
  #eco>p{
    font-size: 1.2rem;
    font-weight: bold;
    color: #464646;
    float: left;
    margin: 20px 0 20px 30px;
  }
  #eco .filter{
    float: right;
    font-size: 1.2rem;
    color: #464646;
    margin: 20px 30px 20px 0;
  }
  #eco .filter>a{
    margin-right: 8px;
  }

  #eco .tab-content{
    width: 90%;
    height: auto;
    margin: auto;
  }
  #eco .tab-content li{
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
  #eco .tab-content li .text-box{
    width: 200px;
    height: auto;
    margin-top: 15px;
  }
  #eco .tab-content li .text-box h3{
    font-size: 1.3rem;
    font-weight: normal;
    margin: 0;
  }
  #eco .tab-content li .text-box p strong{
    font-size: 1.4rem;
  }
  #eco .tab-content li .text-box span{
    font-size: 1.1rem;
    font-weight: bold;
    color: #464646;
  }
  #eco .tab-content li>p{
    position: absolute;
    right: 0; bottom: 3px;
    font-size: 1rem;
    font-weight: bold;
    color: #7B7979;
  }
  #eco .tab-content li>p span{
    font-size: 1rem;
    color: #2D2D2D;
  }
  #eco .tab-content li>p span i{
    color: #9660a2;
  }

</style>