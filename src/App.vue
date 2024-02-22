<template>
    <div v-if="userLogged || auhtLogged">
        <span>userlogged: {{userLogged}}</span>
        <span>authLogged: {{auhtLogged}}</span>
        <nav>
            <router-link to="/login">login</router-link> |
            <router-link to="/home">home</router-link> |
        </nav>
    </div>
    <div v-else>
        not authorized
    </div>

        <router-view/>

</template>

<style lang="scss">

</style>
<script>
export default {
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
                this.$store.dispatch('auhtLogged');
                this.logged = this.$store.getters.getLogged;
            } catch (error) {
                console.error("Errore durante il controllo dello stato di autenticazione:", error);
            }
        }
    },
    computed:{
        userLogged(){
            return this.$store.getters['getUserLogged'];
        },
        auhtLogged(){
            return this.$store.getters['getLogged']
        }
    }
}
</script>
