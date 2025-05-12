import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../components/CountriesList.vue'),
    children: [
      {
        path: '', // Esta es la ruta predeterminada para `/`
        component: {
          template: '<p class="p-3">Selecciona un país de la lista</p>'
        }
      },
      {
        path: 'list/:alpha3Code', // Ruta para los detalles de un país
        name: 'country-details',
        component: () => import('../components/CountryDetails.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router



