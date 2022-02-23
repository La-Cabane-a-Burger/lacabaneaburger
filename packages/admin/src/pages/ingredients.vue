<template>
  <main class="flex-1 pb-8">

    <SlideOver v-model:isOpen="isSlideOverOpen" @close="clearFormData">
      <template #content>
        <!-- Divider container -->
        <div class="py-6 space-y-6 sm:py-0 sm:space-y-0 sm:divide-y sm:divide-gray-200">
          <!-- Project name -->
          <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <div>
              <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                Nom
              </label>
            </div>
            <div class="sm:col-span-2">
              <input type="text" name="project-name" v-model="formData.name" id="project-name"
                     class="shadow-sm border border-gray-300 focus:ring-primary-500 focus:outline-primary-500 focus:border-primary-500 block w-full placeholder-gray-400 sm:text-sm rounded-md px-3 py-2"/>
            </div>
          </div>
          <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <div>
              <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                Prix
              </label>
            </div>
            <div class="sm:col-span-2">
              <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="price" id="price" v-model="formData.price"
                       class="shadow-sm border border-gray-300 focus:ring-primary-500 focus:outline-primary-500 focus:border-primary-500 block w-full placeholder-gray-400 sm:text-sm rounded-md px-3 py-2"
                       placeholder="0.00" aria-describedby="price-currency"/>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <span class="text-gray-500 sm:text-sm" id="price-currency">
          €
        </span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
            <div>
              <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2">
                Allergènes
              </label>
            </div>
            <div class="sm:col-span-2">
              <AllergensInput :items="formData.allergens"/>
            </div>
          </div>
        </div>

        <div class="flex-shrink-0 px-4 border-t border-gray-200 py-5 sm:px-6">
          <div class="space-x-3 flex justify-end">
            <button type="button"
                    @click="isSlideOverOpen = false"
                    class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Annuler
            </button>
            <button type="submit"
                    @click="onUpdateSubmit"
                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Enregistrer
            </button>
          </div>
        </div>

      </template>

    </SlideOver>

    <TopBar title="Ingrédients">
      <template #Right>
        <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
          Créer un ingrédient
        </button>
      </template>
    </TopBar>
    <div class="mt-8">

      <!-- Activity list (smallest breakpoint only) -->
      <div class="shadow sm:hidden">
        <ul role="list" class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
          <li v-for="ingredient in ingredients" :key="ingredient.id">
            <div class="block px-4 py-4 bg-white hover:bg-gray-50">
                  <span class="flex items-center space-x-4">
                    <span class="flex-1 flex space-x-2 truncate">
                      <span class="flex flex-col text-gray-500 text-sm truncate">
                        <span class="truncate">{{ ingredient.name }}</span>
                        <span
                        ><span class="text-gray-900 font-medium">{{ ingredient.price }}</span> €</span
                        >
                        <span>{{ ingredient.allergens }}</span>
                      </span>
                    </span>
                    <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true"/>
                  </span>
            </div>
          </li>
        </ul>


        <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
             aria-label="Pagination">
          <div class="flex-1 flex justify-between">
            <a href="#"
               class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
              Précédent
            </a>
            <a href="#"
               class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
              Suivant
            </a>
          </div>
        </nav>
      </div>

      <!-- Activity table (small breakpoint and up) -->
      <div class="hidden sm:block">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col mt-2">
            <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                  <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prix
                  </th>
                  <th class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                    Catégorie
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Allergènes
                  </th>
                  <th class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="ingredient in ingredients" :key="ingredient.id" class="bg-white">
                  <td class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div class="flex">
                      <p class="text-gray-500 truncate group-hover:text-gray-900">
                        {{ ingredient.name }}
                      </p>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    <span class="text-gray-900 font-medium">{{ ingredient.price }} </span>
                    €
                  </td>
                  <td class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                          <span
                              :class="[categoryStyles[ingredient.category], 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize']">
                            {{ ingredient.category }}
                          </span>
                  </td>
                  <td class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    <span v-for="allergen in ingredient.allergens" :key="allergen"
                          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
    {{ allergen }}
  </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div @click="onIngredientClick(ingredient.id)"
                         class="text-primary-900 hover:text-primary-600 cursor-pointer">Modifier
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
              <!-- Pagination -->
              <!--              <nav class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" aria-label="Pagination">-->
              <!--                <div class="hidden sm:block">-->
              <!--                  <p class="text-sm text-gray-700">-->
              <!--                    Affichage de-->
              <!--                    {{ ' ' }}-->
              <!--                    <span class="font-medium">1</span>-->
              <!--                    {{ ' ' }}-->
              <!--                    à-->
              <!--                    {{ ' ' }}-->
              <!--                    <span class="font-medium">10</span>-->
              <!--                    {{ ' ' }}-->
              <!--                    sur-->
              <!--                    {{ ' ' }}-->
              <!--                    <span class="font-medium">20</span>-->
              <!--                    {{ ' ' }}-->
              <!--                    résultats-->
              <!--                  </p>-->
              <!--                </div>-->
              <!--                <div class="flex-1 flex justify-between sm:justify-end">-->
              <!--                  <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">-->
              <!--                    Précédent-->
              <!--                  </a>-->
              <!--                  <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">-->
              <!--                    Suivant-->
              <!--                  </a>-->
              <!--                </div>-->
              <!--              </nav>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import TopBar from "../components/TopBar.vue";
