<template>
    <div class="container">
      <div class="row">
        <!-- Lista de países -->
        <div class="col-5" style="max-height: 90vh; overflow: scroll">
          <div class="list-group">
            <router-link
              v-for="country in countries"
              :key="country.alpha3Code"
              class="list-group-item list-group-item-action"
              :to="{ name: 'country-details', params: { alpha3Code: country.alpha3Code } }"
            >
              <img
                :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                style="width: 30px; margin-right: 10px"
                alt="flag"
              />
              {{ country.name.common }}
            </router-link>
          </div>
        </div>
  
        <!-- Aquí se renderiza CountryDetails.vue -->
        <div class="col-7">
          <router-view />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const countries = ref([])
  
  // Cargar países desde la API
  onMounted(async () => {
    try {
      const res = await fetch('https://ih-countries-api.herokuapp.com/countries')
      countries.value = await res.json()
    } catch (error) {
      console.error('Error al cargar los países:', error)
    }
  })
  </script>
  
  
  
  
  
  
  