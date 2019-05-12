<template>
  <div class="index-page">首页{{ aaa }}</div>
</template>
<script>
import { info } from '@/api/user';


export default{
  data() {
    return {

    };
  },
  computed: {
    aaa() {
      console.log(window.a);
      return window;
    },
  },
  created() {
    console.log(this.$store);
    // info().then((res) => {
    //   console.log(res);
    //   this.$store.commit('SET_USER', res.data.user);
    // });
    this.$store.dispatch('setUser');
  },
  destroyed() {
    console.log('销毁');
  },
};
</script>
