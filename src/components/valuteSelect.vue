<template>
  <select v-model="valuteValue">
    <option 
    v-for="valute of valutes" 
    :key="valute" 
    :value="valute"
    v-show="valuteName !== valute && hideValute !== valute"
  >{{ valute }}</option>
  </select>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { useValuteStore } from '@/store'

export default defineComponent({
  name: 'ValuteSelect',
  props: {
    valuteName: {
      type: String
    },
    hideValute: {
      type: String
    }
  },
  setup (props, { emit }) {
    const valuteStore = useValuteStore()
    const valutes = valuteStore.getAllValutes()

    const valuteValue = ref(props.valuteName)

    watch(valuteValue, () => {
      emit('update:valuteName', valuteValue.value)
    })

    return {
      valutes,
      valuteValue
    }
  }
})
</script>

<style scoped>
select {
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
}
</style>