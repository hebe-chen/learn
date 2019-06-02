<template>
  <div id="appooo">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      form: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      }
    }
  },
  mounted () {
    console.log(this.$api.getInfo(this.form))
    this.$api.getInfo(this.form)
    .then(res => {
      console.log("app成功")
    },err => {
      console.log("app失败")
    })
  }
}
</script>

<style>
#appooo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
