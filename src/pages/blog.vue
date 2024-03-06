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
            /* paginaAttiva :1,
            prossPagina : null */
        }
    },
    created() {
        this.getProjects()

    },
    methods: {
        getProjects(/* numPagina */) {
            axios.get(`${this.store.Url}api/projects`/* ,{
                params: {
                    pagina : numPagina
                }
            } */).then((response) => {
                this.projects = response.data.results;
                /* console.log(response.data.results.paginaAttiva);
                this.paginaAttiva = response.data.results.paginaAttiva;
                this.prossPagina = response.data.results.prossPagina; */
                
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
                    <h1>Projects</h1>
                </div>
                <div class="contain">
                    <div class="row ">
                        <div class=" d-flex flex-wrap">
                            <ProjectCard  v-for="project, index in projects" :key="index" :project="project"/>
                        </div>
                        <!-- <div class="col-12">
                            <div class="content">
                                <ul>
                                    <li>
                                        <button @click="getProjects( paginaAttiva - 1)">Indietro</button>
                                    </li>
                                    <li>
                                        <button @click="getProjects( paginaAttiva + 1)">Avanti</button>
                                    </li>
                                </ul>
                            </div>
                        </div> -->
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