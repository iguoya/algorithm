<template>
<div id="tpl">
    <ul>
        <li v-for="(i,index) in items">
            {{i.first_name}} ---{{i.last_name}} ---{{i.email}}
        </li>
    </ul>
</div>
</template>

<script>
const axios = require('axios')
export default {
    data() {
        return {
            items: []
        }
    },
    beforeMount() {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                this.$data.items = response.data.data
                console.log(this.$data.items)
            })
            .catch(error => {
                console.log(error);
            })
    }
}
</script>
