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
  <header class="header">
    <div class="title">Vite Boolfolio Projects</div>
    <ul class="list">
      <li>projects</li>
      <li>technology</li>
      <li>Type</li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

$blu: #1b97d1;

.header {
  height: 100px;
  background-color: $blu;
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
      color: #fff;
      font-size: 1.2rem;

      &:not(:last-child) {
        border-right: 1px solid #fff;
      }
    }
  }
}
</style>