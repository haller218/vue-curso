<template>
    <nav>
        <ul>
            <li v-for="rota in rotas">
                <router-link :to="rota.path ? rota.path : '/'">
                    {{ rota.titulo }}
                </router-link>
            </li>
        </ul>
     </nav>
</template>


<script>

import { routes } from '../../../routes'

export default {
    
    props: ['rotas']
}
</script>

<style scoped>

</style>
