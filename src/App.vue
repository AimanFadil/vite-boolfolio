<script>
import { store } from './store.js';
import axios from 'axios';
export default {
  components: {

  },
  data() {
    return {
      store,
      projects: []
    }
  },
  created() {
    this.getProjects()

  },
  methods: {
    getProjects() {
      axios.get(`${this.store.Url}api/projects`).then((response) => {
        console.log(response.data.results);
      })
    }

  },

}
</script>
<template lang="">
  <div>
    
  </div>
</template>

<style lang="scss" >
@use './styles/generals.scss';
</style>