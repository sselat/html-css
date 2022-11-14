<template>
  <q-page padding>
    <q-table
      title=""
      :rows="posts"
      :columns="columns"
      row-key="name"
    />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const columns = [
      {

        name: 'id',
        field: 'id',
        label: 'ID',
        sortable: true,
        align: 'left'
      },
      {
        name: 'title',
        field: 'title',
        label: 'Title',
        sortable: true,
        align: 'left'
      },
      {
        name: 'author',
        field: 'author',
        label: 'Author',
        sortable: true,
        align: 'left'
      }]

      const getPosts = async () => {
        try {
          const api.get('')
        } catch (error) {

        }
      }
    return {
      posts,
      columns
    }
  }
})
</script>
