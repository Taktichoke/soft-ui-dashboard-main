import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useApiStore = defineStore('api', () => {

  interface Data {
    id: string,
    rank: string,
    symbol: string,
    name: string,
    supply: string,
    maxSupply: string,
    marketCapUsd: string,
    volumeUsd24Hr: string,
    priceUsd: string,
    changePercent24Hr: string,
    vwap24Hr: string,
    explorer: string
  }

  const datas = ref<Data[]>([])

  async function getData() {
    const url = "https://komgrip.co.th/coincap/assets";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      datas.value = json.data
    } catch (error) {
      console.error(error.message);
    }
  }

  return { getData, datas }
})
