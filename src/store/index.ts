import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useValuteStore = defineStore('valute', () => {
  const currentValute = ref('RUB')
  const allValutes = ['RUB', 'USD', 'EUR']
  const valutesValue = ref({})
  const sortedValutes = ref(['USD', 'EUR'] as String[])

  const setCurrentValue = (newName:string) => {
    currentValute.value = newName
    sortedValutes.value = allValutes.filter((value) => value !== currentValute.value)
  }

  const getCurrentValute = () => {
    return currentValute
  }

  const setValuteValues = (data: object) => {
    valutesValue.value = data
  }

  const getAllValutes = () => {
    return allValutes
  }

  const getSortedValutes = () => {
    return sortedValutes
  }

  const getValutesValue = () => {
    return valutesValue
  }

  return {
    setCurrentValue,
    setValuteValues,
    getCurrentValute,
    getAllValutes,
    getValutesValue,
    getSortedValutes
  }
})