<template>
  <input type="text" inputmode="numeric" :value="inputValue" @input="inputNumber">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InputNumber',
  props: {
    inputValue: {
      type: Number
    }
  },
  setup (_, {emit}) {
    const inputNumber = ($event: Event) => {
      const inputElement = $event.target as HTMLInputElement
      const value = inputElement.value
      const correctValue = ageInputFilter(value)
      inputElement.value = correctValue
      emit('update', Number(correctValue))
    }

    const ageInputFilter = (input: string) => {
      const pattern = /^\d+$/
      const test = pattern.test(input)
      if (test || input === '') {
        return input
      } else {
        let correctValue = input.slice(0, -1)
        if (!pattern.test(correctValue)) {
          correctValue = ageInputFilter(correctValue)
        }
        return correctValue
      }
    }

    return {
      inputNumber
    }
  }
})
</script>

<style scoped>
input {
  padding: 5px;
  margin-right: 10px;
}
</style>