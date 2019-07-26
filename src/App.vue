<template>
  <div class="corpo">

    <meu-menu :rotas="routes">
    </meu-menu>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
 
  </div>
</template>

<script>

import Menu from './components/shared/menu/menu.vue'
import { routes } from './routes'

export default { 

  components: {
    'meu-menu': Menu
  },

  data (  ) {

    return {

      routes
    }
  }
}
</script>

<style scoped>

.corpo {

  font-family: Helvetica,Arial, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter, .pagina-leave-active {

  opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {

  transition: opacity .3s;
}

* {

  box-shadow: 5px 5px 5px;
}

</style>