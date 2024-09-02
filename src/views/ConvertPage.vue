<template>
  <div class="convert">
    <div class="container">
      <h2>Конвертация</h2>
      <div class="input_block">
        <InputNumber :inputValue="input1" @update="updateInput1"/>
        <ValuteSelect v-model:valuteName="valuteName1" />
      </div>
      <div class="input_block">
        <InputNumber :inputValue="input2"  @update="updateInput2"/>
        <ValuteSelect v-model:valuteName="valuteName2" v-model:hideValute="valuteName1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import InputNumber from '@/components/valuteInput.vue'
import ValuteSelect from '@/components/valuteSelect.vue'
import { useValuteStore} from '@/store'

export default defineComponent({
  components: {InputNumber, ValuteSelect},
  setup () {
    const valuteStore = useValuteStore()
    const valuteList = valuteStore.getValutesValue()
    const input1 = ref(0)
    const input2 = ref(0)
    const valuteName1 = ref(valuteStore.getSortedValutes().value[0])
    const valuteName2 = ref(valuteStore.getCurrentValute().value)

    const valuteValue = computed(()=> {
      if (valuteName1.value === valuteName2.value) {
        return 1
      }
      const key = `${valuteName1.value}-${valuteName2.value}`.toLowerCase()
      return valuteList.value[key]
    })

    watch(valuteValue, () => {
      updateInput1(input1.value)
    })

    const updateInput1 = (newVal: number) => {
      input1.value = newVal
      input2.value = newVal * valuteValue.value
    }

    const updateInput2 = (newVal: number) => {
      input2.value = newVal
      input1.value = newVal / valuteValue.value
    }

    return {
      input1,
      input2,
      valuteName1,
      valuteName2,
      updateInput1,
      updateInput2
    }
  }
})
</script>

<style scoped>
.convert {
  padding-top: 60px;
}

.input_block {
  margin-bottom: 15px;
}
</style>