<template>
  <div class="corpo">
    <meu-menu></meu-menu>
    <router-view></router-view>

  </div>
</template>

<script>

import Menu from './components/shared/menu/menu.vue'

export default { 

  components: {
    'meu-menu': Menu
  }
}
</script>

<style>

.corpo {

  font-family: Helvetica,Arial, sans-serif;
  width: 96%;
  margin: 0 auto;
}

</style>