<template>
  <div class="table-page">
    表格 {{ user }}
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

