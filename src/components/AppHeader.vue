<script>
export default {
    data() {
        return {
            searchQuery: '',   
            searchType: 'repositories',
            results: []
        };
    },
    methods: {
        // test
        searchGitHub() {
            const url = `https://api.github.com/search/${this.searchType}?q=${this.searchQuery}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                this.results = data.items;
                console.log(this.results);
                
                })
                .catch(error => {
                console.error('Errore nella richiesta:', error);
                });
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
            <input v-model="searchQuery" class="form-control me-2" type="text" placeholder="Cerca su GitHub..." aria-label="Search"/>
            
            <!-- Select type of search -->
            <select v-model="searchType" class="form-select me-2" aria-label="Search type">
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
