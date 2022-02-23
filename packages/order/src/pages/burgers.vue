<template>
  <div class="py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 class="text-2xl font-semibold text-gray-900">Nos burgers</h1>

      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4">
        <li v-for="person in people" :key="person.name"
            class="w-64 col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
          <div class="flex-1 flex flex-col p-8">
            <img class="w-32 h-32 flex-shrink-0 mx-auto rounded-full" :src="person.imageUrl" alt=""/>
            <h3 class="mt-6 text-gray-900 text-sm font-medium">{{ person.name }}</h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
              <dt class="sr-only">Recette</dt>
              <dd class="text-gray-500 text-sm">{{ person.recipe }}</dd>
            </dl>
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="w-0 flex-1 flex px-2">
                <a href="#"
                   class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                  <MailIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
                  <span class="ml-3">Seul {{ person.alonePrice }}€</span>
                </a>
              </div>
              <div class="-ml-px w-0 flex-1 flex px-2">
                <a href="#"
                   class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                  <PhoneIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
                  <span class="ml-3">Menu {{ person.menuPrice }}€</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {MailIcon, PhoneIcon} from '@heroicons/vue/solid'
import {defineComponent} from "vue";

const people = [
  {
    name: 'Le Montagnard',
    recipe: 'Steak haché*, confit d\'oignons jaunes, galette de pomme de terre*, poitrine fumée, raclette au lait cru, sauce barbecue.',
    alonePrice: '10,90',
    menuPrice: '13,50',
    imageUrl:
        'https://img.cuisineaz.com/660x660/2018/06/28/i140702-burger-raclette.jpeg',
  },
  {
    name: 'Le Cowbow',
    recipe: 'Steak haché*, confit d\'oignons jaunes, galette de pomme de terre*, poitrine fumée, raclette au lait cru, sauce barbecue.',
    alonePrice: '10,90',
    menuPrice: '13,50',
    imageUrl:
        'https://img.cuisineaz.com/660x660/2018/06/28/i140702-burger-raclette.jpeg',
  },
  {
    name: 'Le Cab',
    recipe: 'Steak haché*, confit d\'oignons jaunes, galette de pomme de terre*, poitrine fumée, raclette au lait cru, sauce barbecue.',
    alonePrice: '10,90',
    menuPrice: '13,50',
    imageUrl:
        'https://img.cuisineaz.com/660x660/2018/06/28/i140702-burger-raclette.jpeg',
  },
]

export default defineComponent({
  components: {
    MailIcon,
    PhoneIcon,
  },
  setup() {
    return {
      people,
    }
  },
})
</script>
