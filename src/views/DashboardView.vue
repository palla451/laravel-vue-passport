<script>

export default {
    name: 'DashboardView',
    computed:{
        user() {
            return this.$store.getters['getUserLogged'];
        }
    }

}
</script>

<template>
    <div v-if="user">
        <router-view />
    </div>
</template>

<style scoped lang="scss">

</style>
