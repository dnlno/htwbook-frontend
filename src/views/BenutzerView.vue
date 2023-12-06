<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col" v-for="user in users" :key="user.id">
      <div class="card h-100">
        <!-- Ihr Bild- und Textinhalt hier, basierend auf user Daten -->
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.description }}</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">Last updated {{ user.lastUpdated }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const users = ref([])

async function loadUsers () {
  const endpoint = 'http://localhost:8080/users/1'
  try {
    const response = await fetch(endpoint)
    const result = await response.json()
    users.value = result
  } catch (error) {
    console.error('Fehler beim Laden der Benutzer:', error)
    // Optional: Benutzerfeedback
  }
}

onMounted(loadUsers)
</script>

<style scoped>
/* Ihr CSS hier */
</style>
