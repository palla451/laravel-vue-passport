<script setup>

import ProfileBarComponent from "@/components/ProfileBarComponent.vue";
</script>

<template>
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                    <router-link to="/dashboard/home">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-3 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard/about">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-3 bi-clipboard-data-fill"></i> <span class="ms-1 d-none d-sm-inline">About</span>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dashboard/users">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-3 bi-people-fill"></i>
                            <span class="ms-1 d-none d-sm-inline">Users</span>
                        </a>
                    </router-link>
                </li>
                <li>
                    <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                        <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                    <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                        <li class="w-100">
                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                        </li>
                        <li>
                            <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <hr>
            <profile-bar-component />
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>
