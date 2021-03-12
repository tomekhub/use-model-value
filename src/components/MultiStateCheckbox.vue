<template>
  <div class="checkbox" @click="handleClick()">
    <input class="checkbox__hidden" type="checkbox" :indeterminate="state === CheckboxState.EXCLUDED" :checked="state === CheckboxState.SELECTED">
    <div class="checkbox__container" role="checkbox">
    <FontAwesomeIcon icon="check" v-if="state === CheckboxState.SELECTED" class="checkbox__icon" />
    <FontAwesomeIcon icon="times" v-if="state === CheckboxState.EXCLUDED" class="checkbox__icon" />
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
  emits: ['update:modelValue'],
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
        case EXCLUDED:
          state.value = UNSELECTED
          break
      }
    }
    return {
      handleClick,
      state,
      CheckboxState
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
  &__hidden {
    display: none;
  }
  &__container {
    width: 20px;
    height: 20px;
    border: 3px solid $police-blue;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__icon {
    color: $mint;
  }

  &__label {
    margin-left: 10px;
  }
}
</style>
