<script>

import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components: {
    Header,
    Main
  },



}
</script>
<template lang="">
  <div>
    <Header/>
    <Main/>
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
</style>