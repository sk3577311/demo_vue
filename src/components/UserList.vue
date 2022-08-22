<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <p class="h3 fw-normal text-success">Users list</p>
                <p class="fst-italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates nihil
                    repudiandae ad rem, adipisci nam quae, repellendus omnis similique eveniet incidunt? Fugit ipsa
                    accusamus exercitationem dolorum ullam culpa doloribus sapiente.</p>
            </div>
        </div>
        <div class="row mr-auto d-flex align-center justify-content-center" v-if="loading">
            <SpiNner/>
        </div>
        <div class="row" v-if="!loading">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-success text-white">
                        <tr>
                            <th class="fw-normal">S.no</th>
                            <th class="fw-normal">Name</th>
                            <th class="fw-normal">Email</th>
                            <th class="fw-normal">Company</th>
                            <th class="fw-normal">Website</th>
                            <th class="fw-normal">Location</th>
                            <th class="fw-normal">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{user.id}}</td>
                            <td>
                                <router-link class="text-decoration-none fw-bold text-success" :to="'/users/' + user.id">{{user.name}}</router-link>
                            </td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.company.name}}</td>
                            <td>{{user.website}}</td>
                            <td>{{user.address.city}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {UserService} from '@/services/UserService'
import SpiNner from './SpiNner.vue';
export default {
    data: function () {
        return {
            loading: false,
            users: [],
            errorMessage: null,
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await UserService.getallusers();
            this.loading = false;
            this.users = response.data;
            console.log(response.data);
        }
        catch (error) {
            console.log(error);
        }
    },
    components: { SpiNner }
}
</script>