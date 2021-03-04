<template>
<MultiStateCheckbox v-model="state" :state-labels="stateLabels" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MultiStateCheckbox from '@/components/MultiStateCheckbox.vue'
import { CheckboxState } from '@/checkbox-state.enum'

export default defineComponent({
  name: 'FilterSettings',
  components: {
    MultiStateCheckbox
  },
  data: () => ({
    state: CheckboxState.UNSELECTED,
    stateLabels: {
      [CheckboxState.UNSELECTED]: 'Example setting is not selected',
      [CheckboxState.SELECTED]: 'Example setting is selected',
      [CheckboxState.EXCLUDED]: 'Example setting is excluded'
    }
  })
})
</script>
