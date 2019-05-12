<template>
  <div class="sidebar-container">
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      class="el-menu-vertical-demo">
      <template
        v-for="(item) in routes">
        <div
          v-if="!item.hide"
          :key="item.name">
          <el-submenu
            v-if="hasChildren(item)"
            :index="item.name">
            <template slot="title">
              <i class="el-icon-location"/>
              <span>{{ item.meta.name }}</span>
            </template>
            <router-link
              v-for="subItem in item.children"
              :key="subItem.name"
              :to="{name:subItem.name}"
              tag="div">
              <el-menu-item
                :index="subItem.name">
                <i class="el-icon-menu"/>
                <span slot="title">{{ subItem.meta.name }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
          <router-link
            v-else
            :key="item.name"
            :to="{name: item.name}"
            tag="div">
            <el-menu-item
              :index="item.name">
              <i class="el-icon-menu"/>
              <span slot="title">{{ item.meta.name }}</span>
            </el-menu-item>
          </router-link>
        </div>

      </template>
    </el-menu>
  </div>
</template>
<script>
import variables from '@/styles/variables.scss';

export default {
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    activeMenu() {
      const { name } = this.$route;
      return name;
    },
    variables() {
      return variables;
    },
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
  },
  methods: {
    hasChildren(item) {
      const children = item.children;
      if (children) {
        return children.filter(child => !child.hide).length;
      }
      return false;
    },
  },
};
</script>

