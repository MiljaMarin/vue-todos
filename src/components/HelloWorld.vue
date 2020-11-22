<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>{{ name }}</h3>
        <span v-if="msg">{{ msg }}</span>
        <span v-else><b> Bitte eine Nachricht hinterlassen</b></span>
        <div>
            <span v-if="name">Dein Name lautet <b>{{ name }}</b></span>
            <span v-else><b> Bitte einen Namen angeben</b></span>
        </div>
        <ul>
            <li :key="item" v-for="item in names">{{ item }}</li>
        </ul>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            names: ['Danilo', 'Kobi', 'Iva']
        }
    },
    //kurze notation
    props: ['msg', 'name']
    //ausführliche notation
    /* props: {
         msg: String,
         name: {
             default:"Bitte Namen eingeben"
         }
     }
     */

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    color: #42b983;
}
</style>
