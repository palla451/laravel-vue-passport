<script>
export default {
    data() {
        return {
            fields: [
                {
                    key: 'id',
                    sortable: true
                },
                {
                    key: 'username',
                    sortable: false
                },
                {
                    key: 'email',
                    sortable: true,
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
    <div v-if="users" class="table-responsive">
        <table class="table table-striped table-hover table-bordered table-primary ">
            <thead>
                <h2>table users</h2>
            </thead>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">created</th>
                <th scope="col">updated</th>
                <th scope="col">avatar</th>
                <th scope="col">action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.created_at}}</td>
                <td>{{user.updated_at}}</td>
                <td><img class="avatar" src="data:image/jpeg;base64,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" alt="Avatar"></td>
                <td>no-actions</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div v-else>loading...</div>
</template>

<style scoped lang="scss">
</style>
