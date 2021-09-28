<template>
<Header />
<div class="container mt-3">
  <div class="row">
  <form class="d-flex justify-content-center"> 
  <div class="form-row">
      <h2>Add User</h2>
    <div class="col pt-2">
      <input type="text" class="form-control" placeholder="First name" v-model="user.name">
    </div>
    <div class="col pt-2">
      <input type="text" class="form-control" placeholder="Last name" v-model="user.surname">
    </div>
    <div class="col pt-2">
      <input type="number" class="form-control" placeholder="Age" v-model="user.age">
    </div>
    <div class="col pt-2">
      <input type="text" class="form-control" placeholder="Province" v-model="user.province">
    </div>
    <div class="col pt-2">
      <input type="text" class="form-control" placeholder="District" v-model="user.district">
    </div>
    <div class="col pt-2">
      <input type="text" class="form-control" placeholder="Plaka" v-model="user.plaka">
    </div>
      <button @click="addUser()" class="btn btn-primary mt-2">Ekle</button>
  </div>
</form>
</div>
</div>
</template>

<script>
import axios from "axios";

export default {

  data(){
    return{
       user : {
         name:null,
         surname:null,
         age:null,
         province:null,
         district:null,
         plaka:null
      },
    }
  },


    methods:{
        addUser() {
         axios.post("http://localhost:8080/api/users/add",{...this.user}).then(add_response => {
          console.log(add_response);
          alert("işlem başarılı")
          this.$router.push({name:"ListPage"})
       });
    }
}
}
</script>