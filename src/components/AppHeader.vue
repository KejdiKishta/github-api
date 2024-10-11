<script>
import axios from "axios";
import { store } from "../store";

export default {
    data() {
        return {
            store
        };
    },
    methods: {
        searchGitHub() {
            axios.get(`https://api.github.com/search/${this.store.searchType}?q=${this.store.searchQuery}`)
            .then((response) => {
                this.store.results = response.data.items;
                console.log(this.store.results);
            })
        }
    }
};
</script>

<template>
    <header class="bg-black d-flex align-items-center justify-content-between px-3">
        <!-- logo -->
        <img class="h-100" src="../assets/img/logo.png" alt="logo">

        <!-- searchbar -->
        <div class="d-flex align-items-center">
            <!-- Input -->
            <input v-model="this.store.searchQuery" class="form-control me-2" type="text" placeholder="Cerca su GitHub..." aria-label="Search"/>
            
            <!-- Select type of search -->
            <select v-model="this.store.searchType" class="form-select me-2" aria-label="Search type">
                <option value="repositories">Repositories</option>
                <option value="users">Users</option>
            </select>

            <!-- Tasto di ricerca -->
            <button @click="searchGitHub" class="btn btn-outline-light">Cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    height: 10vh;
}
</style>
