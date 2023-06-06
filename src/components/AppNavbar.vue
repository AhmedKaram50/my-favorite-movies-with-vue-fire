<script setup></script>

<template>
  <nav>
    <ul>
      <li>
        <router-link to="/soso"> Home </router-link>
      </li>
    </ul>
    <div>
      <v-btn to="/add-new-movie"> add new movie </v-btn>
    </div>
  </nav>
</template>

<style scoped>
nav {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  background-color: #353b48;
  margin-bottom: 20px;
}

nav ul{
  display: flex;
  align-items: center;
}

nav ul li{
  list-style: none;
}

a{
  color: #fff;
}
</style>
