<template>
    <div
        :class="`flex flex-col justify-between shadow-[inset_0_60px_30px_0px_rgba(0,0,0,0.1)] m-4 p-4 2xl:w-[555px] 2xl:h-[740px] xl:w-[425.797px] xl:h-[560px] lg:w-[295.938px] lg:h-[400px] md:w-[300px] md:h-[400px] sm:w-[290px] sm:h-[400px] group hover:invert hover:cursor-pointer`"
        :style="bg_img"
        >
        <h3 class="text-white text-[2.5rem] font-[700] group-hover:invert">
            {{title}}
        </h3>
        <div class="group-hover:invert text-txt text-xs flex flex-col gap-4">
            <div class="up flex justify-between ">
                <h6 class="date">{{ date }}</h6>
                <h6 class="msg">{{msg}}</h6>
            </div>
            <div class="down">
                <h6 class="tag">{{tag}}</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps({
    url:String,
    title:String,
    msg:String,
    date:String,
    tag:String
})
const bg_img=ref({background:`url('${props.url}') center/cover no-repeat`})
//直接寫在tailwind裡面會讀不到背景圖，所以另外寫成內聯樣式

</script>
