<template>
   <div id="rotas">
        <nav>
          <ul>
            <li><router-link to="/"> Home </router-link></li>
            <li>
              <router-link to="download"> Downloads </router-link>
            </li>
            <li>
              <router-link to="sobre"> Sobre </router-link>
            </li>
            <li>
              <router-link to="test"> Test </router-link>
            </li>
            <li>
              <router-link to="testccc"> Not Found </router-link>
            </li>
          </ul>
        </nav>
        <div class="route-content">
     
        </div> 
</template>
<script>
module.exports = {};
</script>