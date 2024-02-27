<script>
import NavBarPageView from "@/views/component/NavBarPageView.vue";

export default {
    components: {NavBarPageView}
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
