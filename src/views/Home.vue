<template>
    <div class="bg-bg wrap">
        <nav class="container pt-7 mx-auto px-4 flex justify-between ">
            <h1 class="text-xl text-txt font-bold mx-0 tracking-[3px]">CYH-NAT</h1>
            <div class="size-4 lg:h-0 relative" @click="chg">
                <i class="fa-solid fa-bars text-txt hover:cursor-pointer lg:hidden block text-[12px] text-right"></i>
                <div :class="`lg:fixed lg:top-[100px] ${hidden} lg:block`">
                    <!-- 大於lg的時候一律block，小於lg的時候由按鈕決定 -->
                    <ul
                        class="absolute top-[72px] right-[-2px] lg:top-0 lg:right-[-18px] text-txt text-[13px] flex flex-col gap-8 hover:cursor-pointer lg:gap-4 w-[290px] md:w-[630px] lg:w-0 bg-[rgba(0,0,0,0.6)] lg:bg-transparent">
                        <!-- 貼著上上個relative的右側邊往左18像素 -->
                        <tag class="mb-8 mt-8 lg:mt-0">☗</tag>
                        <tag>Portrait</tag>
                        <tag>Commercial</tag>
                        <tag>Wedding</tag>
                        <tag>Street</tag>
                        <tag class="mb-8">Activity</tag>
                        <tag>About</tag>
                        <tag>Contact</tag>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mx-auto py-7 ">
            <!-- 貼文 -->
            <div class="grid sm:grid-cols-1 md:grid-cols-2 2xl:w-[1174px] xl:w-[915.594px] lg:w-[655.876px]">
                <!-- 備份 -->
                <!-- <div
                    class="flex flex-col justify-between bg-[url('@/assets/image/meme-doge.gif')] bg-cover bg-center shadow-[inset_0_60px_30px_0px_rgba(0,0,0,0.1)] m-4 p-4 2xl:w-[555px] 2xl:h-[740px] xl:w-[425.797px] xl:h-[560px] lg:w-[295.938px] lg:h-[400px] md:w-[300px] md:h-[400px] sm:w-[290px] sm:h-[400px] group hover:invert">
                    <h3 class="text-white text-[2.5rem] font-[700] group-hover:invert">
                        搞笑
                    </h3>
                    <div class="group-hover:invert text-txt text-xs flex flex-col gap-4">
                        <div class="up flex justify-between ">
                            <h6 class="date">9/06/2024</h6>
                            <h6 class="msg">沒有留言</h6>
                        </div>
                        <div class="down">
                            <h6 class="tag">搞笑</h6>
                        </div>
                    </div>
                </div> -->
                <post :url="doge" title="Doge" date="9/06/2024" msg="沒有留言"
                    tag="搞笑" />
                <post :url="headache" title="頭痛" date="9/06/2024" msg="沒有留言"
                    tag="搞笑" />
                <post :url="pic1" title="Austin x Kenzo" date="7/28/2024" msg="沒有留言"
                    tag="" />
                <post :url="pic2" title="Hannah x 森呼吸" date="7/28/2024" msg="沒有留言"
                    tag="Portrait" />
                <post :url="pic3" title="Naomi" date="7/28/2024" msg="沒有留言"
                    tag="Portrait" />
                <post :url="pic4" title="Ann  x Chanel" date="7/28/2024" msg="沒有留言"
                    tag="Portrait" />
                <post :url="pic5" title="Chanel  許瑋甯" date="12/13/2022" msg="沒有留言"
                    tag="Portrait" />
                <post :url="pic6" title="Burberry Hannah" date="12/13/2022" msg="沒有留言"
                    tag="Portrait" />
            </div>
            <!-- 側邊欄 -->
        </div>
        <div class="container mx-auto bg-bg text-[#444] text-xs h-[6rem] flex items-center justify-start">
            <div class="ml-4">
                Copyright © CYH-NAT. All rights reserved.
            </div>
        </div>
    </div>

</template>

<script setup>

import { ref } from 'vue';
import Post from '../components/Post.vue';
import Tag from '../components/Tag.vue';
import pic1 from '../assets/image/1.jpg'
import pic2 from '../assets/image/2.jpg'
import pic3 from '../assets/image/3.jpg'
import pic4 from '../assets/image/4.jpg'
import pic5 from '../assets/image/5.jpg'
import pic6 from '../assets/image/6.jpg'
import doge from '../assets/image/meme-doge.gif'
import headache from '../assets/image/headache.png'

const hidden = ref('hidden');
const chg = () => {
    const a = { hidden: 'block', block: 'hidden' }
    hidden.value = a[hidden.value]
}

const getImageUrl = url => new URL(url, import.meta.url).href
//這邊的圖片URL只能夠寫相對路徑


</script>

<style scoped></style>