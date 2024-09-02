<template>
  <div class="info">
    <div class="container">
      <h2>Курс валют</h2>
      <p 
        v-for="valute of valutesValue" 
        :key="valute.name"
      >
        1 {{ valute.name }} = {{ valute.value }} {{ currentValute }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useValuteStore } from '@/store'

export default defineComponent({
  setup () {
    const valuteStore = useValuteStore()
    const valuteList = valuteStore.getValutesValue()
    const sortedValuteList = valuteStore.getSortedValutes()
    const currentValute = valuteStore.getCurrentValute()

    const valutesValue = computed(() => {
      const result = []
      sortedValuteList.value.forEach( element => {
        const key = `${element}-${currentValute.value}`.toLowerCase()
        const data = {
                        name: element,
                        value: valuteList.value[key]
                      }
        result.push(data)
      })
      return result
    })

    return {
      valutesValue,
      currentValute
    }
  }
})
</script>

<style scoped>
.info {
  padding-top: 60px;
}

.info p {
  margin-bottom: 20px;
  font-size: 50px;
}
</style>