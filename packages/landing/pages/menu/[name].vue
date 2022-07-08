<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="pt-48">
    <div class="pb-4 flex flex-col justify-center items-center">
      <h2 class="text-4xl font-black uppercase">La Carte</h2>
      <div v-if="loading" class="animate-pulse bg-slate-200 rounded-lg w-32 h-4"></div>
      <p v-else-if="store?.city && !loading" class="text-primary-900 font-bold uppercase">{{ store.city }}</p>
    </div>
    <div class="md:flex gap-4">
      <div class="hidden md:flex md:w-64 md:flex-col md:inset-y-0">
        <div
            class="flex flex-col flex-grow border-r border-t rounded pb-10 border-gray-200 pt-5 pb-4 bg-white overflow-y-auto">
          <div class="mt-5 flex-grow flex flex-col">
            <nav class="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
              <router-link v-for="item in tabs" :to="item.to" :key="item.name" :href="item.href"
                           :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                <component :is="item.icon"
                           :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']"
                           aria-hidden="true"/>
                <span class="flex-1">
            {{ item.name }}
          </span>
              </router-link>
            </nav>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-full mb-8 md:hidden">
        <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
          <router-link v-for="item in tabs" :to="item.to" :key="item.name" :href="item.href"
                       :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 cursor-pointer', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
            <component :is="item.icon"
                       :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'flex-shrink-0 h-8 w-8']"
                       aria-hidden="true"/>
          </router-link>
        </nav>
      </div>
      <div class="flex-1">
        <div v-if="loading" class="animate-pulse bg-slate-200 rounded-lg w-32 h-8"></div>
        <div v-else-if="store && !loading">
          <BurgerMenu :store-id="store.id" v-if="currentTab === 'burgers'"/>
          <SaladMenu :store-id="store.id" v-if="currentTab === 'salads'"/>
          <NuggetsMenu :store-id="store.id" v-if="currentTab === 'nuggets'"/>
          <AperoMenu :store-id="store.id" v-if="currentTab === 'apero'"/>
          <DessertMenu :store-id="store.id" v-if="currentTab === 'desserts'"/>
          <SidesMenu :store-id="store.id" v-if="currentTab === 'sides'"/>
          <BeverageMenu :store-id="store.id" v-if="currentTab === 'beverages'"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import {markRaw, computed} from "vue";

import BurgerIcon from "../../assets/icons/BurgerIcon.vue";
import SaladIcon from "../../assets/icons/SaladIcon.vue";
import ChickenIcon from "../../assets/icons/ChickenIcon.vue";
import BucketIcon from "../../assets/icons/BucketIcon.vue";
import CookieIcon from "../../assets/icons/CookieIcon.vue";
import FriesIcon from "../../assets/icons/FriesIcon.vue";
import BeverageIcon from "../../assets/icons/BeverageIcon.vue";

import AperoMenu from "../../components/menu/AperoMenu";
import BeverageMenu from "../../components/menu/BeverageMenu";
import BurgerMenu from "../../components/menu/BurgerMenu";
import DessertMenu from "../../components/menu/DessertMenu";
import NuggetsMenu from "../../components/menu/NuggetsMenu";
import SaladMenu from "../../components/menu/SaladMenu";
import SidesMenu from "../../components/menu/SidesMenu";

import useTabs from "../../composables/useTabs";
import {useGetStoreBySlugQuery} from "../../generated/graphql";

markRaw(BurgerIcon);
markRaw(SaladIcon);
markRaw(ChickenIcon);
markRaw(BucketIcon);
markRaw(CookieIcon);
markRaw(FriesIcon);
markRaw(BeverageIcon);

const router = useRouter();

const restaurantSlug = router.currentRoute.value.params.name.toString();
const {result, loading} = useGetStoreBySlugQuery({slug: restaurantSlug});

const store = computed(() => result?.value?.getStoreBySlug ?? router.push('/404'));

const tabList = [
  {key: 'burgers', name: 'Nos burgers', icon: BurgerIcon},
  {key: 'salads', name: 'Nos salades', icon: SaladIcon},
  {key: 'nuggets', name: 'Nos nuggets', icon: ChickenIcon},
  {key: 'apero', name: "Apero'Cab", icon: BucketIcon},
  {key: 'desserts', name: 'Nos desserts', icon: CookieIcon},
  {key: 'sides', name: "A l'unité", icon: FriesIcon},
  {key: 'beverages', name: 'Nos Boissons', icon: BeverageIcon},
];


const {currentTab, tabs} = useTabs(router.currentRoute, tabList);
</script>
