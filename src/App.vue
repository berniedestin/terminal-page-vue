<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TerminalHeader from './components/TerminalHeader.vue';
import TerminalFooter from './components/TerminalFooter.vue';
</script>

<template>
  <div id="page">
    <div id="header">
      <TerminalHeader />
    </div>

    <div id="view">
      <RouterView />
    </div>


    <div id="footer">
      <TerminalFooter />
    </div>
  </div>
</template>

<style scoped>
/* body{
    background-color: black;
}
::selection {
    background: lightgray;
} */
#page{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}
#view{
  flex-grow: 1;
}
#footer,
#header{
  flex-grow: 0;
}
</style>
