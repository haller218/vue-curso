<template>
  <div>

    <p class="centralizado" v-show="mensage">{{ mensage }}</p>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo">    

    <h2 @click="remove()" class="centralizado">{{ titulo }}</h2>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotoComFiltro">
    
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform:scale.animate="1.2" 
                :url="foto.url" :titulo="foto.titulo"/>
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
      filtro: '',
      mensage: ''
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

        this.resource
          .delete({id: foto._id})
          .then( res => {
            let indice = this.fotos.indexOf(foto)
            this.fotos.splice(indice, 1)
            this.mensage = "Foto Removida Com Sucesso"
          }, err => {

            this.mensage =  "Não foi possivel remover a foto"
            console.log(err)
          } )
      }
  },

  created() {

    this.resource = this.$resource(`v1/fotos{/id}`)

    this.resource
      .query()
      .then( res => {
        res.json()
        .then( fotos => this.fotos = fotos, 
        errs => console.log(errs))
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
