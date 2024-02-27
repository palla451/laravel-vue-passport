<script>
import ContentPageView from "@/views/ContentPageView.vue";

export default {
    components: {ContentPageView},
    // components: {SidebarLeftView},
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
    <div class="container-fluid">
        <div v-if="userLogged || auhtLogged">
            <content-page-view></content-page-view>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>
