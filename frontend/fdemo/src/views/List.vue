<template>
  <Header />
    <div class="container">
    <h1 class="d-flex justify-content-center text-align-center">User List</h1>
    <hr />
    <ul class="list-group" v-if="userList.length > 0">
      <li v-for="user in userList" :key="user.id" class="d-flex justify-content-center align-items-start list-group-item">
        <span class="mb-2">{{ user.name+" "+user.surname }} - {{user.province+" "+user.district}}</span>
      </li>
    </ul>
    <div v-else class="bg-blue text-white">
      Herhangi bir user yoktur..
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            userList:[]
        };
    },

    mounted(){
        axios.get("http://localhost:8080/api/users/getall").then(users_response => {
            this.userList = users_response.data || [];
            
    });
  }
}
</script>