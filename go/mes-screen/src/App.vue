<script setup>
import Screen from './components/Screen.vue'
</script>

<template>

  <Screen  />
</template>

<style >
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background:url('../src/assets/91653da28d122027a4fd769fac0bd247.jpg') ;
}
body::before{
  background: rgb(0, 0, 0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
