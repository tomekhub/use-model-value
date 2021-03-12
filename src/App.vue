<template>
  <FilterSettings />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FilterSettings from '@/components/FilterSettings.vue'

export default defineComponent({
  name: 'App',
  components: {
    FilterSettings
  },
  data: () => ({
    state: 'unselected'
  })
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
