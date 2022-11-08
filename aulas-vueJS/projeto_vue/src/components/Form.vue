<template>
    <form action="#" @submit="enviarFormulario($event)">
        <div>
            <input type="text" v-model="nome"/>
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        <div>
            <Submit />
        </div>
    </form>
</template>
<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data () {
        return {
            nome: '',
            email: ''
        }
    },
    methods: {
        enviarFormulario(e) {

            e.preventDefault();
            
            const name = this.nome;
            const email = this.email;

            window.alert('Formulário Enviado!');
            console.log(`O nome é ${name} e o email é ${email}`);
        }
    }
}
</script>