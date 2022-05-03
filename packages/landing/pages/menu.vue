<template>
  <div
      class="pt-60 flex flex-col items-center justify-center w-screen"
      :style="{
        backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-24">
      <h2 class="mt-6 text-center text-3xl font-semibold text-secondary-900">
        La Carte
      </h2>
    </div>
    <div class="mb-16">
      <h3>
        Trouver une cabane à Burger dans ma ville
      </h3>
      <client-only>
        <Input
            :name="'storeSearch'"
            :placeholder="'Saisir un ville'"
            v-model:modelValue="storeSearch"
        >
          <SearchIcon class="text-gray-500 h-4"/>
        </Input>
      </client-only>
    </div>
    <div class="stores-cards flex flex-row flex-wrap">
      <Card
          class="mx-8 mb-8"
          v-for="store in filteredStores"
          :image="store.image? store.image : '/stores/default.png'"
          :image_alt="'La cabane à Burger'"
          :title="'La CAB ' + store.city"
      >
        {{ store.city }} <br/> {{ store.address + ' ' + store.postal_code + ' ' + store.city }}
        <div class="flex justify-end mt-4 mx-2">
          <nuxt-link
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              :to="'/menu/'+store.slug"
              active-class="text-primary-600 cursor-default">Sélectionner
          </nuxt-link>
        </div>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import SearchIcon from "assets/icons/SearchIcon.vue";
import Card from "../components/Card.vue";
import {useGetStoresQuery} from '../generated/graphql';
import {defineComponent} from "vue";
import Button from "../components/form/Button.vue";
import Input from "../components/form/Input.vue";

export default defineComponent({
  components: {SearchIcon, Card, Button, Input},

  setup() {
    const {result, loading, onResult} = useGetStoresQuery();
    const stores = ref([]);
    onResult(({data}) => {
      stores.value = data?.getStores ?? [];
    });
    const filteredStores = computed(() => {
      if (stores.value.length === 0) {
        return [];
      }
      return stores.value.filter(store => store.city.toLowerCase().includes(storeSearch.value.toLowerCase()));
    });
    const storeSearch = ref('');

    return {
      stores,
      loading,
      storeSearch,
      filteredStores,
    };
  },
})
</script>