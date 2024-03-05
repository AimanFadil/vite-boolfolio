<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'projectSingle',
    data(){
        return{
            store,
            project: null
        }
    },
    created(){
        this.getProjectSingle();
    },
    methods:{
        getProjectSingle(){
            axios.get(`${this.store.Url}api/projects/${this.$route.params.slug}`).then((response) =>{
                console.log(this.$route); 
                this.project = response.data.project;
            })
        }
    }
  
}
</script>
<template lang="">
   <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card" style="width: 18rem;">
                    <img src="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.nome }}</h5>
                        <!-- <p class="card-text">{{ project.slug }}</p>
                        <p class="card-text">{{ project.programma }}</p>
                        <p class="card-text">{{ project.data }}</p>
                        <p class="card-text">{{ project.descrizione }}</p>
                        <p class="card-text">{{ project.emulazione }}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
</style>