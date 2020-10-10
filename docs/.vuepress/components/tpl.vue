<template>
  <div id="app">
    <br/>
    <h3 v-text="message">是是是</h3>
    <h3 v-text="info">试试</h3>
    <input type="button" value="事件绑定" v-on:click="方法">
  </div>
</template>

<script>
export default {
  el: 'app',
  data () {
      return {
        message: "Hello 雪虎 ！！！" ,
        info:"一些介绍"
      }
  }
}
</script>
