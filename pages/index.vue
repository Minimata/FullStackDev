<script setup lang="ts">

const { data: dinosaurs, error, refresh } = await useFetch('/api/dinosaurs', {
  onRequest ({ options }) {
    options.headers = options.headers || { 'Access-Control-Allow-Origin': '*' }
  }
})

const formData = ref({ name: '', description: '' })
const isRequestPending = ref(false)

async function submitForm () {
  const { pending, error } = await useAsyncData('dino', () => $fetch('/api/dinosaurs', { method: 'post', body: formData.value }))
  isRequestPending.value = pending.value

  if (error.value) {
    console.error('Error:', error.value)
  }

  refresh()
}
</script>

<template>
  <div>
    <n-spin :show="isRequestPending">
      <form @submit.prevent="submitForm">
        <n-input v-model:value="formData.name" type="text" placeholder="Name" round />
        <n-input v-model:value="formData.description" type="text" placeholder="Description" round />
        <n-button attr-type="submit" type="primary">
          Submit
        </n-button>
      </form>
    </n-spin>
    <div>
      Prisma ORM Data from the database, received {{ dinosaurs?.length || 0 }} records: <pre>{{ dinosaurs }}</pre>
    </div>
    <p>{{ error }}</p>
  </div>
</template>
