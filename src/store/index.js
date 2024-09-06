import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useStore = defineStore('store',()=>{
    const x = ref('我是測試的x')
    return {x}
})