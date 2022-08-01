<script>
export default {
  props: ['title'],
  data() {
    return {
      darkMode: false,
      showPicker: false,
    }
  },
  methods: {
    resetAll() {
      this.showPicker = !this.showPicker;
    },
    changeThemeMode() {
      if (document.querySelector('html').classList.contains('dark')) {
        document.querySelector('html').classList.remove('dark')
      } else {
        document.querySelector('html').classList.add('dark')
      }
      this.darkMode = !this.darkMode;

    }
  },
  computed: {
    displayMode() {
      let modeClass = "fas fa-sun";
      if (!this.darkMode) {
        modeClass = "fas fa-moon"
      }
      return `<i class='${modeClass}'></i>`;
    }
  }
}
</script>

<template>
  <div class="container-fluid min-h-screen static bg-white dark:bg-black">

    <div class="flex">
      <div class="duration-200" :class="[{ 'w-full': !showPicker }, { 'w-3/5': showPicker }]">
        <div class="flex w-100 justify-start align-center w-100 p-6">
          <div><a
              class="btn-app"
              href="//github.com/acastaneiras" target="_blank"><i class="fab fa-github"></i></a></div>
          <div><button
              class="btn-app"
              v-html="displayMode" v-on:click="changeThemeMode"></button></div>
        </div>
        <h1 class="dark:text-white text-center uppercase font-thin p-6">
          {{ title }}
        </h1>
        <QuestionList></QuestionList>
      </div>
    </div>
    <div :class="[!showPicker ? 'w-0 overflow-hidden' : 'md:w-2/5 w-full',]" class="duration-0 h-screen absolute top-0 right-0 ">
      <QuestionPicker   @picker_close="resetAll()"></QuestionPicker>
    </div>

    <div class="absolute bottom-0 right-0 m-4 duration-500 hover:-rotate-90 ">
      <button v-show="!showPicker" @click="showPicker = !showPicker" type="button"
        class="rounded-full w-16 h-16 p-4 align-middle justify-center text-center dark:text-gray-400 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 border-2 border-slate-300 dark:border-slate-600 drop-shadow-xl">
        <i class="fas fa-plus text-2xl"></i>
      </button>
    </div>

  </div>
</template>

<style scoped>
</style>

<script setup>
import QuestionList from './QuestionList.vue';
import QuestionPicker from './QuestionPicker.vue';
</script>
