<template>
  <div class="container-fluid min-h-screen static bg-white dark:bg-black">

    <div class="flex">
      <div class="duration-200" :class="[{ 'w-full': (!showPicker) }, { 'w-3/5': showPicker }]">
        <div class="flex w-100 justify-start align-center w-100 p-6">
          <div><a class="btn-app" href="//github.com/acastaneiras" target="_blank"><i class="fab fa-github"></i></a>
          </div>
          <div><button class="btn-app" v-html="displayMode" v-on:click="changeThemeMode"></button></div>
        </div>
        <h1 class="dark:text-white text-center uppercase font-thin p-6">
          {{ title }}
        </h1>
        <QuestionList></QuestionList>
      </div>
    </div>
    <div :class="[(!showPicker) ? 'w-0 overflow-hidden' : 'md:w-2/5 w-full',]"
      class="duration-0 min-h-full h-full fixed top-0 right-0 ">
      <QuestionPicker @picker_close="() => { store.setCurrentIndex(null); showPicker = !showPicker }">
      </QuestionPicker>
    </div>

    <div class="fixed bottom-0 right-0 m-4 duration-500 hover:-rotate-90 ">
      <button v-show="(!showPicker)" @click="showPicker = !showPicker" type="button"
        class="rounded-full w-16 h-16 p-4 align-middle justify-center text-center dark:text-gray-400 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 border-2 border-slate-300 dark:border-slate-600 drop-shadow-xl">
        <i class="fas fa-plus text-2xl"></i>
      </button>
    </div>

  </div>
</template>

<style scoped>
</style>
<script setup>
import {ref, computed} from 'vue';
import QuestionList from './QuestionList.vue';
import QuestionPicker from './QuestionPicker.vue';

import { useGlobalStore } from '../stores/store';

const store = useGlobalStore();
const props = defineProps(['title']);

/* data */
const darkMode = ref(false);
const showPicker = ref(false);
/* data end */

store.$subscribe((mutation, state) => {
  if (state.currentIndex !== null) showPicker.value = true;
})


const changeThemeMode = () => {
  if (document.querySelector('html').classList.contains('dark')) {
    document.querySelector('html').classList.remove('dark')
  } else {
    document.querySelector('html').classList.add('dark')
  }
  darkMode.value = !darkMode.value;
}

const displayMode = computed(() => {
  let modeClass = "fas fa-sun";
  if (!darkMode.value) {
    modeClass = "fas fa-moon"
  }
  return `<i class='${modeClass}'></i>`;
})




</script>