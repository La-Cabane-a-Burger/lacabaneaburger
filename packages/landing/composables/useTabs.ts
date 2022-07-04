import { computed, ref, Ref } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

interface Tab {
  key: string;
  name: string;
  icon: any;
}

const tabList = ref(new Array<Tab>());

export default function useTabs(
  currentRoute: Ref<RouteLocationNormalizedLoaded>,
  list?: Array<Tab>
) {
  if (list) {
    tabList.value = list;
  }

  const currentTab = computed(() => {
    if (currentRoute.value.query.tab) {
      return currentRoute.value.query.tab.toString();
    }
    if (tabList.value.length) {
      return tabList.value[0].key;
    }
    return '';
  });
  const isCurrentTab = (tab: Tab) => computed(() => currentTab.value === tab.key);
  const tabs = computed(() =>
    tabList.value.map(t => ({
      current: isCurrentTab(t).value,
      to: {
        path: currentRoute.value.fullPath,
        query: {
          tab: t.key,
          filters: isCurrentTab(t).value ? currentRoute.value.query.filters : undefined
        }
      },
      ...t
    }))
  );

  return { tabs, currentTab };
}
