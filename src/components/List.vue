<template>
  <div>
    <ul>
      <li v-for="item in getterlist" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const listModule = namespace('list');

@Component
export default class List extends Vue {
  @listModule.Getter('getterlist') private getterlist!: string[]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
