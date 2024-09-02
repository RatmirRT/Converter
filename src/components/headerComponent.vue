<template>
  <header>
    <div class="container">
      <p class="logo">Converter</p>
      <nav class="menu">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/convert">Конвертация</RouterLink>
      </nav>
      <div class="valute-picker">
        <ValuteSelect v-model:valuteName="valuteName" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch, ref } from 'vue'
import { useValuteStore } from '@/store'
import ValuteSelect from '@/components/valuteSelect.vue'

export default defineComponent({
  components: {ValuteSelect},
  setup () {
    const valuteStore = useValuteStore()
    const valuteName = ref(valuteStore.getCurrentValute())

    const getValuteValues = async () => {
      const url = 'https://status.neuralgeneration.com/api/currency'
      const request = await fetch(url)
      if (request) {
        const data = await request.json()
        valuteStore.setValuteValues(data)
      }
    }

    watch(valuteName, (newVal) => {
      valuteStore.setCurrentValue(newVal)
    })

    onMounted(() => {
      getValuteValues()
    })

    return {
      valuteName
    }
  }
})
</script>

<style scoped>
header {
  border-bottom: 1px solid var(--gray);
  padding: 15px 0;
}

.logo {
  text-transform: uppercase;
  font-size: 30px;
}

header .container {
  display: flex;
  align-items: center;
}

.menu {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.menu a {
  color: var(--gray);
}

.menu .router-link-active {
 color: var(--black);
}

.menu a.active{
  color: var(--black);
}
</style>