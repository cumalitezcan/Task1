<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <router-link :to="{name:'HomePage'}">
      <li class="nav-item active">
       <a class="nav-link">Home</a>
      </li>
      </router-link>
      <router-link :to="{name:'AddPage'}">
      <li class="nav-item">
        <a class="nav-link">Add</a>
      </li>
        </router-link>
        <router-link :to="{name:'ListPage'}">
      <li class="nav-item">
        <a class="nav-link">List</a>
      </li>
        </router-link>
    </ul>
  </div>
</nav>
</template>