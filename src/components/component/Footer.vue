<template>
  <div id="footer">

      <div v-on:click="homeTab">
        <router-link to="/">
          <span><i class="fa fa-home" aria-hidden="true"></i></span>
          홈
        </router-link>
      </div>

      <div v-on:click="ecoTab">
        <router-link to="/eco">
          <span><i class="fa fa-recycle" aria-hidden="true"></i></span>
          에코마켓
        </router-link>
      </div>

      <a href="#">
        <span><i class="fa fa-shopping-bag" aria-hidden="true"></i></span>
        장바구니
      </a>

      <div v-on:click="myTab">
        <router-link to="/mypage">
          <span><i class="fa fa-user" aria-hidden="true"></i></span>
          마이페이지
        </router-link>
      </div>

  </div>
</template>

<script>
export default {
  name : 'Footer',
   mounted(){
    this.trendTab();
  },
  methods : {
   trendTab(){
     $('#header .tab-menu ul li a').eq(0).addClass('on');
     $('#footer a').eq(0).addClass('on2');
   },
   homeTab(){
     $('#header .tab-menu ul li a').eq(0).addClass('on');
     $('#footer a').eq(0).addClass('on2');
   },
   ecoTab(){
     $('#header .tab-menu ul li a').eq(0).removeClass('on');
     $('#footer a').eq(0).removeClass('on2');
     $('#footer a').eq(1).addClass('on2');
   },
   myTab(){
     $('#header .tab-menu ul li a').removeClass('on');
     $('#footer a').eq(0).removeClass('on2');
     $('#footer a').eq(3).addClass('on2');
   }
    
  }
}
</script>

<style scoped>

/* *********** footer *********** */
#footer {
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index:10; /* 최대강도 : 10 */
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



</style>