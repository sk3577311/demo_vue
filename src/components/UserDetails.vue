<template>
<h1>ggg</h1>
</template>

<script>
import { UserService } from '../services/UserService';

export default {
    name : 'UserDetails',
    created : async function() {
        let userID = this.$route.params.userID;
        try {
            let response = await UserService.getUser(userID);
            console.log(response.data)
        } catch(error) {
            console.log(error);
        }
    }
}
</script>