<template>
  <div id="community">
    
    <!-- Header Area Start -->
    <Header></Header>

    <!-- CONTENTS AREA START -->
    <div id="contents">
      
      <!-- Gallery Area Start -->
      <div class="gallery">
        <ul>
          <!-- Gallery Image1 Area Start -->
          <li>
            <img src="../assets/gallery/gallery-img1.png" alt="커뮤니티 갤러리 이미지1">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>

            <!-- Gallery Image1 Bottom-Icon -->
            <span>
              <a href="#">
                <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <strong>제품보기</strong>
              </a>
              <a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
            </span>

            <!-- Hash Tag -->
            <span><a href="#">#모던 #거실 #15평</a></span>

            <!-- Product Tag1 -->
            <span>
              <a href="#">
                브랜드 커튼 <i class='fa fa-angle-right' aria-hidden='true'></i>
              </a>
            </span>

            <!-- Product Tag2 -->
             <span>
               <a href="#">
                 브랜드 테이블 <i class='fa fa-angle-right' aria-hidden='true'></i>
               </a>
             </span>
          </li><!-- Gallery Image1 Area End -->

          <!-- gallery image2-12 Area Start -->
          <li>
            <img src="../assets/gallery/gallery-img2.png" alt="커뮤니티 갤러리 이미지2">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img3.png" alt="커뮤니티 갤러리 이미지3">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img4.png" alt="커뮤니티 갤러리 이미지4">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img5.png" alt="커뮤니티 갤러리 이미지5">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img6.png" alt="커뮤니티 갤러리 이미지6">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img7.png" alt="커뮤니티 갤러리 이미지7">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img8.png" alt="커뮤니티 갤러리 이미지8">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img9.png" alt="커뮤니티 갤러리 이미지9">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img10.png" alt="커뮤니티 갤러리 이미지10">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img11.png" alt="커뮤니티 갤러리 이미지11">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
          <li>
            <img src="../assets/gallery/gallery-img12.png" alt="커뮤니티 갤러리 이미지12">
            <a href="#"><img src="../assets/gallery/gallery-icon3.png" alt="갤러리 아이콘"></a>
          </li>
        </ul>

      </div> <!-- Gallery Area End -->


      <!-- Community-btn Area Start -->
      <div class="community-btn">

        <div v-on:click="interiorTab">
          <router-link to="/interior">
            <img src="../assets/gallery/gallery-icon1.png" alt="인테리어 참견하기 버튼">
            <span>참견하기</span>
          </router-link>
        </div>

        <a href="#">
          <img src="../assets/gallery/gallery-icon2.png" alt="커뮤니티 쓰기 버튼">
        </a>

      </div>


    </div><!-- // CONTENTS AREA END -->
    

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Community',
  components : {
    Header,
    Footer
  },
  mounted(){
    this.interiorTab();
    this.autoTag();
    this.clickProduct();
  },
  methods : {
    interiorTab(){
     $('#footer a').removeClass('on2');
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(2).addClass('on');
   },

   autoTag(){
     var basketBtn = $('.gallery>ul>li>span:nth-child(3)>a:nth-child(1)');
     var productTag1 = $('.gallery ul li span:nth-child(5)');
     var productTag2 = $('.gallery ul li span:nth-child(6)');
   
    
   //제품보기 : 로드 시, 자동 펼치기
   setTimeout(function(){
    basketBtn.animate({'width': 70}, 400);
        productTag1.css({'display':'block'});
        productTag2.css({'display':'block'});
   },500);
   },

   clickProduct(){
     $(window).scroll(function(e){
      var basketBtn = $('.gallery>ul>li>span:nth-child(3)>a:nth-child(1)');
      var productTag1 = $('.gallery ul li span:nth-child(5)');
      var productTag2 = $('.gallery ul li span:nth-child(6)');
   
      

     var WinPos = $(window).scrollTop();
    //  var TabPos = $('.gallery>ul>li>span:nth-child(3)>a:nth-child(1)').offset().top;
   

    //  console.log(TabPos);
    //  console.log(WinPos);

     if(WinPos >= 100  ){ 
  

      basketBtn.css({'width': 23});
      productTag1.css({'display':'none'});
        productTag2.css({'display':'none'});
        $('#community .community-btn>div>a').css({'background':'#fff'});
        $('#community .community-btn>div>a>span').css({'color':'#333'});
     
      }else{
        basketBtn.css({'width': 70});
        productTag1.css({'display':'block'});
        productTag2.css({'display':'block'});
        $('#community .community-btn>div>a').css({'background':'#9660a2'});
        $('#community .community-btn>div>a>span').css({'color':'#fff'});
        }

        e.preventDefault();
     });
   }
}
}
</script>

<style scoped>

#header {
  /* 수정사항1 - 상단바 배경, 하단 라인, fixed 설정, z-index 최고강도(10) */
  
  position: fixed; top: 0px; z-index: 10;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
}

  /* ************************* Community Area Start ************************ */
#community { width:100%; height:auto; }


/* ************* Gallery Area Start ************* */
#community .gallery {
  width:100%;
  height: 978px;
  position: relative; top: 129px;
}

#community .gallery >ul{ height:100%; height:auto; }

#community .gallery ul>li{
  width:100%;
  height:auto;
  position: relative;
  cursor:pointer;
}

