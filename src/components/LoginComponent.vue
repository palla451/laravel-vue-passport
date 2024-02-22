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
        user(){
            return this.$store.getters['getUserLogged'];
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row m-5 no-gutters shadow-lg">
            <div class="col-md-6 d-none d-md-block">
                <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" class="img-fluid" style="min-height:100%;" />
            </div>
            <div class="col-md-6 bg-white p-5">
                <h3 class="pb-3">Login Form</h3>
                <div class="form-style">
                    <form @submit.prevent="handleLogin">
                        <div class="form-group pb-3">
                            <input type="email" placeholder="email or password" class="form-control" v-model="username" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="form-group pb-3">
                            <input type="password" placeholder="password" v-model="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center"><input name="remember_me" type="checkbox" value="" /> <span class="pl-2 font-weight-bold">Remember Me</span></div>
                            <div><a href="#">Forget Password?</a></div>
                        </div>
                        <div class="pb-2">
                            <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">Submit</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        <div v-if="user">
            <span>{{user}}</span>
        </div>

    </div>

</template>


