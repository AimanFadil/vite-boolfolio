<script>
import { store } from '../store.js';
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'blog',
    components: {
        ProjectCard
    },

    data() {
        return {
            store,
            projects: [],
           
        }
    },
    created() {
        this.getProjects()

    },
    methods: {
        getProjects() {
            axios.get(`${this.store.Url}api/projects`).then((response) => {
                console.log(response)
                this.projects = response.data.results;
                
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
                    <h1 class="text-white">Projects</h1>
                </div>
                <div class="contain">
                    <div class="row ">
                        <div class=" d-flex flex-wrap">
                            <ProjectCard  v-for="project, index in projects" :key="index" :project="project"/>
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