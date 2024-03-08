<script>
export default {
    data() {
        return {
            columns: [
                {
                  label: 'id',
                  field: 'id',
                  type: 'number'
                },
                {
                  label: 'username',
                  field: 'username'
                },
                {
                    label: 'email',
                    field: 'email',
                },
                {
                    label: 'create',
                    field: 'created_at',
                    type: 'datetime'
                },
                {
                    label: 'updated',
                    field: 'updated_at',
                    type: 'datetime'
                }
            ],
        }
    },
    computed:{
        users() {
           return this.$store.getters['getUsers'];
        }
    },
    mounted() {
        this.$store.dispatch('getUsers');
    }
}
</script>

<template>
    <div v-if="users">
        <vue-good-table
            :columns="columns"
            :rows="users"/>
    </div>
    <div v-else>loading...</div>
</template>

<style scoped lang="scss">
</style>
