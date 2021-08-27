<template>
  <div id="Slider1">

    <h2>New Products1</h2>

    <!-- #sldier-wrap1>.swiper-container>.swiper-wrapper>.swiper-slide*8>.caption -->
    <div id="slider-wrap1">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="caption">Slider1</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider2</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider3</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider4</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider5</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider6</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider7</div>
          </div>
          <div class="swiper-slide">
            <div class="caption">Slider8</div>
          </div>

        </div><!-- wrapper -->

        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>

        <!-- If we need navigation buttons -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->

        <!-- 부모박스에 overflow:hidden // swiepr 사이트에 예재 있음
        밖으로 화살표하려면 별도로 버튼 마크업 필요 & container 하나 더 필요 -->

      </div><!-- container -->
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Slider1',
    mounted(){
      this.newProductSlider1();
    },
    methods: {
      newProductSlider1() {

        new Swiper('#slider-wrap1 .swiper-container', {

          // Optional parameters
          slidesPerView: 3,
          spaceBetween: 0,

          //AutoPlay
          autoplay: {
            delay: 3000
          },

          //Direction : vertical, horizontal
          direction: 'horizontal',
          loop: true,

          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },

          // Navigation arrows
          // navigation: {
          //   nextEl: '.swiper-button-next',
          //   prevEl: '.swiper-button-prev',
          // },

          //Responsive Breakpoint
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 0
            },
            // when window width is >= 960px
            960: {
              slidesPerView: 5,
              spaceBetween: 0
            }
          }


        });//swiper

      }
    }
  }
</script>

<style scoped>
  #slider-wrap1 {
    width: 100%;
    height: 150px;
    border: 1px solid #000;
    margin-bottom: 50px;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 85px;
    text-align: center;
    font-size: 18px;
    background: rgb(204, 231, 53);

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

   .swiper-slide .caption {
     width:80%;
     height:100%;
     background-color: rgba(255,255,255,0.5);
     display:flex;
     justify-content: center;
     align-items: center;
   }


   /*  Media Query Area Start  */


</style>