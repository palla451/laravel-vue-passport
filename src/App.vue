<template>
    <div v-if="userLogged">
        {{userLogged}}
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

    },
    computed:{
        userLogged(){
            return this.$store.getters['getUserLogged'];
        }
    }
}
</script>
