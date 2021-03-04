<template>
<div class="checkbox" @click="handleClick">
  <div class="checkbox__container">
    <FontAwesomeIcon icon="check" v-if="state === 'selected'" class="checkbox__icon" />
    <FontAwesomeIcon icon="times" v-if="state === 'excluded'" class="checkbox__icon" />
  </div>
  <div class="checkbox__label" v-if="stateLabels">{{stateLabels[state]}}</div>
</div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { CheckboxState } from '@/checkbox-state.enum'
import useModelValue from '@/use-model-value'

type ComponentPropsType = {
  modelValue: CheckboxState;
  stateLabels: Record<CheckboxState, string> | null;
}

export default defineComponent({
  name: 'MultiStateCheckbox',
  components: {
    FontAwesomeIcon
  },
  emits: ['state-update'],
  props: {
    modelValue: {
      type: String as PropType<ComponentPropsType['modelValue']>,
      default: CheckboxState.UNSELECTED
    },
    stateLabels: {
      type: Object as PropType<ComponentPropsType['stateLabels']>,
      default: null
    }
  },
  setup (props: ComponentPropsType, context: SetupContext) {
    const state = useModelValue<CheckboxState>(props, context)

    function handleClick () {
      const { UNSELECTED, SELECTED, EXCLUDED } = CheckboxState
      switch (state.value) {
        case UNSELECTED:
          state.value = SELECTED
          break
        case SELECTED:
          state.value = EXCLUDED
          break
        default:
          state.value = UNSELECTED
          break
      }
    }
    return {
      handleClick,
      state
    }
  }
})
</script>
<style lang="scss" scoped>
$mint: #41B883;
$police-blue: #34495E;

.checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;

  &__container {
    width: 20px;
    height: 20px;
    border: 3px solid $police-blue;
  }
  &__icon {
    color: $mint;
  }

  &__label {
    margin-left: 10px;
  }
}
</style>
