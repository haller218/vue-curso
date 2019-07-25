<template>
  <div class="corpo">
    
    
    <h2 class="centralizado">{{ titulo }}</h2>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos">
    
        <meu-painel :titulo="foto.titulo">
          <img class="image-responsiva":src="foto.url" :alt="foto.titulo">
        </meu-painel>
           
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue'
export default {

  components: {

    'meu-painel': Painel
  },

  data(){

    return {
      titulo: 'Alurapic',
      fotos: []
    }
  },

  created() {

    this.$http.get('http://127.0.0.1:3000/v1/fotos')
    .then( r => {

      r.json().then( rs => {

        this.fotos = rs
      }, errs => console.log(errs))
    }, err => {
      
      console.log("ERRO")
      console.log ( err ) 
    });
  }
}
</script>

<style>
.corpo {
  font-family: Helvetica,Arial, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.centralizado {
  text-align: center
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline;
}

.image-responsiva {

  width: 100%;
}
</style>
