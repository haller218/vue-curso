<template>
  <div>

    <p class="centralizado" v-show="mensagem">{{ mensagem }}</p>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo">    

    <h2 @click="remove()" class="centralizado">{{ titulo }}</h2>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotoComFiltro">
    
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
            tipo="Botton" 
            rotulo="REMOVER" 
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo='perigo'
            />
        </meu-painel>
           
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue'
import ImagemResponsiva from '../shared/imagem-responsiva/imagem-responsiva.vue'
import Botao from '../shared/botao/botao.vue'


export default {

  components: {

    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
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

  methods: {

      remove(foto) {

        this.$http
          .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
          .then( res => {

            this.mensagem = "Foto Removida Com Sucesso"
          }, err => {

            this.mensagem =  "Não foi possivel remover a foto"
            console.log(err)
          } )

      }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
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

<style scoped>

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
