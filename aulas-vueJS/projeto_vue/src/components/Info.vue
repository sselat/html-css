<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias para back-end:</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" :key="index">{{ technology + index }}</li>
        </ul>
        <div>
            <button @click="showEmail">{{mostrar_email ? "Ocultar e-mail" : "Mostrar e-mail"}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para {{email}}</p>
        <p>Para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui!</a></p>

        <Picture/>
    </div>
</template>
<script>
import Picture from './Picture.vue'

export default {
    name: 'Info',
    components: {
        Picture
    },
    data () {
        return {
            esta_trabalhando: true,
            mostrar_email: true,
            email: "tales.beraldo@gmail.com",
            meu_link: "https://www.google.com.br",
            backend_technologies: ['JavaScript', 'PHP', 'Python']
        }
    },
    methods: {
        showEmail () {
            this.mostrar_email = !this.mostrar_email
        }
    }
}
</script>