#community  .gallery ul>li>img{ display:block; width:100%; height:100%; }
#community  .gallery ul>li>a{ position: absolute;  top:5%; left:5%; }

/* 갤러리 이미지 :Hover */
#community .gallery ul>li:hover>img { opacity:0.8; }
#community .gallery ul>li:hover>span:nth-child(4)>a { color:#333; font-weight:800; }


/* *************  Gallery Image1 Area Start (제일 큰 이미지) ************* */
#community .gallery ul>li:nth-child(1){ height:354px; }

/* Product Tag1, 2  말풍선 */
#community .gallery ul>li>span:nth-child(5),
#community .gallery ul>li>span:nth-child(6) { 
  width:123px;
  height:35px;
  border-radius: 5px;
  background-color: #333333;
  position: absolute;

  /* 초기 비활성화  */
  display:none;
  
 }

 /* Product Tag: 활성화 클래스 */
 .active { display:block!important; }

#community .gallery ul li span:nth-child(5) { top:20%; left:20%;  transition: all 0.3s ease-in-out;}
#community .gallery ul li span:nth-child(6) { top:55%; left:30%; transition: all 0.3s ease-in-out;}

#community .gallery ul li span:nth-child(5) a,
#community .gallery ul li span:nth-child(6) a { 
  display:block;
  width:100%;
  text-align: center;
  font: 700 1.4rem/35px 'Nanum Gothic', sans-serif;
 }

 #community .gallery ul li span:nth-child(5) a i,
 #community .gallery ul li span:nth-child(6) a i { margin-left:5px;}

 #community .gallery ul li span:nth-child(5) a::after,
 #community .gallery ul li span:nth-child(6) a::after {
   content:'';
   display:block;
   width:10px;
   height:10px;
   background-color: #333;
   position: absolute;
 }

 #community .gallery ul li span:nth-child(5) a::after,
 #community .gallery ul li span:nth-child(6) a::after {
  -webkit-transform:rotate(-45deg);
  -moz-transform:rotate(-45deg);
  -o-transform:rotate(-45deg);
  transform:rotate(-45deg);
 }

#community .gallery ul li span:nth-child(5) a::after { top: 41%; left: -5px; }
#community .gallery ul li span:nth-child(6) a::after { bottom: -16%;  left: 50%; }


/* Gallery Image1 Bottom-Icons */
#community .gallery ul>li>span{ position: absolute; bottom:5%; }
#community .gallery ul>li>span>a { color: #fff; display:inline-block; }


/* Basket Icon : 제품보기 */
#community .gallery ul>li>span:nth-child(3){ left:5%; height:21px;}
#community .gallery ul>li>span:nth-child(3) a:nth-child(1){
display:inline-block;
 width:22px;
 height:24px;
 border-radius: 11px;
 margin-right:10px;
 background-color: #333;
 overflow: hidden;
 position: relative;
 -webkit-transition:all ease 0.3s;
 -moz-transition:all ease 0.3s;
 -o-transition:all ease 0.3s;
 transition:all ease 0.3s;
}

#community .gallery ul>li>span:nth-child(3) a:nth-child(1)>strong{ font-size:10px }
#community .gallery>ul>li>span:nth-child(3) a:nth-child(1)>i { font-size: 10px; margin-left: 6.9px; }

/* Heart Icon */
#community .gallery ul>li>span:nth-child(3) a:nth-child(2){ float:right; font-size:1.8rem; line-height:1; }

/* Hash Tag */
#community .gallery ul>li>span:nth-child(4){ right:5%; }
#community .gallery ul>li>span:nth-child(4) a{ font: 700 1.5rem/21px 'Nanum Gothic', sans-serif; }


 /* ***** Gallery Image2, 3 Area ***** */
 #community .gallery ul>li:nth-child(2),
 #community .gallery ul>li:nth-child(3) { width:50%; height: 150px; float:left; }

 /* ***** Gallery Image4~12 Area ***** */
 #community .gallery ul>li:nth-child(n+4) {width: 33.333333%; height:130px; float:left; }


/* ***** Community Button Area ***** */
 #community .community-btn { position: fixed; bottom: 12%; right: 5%; }

 #community .community-btn a {
  display:block;
  width:72px;
  height:72px;
  border-radius: 36px;
  position: relative;
  background-color: #9660a2;
  -webkit-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
  -moz-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
  -o-box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);
  box-shadow: 0px 0px 10px rgb(0 0 0 / 70%);

  transition: all ease 0.3s;
}

#community .community-btn>a>img{
  position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

#community .community-btn>div>a:first-child>img {
  position: absolute;
    top: 22px;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);
}

#community .community-btn>div>a:last-child>img {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}

#community .community-btn>a>span {
  position: absolute;
    bottom: 13px;
    width: 100%;
    left: 0;
    font-weight: 700;
    transition: all ease 0.3s;
}

#community .community-btn>div>a:nth-child(1)>img {
  display: block;
  width: 50%;
  top: 37%;
}
#community .community-btn>div>a:nth-child(1)>span{
    display: block;
    position: absolute;
    bottom: 12%;
    color: #fff;
    left: 18%;
    font: 800 1.2rem/1.5 'Nanum Gothic',sans-serif;
}

#community .community-btn a:nth-child(1){ margin-bottom:10%; }
#community .community-btn a:hover { background-color: rgb(255, 255, 255); }
#community .community-btn>div a:hover span { color:#333; }

</style>