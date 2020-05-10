<template>
  <div class="hello">
    <button @click="getData">请求数据</button>
    <div>{{info}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      info: null
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>

</style>
