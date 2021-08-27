<template>
  <div id="signup">
    
    <!-- Prev Button -->
    <router-link to="/login" class="prev"><i class='fa fa-angle-left' aria-hidden='true'></i></router-link>

    <h2>회원가입</h2>

    <!-- form Area Start -->
    <form action="">

      <div class="form-group">
        <label for="input_id">이메일</label>
        <input type="text" name="id" id="input_id" placeholder="이메일" v-model="id">
      </div>

      <div class="form-group">
        <label for="input_name">닉네임</label>
        <input type="text" name="name" id="input_name" placeholder="닉네임 (4자 이상)">
      </div>

      <div class="form-group">
        <label for="input_phone">휴대폰 번호</label>
        <input type="text" name="phone" id="input_phone" placeholder="휴대폰 번호 (- 제외)">
      </div>

      <div class="form-group">
        <label for="input_pw">비밀번호</label>
        <input type="password" name="pw" id="input_pw" placeholder="비밀번호 (8~16자 영문과 숫자)" v-model="password">
        <i class="xi-eye"></i>
      </div>
      
      <p><a href="#" id="signup_btn" v-on:click="signup">가입하기</a></p>

    </form>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name : 'Signup',
  data(){
    return {
      id: '',
      password: ''
    }
  },
  methods: {
    signup(e){

      firebase.auth().createUserWithEmailAndPassword(this.id, this.password)
      .then(user => {
        console.log("Signup Success!");
        alert('환영합니다 ☺');
      
       this.$router.push('/')
       
      });

      e.preventDefault();
    }
  }
}
</script>

<style scoped>

  #signup{
    height: 900px;
    background-image: url(https://mobile-project-img.netlify.app/intro-bg.png);
    background-size: cover;
  }

  #signup a{
    display: inline-block;
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: #fff;
    text-align: center;
    line-height: 50px;
    margin: 20px 0 0 10px;
  }
  #signup h2{
    font: bold 2rem/21px 'Nanum Gothic', sans-serif;
    margin: 65px 0 65px 35px;
    color: #fff;
  }
  #signup form{
    width: 80%;
    height: auto;
    margin: auto;
  }
  #signup form .form-group{
    width: 100%;
    margin-bottom: 20px;
    position: relative;
  }
  #signup form .form-group label{
    display: none;
  }
  #signup form .form-group input{
    width: 100%;
    height: 42px;
    border: 0;
    border-bottom: 2px solid #fff;
    outline: none;
    color: #fff;
  }
  #signup form .form-group i{
    position: absolute;
    right: 5px; top: 8px;
    font-size: 25px;
    color: #fff;
  }
  #signup form p{
    width: 100%;
    height: 39px;
    background-color: #9660a2;
    border-radius: 30px;
    text-align: center;
    margin-top: 60px;
  }
  #signup form #signup_btn{
    width: 100%;
    height: 100%;
    line-height: 39px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin: 0;
  }

</style>