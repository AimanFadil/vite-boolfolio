<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'types',

    data() {
        return {
            store,
            types: [],
           
        }
    },
    created() {
        this.getTypes()

    },
    methods: {
        getTypes() {
            axios.get(`${this.store.Url}api/types`).then((response) => {
                console.log(response.data)
                this.types = response.data.results;
                
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
                    <h1 class="text-white">TYPES</h1>
                </div>
                <div class="contain">
                    <div class="row ">
                        <div class=" d-flex flex-wrap">
                            <div v-for="type, index in types" :key="index" :type="type">
                                <div class="p-4">

                                    <div class="card" style="width: 17rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">{{ type.nome }}</h5>
                                            <p class="card-text">{{ type.slug }}</p>
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