<template>
  <div class="navbar">

    <div
      v-if="user"
    >头部 {{ user.userName }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'user',
    ]),

  },
};
</script>

<style>
  .navbar {
    position: fixed;
    left: 160px;
    top: 0;
    right: 0;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
</style>

