<script>
export default {
    props:{
        msg: String
    },
    data(){
        return {
            username:null,
            password:null
        }
    },
    methods:{
        handleLogin(){
            this.$store.dispatch('login', {'email':this.username, 'password':this.password});
        }
    },
    computed:{
        accessToken(){
           return this.$store.getters['getAccessToken'];
        },
        user(){
            return this.$store.getters['getUserLogged'];
        }
    }

}
</script>

<template>
<div id="login">{{msg}}
    <form @submit.prevent="handleLogin">
        <input type="text" placeholder="username or email" v-model="username">
        <input type="password" placeholder="password" v-model="password">
        <button class="btn btn-danger" type="submit">login</button>
    </form>
    <div id="token" v-if="accessToken">
            {{accessToken}}
    </div>
    <div id="user" v-if="user">
            {{user}}
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
