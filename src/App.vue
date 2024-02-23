<template>
        <router-view/>
</template>

<style lang="scss">

</style>
<script>
// import DashboardView from "@/views/DashboardView.vue";

export default {
    // components: {DashboardView},
    data(){
        return {
            logged:false
        }
    },
    mounted() {
        this.checkAuthStatus();
    },
    methods: {
        async checkAuthStatus() {
            try {
                console.log('here');
                this.$store.dispatch('authLogged');
                this.logged = this.$store.getters.getLogged;
            } catch (error) {
                console.error("Errore durante il controllo dello stato di autenticazione:", error);
            }
        }
    }
}
</script>
