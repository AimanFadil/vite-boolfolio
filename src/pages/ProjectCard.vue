<script>
import { store } from '../store.js';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <div class="p-4">

        <div class="card" style="width: 17rem;">
            <img src="" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"><router-link :to="{ name: 'projectSingle' , params: { slug: project.slug } }">{{ project.nome }}</router-link></h5>
                <p class="card-text">{{ project.slug }}</p>
                <p class="card-text">{{ project.programma }}</p>
                <p class="card-text">{{ project.data }}</p>
                <p class="card-text">{{ project.descrizione }}</p>
                <p class="card-text">{{ project.emulazione }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';
.card{
    height: 400px;
}
</style>