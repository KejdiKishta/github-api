<script>
import { store } from '../store';
import Card from './Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <main class="bg-dark text-white">
        <div class="container pt-4">
            <div class="row">
                <div class="col-12 col-md-4 mb-4" v-for="card in store.results" :key="card.id">
                    <Card :item="card" />
                </div>
            </div>
        </div>
    </main>
</template>


<style scoped lang="scss">
main {
    min-height: 80vh;
}
</style>
