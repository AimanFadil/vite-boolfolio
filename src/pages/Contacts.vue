<script>
import { store } from '../store.js';
import axios from 'axios';
export default {
    name: 'Contacts',
    

    data() {
        return {
            store,
            nome: '',
            cognome: '',
            cell:'',
            email: '',
            messaggio: '',
            errors: ''
           
        }
    },
    methods: {
        getMail() {
            const data = {
                nome: this.nome,
                cognome: this.cognome,
                cell: this.cell,
                email: this.email,
                messaggio: this.messaggio
            }

            this.errors = [];

            axios.post(`${this.store.Url}api/contacts`, data).then((response) => {
                console.log(response.data);
                if(response.data.success){
                    this.nome = '';
                    this.cognome = '';
                    this.cell = '';
                    this.email = '';
                    this.messaggio = '';
                }
                else{
                    this.errors = response.data.errors;
                }
                
                
            });
        }

    },
}
</script>
<template lang="">
    <div class="col-12 p-4">
        <form @submit.prevent="getMail()" method="POST" >
            <div class="form-group py-2">
                <label for="nome" class="control-label">Nome</label>
                <input type="text" name="nome" id="nome" placeholder="nome" v-model="nome"
                    class="form-control" :class="errors.nome ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.nome" :key="`Errore: ${index}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="form-group py-2">
                <label for="cognome" class="control-label">Cognome</label>
                <input type="text" name="cognome" id="nome" placeholder="Cognome" v-model="cognome"
                    class="form-control" :class="errors.cognome ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.cognome" :key="`Errore: ${index}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="form-group py-2">
                <label for="cell" class="control-label">Telefono</label>
                <input type="text" name="cell" id="cell" placeholder="cell" v-model="cell"
                    class="form-control" :class="errors.cell ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.cell" :key="`Errore: ${index}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="form-group py-2">
                <label for="email" class="control-label">Mail</label>
                <input type="text" name="email" id="email" placeholder="email" v-model="email"
                    class="form-control" :class="errors.email ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.email" :key="`Errore: ${index}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="form-group py-2">
                <label for="messaggio" class="control-label">Meassaggio</label>
                <input type="text" name="messaggio" id="messaggio" placeholder="messaggio" v-model="messaggio"
                    class="form-control" :class="errors.messaggio ? 'is-invalid' : ''">
                <p v-for="(error, index) in errors.messaggio" :key="`Errore: ${index}`" class="text-danger">
                    {{ error }}
                </p>
            </div>
            <div class="form-group py-2">
                <input type="submit" class="btn btn-warning">
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/generals.scss';

main {
   .contain{
    max-width: 1600px;
   }
}
</style>