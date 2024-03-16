<template>
  <header class="header">Headerxx</header>

  <button @click="isHome = !isHome">{{isHome ? 'Home ON' : 'Home Off'}}</button>
  <h1  :class="pClass">Curso VueJS</h1>

  <p :class="['title', {'title-home': isHome}]">Lorem ipsum dolor sit amet consectetur aliquam laborum? Aperiam.</p>

  <p :style="inlineStyle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, eaque!</p>

  <div
    v-for="(item, index) in todo.splice(0, 10)"
    :key="item.id">
    <div class="todo-items">
  
        <img
        v-show="item.dogSrc"
        :src="item.dogSrc"
        alt="" />

      {{ item.title }} = {{ item.completed }} - {{ index }}
    </div>
  </div>

  <h2>{{ getname }}</h2>

  <!-- 
<div v-for="person in api" :key="person.id">{{person.name}}

  <img :src="person.photo" alt="">
</div>
 -->
</template>
<script>
export default {
unmounted() {
  console.log(`onUnmounted`)

},

beforeUnmount() {
  console.log(`beforeUnmount`)
},
  mounted() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((req) => req.json())
      .then((data) => (this.dogapi = data.message))
  },
  data() {
    return {
      dogapi: '',
      nome: 'Geraldo',
      getname: this.nome,
      defaultAvatar: 'https://placehold.jp/150x150.png',
      classVar: 'title',
      isActive: false,
      isHome: true,
      pClass: {'title':true, 'title-home': this.isHome },
      inlineStyle: {'color': 'red', backgroundColor: '#000'},
      todo: [
        {
          userId: 1,
          id: 1,
          title: 'delectus aut autem',
          completed: false,
          dogSrc: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10475.jpg',
        },
        {
          userId: 1,
          id: 2,
          title: 'quis ut nam facilis et officia qui',
          completed: false,
          dogSrc: 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_10475.jpg',
        },
        {
          userId: 1,
          id: 3,
          title: 'fugiat veniam minus',
          completed: false,
          dogSrc: this.dogapi ?? '',
        },
        {
          userId: 1,
          id: 4,
          title: 'et porro tempora',
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
          completed: false,
        },
      ],
      breeds: 'Dog sleeping',
    }
  },
  computed: {
    api() {
      const apiData = [
        { id: 1, name: this.nome, photo: this.dogapi },
        { id: 2, name: 'Felipe', photo: this.dogapi },
      ]
      return apiData
    },
  },
}
</script>
<style scoped>
.header {
  background-color: #000;
  color: #fff;
  padding: 1rem;
}
.todo-items {
  padding: 0.5rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.active{
  color: seagreen;

}

.title-home {
  text-align: center;
  color: seagreen;
}

.text{
  color: aquamarine;
}
</style>
