<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <MudarImagem @mudarImagem="trocarImagem"/>
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue'

export default {
    name: 'Picture',
    components: {
        MudarImagem
    },
    data () {
        return {
            avatar: "/img/avatar.png",
            descricao: "Tales B."
        }
    },
    methods: {
        trocarImagem () {
            if (this.avatar == "/img/avatar.png")
                {
                    this.avatar = "/img/avatar2.png"
            }
            else
                this.avatar = "/img/avatar.png"
        }
    }
}
</script>