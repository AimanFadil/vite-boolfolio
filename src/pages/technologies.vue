<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'technologies',

    data() {
        return {
            store,
            technologies: [],
           
        }
    },
    created() {
        this.getTypes()

    },
    methods: {
        getTypes() {
            axios.get(`${this.store.Url}api/technologies`).then((response) => {
                console.log(response.data)
                this.technologies = response.data.results;
                
            })
        }

    },
}
</script>
<template lang="">
    <main>
       <div class="container">
            <div class="row">
                <div class="col-12 text-center py-3">
                    <h1 class="text-center text-white">TECHNOLOGIES</h1>
                </div>
                <div class="contain">
                    <div class="row ">
                        <div class=" d-flex flex-wrap">
                            <div v-for="technology, index in technologies" :key="index" :technology="technology">
                                <div class="p-4">

                                    <div class="card" style="width: 17rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ technology.nome }}</h5>
                                            <p class="card-text">{{ technology.slug }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

main {
   .contain{
    max-width: 1600px;
   }
}
</style>