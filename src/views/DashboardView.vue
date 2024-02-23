<script>
export default {
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

<template>
    <div v-if="userLogged || auhtLogged">
        <nav class="navbar navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="/dashboard/home"><a class="nav-link" href="#">Home</a></router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view/>
    </div>
    <div v-else>
        loading...
    </div>

</template>

<style scoped lang="scss"></style>
