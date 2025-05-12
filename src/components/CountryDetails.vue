<template>
    <div v-if="country">
      <h2>{{ country.name.common }}</h2>
      <img
        :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
        alt="flag"
        class="mb-3"
      />
      <p><strong>Capital:</strong> {{ country.capital[0] }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Subregion:</strong> {{ country.subregion }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const country = ref(null)
  
  // Función para cargar los detalles del país desde la API
  const loadCountryDetails = async () => {
    try {
      const res = await fetch(`https://ih-countries-api.herokuapp.com/countries/${route.params.alpha3Code}`)
      country.value = await res.json()
    } catch (error) {
      console.error('Error al cargar los detalles del país:', error)
    }
  }
  
  // Cargar detalles del país cuando el componente se monte por primera vez
  onMounted(loadCountryDetails)
  
  // Observar cambios en el parámetro de la ruta (alpha3Code) para actualizar los detalles
  watch(
    () => route.params.alpha3Code,
    () => {
      loadCountryDetails()  
    }
  )
  </script>
  