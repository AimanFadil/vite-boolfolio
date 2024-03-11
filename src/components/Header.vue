<script>

export default {
  name: 'Header',
  data() {
    return {

    }
  }
}
</script>
<template lang="">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <header class="header">
    <div class="title">Vite Boolfolio Projects</div>
    <ul class="list">
      <li><router-link :to="{name:'home'}">HOME</router-link></li>
      <li><router-link :to="{name:'blog'}">BLOG</router-link></li>
      <li><router-link :to="{name:'types'}">TYPES</router-link></li>
      <li><router-link :to="{name:'technologies'}">TECHNOLOGIES</router-link></li>
      <li><router-link :to="{name:'contacts'}">CONTACTS</router-link></li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

$blu: #e4c518;

.header {
  height: 100px;
  background: rgb(6,0,36);
  background: linear-gradient(90deg, rgba(6,0,36,1) 27%, rgba(9,9,121,1) 71%, rgba(17,0,255,0.9767981438515081) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;

  .title {
    text-align: center;
    color: #fff;
    font-size: 2rem;

  }

  .list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 0 1rem;

    }
  }

  a{
    color: #fff;
    &:hover{
      color: black;
    }
  }
}
</style>