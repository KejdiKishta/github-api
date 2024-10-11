
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
};
</script>

<template>
    <div class="card mb-3" style="background-color: #343a40; border: 1px solid #6c757d;">
        <div class="card-body align-items-center text-center text-white d-flex flex-column justify-content-between">
            <img :src="item.avatar_url || item.owner.avatar_url" alt="avatar" class="rounded-circle mb-2 bg-white">
            <h5 class="card-title">
                {{ item.login || item.full_name }}
            </h5>
            <div id="description" v-if="item.description">
                <span v-if="item.description.length > 20">
                    {{ item.description.slice(0, 17) }}...
                </span>
                <span v-else>
                    {{ item.description }}
                </span>
            </div>
            <a :href="item.html_url" target="_blank" class="text-white">Link</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    transition: transform 0.2s;
    height: 220px;

    &.hover {
        transform: scale(1.05);
    }

    img {
        width: 25%;
    }

    #description {
        font-size: 0.8rem;
    }
}
</style>
