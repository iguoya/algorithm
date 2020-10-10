<template>
  <div id="hello">
    <br/>
    {{ message }} ---- {{name}}
    <p>
 {{ school.name }} {{school.mobile}}
    </p>
    <ul>
        <li></li>
        </ul>
  </div>
</template>

<script>
export default {
  el: 'hello',
  data () {
    return {
      message: "Hello 雪虎 ！！！",
      school: {
          name: "黑马程序员",
          mobile: "112334343434"
      },
      campus:["北京校区", "上海校区", "深圳校区"]
    
    }
  }
}
</script>
