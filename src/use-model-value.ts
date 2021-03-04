import { computed, SetupContext, WritableComputedRef } from 'vue'

export default function useModelValue<T> (props: Record<string, T | unknown>, { emit }: SetupContext, name = 'modelValue'): WritableComputedRef<T> {
  return computed<T>({
    get: () => props[name] as T,
    set: (value: T) => emit(`update:${name}`, value)
  })
}
