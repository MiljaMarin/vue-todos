<template>
  <div class="home">
      <h3>{{message}}</h3>
      Message: <input type = "text" v-model="message"/>
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <Test/>
    <HelloWorld msg="Welcome to Your Vue.js App" name="Mara"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Test from "@/components/Test";

export default {
  name: 'Home',
  components: {
    HelloWorld,
     Test,
  },
  data(){
      return {
          message: "Standart Wert",
      }
  }
}
</script>
