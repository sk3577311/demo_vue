<template>
    <div class="text-success border m-3" v-if="isLoggedIn">
        <h3>welcome</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ducimus minus delectus sapiente assumenda
            magnam ipsum quae nobis aperiam? Expedita fuga rerum soluta dicta accusamus quibusdam ratione ab inventore
            tempora.</p>
    </div>

    <div class="text-danger border m-3" v-if="!isLoggedIn">
        <h5>thankyou</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quam veniam asperiores omnis nostrum incidunt
            consequatur, rem mollitia impedit ea obcaecati repudiandae consectetur cumque modi in dolorum reprehenderit
            quisquam recusandae.</p>
    </div>
    <div>
        <button v-if="!isLoggedIn" class="btn btn-success btn-block" @click="login()">Login</button>
        <button v-if="isLoggedIn" class="btn btn-danger btn-block" @click="logout()">Logout</button>
    </div>
</template>
 
<script>

export default {
    name: 'AuthUser',

    data: function () {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        login: function () {
            this.isLoggedIn = true
        },
        logout: function () {
            this.isLoggedIn = false
        }
    }
}
</script>
