<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
    export default {
        name: 'LifeCycle',
        data () {
            return {
                nome: 'Ainda não sei'
            }
        },
        created () {
            setTimeout(() => {
                this.nome = "Tales"
            },1000)
            
        },
        mounted () {
            setTimeout(() => {
                this.nome = "Rodrigo"
            },3000)
        }
    }
</script>