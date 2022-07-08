<template>
  <div
      class="pt-48 mb-10 flex flex-col items-center justify-center w-screen"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md mb-12">
      <h2 class="mt-6 text-center text-3xl font-semibold text-secondary-900">
        La Carte
      </h2>
    </div>
    <div class="mb-16">
      <h3>
        Trouver une cabane à Burger dans ma ville
      </h3>
      <Input
          :name="'storeSearch'"
          :placeholder="'Saisir un ville'"
          v-model:modelValue="storeSearch"
      >
        <SearchIcon class="text-gray-500 h-4"/>
      </Input>
    </div>
    <div v-if="stores.length" class="stores-cards flex flex-row flex-wrap">
      <Card
          class="mx-8 mb-8"
          v-for="store in filteredStores"
          :title="'La CAB ' + store.city"
      >
        <div>{{ store.address }}</div>
        <div>{{ store.postal_code }} {{ store.city }}</div>
        <div class="flex justify-end mt-4 mx-2">
          <nuxt-link
              @click="link"
              class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              :to="'/menu/'+store.slug"
              active-class="text-primary-600 cursor-default">Sélectionner
          </nuxt-link>
        </div>
      </Card>
    </div>
    <div v-else>
      Chargement...
    </div>
  </div>
</template>

<script lang="ts">
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import Card from "@/components/Card.vue";
import {useGetStoresQuery} from '@/generated/graphql';
import {computed, defineComponent, ref} from "vue";
import Button from "@/components/form/Button.vue";
import Input from "@/components/form/Input.vue";

export default defineComponent({
  components: {SearchIcon, Card, Button, Input},

  setup(_props, {emit}) {
    const {result, loading} = useGetStoresQuery();

    const stores = computed(() => result?.value?.getStores ?? []);
    const filteredStores = computed(() => {
      if (stores.value.length === 0) {
        return [];
      }
      return stores.value.filter(store => store.city.toLowerCase().includes(storeSearch.value.toLowerCase()));
    });
    const storeSearch = ref('');

    const link = () => {
      emit('link');
    };

    return {
      stores,
      loading,
      storeSearch,
      filteredStores,
      link
    };
  },
})
</script>
