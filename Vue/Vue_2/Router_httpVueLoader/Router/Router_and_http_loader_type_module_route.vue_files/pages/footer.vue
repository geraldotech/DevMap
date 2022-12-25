<template>
  <footer>
    <p>by gmapdev - footer.vue - {{ ab }}</p>
    <!-- <div id="rotas">
      <nav>
        <ul>
          <li><router-link class="nav-link" to="/"> Home </router-link></li>
          <li>
            <router-link class="nav-link" to="download">
              Downloads
            </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="sobre"> Sobre </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="test"> Test </router-link>
          </li>
          <li>
            <router-link class="nav-link" to="testccc"> Not Found </router-link>
          </li>
        </ul>
      </nav>
      <div class="route-content">
        <router-view></router-view>
      </div>
    </div> -->
  </footer>
</template>

<style scoped>
footer {
  padding-top: 15px;
  background: rgb(63, 39, 31);
  height: 50px;
  text-align: center;
}
</style>
 
<script>
module.exports = {
  data: function () {
    return {
      ab: "Segunda",
    };
  },
};
</script>

