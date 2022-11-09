<template>
    <div>
        <button @click="ativar">Clique aqui</button>
        <span v-show="ativou">Ativado!</span>
        <!-- Todos os componentes são reutilizáveis em outros componentes, e são independentes -->
    </div>
</template>

<script>
export default {
    name: 'Reutilizacao',
    data () {
        return {
            ativou: false
        }
    },
    methods: {
        ativar () {
            this.ativou = !this.ativou
        }
    }
}
</script>