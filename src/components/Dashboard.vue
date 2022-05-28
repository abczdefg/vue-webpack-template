<template>
  <div class="dashboard">
    Dashboard: ({{ message }})
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const dashboardModule = namespace('dashboard');

@Component
export default class Dashboard extends Vue {
  @dashboardModule.State('message') private message!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
