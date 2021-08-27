<template>
  <div id="main">
    
    <h2>Add Products</h2>

    <div class="card">
      <div>
        <input type="text" name="id" id="input_id" placeholder="Id" class="validate" v-model="addProuctData.product_id">
      </div>
      <div>
        <input type="text" name="photo" id="input_photo" placeholder="Photo" class="validate" v-model="addProuctData.photo">
      </div>
      <div>
        <input type="text" name="name" id="input_name" placeholder="Name"  class="validate"  v-model="addProuctData.name">
      </div>
      <div>
        <input type="text" name="price" id="input_price" placeholder="Price"  class="validate"  v-model="addProuctData.price">
      </div>
      <div><i class="material-icons" v-on:click="onAdd">add</i></div>
    </div>


    <h2>Products List</h2>

    <div class="collection">

      <!-- 수정(Edit) 후 처리내용 -->
      <div class="collection-item"  v-for="product in sortedProucts" v-bind:key="product.product_id">
        <div class="product-box" v-if="editId === product.product_id"  v-bind:class="{ 'yellow lighten-4' :  editId === product.product_id }">
          <div>{{ product.product_id }}</div>
          <div><img v-bind:src="product.photo"></div>
          <div>
            <input type="text" name="editName" id="input_editname" v-model="editProductData.name">
          </div>
          <div>
            <input type="text" name="editPrice" id="input_editprice" v-model="editProductData.price">
          </div>
          <div>
             <i class="material-icons" v-on:click="onEditSubmit">check</i>
             <i class="material-icons" v-on:click="onCancel">cancel</i>
          </div>
        </div>

        <!-- 수정(!Edit) 전 처리내용 -->
        <div v-else class="product-box">
          <div> {{ product.product_id }} </div>
          <div><img v-bind:src="product.photo"></div>
          <div> {{ product.name }} </div>
          <div> {{ product.price }} </div>
          <div>
            <i class="material-icons" v-on:click="onEdit(product)">mode_del</i> 
            <i class="material-icons" v-on:click="onDelete(product.product_id)">delete</i> 
            <router-link :to="{     //  네임을 가진 라우터 주소 연결시 ( to => :to  )
              name: 'ProductPage',   // 네임이 설정됨!
              params: {
                product_id: product.product_id
              }
            }"><i class="material-icons">search</i></router-link>          
          </div>
        </div> <!-- else End -->

      </div><!-- collect-item End -->
    </div> <!-- collection End -->

  </div>
</template>

<script>
import db from '../db'

export default {
  name: 'Main',
  data(){
    return {
      products: [],
      addProuctData: {
        product_id: '',
        photo: '',
        name: '',
        price: ''
      },
      editId: '',
      editProductData: {      
        product_id: '',
        photo: '',
        name: '',
        price: ''
      }
    }
  },
  created(){
    this.getProduct();
  },
  // 상품리스트 정렬
  // slice() 소개참조 - https://im-developer.tistory.com/103
  // sort(a, b) 소개참조 - https://dudmy.net/javascript/2015/11/16/javascript-sort/
  computed: {
    sortedProucts(){
      return this.products.slice().sort((a, b) => {
        return a.product_id - b.product_id;
      });
    }
  },
  methods: {
    // Get Data Function
    getProduct(){
      db.collection('products').get().then(querySnapshot => {

        const products = []

        querySnapshot.forEach(doc => {
          console.log(doc.data());
          products.push(doc.data());
        });

        this.products = products;

      })
    },

    // Add Data Function
    onAdd(){
      db.collection('products').add(this.addProuctData).then(this.getProduct);

      this.addProuctData.product_id = '';
      this.addProuctData.photo = '';
      this.addProuctData.name = '';
      this.addProuctData.price = '';
    },

    // Delete Data Function
    onDelete(product_id){
      db.collection('products').where('product_id', '==', product_id ).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete().then(this.getProduct);
        });
      });
    },

    // Edit Data Function
    onEdit(product){
      console.log(product);
      this.editId = product.product_id;  
      this.editProductData.photo = product.photo;
      this.editProductData.name = product.name;
      this.editProductData.price = product.price;
    },
    onEditSubmit(){
      db.collection('products')
        .where('product_id', '==', this.editId)
        .get()
        .then(querySnapshot => {

          querySnapshot.forEach(doc => {
            doc.ref.set({
              product_id: this.editId,
              photo: this.editProductData.photo,
              name: this.editProductData.name,
              price: this.editProductData.price
            }).then(this.getProduct);  // 수정 완료 후 데이터 목록 다시 가져오기
          });

          this.onCancel();

        });
    },

    // Cancel Data Function
    onCancel(){
      this.editId = '';
      this.editProductData.photo = '';
      this.editProductData.name = '';
      this.editProductData.price = '';
    }

  }
}
</script>

<style scoped>

  #main .h2{ font-size: 3.5rem; }

  /* Card Start */
  .card{ padding: 20px; margin-bottom: 70px; }
  .card::after{ content: ''; display: block; clear: both; }
  .card>div{
    float: left; margin: 0 1%; height: 55px;
  }
  .card>div:nth-child(1){ width: 30%; }
  .card>div:nth-child(2){ width: 65%; }
  .card>div:nth-child(3){ width: 42%; }
  .card>div:nth-child(4){ width: 42%; }
  .card>div:nth-child(5){ width: 10%; line-height: 55px; }

  .material-icons{ cursor: pointer; width: 20px; }


  /* Collection Start */
  .collection{ margin-bottom: 70px; }
  .collection-item>div::after{ content: ''; display: block; clear: both; }
  .collection-item>div>div{ float: left; height: 80px; line-height: 80px; text-align: center; }

  .collection-item>div>div:nth-child(1){ width: 8%; }
  .collection-item>div>div:nth-child(2){ width: 20%; }
  .collection-item>div>div:nth-child(3){ width: 25%; }
  .collection-item>div>div:nth-child(4){ width: 25%; }
  .collection-item>div>div:nth-child(5){ width: 22%;}
  .collection-item img{
    width: 100px; height: 80px;
  }


  /* Media Query Area Start */
  @media screen and (max-width: 769px) {
    .collection-item>div.yellow>div:nth-child(n+2){ width: 22% !important; }
    .collection-item>div.yellow>div:nth-child(n+2) input{ 
      width: 100% !important; text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    .card>div{ width: 100% !important; float: none; }
    .collection-item>div>div{width: 100% !important; float: none;}
    .collection-item>div>div:nth-child(n+3){ 
      height: 40px; line-height: 40px;
    }
    .collection-item>div>div:nth-child(n+2){
      margin-bottom: 10px;
    }

    .collection-item>div.yellow>div:nth-child(n+2){ 
      width: 100% !important;
    }
  }

</style>
