<template>
  <div class="layout">
    <navbar/>
    <sidebar/>
    <app-main/>
  </div>
</template>
<script>
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import AppMain from './components/appmain';

export default {
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
};
</script>

