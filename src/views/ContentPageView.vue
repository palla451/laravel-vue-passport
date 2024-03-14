<script>
import NavBarPageView from "@/views/component/NavBarPageView.vue";
import router from "@/router";

export default {
    components: {NavBarPageView},
    computed: {
        userAuth() {
            return this.$store.getters['getUserLogin'];
        },
    },
    created() {
        if (!this.userAuth){
           router.push({path:'/dashboard/home'})
        }
    }
}
</script>

<template>
    <div class="container-fluid">
        <div class="row flex-nowrap">

            <!-- MENU LATERALE  -->

            <nav-bar-page-view></nav-bar-page-view>

            <!-- END MENU LATERALE  -->

            <div class="col py-3">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
#sidebar-nav {
    width: 160px;
}
</style>
