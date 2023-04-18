<script setup lang="ts">
const { data: createdDino } = await useAsyncData('dino', () => $fetch('/api/dinosaurs', { method: 'post', body: { coucou: 'les potes' } }))
console.log('Created', createdDino.value)

const { data: dinosaurs } = useFetch('/api/dinosaurs')
</script>

<template>
  <div>
    Prisma ORM Data from the database, received {{ dinosaurs?.length || 0 }} records: <pre>{{ dinosaurs }}</pre>
  </div>
</template>
