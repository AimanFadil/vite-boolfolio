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

        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">{{ project.nome }}</h5>
                <p class="card-text">{{ project.slug }}</p>
                <p class="card-text">{{ project.programma }}</p>
                <p class="card-text">{{ project.data }}</p>
                <p class="card-text">{{ project.descrizione }}</p>
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