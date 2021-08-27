<template>
  <div id="app">

    <!-- Header Area Start -->

    <!-- Content Area Start -->
    <router-view></router-view>

    <!-- Footer Area Start -->
    
  </div>
</template>

<script>

export default {
  name: 'app',
  
}
</script>

<style>

/* ***************** RESET CSS ***************** */

/* Google Web Font */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Nanum+Gothic:wght@400;700;800&family=Open+Sans:wght@300;400;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap');

*{ margin: 0; padding: 0; box-sizing: border-box; }

h1, h2, h3, h4, h5, h6{
  margin: 0;
}

html, body{
  width: 100%;
  height: 100%;
}

html{
  font-size: 10px;
}

body{
  font-size: 1.4rem;
  font-family: "맑은 고딕", sans-serif;
}

form, table, ul, ol, dl, p, address, blockquote{
  font-size: 1.4rem;
}

fieldset{
  border: 0;
}

legend{
  display: block;
  width: 1px;
  height: 1px;
  font-size: 1px;
  text-indent: -9999px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-color: #000;
}

label, input{
  vertical-align: middle;
}

ul, ol{ 
  list-style: none;
}

a{
  color: #000;
  text-decoration: none;
}

table, tr, th, td{
  border: 1px solid #000;
  border-collapse: collapse;
}

caption{
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
}

p{
  line-height: 1.5;
}


/* Help Class Settings */

/* IR(Image Replace) */
.ir{
  display: block;
  background: no-repeat 0 0;
  text-indent: -9999px;
  overflow: hidden;
}

/* 플롯해제 클래스 */
.clearfix::after{
  content: ''; display: block; clear: both;
}

/* 화면 감춤 클래스 */
.screen-hidden{
  display: block;
  width: 1px;
  height: 1px;
  font-size: 1px;
  text-indent: -9999px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

/* ***************** PROTO CSS ***************** */
.wrap {
  width: 100%;
  height: 100%;
}

#contents {
  width: 100%;
}

/* HEADER 영역 탭 활성화 클래스 */
.on {
  color: #9660a2 !important;
  position: relative;
}

/* FOOTER 영역 탭 활성화 클래스 */
.on2 {
  color: #9660a2 !important;
}

</style>
