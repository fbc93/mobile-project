<template>
  <div id="header">
    
    <!-- menubar-top -->
      <div class="menubar-top">

        <!-- logo -->
        <div v-on:click="logoTab">
          <router-link to="/" class="logo">
            <img src="../../assets/menubar-top/top-logo.png" alt="로고이미지">
          </router-link>
        </div>

        <!-- search -->
        <div class="search">
          <div class="search-bar">검색</div>
          <i class='fa fa-search' aria-hidden='true'></i>
        </div>
      </div>

      <!-- tab-menu -->
      <div class="tab-menu">
        <ul class="tabs">
          <li v-on:click="trendTab"><router-link to="/">트렌드</router-link></li>
          <li v-on:click="bestTab"><router-link to="/best">베스트</router-link></li>
          <li v-on:click="comTab"><router-link to="/community">커뮤니티</router-link></li>
          <li v-on:click="storeTab"><router-link to="/store">스토어</router-link></li> 
        </ul>
      </div>

  </div>
</template>

<script>
export default {
  name : 'Header',
   mounted(){
    this.trendTab();
  },
  methods : {
    logoTab(){
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(0).addClass('on');
     $('#footer a').eq(0).addClass('on2');
   },
   trendTab(){
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(0).addClass('on');
     $('#footer a').eq(0).addClass('on2');
   },
    bestTab(){
     $('#footer a').removeClass('on2');
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(1).addClass('on');
   },
   comTab(){
     $('#footer a').removeClass('on2');
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(2).addClass('on');
   },
   storeTab(){
     $('#footer a').removeClass('on2');
     $('#header .tab-menu ul li a').removeClass('on');
     $('#header .tab-menu ul li a').eq(3).addClass('on');
   }
  }
}
</script>

<style scoped>

/* *********** menubar-top *********** */
#header {
   width: 100%;
    margin-bottom: 5px;
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: #fff;
}

#header .tabs {
  height:40px;
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


</style>