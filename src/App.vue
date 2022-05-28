<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png" />
      Vue Main Portal
    </div>
    <div class="container">
      <div class="sidebar">
        <div class="sidebar-item">
          <router-link to="/">Dashboard</router-link>
        </div>
        <div class="sidebar-item">
          <router-link to="/list">List</router-link>
        </div>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss" scope>
html, body {
  margin: 0px;
  padding: 0px;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.header {
  width: 100%;
  border-bottom: 1px gray solid;
  text-align: left;
  display: flex;
  align-items: center;
  justify-items: flex-start;
  padding: 15px;
}
.header img {
  width: 32px;
  height: 32px;
  margin-right: 8px;
}
.container {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.sidebar {
  height: 100%;
  width: 200px;
  border-right: 1px gray solid;
}
.sidebar-item {
  padding: 12px 20px;
}
.main {
  flex: 1;
  height: 100%;
  width: 100%;
  padding: 20px;
}
</style>
