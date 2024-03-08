<script>
export default {
    computed: {
        user() {
            return this.userAuth !== null ? this.userAuth : this.userLogged;
        },
        userAuth() {
            return this.$store.getters['getUserLogin'];
        },
        userLogged() {
            return this.$store.getters['getUserAuth'];
        }
    },
    methods:{
        userLogout() {
            return this.$store.dispatch('logout');
        }
    }
}
</script>

<template>
    <div class="dropdown pb-4">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
            <span class="d-none d-sm-inline mx-1">{{user.username}}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="#">{{user.username}}</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li>
                <hr class="dropdown-divider">
            </li>
            <li  @click="userLogout"><a class="dropdown-item">Sign out</a></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">

</style>
