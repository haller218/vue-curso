<template>

    <div>
        <h1 class="centralizado">Cadastro</h1>
        <h2 class="centralizado"></h2>

        <form>
            <div class="controle">
                <label for="titulo">TITULO</label>
                <input id="titulo" autocomplete="off">
            </div>

            <div class="controle">
                <label for="url">URL</label>
                <input id="url" autocomplete="off">
                <imagem-responsiva/>
            </div>

            <div class="controle">
                <label for="descricao">DESCRICAO</label>
                <textarea id="descricao" autocomplete="off"></textarea>
            </div>

            <div class="centralizado">
                <meu-botao rotulo="GRAVAR" tipo="submit"></meu-botao>
                <routerlink to="/">
                <meu-botao rotulo="VOLTAR" tipo="button"/>
                </routerlink><a/>
            </div>

        </form>
    </div>
    
</template>

<script>

import ImagemResponsiva from '../shared/imagem-responsiva/imagem-responsiva.vue'
import Botao from '../shared/botao/botao.vue'

export default {
    
    components: {

        'imagem-responsiva': ImagemResponsiva,
        'meu-botao': Botao
    }
}
</script>

<style scoped>

.centralizado {

    text-align: center;
}

.controle {
    font-size: 1.2em;
    margin-bottom: 20px;
}
 
.controle label {
    display: block;
    font-weight: bold;
}

.controle label + input, .controle textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px;
}





</style>
