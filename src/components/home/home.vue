<template>
  <div>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo">    

    <h2 class="centralizado">{{ titulo }}</h2>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotoComFiltro">
    
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo">
          </imagem-responsiva>
        </meu-painel>
           
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from './components/shared/painel/Painel.vue'
import ImagemResponsiva from './components/shared/imagem-responsiva/Imagem-responsiva.vue'

export default {

  components: {

    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data(){

    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },

  computed: {

    fotoComFiltro () {

        /*** filtras */
      if (this.filtro) {

        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.fotos.filter(foto => exp.test(foto.titulo))
      } else {

        return this.fotos
      }
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

.filtro {

  display: block;
  width: 100%;
}

</style>