import {computed, defineComponent, ref, Ref} from "vue";

import {
  ChevronRightIcon,
} from '@heroicons/vue/solid'
import {
  UpdateIngredientInput,
  useGetIngredientQuery,
  useGetIngredientsQuery,
  useUpdateIngredientMutation
} from "../generated/graphql";
import {useResult} from "@vue/apollo-composable";
import SlideOver from "../components/SlideOver.vue";
import Select from "../components/Select.vue";
import AllergensInput from "../components/AllergensInput.vue";
import {Ingredient} from "@lacabaneaburger/landing/generated/graphql";

export default defineComponent({
  components: {AllergensInput, Select, SlideOver, TopBar, ChevronRightIcon},
  setup() {

    const selectedId = ref('')
    const formData: Ref<UpdateIngredientInput> = ref({
      name: '',
      price: 0,
      allergens: []
    });

    const isSelectedIngredient = computed(() => !!selectedId.value);

    const isSlideOverOpen = ref(false)

    // Get Ingredient

    const {result: ingredientsResult} = useGetIngredientsQuery();

    const ingredients = useResult(ingredientsResult, [])

    const {result: ingredientResult, loading: getIngredientLoading, onResult} = useGetIngredientQuery(() => ({
      getIngredientId: selectedId.value
    }), () => ({
      enabled: isSelectedIngredient.value
    }))
    //
    const ingredient = useResult(ingredientResult, {});

    onResult(result => {
      if (!result.loading && formData.value && result?.data?.getIngredient) {
        const {__typename, id, ...data} = result?.data?.getIngredient as Ingredient;
        formData.value = data as UpdateIngredientInput;
      }
    })


    const onIngredientClick = (id: string) => {
      isSlideOverOpen.value = true;
      selectedId.value = id;
    }

    // Update Ingredient

    const {mutate} = useUpdateIngredientMutation(() => ({
      variables: {
        id: selectedId.value,
        input: formData.value
      }
    }))

    const onUpdateSubmit = async () => {
      try {
        await mutate();
      } catch (e) {
        console.log(e)
      }
    }

    const clearFormData = () => {
      formData.value = {
        name: '',
        price: 0,
        allergens: []
      };
      selectedId.value = '';
    };

    const transactions = [
      {
        id: 'ffffff',
        name: 'Raclette',
        price: '10,00',
        currency: 'EUR',
        category: 'Fromage',
        allergens: 'Lait',
      },
      {
        id: 'ffffdddff',
        name: 'Raclette',
        price: '10,00',
        currency: 'EUR',
        category: 'Fromage',
        allergens: 'Lait',
      },
      // More transactions...
    ]

    const categoryStyles = {
      Fromage: 'bg-green-100 text-green-800',
      processing: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-gray-100 text-gray-800',
    }

    return {
      transactions,
      categoryStyles,
      ingredients,
      isSlideOverOpen,
      selectedId,
      isSelectedIngredient,
      onIngredientClick,
      clearFormData,
      ingredient,
      formData,
      getIngredientLoading,
      onUpdateSubmit
    }
  }
})
</script>
