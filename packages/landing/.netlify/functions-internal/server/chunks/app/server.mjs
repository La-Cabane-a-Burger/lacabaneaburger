import { g as getDefaultExportFromNamespaceIfNotNamed, v as vue_cjs_prod, r as require$$0$1, s as serverRenderer } from '../handlers/renderer.mjs';
import { hasProtocol, joinURL, isEqual, withBase, withQuery } from 'ufo';
import { ExclamationIcon, XCircleIcon, CheckCircleIcon, InformationCircleIcon, SearchIcon as SearchIcon$1, LocationMarkerIcon, CheckIcon } from '@heroicons/vue/solid';
import * as throttleDebounce from 'throttle-debounce';
import * as core from '@apollo/client/core';
import { visit, Source, print, BREAK } from 'graphql';
import gql from 'graphql-tag';
import { u as useRuntimeConfig$1 } from '../nitro/aws-lambda.mjs';
import 'h3';
import 'unenv/runtime/mock/proxy';
import 'stream';
import 'node-fetch-native/polyfill';
import 'ohmyfetch';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'unstorage';

var dist = {};

const install$1 = () => {
};
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}

const Vue2 = void 0;
const isVue2 = false;
const isVue3 = true;

const vueDemi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Vue2: Vue2,
  isVue2: isVue2,
  isVue3: isVue3,
  install: install$1,
  set: set,
  del: del
});

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vueDemi);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(throttleDebounce);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(core);

(function (exports) {
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
	var __export = (target, all) => {
	  for (var name in all)
	    __defProp(target, name, {get: all[name], enumerable: true});
	};
	var __exportStar = (target, module2, desc) => {
	  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
	    for (let key of __getOwnPropNames(module2))
	      if (!__hasOwnProp.call(target, key) && key !== "default")
	        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
	  }
	  return target;
	};
	var __toModule = (module2) => {
	  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
	};

	// src/index.ts
	__markAsModule(exports);
	__export(exports, {
	  ApolloClients: () => ApolloClients,
	  DefaultApolloClient: () => DefaultApolloClient,
	  provideApolloClient: () => provideApolloClient,
	  provideApolloClients: () => provideApolloClients,
	  useApolloClient: () => useApolloClient,
	  useGlobalMutationLoading: () => useGlobalMutationLoading,
	  useGlobalQueryLoading: () => useGlobalQueryLoading,
	  useGlobalSubscriptionLoading: () => useGlobalSubscriptionLoading,
	  useLazyQuery: () => useLazyQuery,
	  useMutation: () => useMutation,
	  useMutationLoading: () => useMutationLoading,
	  useQuery: () => useQuery,
	  useQueryLoading: () => useQueryLoading,
	  useResult: () => useResult,
	  useSubscription: () => useSubscription,
	  useSubscriptionLoading: () => useSubscriptionLoading
	});

	// src/useQuery.ts
	var import_vue_demi5 = __toModule(require$$0);
	var import_throttle_debounce = __toModule(require$$1);

	// src/useApolloClient.ts
	var import_vue_demi = __toModule(require$$0);
	var DefaultApolloClient = Symbol("default-apollo-client");
	var ApolloClients = Symbol("apollo-clients");
	function resolveDefaultClient(providedApolloClients, providedApolloClient) {
	  const resolvedClient = providedApolloClients ? providedApolloClients.default : providedApolloClient != null ? providedApolloClient : void 0;
	  return resolvedClient;
	}
	function resolveClientWithId(providedApolloClients, clientId) {
	  if (!providedApolloClients) {
	    throw new Error(`No apolloClients injection found, tried to resolve '${clientId}' clientId`);
	  }
	  return providedApolloClients[clientId];
	}
	function useApolloClient(clientId) {
	  let resolveImpl;
	  const savedCurrentClients = currentApolloClients;
	  if (!(0, import_vue_demi.getCurrentInstance)()) {
	    resolveImpl = (id) => {
	      if (id) {
	        return resolveClientWithId(savedCurrentClients, id);
	      }
	      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
	    };
	  } else {
	    const providedApolloClients = (0, import_vue_demi.inject)(ApolloClients, null);
	    const providedApolloClient = (0, import_vue_demi.inject)(DefaultApolloClient, null);
	    resolveImpl = (id) => {
	      if (id) {
	        const client2 = resolveClientWithId(providedApolloClients, id);
	        if (client2) {
	          return client2;
	        }
	        return resolveClientWithId(savedCurrentClients, id);
	      }
	      const client = resolveDefaultClient(providedApolloClients, providedApolloClient);
	      if (client) {
	        return client;
	      }
	      return resolveDefaultClient(savedCurrentClients, savedCurrentClients.default);
	    };
	  }
	  function resolveClient(id = clientId) {
	    const client = resolveImpl(id);
	    if (!client) {
	      throw new Error(`Apollo client with id ${id != null ? id : "default"} not found. Use provideApolloClient() if you are outside of a component setup.`);
	    }
	    return client;
	  }
	  return {
	    resolveClient,
	    get client() {
	      return resolveClient();
	    }
	  };
	}
	var currentApolloClients = {};
	function provideApolloClient(client) {
	  currentApolloClients = {
	    default: client
	  };
	  return function(fn) {
	    const result = fn();
	    currentApolloClients = {};
	    return result;
	  };
	}
	function provideApolloClients(clients) {
	  currentApolloClients = clients;
	  return function(fn) {
	    const result = fn();
	    currentApolloClients = {};
	    return result;
	  };
	}

	// src/util/paramToRef.ts
	var import_vue_demi2 = __toModule(require$$0);
	function paramToRef(param) {
	  if ((0, import_vue_demi2.isRef)(param)) {
	    return param;
	  } else if (typeof param === "function") {
	    return (0, import_vue_demi2.computed)(param);
	  } else {
	    return (0, import_vue_demi2.ref)(param);
	  }
	}

	// src/util/paramToReactive.ts
	var import_vue_demi3 = __toModule(require$$0);
	function paramToReactive(param) {
	  if ((0, import_vue_demi3.isRef)(param)) {
	    return param;
	  } else if (typeof param === "function") {
	    return (0, import_vue_demi3.computed)(param);
	  } else if (param) {
	    return (0, import_vue_demi3.reactive)(param);
	  } else {
	    return param;
	  }
	}

	// src/util/useEventHook.ts
	function useEventHook() {
	  const fns = [];
	  function on(fn) {
	    fns.push(fn);
	    return {
	      off: () => off(fn)
	    };
	  }
	  function off(fn) {
	    const index = fns.indexOf(fn);
	    if (index !== -1) {
	      fns.splice(index, 1);
	    }
	  }
	  function trigger(param) {
	    for (const fn of fns) {
	      fn(param);
	    }
	  }
	  function getCount() {
	    return fns.length;
	  }
	  return {
	    on,
	    off,
	    trigger,
	    getCount
	  };
	}

	// src/util/loadingTracking.ts
	var import_vue_demi4 = __toModule(require$$0);
	function getAppTracking() {
	  var _a;
	  const vm = (0, import_vue_demi4.getCurrentInstance)();
	  const root = (_a = vm == null ? void 0 : vm.$root) != null ? _a : vm == null ? void 0 : vm.root;
	  if (!root) {
	    throw new Error("Instance $root not found");
	  }
	  let appTracking;
	  if (!root._apolloAppTracking) {
	    appTracking = root._apolloAppTracking = {
	      queries: (0, import_vue_demi4.ref)(0),
	      mutations: (0, import_vue_demi4.ref)(0),
	      subscriptions: (0, import_vue_demi4.ref)(0),
	      components: new Map()
	    };
	  } else {
	    appTracking = root._apolloAppTracking;
	  }
	  return {
	    appTracking
	  };
	}
	function getCurrentTracking() {
	  const vm = (0, import_vue_demi4.getCurrentInstance)();
	  if (!vm) {
	    throw new Error("getCurrentTracking must be used during a component setup");
	  }
	  const {appTracking} = getAppTracking();
	  let tracking;
	  if (!appTracking.components.has(vm)) {
	    appTracking.components.set(vm, tracking = {
	      queries: (0, import_vue_demi4.ref)(0),
	      mutations: (0, import_vue_demi4.ref)(0),
	      subscriptions: (0, import_vue_demi4.ref)(0)
	    });
	    (0, import_vue_demi4.onUnmounted)(() => {
	      appTracking.components.delete(vm);
	    });
	  } else {
	    tracking = appTracking.components.get(vm);
	  }
	  return {
	    appTracking,
	    tracking
	  };
	}
	function track(loading, type) {
	  const {appTracking, tracking} = getCurrentTracking();
	  (0, import_vue_demi4.watch)(loading, (value, oldValue) => {
	    if (oldValue != null && value !== oldValue) {
	      const mod = value ? 1 : -1;
	      tracking[type].value += mod;
	      appTracking[type].value += mod;
	    }
	  }, {
	    immediate: true
	  });
	  (0, import_vue_demi4.onBeforeUnmount)(() => {
	    if (loading.value) {
	      tracking[type].value--;
	      appTracking[type].value--;
	    }
	  });
	}
	function trackQuery(loading) {
	  track(loading, "queries");
	}
	function trackMutation(loading) {
	  track(loading, "mutations");
	}
	function trackSubscription(loading) {
	  track(loading, "subscriptions");
	}

	// src/util/toApolloError.ts
	var import_core = __toModule(require$$2);
	function toApolloError(error) {
	  if (!(error instanceof Error)) {
	    return new import_core.ApolloError({
	      networkError: Object.assign(new Error(), {originalError: error}),
	      errorMessage: String(error)
	    });
	  }
	  if ((0, import_core.isApolloError)(error)) {
	    return error;
	  }
	  return new import_core.ApolloError({networkError: error, errorMessage: error.message});
	}
	function resultErrorsToApolloError(errors) {
	  return new import_core.ApolloError({
	    graphQLErrors: errors,
	    errorMessage: `GraphQL response contains errors: ${errors.map((e) => e.message).join(" | ")}`
	  });
	}

	// src/util/env.ts
	var isServer = "undefined" === "undefined";

	// src/useQuery.ts
	function useQuery(document, variables, options) {
	  return useQueryImpl(document, variables, options);
	}
	function useQueryImpl(document, variables, options = {}, lazy = false) {
	  var _a;
	  const vm = (0, import_vue_demi5.getCurrentInstance)();
	  const currentOptions = (0, import_vue_demi5.ref)();
	  const documentRef = paramToRef(document);
	  const variablesRef = paramToRef(variables);
	  const optionsRef = paramToReactive(options);
	  const result = (0, import_vue_demi5.ref)();
	  const resultEvent = useEventHook();
	  const error = (0, import_vue_demi5.ref)(null);
	  const errorEvent = useEventHook();
	  const loading = (0, import_vue_demi5.ref)(false);
	  vm && trackQuery(loading);
	  const networkStatus = (0, import_vue_demi5.ref)();
	  let firstResolve;
	  let firstReject;
	  vm && ((_a = import_vue_demi5.onServerPrefetch) == null ? void 0 : _a(() => {
	    var _a2;
	    if (!isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false)
	      return;
	    return new Promise((resolve, reject) => {
	      firstResolve = () => {
	        resolve();
	        firstResolve = void 0;
	        firstReject = void 0;
	      };
	      firstReject = (apolloError) => {
	        reject(apolloError);
	        firstResolve = void 0;
	        firstReject = void 0;
	      };
	    }).then(stop).catch(stop);
	  }));
	  const {resolveClient} = useApolloClient();
	  const query = (0, import_vue_demi5.ref)();
	  let observer;
	  let started = false;
	  function start() {
	    var _a2, _b, _c;
	    if (started || !isEnabled.value || ((_a2 = currentOptions.value) == null ? void 0 : _a2.prefetch) === false) {
	      if (firstResolve)
	        firstResolve();
	      return;
	    }
	    started = true;
	    error.value = null;
	    loading.value = true;
	    const client = resolveClient((_b = currentOptions.value) == null ? void 0 : _b.clientId);
	    query.value = client.watchQuery({
	      query: currentDocument,
	      variables: currentVariables,
	      ...currentOptions.value,
	      ...((_c = currentOptions.value) == null ? void 0 : _c.fetchPolicy) !== "no-cache" ? {
	        fetchPolicy: "network-only"
	      } : {}
	    });
	    startQuerySubscription();
	  }
	  function startQuerySubscription() {
	    if (observer && !observer.closed)
	      return;
	    if (!query.value)
	      return;
	    observer = query.value.subscribe({
	      next: onNextResult,
	      error: onError
	    });
	  }
	  function onNextResult(queryResult) {
	    var _a2;
	    error.value = null;
	    processNextResult(queryResult);
	    if (!queryResult.error && ((_a2 = queryResult.errors) == null ? void 0 : _a2.length)) {
	      processError(resultErrorsToApolloError(queryResult.errors));
	    }
	    if (firstResolve) {
	      firstResolve();
	      stop();
	    }
	  }
	  function processNextResult(queryResult) {
	    result.value = queryResult.data && Object.keys(queryResult.data).length === 0 ? void 0 : queryResult.data;
	    loading.value = queryResult.loading;
	    networkStatus.value = queryResult.networkStatus;
	    resultEvent.trigger(queryResult);
	  }
	  function onError(queryError) {
	    var _a2, _b, _c, _d;
	    const apolloError = toApolloError(queryError);
	    const client = resolveClient((_a2 = currentOptions.value) == null ? void 0 : _a2.clientId);
	    const errorPolicy = ((_b = currentOptions.value) == null ? void 0 : _b.errorPolicy) || ((_d = (_c = client.defaultOptions) == null ? void 0 : _c.watchQuery) == null ? void 0 : _d.errorPolicy);
	    if (errorPolicy && errorPolicy !== "none") {
	      processNextResult(query.value.getCurrentResult());
	    }
	    processError(apolloError);
	    if (firstReject) {
	      firstReject(apolloError);
	      stop();
	    }
	    resubscribeToQuery();
	  }
	  function processError(apolloError) {
	    error.value = apolloError;
	    loading.value = false;
	    networkStatus.value = 8;
	    errorEvent.trigger(apolloError);
	  }
	  function resubscribeToQuery() {
	    if (!query.value)
	      return;
	    const lastError = query.value.getLastError();
	    const lastResult = query.value.getLastResult();
	    query.value.resetLastResults();
	    startQuerySubscription();
	    Object.assign(query.value, {lastError, lastResult});
	  }
	  let onStopHandlers = [];
	  function stop() {
	    if (firstResolve)
	      firstResolve();
	    if (!started)
	      return;
	    started = false;
	    loading.value = false;
	    onStopHandlers.forEach((handler) => handler());
	    onStopHandlers = [];
	    if (query.value) {
	      query.value.stopPolling();
	      query.value = null;
	    }
	    if (observer) {
	      observer.unsubscribe();
	      observer = void 0;
	    }
	  }
	  let restarting = false;
	  function baseRestart() {
	    if (!started || restarting)
	      return;
	    restarting = true;
	    (0, import_vue_demi5.nextTick)(() => {
	      if (started) {
	        stop();
	        start();
	      }
	      restarting = false;
	    });
	  }
	  let debouncedRestart;
	  let isRestartDebounceSetup = false;
	  function updateRestartFn() {
	    var _a2, _b;
	    if (!currentOptions.value) {
	      debouncedRestart = baseRestart;
	    } else {
	      if ((_a2 = currentOptions.value) == null ? void 0 : _a2.throttle) {
	        debouncedRestart = (0, import_throttle_debounce.throttle)(currentOptions.value.throttle, baseRestart);
	      } else if ((_b = currentOptions.value) == null ? void 0 : _b.debounce) {
	        debouncedRestart = (0, import_throttle_debounce.debounce)(currentOptions.value.debounce, baseRestart);
	      } else {
	        debouncedRestart = baseRestart;
	      }
	      isRestartDebounceSetup = true;
	    }
	  }
	  function restart() {
	    if (!isRestartDebounceSetup)
	      updateRestartFn();
	    debouncedRestart();
	  }
	  let currentDocument;
	  (0, import_vue_demi5.watch)(documentRef, (value) => {
	    currentDocument = value;
	    restart();
	  }, {
	    immediate: true
	  });
	  let currentVariables;
	  let currentVariablesSerialized;
	  (0, import_vue_demi5.watch)(variablesRef, (value, oldValue) => {
	    const serialized = JSON.stringify(value);
	    if (serialized !== currentVariablesSerialized) {
	      currentVariables = value;
	      restart();
	    }
	    currentVariablesSerialized = serialized;
	  }, {
	    deep: true,
	    immediate: true
	  });
	  (0, import_vue_demi5.watch)(() => (0, import_vue_demi5.unref)(optionsRef), (value) => {
	    if (currentOptions.value && (currentOptions.value.throttle !== value.throttle || currentOptions.value.debounce !== value.debounce)) {
	      updateRestartFn();
	    }
	    currentOptions.value = value;
	    restart();
	  }, {
	    deep: true,
	    immediate: true
	  });
	  function refetch(variables2 = void 0) {
	    if (query.value) {
	      if (variables2) {
	        currentVariables = variables2;
	      }
	      error.value = null;
	      loading.value = true;
	      return query.value.refetch(variables2);
	    }
	  }
	  function fetchMore(options2) {
	    if (query.value) {
	      error.value = null;
	      return query.value.fetchMore(options2);
	    }
	  }
	  function subscribeToMore(options2) {
	    return;
	  }
	  const forceDisabled = (0, import_vue_demi5.ref)(lazy);
	  const enabledOption = (0, import_vue_demi5.computed)(() => !currentOptions.value || currentOptions.value.enabled == null || currentOptions.value.enabled);
	  const isEnabled = (0, import_vue_demi5.computed)(() => enabledOption.value && !forceDisabled.value);
	  (0, import_vue_demi5.watch)(isEnabled, (value) => {
	    if (value) {
	      start();
	    } else {
	      stop();
	    }
	  }, {
	    immediate: true
	  });
	  vm && (0, import_vue_demi5.onBeforeUnmount)(() => {
	    stop();
	  });
	  return {
	    result,
	    loading,
	    networkStatus,
	    error,
	    start,
	    stop,
	    restart,
	    forceDisabled,
	    document: documentRef,
	    variables: variablesRef,
	    options: optionsRef,
	    query,
	    refetch,
	    fetchMore,
	    subscribeToMore,
	    onResult: resultEvent.on,
	    onError: errorEvent.on
	  };
	}

	// src/useLazyQuery.ts
	var import_vue_demi6 = __toModule(require$$0);
	function useLazyQuery(document, variables, options) {
	  const query = useQueryImpl(document, variables, options, true);
	  function load(document2, variables2, options2) {
	    if (document2) {
	      query.document.value = document2;
	    }
	    if (variables2) {
	      query.variables.value = variables2;
	    }
	    if (options2) {
	      Object.assign((0, import_vue_demi6.isRef)(query.options) ? query.options.value : query.options, options2);
	    }
	    query.forceDisabled.value = false;
	  }
	  return {
	    ...query,
	    load
	  };
	}

	// src/useMutation.ts
	var import_vue_demi7 = __toModule(require$$0);
	function useMutation(document, options = {}) {
	  const vm = (0, import_vue_demi7.getCurrentInstance)();
	  const loading = (0, import_vue_demi7.ref)(false);
	  vm && trackMutation(loading);
	  const error = (0, import_vue_demi7.ref)(null);
	  const called = (0, import_vue_demi7.ref)(false);
	  const doneEvent = useEventHook();
	  const errorEvent = useEventHook();
	  const {resolveClient} = useApolloClient();
	  async function mutate(variables, overrideOptions = {}) {
	    let currentDocument;
	    if (typeof document === "function") {
	      currentDocument = document();
	    } else if ((0, import_vue_demi7.isRef)(document)) {
	      currentDocument = document.value;
	    } else {
	      currentDocument = document;
	    }
	    let currentOptions;
	    if (typeof options === "function") {
	      currentOptions = options();
	    } else if ((0, import_vue_demi7.isRef)(options)) {
	      currentOptions = options.value;
	    } else {
	      currentOptions = options;
	    }
	    const client = resolveClient(currentOptions.clientId);
	    error.value = null;
	    loading.value = true;
	    called.value = true;
	    try {
	      const result = await client.mutate({
	        mutation: currentDocument,
	        ...currentOptions,
	        ...overrideOptions,
	        variables: (variables != null ? variables : currentOptions.variables) ? {
	          ...currentOptions.variables,
	          ...variables
	        } : void 0
	      });
	      loading.value = false;
	      doneEvent.trigger(result);
	      return result;
	    } catch (e) {
	      const apolloError = toApolloError(e);
	      error.value = apolloError;
	      loading.value = false;
	      errorEvent.trigger(apolloError);
	      if (currentOptions.throws === "always" || currentOptions.throws !== "never" && !errorEvent.getCount()) {
	        throw apolloError;
	      }
	    }
	    return null;
	  }
	  vm && (0, import_vue_demi7.onBeforeUnmount)(() => {
	    loading.value = false;
	  });
	  return {
	    mutate,
	    loading,
	    error,
	    called,
	    onDone: doneEvent.on,
	    onError: errorEvent.on
	  };
	}

	// src/useSubscription.ts
	var import_vue_demi8 = __toModule(require$$0);
	var import_throttle_debounce2 = __toModule(require$$1);
	function useSubscription(document, variables = void 0, options = {}) {
	  const vm = (0, import_vue_demi8.getCurrentInstance)();
	  const documentRef = paramToRef(document);
	  const variablesRef = paramToRef(variables);
	  const optionsRef = paramToReactive(options);
	  const result = (0, import_vue_demi8.ref)();
	  const resultEvent = useEventHook();
	  const error = (0, import_vue_demi8.ref)(null);
	  const errorEvent = useEventHook();
	  const loading = (0, import_vue_demi8.ref)(false);
	  vm && trackSubscription(loading);
	  const {resolveClient} = useApolloClient();
	  const subscription = (0, import_vue_demi8.ref)(null);
	  let observer = null;
	  let started = false;
	  function start() {
	    var _a;
	    if (started || !isEnabled.value || isServer)
	      return;
	    started = true;
	    loading.value = true;
	    const client = resolveClient((_a = currentOptions.value) == null ? void 0 : _a.clientId);
	    subscription.value = client.subscribe({
	      query: currentDocument,
	      variables: currentVariables,
	      ...currentOptions.value
	    });
	    observer = subscription.value.subscribe({
	      next: onNextResult,
	      error: onError
	    });
	  }
	  function onNextResult(fetchResult) {
	    result.value = fetchResult.data;
	    loading.value = false;
	    resultEvent.trigger(fetchResult);
	  }
	  function onError(fetchError) {
	    const apolloError = toApolloError(fetchError);
	    error.value = apolloError;
	    loading.value = false;
	    errorEvent.trigger(apolloError);
	  }
	  function stop() {
	    if (!started)
	      return;
	    started = false;
	    loading.value = false;
	    if (subscription.value) {
	      subscription.value = null;
	    }
	    if (observer) {
	      observer.unsubscribe();
	      observer = null;
	    }
	  }
	  let restarting = false;
	  function baseRestart() {
	    if (!started || restarting)
	      return;
	    restarting = true;
	    (0, import_vue_demi8.nextTick)(() => {
	      if (started) {
	        stop();
	        start();
	      }
	      restarting = false;
	    });
	  }
	  let debouncedRestart;
	  function updateRestartFn() {
	    var _a, _b;
	    if ((_a = currentOptions.value) == null ? void 0 : _a.throttle) {
	      debouncedRestart = (0, import_throttle_debounce2.throttle)(currentOptions.value.throttle, baseRestart);
	    } else if ((_b = currentOptions.value) == null ? void 0 : _b.debounce) {
	      debouncedRestart = (0, import_throttle_debounce2.debounce)(currentOptions.value.debounce, baseRestart);
	    } else {
	      debouncedRestart = baseRestart;
	    }
	  }
	  function restart() {
	    if (!debouncedRestart)
	      updateRestartFn();
	    debouncedRestart();
	  }
	  const currentOptions = (0, import_vue_demi8.ref)();
	  (0, import_vue_demi8.watch)(() => (0, import_vue_demi8.isRef)(optionsRef) ? optionsRef.value : optionsRef, (value) => {
	    if (currentOptions.value && (currentOptions.value.throttle !== value.throttle || currentOptions.value.debounce !== value.debounce)) {
	      updateRestartFn();
	    }
	    currentOptions.value = value;
	    restart();
	  }, {
	    deep: true,
	    immediate: true
	  });
	  let currentDocument;
	  (0, import_vue_demi8.watch)(documentRef, (value) => {
	    currentDocument = value;
	    restart();
	  }, {
	    immediate: true
	  });
	  let currentVariables;
	  let currentVariablesSerialized;
	  (0, import_vue_demi8.watch)(variablesRef, (value, oldValue) => {
	    const serialized = JSON.stringify(value);
	    if (serialized !== currentVariablesSerialized) {
	      currentVariables = value;
	      restart();
	    }
	    currentVariablesSerialized = serialized;
	  }, {
	    deep: true,
	    immediate: true
	  });
	  const enabledOption = (0, import_vue_demi8.computed)(() => !currentOptions.value || currentOptions.value.enabled == null || currentOptions.value.enabled);
	  const isEnabled = enabledOption;
	  (0, import_vue_demi8.watch)(isEnabled, (value) => {
	    if (value) {
	      start();
	    } else {
	      stop();
	    }
	  }, {
	    immediate: true
	  });
	  vm && (0, import_vue_demi8.onBeforeUnmount)(stop);
	  return {
	    result,
	    loading,
	    error,
	    start,
	    stop,
	    restart,
	    document: documentRef,
	    variables: variablesRef,
	    options: optionsRef,
	    subscription,
	    onResult: resultEvent.on,
	    onError: errorEvent.on
	  };
	}

	// src/useResult.ts
	var import_vue_demi9 = __toModule(require$$0);
	function useResult(result, defaultValue, pick) {
	  console.warn(`'useResult' is deprecated and will be removed soon. Plase use a computed instead.
	Before:
	const items = useResult(result, [], data => data.someField.myItems)
	After:
	const items = computed(() => result.value?.someField.myItems ?? [])`);
	  return (0, import_vue_demi9.computed)(() => {
	    const value = result.value;
	    if (value) {
	      if (pick) {
	        try {
	          return pick(value);
	        } catch (e) {
	        }
	      } else {
	        const keys = Object.keys(value);
	        if (keys.length === 1) {
	          return value[keys[0]];
	        } else {
	          return value;
	        }
	      }
	    }
	    return defaultValue;
	  });
	}

	// src/useLoading.ts
	var import_vue_demi10 = __toModule(require$$0);
	function useQueryLoading() {
	  const {tracking} = getCurrentTracking();
	  return (0, import_vue_demi10.computed)(() => tracking.queries.value > 0);
	}
	function useMutationLoading() {
	  const {tracking} = getCurrentTracking();
	  return (0, import_vue_demi10.computed)(() => tracking.mutations.value > 0);
	}
	function useSubscriptionLoading() {
	  const {tracking} = getCurrentTracking();
	  return (0, import_vue_demi10.computed)(() => tracking.subscriptions.value > 0);
	}
	function useGlobalQueryLoading() {
	  const {appTracking} = getAppTracking();
	  return (0, import_vue_demi10.computed)(() => appTracking.queries.value > 0);
	}
	function useGlobalMutationLoading() {
	  const {appTracking} = getAppTracking();
	  return (0, import_vue_demi10.computed)(() => appTracking.mutations.value > 0);
	}
	function useGlobalSubscriptionLoading() {
	  const {appTracking} = getAppTracking();
	  return (0, import_vue_demi10.computed)(() => appTracking.subscriptions.value > 0);
	}
	
} (dist));

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response._data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response._data = parseFn(data);
    } else {
      ctx.response._data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r._data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions2 = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions2)
  }));
  return $fetch2;
}
const _globalThis$2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch$1 = _globalThis$2.fetch || (() => Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!")));
const Headers = _globalThis$2.Headers;
const $fetch$1 = createFetch({ fetch: fetch$1, Headers });
const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
const buildAssetsDir = () => appConfig.buildAssetsDir;
const buildAssetsURL = (...path) => joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
};
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createContext() {
  let currentInstance = null;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  return {
    use: () => currentInstance,
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = null;
      isSingleton = false;
    },
    call: (instance, cb) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return cb();
      } finally {
        if (!isSingleton) {
          currentInstance = null;
        }
      }
    },
    async callAsync(instance, cb) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = cb();
        if (!isSingleton) {
          currentInstance = null;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace() {
  const contexts = {};
  return {
    get(key) {
      if (!contexts[key]) {
        contexts[key] = createContext();
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$1 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$1] || (_globalThis$1[globalKey$1] = createNamespace());
const getContext = (key) => defaultNamespace.get(key);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis$1[asyncHandlersKey] || (_globalThis$1[asyncHandlersKey] = /* @__PURE__ */ new Set());
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = /* @__PURE__ */ new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = /* @__PURE__ */ new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const nuxtAppCtx = getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      var _a2;
      if (prop === "public") {
        return target.public;
      }
      return (_a2 = target[prop]) != null ? _a2 : target.public[prop];
    },
    set(target, prop, value) {
      {
        return false;
      }
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide: provide2 } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide2 && typeof provide2 === "object") {
    for (const key in provide2) {
      nuxtApp.provide(key, provide2[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxtAppCtx.callAsync(nuxt, fn);
  }
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0$1;
  const hasSymbol2 = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol2 ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol2 && obj[Symbol.toStringTag] === "Module";
  }
  const assign2 = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, "");
  function parseURL(parseQuery2, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash2 = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery2(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash2 = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash2,
      path,
      query,
      hash: hash2
    };
  }
  function stringifyURL(stringifyQuery2, location2) {
    const query = location2.query ? stringifyQuery2(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery2, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery2(a.query) === stringifyQuery2(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash: hash2 } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash2.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash2.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash2;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign2({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign2({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign2({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign2({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign2({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign2(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign2({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify2(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify: stringify2
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign2(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = /* @__PURE__ */ new Map();
    globalOptions = mergeOptions2({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions2(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign2({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0 && (matcher.record.path !== matchers[i].record.path || !isRecordChildOf(matcher, matchers[i])))
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign2(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign2({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta2, record) => assign2(meta2, record.meta), {});
  }
  function mergeOptions2(defaults2, partialOptions) {
    const options = {};
    for (const key in defaults2) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults2[key];
    }
    return options;
  }
  function isRecordChildOf(record, parent) {
    return parent.children.some((child) => child === record || isRecordChildOf(record, child));
  }
  const HASH_RE = /#/g;
  const AMPERSAND_RE = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE = /\+/g;
  const ENC_BRACKET_OPEN_RE = /%5B/g;
  const ENC_BRACKET_CLOSE_RE = /%5D/g;
  const ENC_CARET_RE = /%5E/g;
  const ENC_BACKTICK_RE = /%60/g;
  const ENC_CURLY_OPEN_RE = /%7B/g;
  const ENC_PIPE_RE = /%7C/g;
  const ENC_CURLY_CLOSE_RE = /%7D/g;
  const ENC_SPACE_RE = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryValue(text) {
    return commonEncode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
  }
  function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue(v)) : [value && encodeQueryValue(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign2({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign2({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign2(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign2({}, rawLocation, {
          path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign2({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign2({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash2 = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign2({}, rawLocation, {
        hash: encodeHash(hash2),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign2({
        fullPath,
        hash: hash2,
        query: stringifyQuery$1 === stringifyQuery ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL(parseQuery$1, to, currentRoute.value.path) : assign2({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign2(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign2({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign2(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll2();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? isNavigationFailure(error, 2) ? error : markAsReady(error) : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign2(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign2({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll2();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign2(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (!ready) {
        ready = !err;
        setupListeners();
        readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
        readyHandlers.reset();
      }
      return err;
    }
    function handleScroll2(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = /* @__PURE__ */ new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter2() {
    return vue.inject(routerKey);
  }
  function useRoute2() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery;
  exports.useLink = useLink;
  exports.useRoute = useRoute2;
  exports.useRouter = useRouter2;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const wrapInRef = (value) => vue_cjs_prod.isRef(value) ? value : vue_cjs_prod.ref(value);
const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  var _a2, _b, _c, _d, _e;
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = __spreadValues({ server: true, default: getDefault }, options);
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = (_b = (_a2 = options.lazy) != null ? _a2 : options.defer) != null ? _b : false;
  options.initialCache = (_c = options.initialCache) != null ? _c : true;
  const nuxt = useNuxtApp();
  const instance = vue_cjs_prod.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      vue_cjs_prod.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      vue_cjs_prod.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: wrapInRef((_d = nuxt.payload.data[key]) != null ? _d : options.default()),
    pending: vue_cjs_prod.ref(!useInitialCache()),
    error: vue_cjs_prod.ref((_e = nuxt.payload._errors[key]) != null ? _e : null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = vue_cjs_prod.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer) {
    const promise = initialFetch();
    vue_cjs_prod.onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const useState = (key, init) => {
  const nuxt = useNuxtApp();
  const state = vue_cjs_prod.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (vue_cjs_prod.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
const useError = () => {
  const nuxtApp = useNuxtApp();
  return useState("error", () => nuxtApp.ssrContext.error);
};
const throwError = (_err) => {
  const nuxtApp = useNuxtApp();
  useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  }
  return err;
};
function murmurHash(key, seed = 0) {
  if (typeof key === "string") {
    key = createBuffer(key);
  }
  let i = 0;
  let h1 = seed;
  let k1;
  let h1b;
  const remainder = key.length & 3;
  const bytes = key.length - remainder;
  const c1 = 3432918353;
  const c2 = 461845907;
  while (i < bytes) {
    k1 = key[i] & 255 | (key[++i] & 255) << 8 | (key[++i] & 255) << 16 | (key[++i] & 255) << 24;
    ++i;
    k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
    k1 = k1 << 15 | k1 >>> 17;
    k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
    h1 ^= k1;
    h1 = h1 << 13 | h1 >>> 19;
    h1b = (h1 & 65535) * 5 + (((h1 >>> 16) * 5 & 65535) << 16) & 4294967295;
    h1 = (h1b & 65535) + 27492 + (((h1b >>> 16) + 58964 & 65535) << 16);
  }
  k1 = 0;
  switch (remainder) {
    case 3:
      k1 ^= (key[i + 2] & 255) << 16;
      break;
    case 2:
      k1 ^= (key[i + 1] & 255) << 8;
      break;
    case 1:
      k1 ^= key[i] & 255;
      k1 = (k1 & 65535) * c1 + (((k1 >>> 16) * c1 & 65535) << 16) & 4294967295;
      k1 = k1 << 15 | k1 >>> 17;
      k1 = (k1 & 65535) * c2 + (((k1 >>> 16) * c2 & 65535) << 16) & 4294967295;
      h1 ^= k1;
  }
  h1 ^= key.length;
  h1 ^= h1 >>> 16;
  h1 = (h1 & 65535) * 2246822507 + (((h1 >>> 16) * 2246822507 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 13;
  h1 = (h1 & 65535) * 3266489909 + (((h1 >>> 16) * 3266489909 & 65535) << 16) & 4294967295;
  h1 ^= h1 >>> 16;
  return h1 >>> 0;
}
function createBuffer(val) {
  return new TextEncoder().encode(val);
}
const defaults = {
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false
};
function objectHash(object, options = {}) {
  options = __spreadValues(__spreadValues({}, defaults), options);
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
function createHasher(options) {
  const buff = [];
  let context = [];
  const write = (str) => {
    buff.push(str);
  };
  return {
    toString() {
      return buff.join("");
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this["_" + type](value);
    },
    _object(object) {
      const pattern = /\[object (.*)\]/i;
      const objString = Object.prototype.toString.call(object);
      const _objType = pattern.exec(objString);
      const objType = _objType ? _objType[1].toLowerCase() : "unknown:[" + objString.toLowerCase() + "]";
      let objectNumber = null;
      if ((objectNumber = context.indexOf(object)) >= 0) {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      } else {
        context.push(object);
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this["_" + objType]) {
          this["_" + objType](object);
        } else if (options.ignoreUnknown) {
          return write("[" + objType + "]");
        } else {
          throw new Error('Unknown object type "' + objType + '"');
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        if (options.respectType !== false && !isNativeFunction(object)) {
          keys.splice(0, 0, "prototype", "__proto__", "letructor");
        }
        if (options.excludeKeys) {
          keys = keys.filter(function(key) {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + keys.length + ":");
        return keys.forEach((key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        });
      }
    },
    _array(arr, unordered) {
      unordered = typeof unordered !== "undefined" ? unordered : options.unorderedArrays !== false;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        return arr.forEach((entry2) => {
          return this.dispatch(entry2);
        });
      }
      const contextAdditions = [];
      const entries = arr.map((entry2) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry2);
        contextAdditions.push(hasher.getContext());
        return hasher.toString();
      });
      context = context.concat(contextAdditions);
      entries.sort();
      return this._array(entries, false);
    },
    _date(date) {
      return write("date:" + date.toJSON());
    },
    _symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    _error(err) {
      return write("error:" + err.toString());
    },
    _boolean(bool) {
      return write("bool:" + bool.toString());
    },
    _string(string) {
      write("string:" + string.length + ":");
      write(string.toString());
    },
    _function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this._object(fn);
      }
    },
    _number(number) {
      return write("number:" + number.toString());
    },
    _xml(xml) {
      return write("xml:" + xml.toString());
    },
    _null() {
      return write("Null");
    },
    _undefined() {
      return write("Undefined");
    },
    _regexp(regex) {
      return write("regex:" + regex.toString());
    },
    _uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    _arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    _url(url) {
      return write("url:" + url.toString());
    },
    _map(map) {
      write("map:");
      const arr = Array.from(map);
      return this._array(arr, options.unorderedSets !== false);
    },
    _set(set) {
      write("set:");
      const arr = Array.from(set);
      return this._array(arr, options.unorderedSets !== false);
    },
    _file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    _blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error('Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n');
    },
    _domwindow() {
      return write("domwindow");
    },
    _bigint(number) {
      return write("bigint:" + number.toString());
    },
    _process() {
      return write("process");
    },
    _timer() {
      return write("timer");
    },
    _pipe() {
      return write("pipe");
    },
    _tcp() {
      return write("tcp");
    },
    _udp() {
      return write("udp");
    },
    _tty() {
      return write("tty");
    },
    _statwatcher() {
      return write("statwatcher");
    },
    _securecontext() {
      return write("securecontext");
    },
    _connection() {
      return write("connection");
    },
    _zlib() {
      return write("zlib");
    },
    _context() {
      return write("context");
    },
    _nodescript() {
      return write("nodescript");
    },
    _httpparser() {
      return write("httpparser");
    },
    _dataview() {
      return write("dataview");
    },
    _signal() {
      return write("signal");
    },
    _fsevent() {
      return write("fsevent");
    },
    _tlswrap() {
      return write("tlswrap");
    }
  };
}
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  const exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
  return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return String(murmurHash(hashed));
}
function useFetch(request, opts = {}) {
  const key = "$f_" + (opts.key || hash([request, __spreadProps(__spreadValues({}, opts), { transform: null })]));
  const _request = vue_cjs_prod.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return vue_cjs_prod.isRef(r) ? r.value : r;
  });
  const _fetchOptions = __spreadProps(__spreadValues({}, opts), {
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = __spreadProps(__spreadValues({}, opts), {
    watch: [
      _request,
      ...opts.watch || []
    ]
  });
  const asyncData = useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
const MIMES = {
  html: "text/html",
  json: "application/json"
};
const defer = typeof setImmediate !== "undefined" ? setImmediate : (fn) => fn();
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      event.res.end(data);
      resolve(void 0);
    });
  });
}
function defaultContentType(event, type) {
  if (type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", type);
  }
}
function sendRedirect(event, location2, code = 302) {
  event.res.statusCode = code;
  event.res.setHeader("Location", location2);
  return send(event, "Redirecting to " + location2, MIMES.html);
}
class H3Error extends Error {
  constructor() {
    super(...arguments);
    this.statusCode = 500;
    this.statusMessage = "H3Error";
  }
}
function createError(input) {
  var _a2;
  if (input instanceof H3Error) {
    return input;
  }
  const err = new H3Error((_a2 = input.message) != null ? _a2 : input.statusMessage);
  if (input.statusCode) {
    err.statusCode = input.statusCode;
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  }
  if (input.data) {
    err.data = input.data;
  }
  return err;
}
const useRouter = () => {
  var _a2;
  return (_a2 = useNuxtApp()) == null ? void 0 : _a2.$router;
};
const useRoute = () => {
  return useNuxtApp()._route;
};
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  {
    const nuxtApp = useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = joinURL(useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 301));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main2, sub) => {
  };
  return vue_cjs_prod.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const to = vue_cjs_prod.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = vue_cjs_prod.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || hasProtocol(to.value, true);
      });
      return () => {
        var _a2, _b, _c;
        if (!isExternal.value) {
          return vue_cjs_prod.h(vue_cjs_prod.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? (_b = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _b : null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return vue_cjs_prod.h("a", { href, rel, target }, (_c = slots.default) == null ? void 0 : _c.call(slots));
      };
    }
  });
}
const __nuxt_component_2$1 = defineNuxtLink({ componentName: "NuxtLink" });
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray$1(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject$1(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray$1(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject$1(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal2 = true;
  for (let i = 0; equal2 && i < a.length; i++) {
    equal2 = looseEqual(a[i], b[i]);
  }
  return equal2;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray$1(a);
  bValidType = isArray$1(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject$1(a);
  bValidType = isObject$1(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray$1(val) || isObject$1(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject$1(val) && !isArray$1(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove$1 = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty$6 = Object.prototype.hasOwnProperty;
const hasOwn$1 = (val, key) => hasOwnProperty$6.call(val, key);
const isArray$1 = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject$1(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn$1;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray$1;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject$1;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove$1;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useHead(meta2) {
  const resolvedMeta = isFunction_1(meta2) ? vue_cjs_prod.computed(meta2) : meta2;
  useNuxtApp()._useHead(resolvedMeta);
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
const components = {};
function componentsPlugin_250f7b0b(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a2;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a2 = j == null ? void 0 : j.tagName) == null ? void 0 : _a2.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a22;
    return (_a22 = t.parentNode) == null ? void 0 : _a22.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document2, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults2, namespace = ".", merger) {
  if (!isObject(defaults2)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults2);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = val.concat(obj[key]);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function createDefu(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = createDefu();
const vueuseHead_19648d73 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    vue_cjs_prod.watchEffect(() => {
      head.updateDOM();
    });
  });
  const titleTemplate = vue_cjs_prod.ref();
  nuxtApp._useHead = (_meta) => {
    const meta2 = vue_cjs_prod.ref(_meta);
    if ("titleTemplate" in meta2.value) {
      titleTemplate.value = meta2.value.titleTemplate;
    }
    const headObj = vue_cjs_prod.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta2.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta2.value.title) : titleTemplate.value.replace(/%s/g, meta2.value.title);
      }
      if (meta2.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta2.value.charset });
      }
      if (meta2.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta2.value.viewport });
      }
      return defu(overrides, meta2.value);
    });
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a2, _b;
    return renderChild ? (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a2, _b, _c;
    const title = ((_c = (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  }),
  setup: setupForUseMeta((meta2) => ({
    meta: [meta2]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a2, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => () => {
    var _a2, _b;
    return (_b = (_a2 = ctx.slots).default) == null ? void 0 : _b.call(_a2);
  }
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
}, Symbol.toStringTag, { value: "Module" }));
const metaConfig = { "globalMeta": { "charset": "utf-8", "viewport": "width=device-width, initial-scale=1", "meta": [], "link": [], "style": [], "script": [] } };
const metaMixin = {
  created() {
    const instance = vue_cjs_prod.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = useNuxtApp();
    const source = typeof options.head === "function" ? vue_cjs_prod.computed(() => options.head(nuxtApp)) : options.head;
    useHead(source);
  }
};
const _ee5ce932 = defineNuxtPlugin((nuxtApp) => {
  useHead(vue_cjs_prod.markRaw(metaConfig.globalMeta));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a2;
    return ((_a2 = route.params[r.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  });
};
const generateRouteKey = (override, routeProps) => {
  var _a2;
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = (_a2 = override != null ? override : matchedRoute == null ? void 0 : matchedRoute.meta.key) != null ? _a2 : interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
const Fragment = {
  setup(_props, { slots }) {
    return () => {
      var _a2;
      return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
    };
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? vue_cjs_prod.h(component, props === true ? {} : props, slots) : vue_cjs_prod.h(Fragment, {}, slots) };
};
const isNestedKey = Symbol("isNested");
const NuxtPage = vue_cjs_prod.defineComponent({
  name: "NuxtPage",
  props: {
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props) {
    const nuxtApp = useNuxtApp();
    const isNested = vue_cjs_prod.inject(isNestedKey, false);
    vue_cjs_prod.provide(isNestedKey, true);
    return () => {
      return vue_cjs_prod.h(vueRouter_cjs_prod.RouterView, {}, {
        default: (routeProps) => {
          var _a2;
          return routeProps.Component && _wrapIf(vue_cjs_prod.Transition, (_a2 = routeProps.route.meta.pageTransition) != null ? _a2 : defaultPageTransition, wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) : vue_cjs_prod.h(vue_cjs_prod.Suspense, {
            onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
            onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
          }, { default: () => vue_cjs_prod.h(routeProps.Component, { key: generateRouteKey(props.pageKey, routeProps) }) }))).default();
        }
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const meta$a = void 0;
const _sfc_main$T = vue_cjs_prod.defineComponent({
  setup() {
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const meta$9 = void 0;
const _sfc_main$S = vue_cjs_prod.defineComponent({
  props: {
    type: { type: String, default: "warning" }
  },
  components: {
    ExclamationIcon,
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon
  },
  setup(props) {
    const configuration = {
      "warning": {
        icon: "ExclamationIcon",
        iconColor: "text-yellow-400",
        backgroundColor: "bg-yellow-50"
      },
      "error": {
        icon: "XCircleIcon",
        iconColor: "text-red-400",
        backgroundColor: "bg-red-50"
      },
      "success": {
        icon: "CheckCircleIcon",
        iconColor: "text-green-400",
        backgroundColor: "bg-green-50"
      },
      "info": {
        icon: "InformationCircleIcon",
        iconColor: "text-blue-400",
        backgroundColor: "bg-blue-50"
      }
    };
    const data = vue_cjs_prod.computed(() => configuration[props.type]);
    return {
      data
    };
  }
});
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["rounded-md p-4", _ctx.data.backgroundColor]
  }, _attrs))}><div class="flex"><div class="flex-shrink-0">`);
  serverRenderer.exports.ssrRenderVNode(_push, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(_ctx.data.icon), {
    class: [_ctx.data.iconColor, "h-5 w-5"],
    "aria-hidden": "true"
  }, null), _parent);
  _push(`</div><div class="ml-3"><h3 class="text-sm font-medium text-yellow-800">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><div class="text-sm text-yellow-700"><p>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "description", { class: "mt-2" }, null, _push, _parent);
  _push(`</p></div></div></div></div>`);
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Alert.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const __nuxt_component_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$G]]);
const _sfc_main$R = vue_cjs_prod.defineComponent({
  components: { Alert: __nuxt_component_1$5 },
  setup() {
    const route = useRoute();
    const showError = vue_cjs_prod.ref(false);
    return { route, showError };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const meta$8 = void 0;
const __nuxt_component_0$4 = vue_cjs_prod.defineComponent({
  name: "ClientOnly",
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots }) {
    const mounted = vue_cjs_prod.ref(false);
    vue_cjs_prod.onMounted(() => {
      mounted.value = true;
    });
    return (props) => {
      var _a2;
      if (mounted.value) {
        return (_a2 = slots.default) == null ? void 0 : _a2.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return vue_cjs_prod.createElementBlock(fallbackTag, null, fallbackStr);
    };
  }
});
const _sfc_main$Q = vue_cjs_prod.defineComponent({
  props: {
    secondary: { type: Boolean, default: false }
  }
});
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    type: "button",
    class: ["inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500", { "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-primary-900 bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500": _ctx.secondary }]
  }, _attrs))}>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Button.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$F]]);
const _sfc_main$P = vue_cjs_prod.defineComponent({
  props: {
    name: { type: String, required: true },
    label: { type: String },
    autocomplete: { type: String },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "you@example.com" },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    modelValue: { type: String, required: true }
  },
  setup(props, { emit }) {
    const value = vue_cjs_prod.computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    return {
      value
    };
  }
});
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  if (_ctx.label) {
    _push(`<label${serverRenderer.exports.ssrRenderAttr("for", _ctx.name)} class="block text-sm font-medium text-gray-700">${serverRenderer.exports.ssrInterpolate(_ctx.label)}</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="flex items-center shadow-sm border border-gray-300 focus:ring-primary-500 focus:outline-primary-500 focus:border-primary-500 w-full placeholder-gray-400 sm:text-sm rounded-md px-2 py-1 mt-1">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<input${serverRenderer.exports.ssrRenderAttr("type", _ctx.type)}${serverRenderer.exports.ssrRenderDynamicModel(_ctx.type, _ctx.value, null)}${serverRenderer.exports.ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""}${serverRenderer.exports.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""}${serverRenderer.exports.ssrRenderAttr("autocomplete", _ctx.autocomplete)}${serverRenderer.exports.ssrRenderAttr("name", _ctx.name)}${serverRenderer.exports.ssrRenderAttr("id", _ctx.name)} class="w-full border-0 focus-visible:outline-0"${serverRenderer.exports.ssrRenderAttr("placeholder", _ctx.placeholder)}></div></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Input.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$O = vue_cjs_prod.defineComponent({
  props: {
    name: { type: String, required: true },
    label: { type: String }
  }
});
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "relative flex items-start" }, _attrs))}><div class="flex items-center h-5"><input${serverRenderer.exports.ssrRenderAttr("id", _ctx.name)}${serverRenderer.exports.ssrRenderAttr("name", _ctx.name)} type="checkbox" class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"></div><div class="ml-3 text-sm"><label${serverRenderer.exports.ssrRenderAttr("for", _ctx.name)} class="font-medium text-gray-700">${serverRenderer.exports.ssrInterpolate(_ctx.label)}</label></div></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/Checkbox.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$D]]);
const SignInDocument = gql`
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input) {
    token
  }
}
    `;
function useSignInMutation(options) {
  return dist.useMutation(SignInDocument, options);
}
const GetStoreBySlugDocument = gql`
    query GetStoreBySlug($slug: String!) {
  getStoreBySlug(slug: $slug) {
    id
    city
    slug
    phone
    postal_code
    address
    latitude
    longitude
    openings {
      weekday
      start
      end
    }
  }
}
    `;
function useGetStoreBySlugQuery(variables, options = {}) {
  return dist.useQuery(GetStoreBySlugDocument, variables, options);
}
const GetStoresDocument = gql`
    query GetStores {
  getStores {
    city
    slug
    phone
    postal_code
    address
  }
}
    `;
function useGetStoresQuery(options = {}) {
  return dist.useQuery(GetStoresDocument, {}, options);
}
const _sfc_main$N = vue_cjs_prod.defineComponent({
  components: {
    Checkbox,
    Button,
    Input
  },
  setup(_props, { emit }) {
    const loginFormData = vue_cjs_prod.ref({ email: "", password: "" });
    const { mutate: signInMutation } = useSignInMutation({});
    const router = useRouter();
    const submit = async () => {
      try {
        const data = await signInMutation({ input: loginFormData.value });
        console.log(data);
        router.push({ name: "account" });
        if (typeof localStorage !== "undefined" && data.data.signIn.token) {
          localStorage.setItem("auth-token", data.data.signIn.token);
        }
      } catch (e) {
        emit("showError", true);
        console.error(e);
      }
    };
    return {
      loginFormData,
      submit
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const meta$7 = void 0;
const _sfc_main$M = vue_cjs_prod.defineComponent({
  components: {
    Checkbox,
    Button,
    Input
  },
  setup(_props, { emit }) {
    const loginFormData = vue_cjs_prod.ref({ email: "", password: "", phone: "" });
    const { mutate: signInMutation } = useSignInMutation({});
    const router = useRouter();
    const submit = async () => {
      try {
        const data = await signInMutation({ input: loginFormData.value });
        console.log(data);
        router.push({ name: "account" });
      } catch (e) {
        emit("showError", true);
        console.error(e);
      }
    };
    return {
      loginFormData,
      submit
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const meta$6 = void 0;
const _sfc_main$L = vue_cjs_prod.defineComponent({
  props: {
    topText: String,
    bottomText: String
  }
});
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<h2${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex flex-col mb-10 text-5xl font-header" }, _attrs))}><span class="uppercase text-gray-900">${serverRenderer.exports.ssrInterpolate(_ctx.topText)}</span><span class="uppercase text-primary-900">${serverRenderer.exports.ssrInterpolate(_ctx.bottomText)}</span></h2>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Subtitle.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$C]]);
const _imports_0$3 = buildAssetsURL("concept_burger.959f16cb.png");
const _imports_1$2 = buildAssetsURL("concept_patron.a2fc337f.png");
const meta$5 = void 0;
const _sfc_main$K = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="stars" data-v-0735bfa4></div><div class="twinkling" data-v-0735bfa4></div><!--]-->`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StarsBackground.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$B], ["__scopeId", "data-v-0735bfa4"]]);
const _sfc_main$J = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "Calque_2",
    "data-name": "Calque 2",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1944 1189"
  }, _attrs))} data-v-2f783a78><rect class="cls-1" x="289" y="405" width="1377" height="621" data-v-2f783a78></rect><rect class="cls-2" x="288" y="405" width="15.86" height="629" data-v-2f783a78></rect><rect class="cls-2" x="252" y="268" width="1440" height="137" data-v-2f783a78></rect><rect class="cls-2" x="1648.12" y="405" width="16.88" height="629" data-v-2f783a78></rect><rect class="cls-2" x="692.78" y="405" width="18.95" height="629" data-v-2f783a78></rect><rect class="cls-2" x="1240.25" y="405" width="18.95" height="629" data-v-2f783a78></rect><rect class="cls-3" x="711.86" y="405" width="6.98" height="621" data-v-2f783a78></rect><polyline class="cls-3" points="711.86 1034 711.86 1026 718.84 1026" data-v-2f783a78></polyline><rect class="cls-3" x="1233.14" y="405" width="6.98" height="621" data-v-2f783a78></rect><polyline class="cls-3" points="1233.14 1026 1240.12 1026 1240.12 1034" data-v-2f783a78></polyline><rect class="cls-4" x="593.92" y="424" width="756.9" height="55" data-v-2f783a78></rect><rect class="cls-1" x="268" y="306" width="1404" height="15" data-v-2f783a78></rect><rect class="cls-5" x="288" y="405" width="1379.07" height="15" data-v-2f783a78></rect><rect class="cls-6" x="252" y="335" width="1440" height="15" data-v-2f783a78></rect><rect class="cls-2" x="268" y="309" width="1404" height="11" data-v-2f783a78></rect><rect x="739.65" y="533" width="464.71" height="249" data-v-2f783a78></rect><ellipse class="cls-7" cx="973.48" cy="256.5" rx="137.12" ry="137.5" data-v-2f783a78></ellipse><ellipse class="cls-8" cx="972.5" cy="252.5" rx="137.12" ry="137.5" data-v-2f783a78></ellipse><path class="cls-9" d="M1021,143.59c2.63,1.19,9-1.87,11.53-.47s3.33,8.43,5.73,10,9.18-.37,11.44,1.43,1.9,8.87,4,10.84,9.12,1.16,11,3.31.42,9.06,2.17,11.36,8.81,2.65,10.36,5.09-1.07,9,.28,11.56,8.25,4.06,9.39,6.72-2.54,8.71-1.63,11.45,7.47,5.38,8.15,8.19-3.93,8.17-3.48,11,6.49,6.53,6.7,9.41-5.22,7.41-5.24,10.3,5.32,7.52,5,10.4-6.36,6.44-6.86,9.29,4,8.29,3.28,11.09-7.33,5.31-8.29,8,2.61,8.84,1.42,11.48-8.11,4-9.5,6.56,1.12,9.15-.48,11.55-8.66,2.64-10.45,4.9-.4,9.22-2.37,11.32-9,1.17-11.11,3.11-1.91,9-4.2,10.78-9-.34-11.47,1.22-3.36,8.59-5.91,9.94-8.86-1.82-11.51-.68-4.73,7.91-7.46,8.83-8.45-3.26-11.25-2.57-5.95,7-8.8,7.47-7.8-4.61-10.68-4.39-7,5.94-9.9,5.92-6.94-5.84-9.81-6.1-7.91,4.7-10.75,4.2-5.88-6.89-8.67-7.63-8.57,3.33-11.29,2.37-4.67-7.77-7.3-9-9,1.88-11.52.48-3.34-8.43-5.74-10-9.18.36-11.44-1.43-1.9-8.87-4-10.85-9.12-1.16-11-3.3-.42-9.07-2.17-11.36-8.81-2.66-10.36-5.09,1.07-9-.28-11.56-8.25-4.07-9.38-6.73,2.53-8.71,1.62-11.45-7.47-5.37-8.15-8.18,3.93-8.17,3.48-11-6.49-6.53-6.7-9.41,5.22-7.41,5.25-10.31-5.33-7.51-5.07-10.39,6.37-6.45,6.87-9.3-4-8.29-3.28-11.08,7.33-5.31,8.29-8-2.6-8.84-1.42-11.48,8.11-4,9.5-6.55-1.11-9.15.48-11.56,8.66-2.64,10.45-4.9.4-9.21,2.37-11.32,9-1.17,11.11-3.11,1.91-9,4.2-10.77,9,.33,11.47-1.23,3.36-8.58,5.91-9.94,8.86,1.82,11.51.68,4.73-7.91,7.46-8.82,8.45,3.25,11.25,2.57,6-7,8.8-7.47,7.8,4.6,10.67,4.39,7-6,9.92-5.92,6.93,5.83,9.8,6.1,7.91-4.71,10.75-4.2,5.88,6.89,8.67,7.62,8.57-3.33,11.29-2.36S1018.32,142.4,1021,143.59Z" data-v-2f783a78></path><rect class="cls-10" x="593.92" y="388" width="756.9" height="36" data-v-2f783a78></rect><polygon class="cls-11" points="1215 805 731 805 730.35 796 1215 796 1215 805" data-v-2f783a78></polygon><rect class="cls-3" x="303.86" y="405" width="6.98" height="621" data-v-2f783a78></rect><polyline class="cls-3" points="303.86 1034 303.86 1026 310.84 1026" data-v-2f783a78></polyline><rect class="cls-3" x="1641.14" y="405" width="6.98" height="621" data-v-2f783a78></rect><polyline class="cls-3" points="1641.14 1026 1648.12 1026 1648.12 1034" data-v-2f783a78></polyline><polyline class="cls-5" points="1667.07 420 1667.07 405 1692 405" data-v-2f783a78></polyline><polyline class="cls-5" points="252 405 288 405 288 420" data-v-2f783a78></polyline><polygon class="cls-12" points="1215.12 796 730.47 796 739 782 1204 782 1215.12 796" data-v-2f783a78></polygon><polygon class="cls-13" points="1187 805 1206 805 1200 843 1187 805" data-v-2f783a78></polygon><polygon class="cls-14" points="1215 805 1209.14 844.16 1200.1 842.94 1206 805 1215 805" data-v-2f783a78></polygon><polygon class="cls-13" points="758.91 805 739.91 805 745.91 843 758.91 805" data-v-2f783a78></polygon><polygon class="cls-14" points="730.91 805 736.77 844.16 745.81 842.94 739.91 805 730.91 805" data-v-2f783a78></polygon><rect class="cls-15" x="593.92" y="479" width="756.9" height="8" data-v-2f783a78></rect><polyline class="cls-15" points="355.71 915 355.71 512 626.96 512" data-v-2f783a78></polyline><rect class="cls-16" x="367" y="524" width="256" height="387" data-v-2f783a78></rect><polyline class="cls-15" points="627.3 512.48 627.3 915.48 356.06 915.48" data-v-2f783a78></polyline><polyline class="cls-15" points="1314.71 915 1314.71 512 1585.96 512" data-v-2f783a78></polyline><rect class="cls-16" x="1326" y="524" width="256" height="387" data-v-2f783a78></rect><polyline class="cls-15" points="1586.3 512.48 1586.3 915.48 1315.06 915.48" data-v-2f783a78></polyline></svg>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/img/CabDrawingImage.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const CabDrawingImage = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$A], ["__scopeId", "data-v-2f783a78"]]);
const _imports_0$2 = buildAssetsURL("burger_franchise.fdb71a2c.png");
const _imports_1$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfaSURBVHgB7Z19bBtnHce/z3PndztNm6Rh3ZJma6nYRjtAJU0lhqZNq4oY6hCCSSCNTYDENqgYlA2mrcpekEBI+2OsHfwDEwIhDQRd1CJVQkMitDRbgRW6dWxdIVlfkjhOlvjdvruHn13SMtfuzq7re5z9PpKTu3vuLPv53O/5Pc9z9hlgGIZhGIZhmo/AEuHhA4+v8UlsUUreDKFSUOp5Ja0XHh16dKHa/reN3BYWlvioI4ztVAnrFDBmOc7v9n9mZB88pO2FDP9xOAqfcbOQ2AEhNtKm0P+K4kLg6Z1DDz9WecyWPdv6/A4eUgJbBcTA+RI1gaJ9497P7Z2AR7StkOHR4Wtgyi1Cie+SiP4au1EAOEM7B3e+VIoIpyg3Cim/KRRuoXcerXaAgnrWkGr7yLaRJDzARJuxGBGQ+Bad3RupYsMX2V06lvz8HfvumE/mc/dLKW6lbWsudhrSc95iF7GJFv8AD2gbIS4j4gIsWPeZIvg1KfJu32sfDPkAPBKifZP1jog4myPC9T5HIjuLE/Mn6jkkK6WzgZqt42gx2gp54sATqy3p3EoR8Ug9EVGLVxPHkC6mXe/vVS7RrsnasX9HJNax/ONFqG9LyEE6ZSJoAiuCK5CxMtQbVq729yqXaCNkMSKgxEN0fg7IJkdvFwlJFVKYy8+5PcSTXOJ5k7UYEU45IjBIm5oSEdVoh1zimZDh0e/3wyxsKUUEJeuBVr0W3XNJy5usJw8+GUrK7MfgWA/SMGGoWTnCLbrnkppCen+uIoGF2QEDsgvCF1SwJS6BtV2vBz5y5eiVSaS/QVGxtvRO4QGN5BIlA48M7Jp3d/JKcg1zevyeyN/RABdUytqnVMAS6ZuEKb5MAdsP5XRTtzNEsdtQBRrSxhXRt7DhirHA8sBMh8+wDHhMvblEKdM5Hv/edMFe5Wp3esQdW35nPBHej2HhoA7OV/Jzzxl9U5/8MLWXT9Ns6UYquKSKC/uSWBUjEb0vIhaYJ6fQinpzyVzmRkwu3AlHBd0eMuHY9t3jX+98AXVwLgz7E1s/YRjO47T4IVwChrCwMnoa61ceRk9kkgbZRehIvbkk6n8FQd8byBTWwyV91MrcQP/rF7J618y1NCL+BS0uQ4OEfKlyRNzQO6ZlRFRSby7xmbPojv4eE7MfhMsOYamRWYk6Mbt/oGISqXvRoAxD2PRCz2BDOSLOwG8U0A74DB86g8vqSe6I+F+n4+J0yaTuenaNGY4s3E6n8xdrWe/voBdSpX/hIA0hJ3Btz0voCM615YWVrlAXptJT1HRlXe0vRQF9y/bBUF+AKfzlbQ5d5TqVUkg1qWU2TSk3UysaqyzwU0q/6SqJu9ablKDPb7cdC6fSp3EkMQYbp2lLe0RENUo971IuydL7cZtLemNH8emrJ7Bu+XXl9Zyl8KO/2Thwqq7OVE1MR4CuMVxYcPv7JR7cZCLqO3vuJ60kxhcmcHD6EBK5BJYKpShJUi6ZL8y72n+hMI1X5/Zi29rry+sZioyoD03DpJjrrpaBh1bJsgxb2eWIOHjmEP0/hYLdvhFRDb/hx/JQp2shJf6ZeAXxbBw9oR40G5Pmkaom85CZwbG5kzhw5i+YySZKczpYqnSHujGdnnadS3J2Dr89vgd3XXcnrfnRTGpOB/zp9EFK1q8hb+ex1Gkkl7w88w+8SaP9gdgH0Exqzk/NF+LvCRmLlHJJh6/D9f5TmSk8/+YImk3NCDkyOUjNlvuphaVAqpAuN0duSaSCmE1bOBKvHlXUWdp6zTOp9y2uO3DmVM744fj9NGCrgbh6d3LpJgctUf+iP1/5970do9VKL2lKnWkEsY6q/VO1SllI6xFKOZtqFbIQD1BC1Kx3FqIZLEQzWIhmsBDNYCGawUI0g4VoBgvRDBaiGSxEM1iIZrAQzWAhmsFCNIOvGLrBcWBns3ByOdi5LGDb5W1NQ2FWKfUUiXim7e7k0GqcfB52cgF2JtNcCf+PwAohxAOSFlhILZQqSygmZi6fiHcSpijZzjmkBqXIsN6ea5WMs1CkcIRUw1EozFBkWK3/shFHSBXKidvy5ptfLKQCVepRpVLwChZSgSoW6eHdJ/xZSAWKxhjKbmEir4CFaAYLqYAGaOWHV7CQCoRhAKZ3N5tgIRUInw/SH4BXsJBKqLmS4bpv69g0WEgVjFAIMtLSu0adg4XUwOzshAi6vtFM02AhNZA+P/w9vZBlKS3qdSkcZSEXQRgSvu6ecrRc9rvpCKQcR/2KZ3vfBWGaZSFGLEZT8jm6apin2eDF0XxjF1tpvmyWpvdfPLuCghAqDiV/PBVLvMxCXFIanxjhSPlRojQJCdXo1W91PH3sjbtLS4F8uHCy7zdvY3i4PF/DQhpEyMZbe6r5Qnz34GS1Ms4hmsFCNIOFaAYL0QwWohksRDNYiGawEM1gIZrBQjSDhWgGC9EMFqIZJSFL687IbY6kKf0ZMNoghRB/BaMN0oFxSGEJ30e8zZBKWnvIxxgYLZATk9HXoMSzYLRAln7W7T/3xX6iIH4G7nG1BAHYtcrOjUNy+eJjJOWXYC47Sqm3apVd8Omv1bsWvkQ9r88KpTZDCPc/F8C4Q6nDwnDuOfHVzsPVikWVA8Sa3biqqOY3mzCuV3A2wRCraLzS3F8uea+hRJpO8KOWpX56cjT6Z/xa2GAYhmEYhmFaxH8BRBvlhVh+giQAAAAASUVORK5CYII=";
const _imports_2 = buildAssetsURL("key.fda76b91.png");
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAp7SURBVHgB7Z1rbBTXFcf/Z2Z2vTYPl2AMtAlNDQRoePhJAFMb0yaq0kAboqYiQRFNUrVSK/VDm1YIFVAitaVNEMpDEJXmVcoH0jZqy4cQlNDgoBBqDAhSCH7SJiHFGD+Wfe/Ozbm72NjgfXjZXd+x5ydd78x4Znbv/d/XnHPvHcDGxsbGxiY9CAqzZb8ohtdfAEXplqF78DHd6RLCf+nyS49NcSMNlBVk0z8CGzVN+wVvToSimALo8Qn0+sX1/2oxDXz71YfyPsQw0aAgQgjSSF8PhcWQaJydJ7qGzNMzDRMPIw2UFOTB1zmuGvJgAShOHUMQk5AGSgoylrEFUQxbEMWwBVEMWxDFsAVRDFsQxbAFUQxbEMWwBVEMywvicXfizMkDuNxxPuVrOi+ex0en3kHA70n5mraPjqDlP/UwI2FkEwMW59+H9sDr6cJ/m4/h7vufgKbpCc9393bg6KE/QZgmers+Q1XNQ8m+Ap99fIZFfyu67cgrwIyZFcgWli8hUgxJJBLk3BtKen4kFIiKIQn4U3NZ+Hy9/dsB/xVkE7sNUQzLC+JwuKKfuuGEpjuTn+909W8bA7YT4XRec1rqugPZxPJtyOKah9F67gim3TqP24/k+WvchCIsqFqFzv+3oWRuNVJB3tvLnYdQOIAvz6pCNrG8IIWTv4SypQ8M65rbvlIWDami6wZmz1+BXGC3IYphC6IYtiCKYQuiGLYgimELohi2IIphC6IYtiCKYQuiGEoKsve7MCFgwsIIAR/SQElBiIjjI3bDAlwJ3DAVQQ7A7nGSthdpoOz8EDkl4al9WBgRoXykicnKGqD5LO42jun4/uOcht1egWBk8PkaoX28U/tpvsO8mMr9/WEyun1hbaBTl2TZJlfbrnX0MdJA6RlUmWLTvsjPNJhP9+13yUk2vutyNlGXTuGFu9YVpJWQmWJMNOpah/YCp3ir3A5zqXD7bqxmOCFeG2kxrv6O0c+W75OfK8EdcltOP7teDq7ZIg7DsR0KMHa6vR3G81w6LgzZCAs8u3MttUMBxowgspR0ePD0DaVDtv2IPAdFGFMPhtPPGdsJ4tLAY9zDfmnXI/ltUIQxJciWLWSSjl/37XNV5TUN80kohOUHOQwX/Urei6IgOJ4fdKp1Er/5w9qC/8HGxsbGxsbGxsbGxmYMM6r9IeL0aSec7pkQ+b00p/QTWIBRJYhoapoCrfcutq8vYiNVHcduHh+eyi5Cwe7ABrYUbaaS0regMLTpn8EfsOvy5/xjk08/SgN2lY5zB0R02pEg0aFBe3HXOsczuElEQ4MDkzAXwlwKzbGQTSGr+PCMuBeEQuwA93I09RVUXvMuFIW27AvJZRwLkSW6vNetSUjS56yvfnmdsW8Yt+Hcf+RWaHk1vFXBYRGru5zvlXzVOfnVPh87wAOxfY2OUEXdUiiKNC5mTYwhYTnIDNfxVlxBhBAGmo9Xc4Iv5N0q/lzGnzPR7+uj1Cpb6a/1eIDIgBFFppglTr95C83/5mUoyMhYe2nw94rTR6fBpddydbKYq6AVaD1xJ252zUWfPxZu+G42wPuDfijKiAgyY0KgRLQc38yJLxvfJXxoGqKVWV9OFkibiCwVXEWF46y4IEQ9Va32QlFGRJA7xnvu45S5L+6SnunAHSkEgtxW+GMDr4amG6b5BBRmdDiopBgezvTBRCs5UBtcrm/RgqXnoDDWd+HKKqrHnVgMwjbOeuUsxhkojrVLiFyzxO2JfQ6JOA/NeJQqat+BRbB2CQkE4ouh0W7oecusJIbE2iUkHBnqaDd3Fjbww99OWBDrV1mDaYRBD1BZXTssisV7Wf3dZjlgdyOq6n4r55bAwlhbEAfbLCPhHjj1VbRoRT0URzSfXAmK/Jg3VyL2Kg43d9kPQhM7qKQyaoW2dqPucso19+5XXQzR1DhFtDT+hRu9/by7hsMXEEv7Qm7vvgOhvSnOHv2VPNfaJYRwkEqXH4SiiL17naicvZ5LwVZIEeJZJgJBgtf3pDhR325xQbRhmfBziWg/UcZW5u0sRk38k0TMANrnGgiFfmRxQURKcwFzCbuNb0F+8HcsxmMJT5Q9xCuewV13whKr27JmQBHkJFW0HP8JKLiZdycnPFkaQb2+WAkZTLfFn0NoMRRAtB0vRWvjVm4j7kl4orRCSyGCwTg3wn5r97IIq6N19QghWk9NFU0Nf+aEPso/JrEYsp3odScSo4tNPRusbu0lrqv/JtqPzUOOkFWTaDpZLpobX4EItUDT5NLY8deOlYMrpBCyZMSzuxEdhpFXRuXV5zNSZYVDfrSefR+ugkLMKClDRh1PybkdYRyKeiDD9Pdsjb/ih7piaOF70NL4KItQi2TPcDLxvf6YICKB8UDX9kB3/ZIWLYlOyc6IIG3nPkDzmdiz2YTCKZhUdBtyClERx/oFGOYz/ABWz0n1HkLhf6H50gd0770BpIE4+94E5DnLEXEs5ifpNRCRr0LQxJi1JkECi752IokQAp+wRXojla94deDhjAji81x7IaznSmfuBemH5FLVd8PkoHPU5ky7wCWnjWN/hhOnjYXr5JzbCYdxCYGQJ1rRCH0C/ynkBCri/0/irnQJJ/xd/J9ivs90ORExJRe/HA/gC8ZcAiLZBeIUnHicSlcevf4/o32O4XSOPAcs669G5erXcliQoQ9I6AHDisQwq1vpsYz68lMoiAIeaPoOqqyN69cfc5M+M4JsH2Tb4A/GBEkFonq4tB/SgtqEbuSMCOJwXluwZ+DC9aMOKUIwHOu6ihSt/AIXodNT7DB7PpXTMyLIzLnV3I50YXxhMYqmzUp+gYyQ9IU7uRI3DNnTgJLIRJfju4YrQowIdP33/PD6LFXUXEj1oowI4nSNQ3n191K/QEZM5rbQ1ZEisl6X4uh6rG7XdeQccfV3yVcahcIxIWRbMzwRJN3cTuzmlN1Gi2qHvUKEGm2IrJMHNoqyxOj6tSAFk4FSHNOb9PuiqR+r/6Vxr+/TvKlVBbmrSa9wD24HlX4t7bFfWRdk6HEISVJV5szoAOkBY62iYgwI8u3y/SL1CdXfVbrWg5KJHA0iltsHhkwg2OKsa6/x922lyrpLuEmyKkiAS70vPFTE00iMTCbizUIU5ucOdr0aOyGCb1PF13uQIYwOd3YiKXUIhuPcmzT5D2vN3qLoQIpzLMYb0BzPUfnyT5EFDG8o97nu4OUpO9YWt+zhyMlB149wRL8IJZGP39oxFuOvMnCV1IwsMyKNekRoYapaeZg3ZdjAvuQ7OO6VXNevYXPFnRz5ORAi9yWIomsFN/DG+9zoHOa24QCV1XUjh4xUL2tQd+Zqr0SGPXJfNB2ZCLe3CkJbySKV8hnF0Wlsiczcw4VIvsSwgUU4H/304130+JrSNUZmCkMuqZbr3KhBS2g+oNlL5Jsc374a+hENDUUw/FO5mzqHi9lktsKyq5Qc/Ps1rvZc0OXavOTkbfn2SDa5kpevCnFvjHs/Yd52fArNbIUr4qZ53+iEgsjHsNe5Z/ogcoFAiB8xDuSHAm8gDaiyUnYrZfgQo5RoyVj/su925AA9AvHHx/NTf4uwjY2NjY2NTcp8Dl6i1cfc4zQeAAAAAElFTkSuQmCC";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA0RSURBVHgB7Z17cFTVHce/v3N3s9lAEvKCClpR0SoqqEgiaiC+UNQWrVoHO7W2o/Y1tXW0tdY6ra3Vf3w/pp1apra0FrVWi1Wg5RFCISTh5YOAPEWeAtkkJGST3b3n199Z6kydoTZ399zdG+JnJrubmd29557vef0e5ywh4HSdXVsVd+hYB86JHNKjHMZ4JpwAVseDUMisiwmIgggMjstDtyLq0czb5Xmbq7EWDu9yUrTNIWdHSfPCNgQYQgDhMdMiscr4NVLB48KgcS7jOBCfKMUthnfka3BQbnSbCLmTmNYQ63dKu/f/jVpbEwgYgRFk/9kXjIyEw9Wugy9LBU5hoAo+wsz7iGgxQb8Q5nDT0KaFHyIA5F2QbaPrCss+gws1424oVIsYZcgp1Ca9b4X0wkcqD+xspM2b+5BH8iaImRtSEecqaan3y/h/AvLdOKQgUoSNYP1zpzs6r7R1fgx5IC+V0H7+xcdr131E5uGpUoQSBIt2UWduyqW7hrfU70WOyakg3TWXjEjAvZ+IZzCoHAFGKuZDWcHNclTy4dLGxpz1lpwJImKMSyB1F5SSSZsdDAAIlGDomW4q9WTVymXvIQf4LgiPrRvaUaKvY6hn5N+hGIgwOuTxW/FU15xRq1b1wEcUfCZWzHeKGI9ioIphIAxj4icLQ8W3wWd86yH7J0w4xnGG3gtF38VRBDH/wuH4kyXNzb5Y/CH4hAoNfZCJZgTSFZAFck/fd1FUJC/vhg9Yr6/YhEtLOZS8T6zgH+AoRoHvKU12P0OW5xTrcwiFErfI6sT3sTbfpIC7OlTxl2AZaz1EzFy1r3rK9LCiv2KQIPNJQoS5oqppyWJYwloP6ZhYNy6k8CMMImQ+KVCgezrPqRsDS1jpIZtqakrKEV0orpBzMTiZV3awajq1vpy1Oz/rHmI8cpUUvXYQiyE1QJfuL/rwUlgga0E6J150sYhyPwYzzKFQiB5sn1h3FrIkazvEVfxNGfdORK5wHKiqcoTGnAAaEoUaViLPRaanisOsB7qzC9x9CKkt26H3i+3musgFsrI8Uyv+mrz8HrIgqzmkvaZ2OpPzGnyGpNLDnzsJoVPHIFw7Eaq4f14Y3dWNxNIWuBu2ILVhU1osv3EUV5cuX9KCDMlYkJ3Vl1QUOamnZakxAz4SHn8aCqZMQmj8WKihRcgE02OSa1vRt3g5Uu/667SVAP7j5Qd23Ztp5DFjQdpqJt8OUo+ST05DZ9RnELmsFpEr6sykCStInLhvXj36Fi6Fu9Of2JMEHvcQ0+3lzfV/RwZkPqmTusEvMVSlLKJvm4HI1Mn2xEh/MSFy+WREb52Rnod8gegYVpiODMnobmPn150BjXdgG6n8QukRkasvSYviJ/pADL2vL0Df/CWmWcMqYsGHOD4yE49wRj2ENE+FD4TGjEbki9N8F8OQ7oXXX5m+pnXEgncRqUUGeBYkfvbFx8vT52GZ8LjTUPTtm6FKchfHIlmtFX3nZoTk2rZhpWbsv+ACz4l9ngVJFKROl1s5HTYJOYhcczmckSOQa5xjRiAq1zZlsIlM7KdTInQqPOJZEBeq1mZWIRWEZei4CuHTT0G+CMm1o9dfnS6LNQinkOKz4RHPgsg6+xxYxDltDApqa5BvCmqrETrNmtPWeA7CDBoPj3gSZO+4qUPkA3WwSOHldTLB5jh79AiYMkSkLDYRd8qV8IgnQcKR5GgTA4AlSCzv0NiTERTCUhbK0BtwJEjRcbsmTPD0hZ4ECZEeB4sUXHIhKFqIwCBliVx8oT1jlNkZgiJPE7snQVxFn4UljIc27IcNkCXOyaNBRVHYQhzzx3l5f78F4bTjAZ6Xcf8L55jhUOKvChqmXM6IStiCWXsyEfotyO4JEwplhWVtgDUudRPLCBqqrBRUPgy2IIUKL+/vtyDRw8s4awt1VVVhdWiwhRlK7bpuqII9+Az7LUjIcUIEtieIWc2Q9Ty97JEyGVFsIaNKVEaXfre8fgsSp+KQYljzL9i8adsom4IwDRnpOPYFYcdhDVjzU7O27PK2CLsp2MKMAV2ua3/IivTsSyhF1rYR8yFft1lkBff0whbSiJMplCX7+/5+C5JMJFKuZmtNhzsOSkvUCBqsNfTBbthCESXiu9vtC1LV2npIJrxOWEIfaJe+fAiBQ8RgUzZbMLeP2tP/DPl+C0ImlZXZ2uZHHWuHG7N445bQbR3pslmD2FMY15PrxAFthyX03v3Q7+9E0Eht3yll2wdbMLOnOvMkiIZrrQY5mURy/SYEjZSUiZMWV1lEO7y835MghU54LSySXLEaWib3oGAWGqZMNkm5PWu8vN+bIB1798iTtTUhJ6SXNK05fKpFnjFlSDStTpfJIl1VLS2exj9PgvznOKMmWKR37mKkWvM/dJky9M6th1UYyyltivSfDPKyaB0sYib3vgX/Qr5JLFiaLotlPCcTZiAIL4fFYctkDSaXr0RikXytzoOh6Lro+2cDEstX2c1gZD6otW6ERzwLohVvFKNkCyyTHro2bUOuSb23Fb3zlsA6RFuU4s3wiHdBOmi9Zn4LlnE/2IXuR59LV1BOeopcI/XeZnQ/9hvonXtgG/GMN5dFnVZ4xLMgw1vru4kp4w0pnwR3HkR85mwkV78LvzHX6Jn5Etgn943LaKH6es8GTUYRInMaXDLiGIMnAj9QCtEbv4CCi86DKrUb5jWi99U3Ij77dd96ogSlusoLaaQI4tlLmXHIruO8uma5nYnwCSqMpJOgi756vbWQqt7XhvisV5B8ez2417+jFcXpt6CiccllyIDMN31qzJQLjyeLiXP/jamwZPNaHHxnA0JnnpreN+IcPwo0dIi37+k+BFf8U33zGw4LEbe3QDzyBfmQRAl/jwzJXBCilRJ+3iivzoCPmAo0wrhbd8AZPQoF1WfBOWk0nGM/OYXI3bEbqa0fHP7s9l2Hd+TmACasi0CvQoZkLMiaKL81Ls5zpYf4KshH6ANt6b/kyrfT/6uSYqgRlel0oo8h/ih3n3iSO+0FmbwgjfS14saG9ciQrNI+2qqnTCJFy/EphxGHWEjR2JLG+g3IkKxOcqhoXtIotu0CfMphCH/ORgxD1kdriE3yqogSx6CHY7LcnYMsyVqQAqhXiDEfgxypg9fAfXORJVkLYg6x16YwgxxZXf2loqkp62iblVxOk7saq5myQlZc1RiczC1fUe95t9SRsHKiXDojRTvPizD+n+4SMNJHkmv+HSxh7xBMrV4QXV7EIEMa4fPlsaKsJ/OPsJp+3nlubbXrqEaxjnw/MTsYcI/DfFZpU4O1GLTViitdubRZFDZnvOfm1LD80ifO4l/aFMNgvSW7Gn+USKjnwMwAZEVKu7NhGV92zByouWi6gn7VZInhaIQ5oUlNrlyx2GoGjsGXsb4iyvNFCqtJdUGCiRZVrFjsS9TUF0EkUtYrMYE7xJWwEUcdvBxO8m6v+Vb9xbfV0O6ufc0O03M4ynBYP12+bJlvc6SvY7yx4Nurp7wpV7n8KJhPXPGuz6xoWvIN+Iiv9oKx4BXhMT/yuHINgVeR4mfgMzlptZ01k690QWbV5Uv83X/4IKW4rmxlg6dM9kzIiUVd0tTwDxmw3ghEmrt3khLzmZULMQw5EYTM758o504Tb8YAg0g/iz78BDkipxPtgUm11YqdeqRP6gg+0p/3qj5MKltb/z5yRE6dgJWNS5tlzLrDhDsRdJi2gt1bcimGIfdeWY6/JI+/RcBRih/a091m7aeM+kvebINYTd1sufp18PGn+zKCcUiBnhrWtPjHyAN5i1u4bvKnMkgvQsCQ2Pjs3njfE8gTebWeO8dOKneLCxbJUsbzcarWYdbSPN8sa6RrCfX29kV7JK+RvdLWxhhrelgqw9Nebj9g0Opelx7IpxiGQPiXOmomTxVL/mVxd+XrzL/3NWFaZZZZhzYIROxbwqALiPFraR35yJDeJWGCh4IghiEQKxwTW+Aiuq+tR69TJC77nPm8OBZ2+abiloYGBITAZIeY/XjtsSEvylj+qri8cpEk0SmW+LNBEsMQqHSdkzfP7SuP4laJNt7HZtXjE+It6Nau/np50/AHEDAClz9lNkoqN2TmE5N8Zr2nmOxKYv5VRYuaQ3g5cOlKgY3itdXUyIorchuBHrI3p3As5OKW4pbhbwZRDEOgw6rm5zEi0b6nNNFNUtDsTu0n3iP97fGy5iWP+pWgYIPAx7k3jZkWqazouUlcGhI+pYwO1JVhaidcfWNFS0Pgt98FPgfXTPTDuob/yWzDNo4/eERi4dvksz8bCGIYBkwmCOMGp716/zQp8Sz5699p+Yx1jsI1pY31ng+ByRcDJkvdTMJlzfVviO3wpFT0gf/7Aea1KegfDiQxDAMyVyp2bt0ZFMITmnmS+L8+Nq+I/WLOyJ2nQ6lbqpYtG3AbiAZs8lpPTd2xPTIcOcxfkds4gc2RL4wtpPGHwpAzp6hx0S4MQP4NZU7l1bUXxWUAAAAASUVORK5CYII=";
const meta$4 = void 0;
const _sfc_main$I = vue_cjs_prod.defineComponent({
  props: {
    image: String,
    image_alt: String,
    title: String,
    text: String
  }
});
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex flex-col items-start bg-white shadow-md rounded-3xl w-80" }, _attrs))}>`);
  if (_ctx.image) {
    _push(`<img class="rounded-3xl"${serverRenderer.exports.ssrRenderAttr("src", `./assets/img/${_ctx.image}`)}${serverRenderer.exports.ssrRenderAttr("alt", _ctx.image_alt)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="p-4 w-full">`);
  if (_ctx.title) {
    _push(`<h4 class="pb-2 text-xl text-dark">${serverRenderer.exports.ssrInterpolate(_ctx.title)}</h4>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.text) {
    _push(`<p class="text-sm text-darkLight">${serverRenderer.exports.ssrInterpolate(_ctx.text)}</p>`);
  } else {
    _push(`<!---->`);
  }
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const __nuxt_component_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$H = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path></svg>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/LeftChevronIcon.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const ChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$G = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    width: "24",
    height: "24",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/RightChevronIcon.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$F = vue_cjs_prod.defineComponent({
  components: {
    Card: __nuxt_component_1$4,
    ChevronLeft,
    ChevronRight
  },
  props: {
    cards: Array
  },
  setup() {
    const onClickLeft = () => {
      this.$refs.carrousel.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    };
    const onClickRight = () => {
      this.$refs.carrousel.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    };
    return {
      onClickLeft,
      onClickRight
    };
  }
});
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ChevronLeft = vue_cjs_prod.resolveComponent("ChevronLeft");
  const _component_Card = __nuxt_component_1$4;
  const _component_ChevronRight = vue_cjs_prod.resolveComponent("ChevronRight");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex items-center justify-between" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ChevronLeft, { class: "w-full h-full mr-5 cursor-pointer fill-current sm:w-1/4 sm:h-1/4 lg:w-20 lg:h-20 hidden sm:block" }, null, _parent));
  _push(`<div class="flex items-center justify-between overflow-y-auto scrollbar"><div class="flex flex-row justify-between flex-1 py-5"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.cards, (card) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Card, {
      key: card.title,
      image: card.image,
      title: card.title,
      text: card.text,
      class: "mr-5"
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_ChevronRight, { class: "w-full h-full ml-5 cursor-pointer fill-current sm:w-1/4 sm:h-1/4 h-1/12 lg:w-20 lg:h-20 hidden sm:block" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardCarrousel.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __nuxt_component_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$E = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M72.9688 51.7188H7.03125C3.14797 51.7188 0 54.8667 0 58.75C0 65.2219 5.24656 70.4688 11.7188 70.4688H68.2812C74.7534 70.4688 80 65.2219 80 58.75C80 54.8667 76.852 51.7188 72.9688 51.7188Z"></path><path d="M49.375 9.53125H45.658L51.7187 15.592L56.8239 10.4869C54.4359 9.88547 51.9497 9.53125 49.375 9.53125Z"></path><path d="M39.9999 10.5023L31.5955 18.9067L39.9999 27.3112L48.4043 18.9067L39.9999 10.5023Z"></path><path d="M30.625 9.53125C28.0503 9.53125 25.5641 9.88547 23.1761 10.4869L28.2812 15.592L34.342 9.53125H30.625Z"></path><path d="M61.7603 12.179L55.033 18.9063L60.4072 24.2805C61.3227 25.196 61.3227 26.6793 60.4072 27.5947C59.4917 28.5102 58.0084 28.5102 57.093 27.5947L51.7188 22.2205L43.3142 30.625L47.0267 34.3375C47.9422 35.253 47.9422 36.7363 47.0267 37.6518C46.1113 38.5672 44.628 38.5672 43.7125 37.6518L40 33.9393L36.2875 37.6518C35.372 38.5672 33.8888 38.5672 32.9733 37.6518C32.0578 36.7363 32.0578 35.253 32.9733 34.3375L36.6858 30.625L28.2812 22.2205L22.907 27.5947C21.9916 28.5102 20.5083 28.5102 19.5928 27.5947C18.6773 26.6793 18.6773 25.196 19.5928 24.2805L24.967 18.9063L18.2397 12.179C7.59031 16.9275 0 27.5869 0 40C0 43.8833 3.14797 47.0313 7.03125 47.0313H72.9688C76.852 47.0313 80 43.8833 80 40C80 27.5869 72.4097 16.9275 61.7603 12.179Z"></path></svg>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/BunIcon.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const Bun = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$v]]);
const _sfc_main$D = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M79.9913 41.5231V37.6279C79.9538 37.69 79.9162 37.7504 79.8786 37.8125C79.1913 38.9275 78.4143 39.9559 77.5426 40.8995C76.7671 41.7403 75.9182 42.514 74.9926 43.2209C71.1088 46.1887 65.8963 47.9862 59.239 48.6718C53.9594 49.2154 51.1712 49.7395 47.5666 51.5776C46.2051 52.2731 44.8713 53.0387 43.4593 53.8517C39.9543 55.8662 36.3302 57.9492 31.8505 59.1687C29.0426 59.9328 26.2608 60.3212 23.5852 60.3212C19.9822 60.3212 16.5508 59.6257 13.3854 58.2561C10.8191 57.1459 8.4699 55.6114 6.3885 53.6882C6.0799 53.4026 5.77787 53.1103 5.4824 52.8084C4.47678 51.7848 3.556 50.6779 2.72678 49.5059C2.72678 49.5059 2.72678 49.5043 2.72522 49.5043C1.67881 48.027 0.775999 46.445 0.0331865 44.7815C-0.368376 52.2943 2.86397 60.0895 8.54178 65.0409C12.7324 68.6961 17.9238 70.5718 23.6097 70.5718C26.0633 70.5718 28.6101 70.2225 31.2074 69.5156C35.3833 68.3793 38.8687 66.3747 42.2399 64.4386C43.6782 63.6109 45.038 62.8289 46.4551 62.1073C50.7272 59.9264 54.1915 59.4398 58.9877 58.9468C68.2032 57.9984 74.3544 54.8215 77.7926 49.2384C79.348 46.7128 80.0876 44.1171 79.9913 41.5231Z"></path><path d="M34.7206 9.42822C34.4333 9.42822 34.1492 9.42979 33.8619 9.4315C32.4236 9.44463 30.9822 9.50994 29.5487 9.63072C29.0867 10.4307 28.5791 11.3024 28.0337 12.2362C22.9356 20.9651 14.5217 35.0145 8.53046 44.9824V44.984C8.05546 45.7724 7.59671 46.5349 7.15593 47.2662C7.17062 47.2874 7.18687 47.307 7.20328 47.3282C7.20812 47.3331 7.21312 47.3396 7.21796 47.3445C7.25875 47.3984 7.30125 47.4538 7.34203 47.5078C7.38453 47.5632 7.42859 47.6171 7.47093 47.671C7.50515 47.7151 7.53953 47.7592 7.57546 47.8017C7.64734 47.8915 7.71906 47.9779 7.79265 48.0662C7.82531 48.107 7.85953 48.1478 7.89546 48.187C7.98687 48.2979 8.08328 48.409 8.18109 48.5184C8.18437 48.5232 8.18765 48.5265 8.19093 48.5315C8.20234 48.5462 8.21546 48.5609 8.22843 48.574C8.23 48.5756 8.23171 48.5773 8.23328 48.5788C8.31656 48.6735 8.4014 48.7667 8.48796 48.8596C8.48953 48.8612 8.49125 48.8645 8.49281 48.8662C8.50093 48.876 8.50906 48.8842 8.5189 48.894C8.55156 48.9315 8.58578 48.9674 8.62015 49.0049C8.625 49.0098 8.63 49.0131 8.63328 49.0181C8.74593 49.1388 8.86015 49.2581 8.97609 49.3773C9.08718 49.4899 9.19968 49.6026 9.31406 49.7135C9.33859 49.7381 9.36468 49.7624 9.39078 49.787C9.48062 49.8735 9.57031 49.9584 9.66171 50.0432C9.72046 50.0971 9.77765 50.151 9.8364 50.2048C9.95562 50.3126 10.0747 50.4187 10.1956 50.5231C10.3377 50.6456 10.4797 50.7663 10.625 50.8854C10.6984 50.9459 10.7703 51.0046 10.8437 51.0617C11.0641 51.2379 11.2878 51.4093 11.5164 51.5759C11.5572 51.6053 11.5964 51.6346 11.6372 51.664C11.6731 51.6901 11.7091 51.7146 11.7466 51.7407C11.9 51.8501 12.0552 51.9579 12.2134 52.0623C12.2919 52.1145 12.3702 52.1668 12.4502 52.219C12.4697 52.2321 12.4894 52.2435 12.5106 52.2582C12.6478 52.3463 12.7848 52.4329 12.9236 52.5162C13.0069 52.5668 13.0917 52.6174 13.1783 52.6681C13.2598 52.7154 13.3431 52.7643 13.4264 52.8117C13.5912 52.9048 13.7594 52.9978 13.9292 53.0876C14.2884 52.4967 14.7161 51.7913 15.2042 50.9915C20.2878 42.6331 31.7806 23.7059 38.7497 11.9682C39.2427 11.1388 39.7128 10.3438 40.1553 9.59291C38.34 9.48213 36.5245 9.42822 34.7206 9.42822Z"></path><path d="M4.4525 23.711C4.00687 24.7999 3.54969 25.8529 3.20203 26.976C2.85437 28.0975 2.61922 29.2875 2.61922 30.6507V35.8796V36.0297C2.63547 36.1652 2.65344 36.3007 2.67312 36.4363C2.68453 36.513 2.69594 36.5897 2.70734 36.6664C2.71875 36.748 2.73187 36.8297 2.74484 36.9097C2.7514 36.9439 2.75625 36.9783 2.76109 37.011C2.78234 37.1335 2.80359 37.2558 2.8264 37.3766C2.82969 37.4011 2.83453 37.4255 2.83953 37.45C2.85906 37.5513 2.87875 37.6541 2.89828 37.7554C2.91297 37.8239 2.92609 37.8925 2.94078 37.961C2.95547 38.0278 2.97015 38.0964 2.98484 38.1635C2.9864 38.1733 2.98812 38.1814 2.9914 38.1913C3.00765 38.268 3.02562 38.3447 3.04359 38.4199C3.07781 38.5668 3.11219 38.7138 3.14969 38.8607C3.16437 38.9211 3.18062 38.9814 3.19703 39.0419C3.22156 39.1414 3.24922 39.2411 3.27547 39.3407C3.295 39.4108 3.31469 39.4811 3.33594 39.5513C3.37187 39.6802 3.40937 39.8093 3.44859 39.9399C3.45187 39.948 3.45344 39.9561 3.45672 39.966C3.50734 40.1325 3.55953 40.3007 3.615 40.4672C3.6575 40.5979 3.70156 40.73 3.74719 40.8607C3.79297 40.9913 3.84031 41.1219 3.8875 41.2525C3.8875 41.2558 3.88906 41.2591 3.89078 41.2624C3.89406 41.2705 3.89734 41.2786 3.90062 41.2869C3.93156 41.3735 3.96422 41.4583 3.99687 41.5432C4.00172 41.5563 4.00672 41.571 4.01156 41.5839C4.02953 41.6313 4.0475 41.6786 4.06703 41.7243C4.09969 41.8075 4.13062 41.8908 4.165 41.9724C4.16828 41.9822 4.17312 41.9919 4.1764 42.0018C4.18625 42.0263 4.19594 42.0524 4.2075 42.0769C4.23203 42.1357 4.25484 42.1929 4.27937 42.2499C4.30219 42.3071 4.32672 42.3658 4.35281 42.4246C4.87031 41.5643 5.40578 40.6728 5.95422 39.7586C10.9302 31.4736 17.0764 21.2021 21.6508 13.4379C22.2516 12.4191 22.8245 11.443 23.3648 10.5205C14.8319 12.308 7.43515 16.4154 4.4525 23.711Z"></path><path d="M54.5377 11.7675C53.9548 11.6222 53.3688 11.4819 52.7795 11.3496C52.2294 11.2255 51.6759 11.108 51.1209 10.9969C49.9814 10.7683 48.8338 10.5675 47.6813 10.3896C47.3809 10.3438 47.0805 10.2997 46.7802 10.2574C46.3688 10.2002 45.9573 10.1447 45.5444 10.0925H45.5428C45.1248 10.8075 44.6711 11.5782 44.1878 12.396C37.6236 23.5085 25.6034 43.3155 19.9419 52.6289C19.4375 53.455 18.9853 54.1994 18.5917 54.8475C18.6978 54.8721 18.8039 54.8982 18.9117 54.921C19.1206 54.9683 19.3313 55.0108 19.5434 55.0516C19.6577 55.0728 19.772 55.0941 19.888 55.1136C19.9548 55.125 20.0219 55.1364 20.0887 55.1463C20.19 55.1642 20.2928 55.1789 20.3941 55.1936C20.4756 55.2067 20.5573 55.2182 20.6389 55.2278C20.6977 55.236 20.7548 55.2441 20.8119 55.2507C20.9228 55.2653 21.0339 55.2785 21.1448 55.2899C21.1987 55.2964 21.2542 55.303 21.3097 55.3078C21.4289 55.321 21.548 55.3324 21.6672 55.3421C21.7652 55.3502 21.8631 55.3583 21.9611 55.3649C22.0852 55.3747 22.2092 55.3828 22.3333 55.3894C22.4084 55.3927 22.4819 55.3975 22.5569 55.4008C22.6794 55.4057 22.8034 55.4107 22.9291 55.4139C23.0042 55.4172 23.0792 55.4188 23.1559 55.4188C23.298 55.4221 23.4416 55.4236 23.5853 55.4236C23.7339 55.4236 23.8825 55.4221 24.0327 55.4188H24.0784C24.1306 55.4172 24.183 55.4155 24.2367 55.4139C24.2481 55.4139 24.2613 55.4124 24.2742 55.4124C24.3558 55.4108 24.4375 55.4091 24.5208 55.4042C24.5795 55.4027 24.64 55.401 24.7003 55.3961C24.7884 55.3928 24.8783 55.3896 24.968 55.383C25.0611 55.3782 25.1558 55.3716 25.2487 55.365C25.3892 55.3552 25.5313 55.3438 25.6731 55.3324C25.9572 55.3078 26.2428 55.2769 26.5319 55.2425C26.6658 55.2263 26.8013 55.2083 26.9367 55.1886C26.9661 55.1853 26.9939 55.1805 27.0233 55.1772C27.0494 55.1739 27.0739 55.1707 27.1 55.1658C27.2127 55.1496 27.3253 55.1332 27.4395 55.1152C27.5538 55.0972 27.6681 55.0777 27.7841 55.058C27.8787 55.0417 27.9734 55.0253 28.0697 55.0074C28.2459 54.9764 28.4223 54.9438 28.6003 54.9078C28.7163 54.8833 28.8322 54.8605 28.9497 54.8344C28.9791 54.8278 29.0069 54.823 29.0345 54.8164C29.0459 54.8149 29.0558 54.8116 29.0672 54.8099C29.0753 54.8083 29.0834 54.8066 29.0917 54.805V54.8035L29.2142 54.6141C29.6061 53.9741 30.197 53.0061 30.948 51.7752C35.6219 44.1172 46.478 26.2969 53.7638 14.1038C54.2144 13.348 54.6519 12.6149 55.073 11.9064C54.8952 11.8589 54.7172 11.8133 54.5377 11.7675Z"></path><path d="M67.7805 16.8087C67.4638 16.6373 67.147 16.4707 66.8255 16.3059C66.5055 16.1426 66.1823 15.981 65.8573 15.8243C65.5325 15.666 65.2059 15.5124 64.8763 15.3607C63.2666 14.6227 61.6047 13.9584 59.902 13.3674C59.4906 14.0596 59.063 14.7795 58.6189 15.5223C52.8953 25.1198 44.6447 38.7054 39.0337 47.9209C38.1048 49.4473 37.2478 50.8529 36.487 52.1001C36.7042 51.9907 36.9197 51.8798 37.1352 51.7671C37.2772 51.692 37.4192 51.6185 37.5595 51.5435C37.5694 51.5387 37.5808 51.5321 37.5906 51.5273C37.7392 51.4473 37.8878 51.369 38.0347 51.2873C38.1833 51.2073 38.3319 51.1273 38.4788 51.0457C38.7727 50.8824 39.0664 50.7192 39.3586 50.5543C39.5138 50.4662 39.6687 50.3781 39.8239 50.2898C40.4703 49.9209 41.1136 49.5502 41.76 49.1796C42.0213 49.031 42.2841 48.8809 42.5469 48.7323C42.8766 48.5462 43.2064 48.3601 43.5378 48.1773C43.6586 48.1104 43.7794 48.0434 43.9019 47.9765C43.9541 47.9487 44.0064 47.9193 44.0586 47.8916C44.1842 47.8248 44.31 47.7562 44.4356 47.6891C44.7359 47.5291 45.038 47.3709 45.3417 47.2157C45.5344 47.1177 45.7253 47.0231 45.9147 46.9317C46.0388 46.8712 46.1612 46.8124 46.282 46.7554C46.437 46.682 46.5922 46.6118 46.7456 46.5432C46.8892 46.4779 47.033 46.4143 47.1766 46.3538C47.2844 46.3065 47.3905 46.2624 47.4981 46.2184C47.583 46.1824 47.6663 46.1482 47.7511 46.1156C47.7609 46.1107 47.7691 46.1074 47.7789 46.1041C47.9389 46.0404 48.0972 45.9768 48.2556 45.9181C48.3731 45.8723 48.4908 45.8282 48.6083 45.7859C48.7422 45.737 48.8744 45.6896 49.0066 45.6438C49.1534 45.5932 49.302 45.5443 49.4489 45.4952C49.6138 45.4413 49.7803 45.3891 49.9469 45.3385C50.0122 45.319 50.0775 45.2993 50.1411 45.2798C50.2064 45.2602 50.2717 45.2406 50.337 45.2226C50.4398 45.1915 50.5427 45.1621 50.6456 45.1345C50.7502 45.1051 50.853 45.0773 50.9575 45.0512C50.977 45.0446 50.9967 45.0398 51.0147 45.0365C51.0425 45.0299 51.0686 45.0218 51.0963 45.0152C51.1909 44.9891 51.2872 44.9646 51.3836 44.9418C51.5028 44.9124 51.6236 44.8831 51.7444 44.8552C51.7509 44.8537 51.7558 44.852 51.7623 44.8504C51.7786 44.8471 51.7966 44.8423 51.813 44.839L52.0889 44.3737C52.5248 43.6488 53.0031 42.8523 53.5173 41.9984C57.1219 36.0006 62.452 27.1165 67.1259 19.2413C67.5488 18.5296 67.965 17.826 68.3748 17.1354C68.1772 17.0242 67.9797 16.9163 67.7805 16.8087Z"></path><path d="M72.4445 19.873C72.0283 20.5751 71.6055 21.2884 71.1777 22.0099C67.3347 28.4812 63.0723 35.5988 59.6962 41.2244C59.1412 42.1485 58.6091 43.0332 58.1078 43.8674C58.3152 43.8446 58.5258 43.8216 58.738 43.8005C65.8786 43.0658 72.2322 40.8882 75.7078 35.2446C76.8947 33.3182 77.4692 31.4457 77.5428 29.6549V29.6043V28.8615C77.4008 25.4529 75.4434 22.3773 72.4445 19.873Z"></path><path d="M36.1361 52.2749C36.2536 52.2177 36.3711 52.1607 36.487 52.1019V52.1003C36.3711 52.1589 36.2536 52.2177 36.1361 52.2749Z"></path></svg>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/SteakIcon.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const Steak = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$u]]);
const _sfc_main$C = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "80",
    height: "80",
    viewBox: "0 0 80 80",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M50.4757 28.341C56.1194 29.1036 61.3464 29.8894 65.9524 31.1796C66.4777 29.5777 66.838 27.9394 67.0163 26.2924C68.9289 8.61974 49.0481 -0.992294 33.4467 8.69411C30.5411 10.4977 28.2386 12.6732 26.4075 15.3446C24.8905 17.5579 22.6274 19.2147 20.0352 20.0097C11.2864 22.6936 3.91393 29.0491 1.10846 37.6349C-2.83325 49.6979 4.10237 60.8532 16.1086 63.0641C14.9713 60.2993 14.3813 57.2741 14.3813 54.059C14.3814 37.546 30.0939 25.5865 50.4757 28.341ZM54.065 23.5902C55.3592 23.5902 56.4086 24.6396 56.4086 25.934C56.4086 27.2283 55.3594 28.2777 54.065 28.2777C52.7707 28.2777 51.7214 27.2283 51.7214 25.934C51.7214 24.6396 52.7707 23.5902 54.065 23.5902ZM42.3474 14.2152C43.6416 14.2152 44.691 15.2646 44.691 16.559C44.691 17.8533 43.6417 18.9027 42.3474 18.9027C41.053 18.9027 40.0038 17.8533 40.0038 16.559C40.0038 15.2646 41.0532 14.2152 42.3474 14.2152ZM35.3169 23.5902C36.6111 23.5902 37.6605 24.6396 37.6605 25.934C37.6605 27.2283 36.6113 28.2777 35.3169 28.2777C34.0227 28.2777 32.9733 27.2283 32.9733 25.934C32.9733 24.6396 34.0225 23.5902 35.3169 23.5902ZM21.2558 30.6215C22.55 30.6215 23.5994 31.6708 23.5994 32.9652C23.5994 34.2596 22.5502 35.309 21.2558 35.309C19.9616 35.309 18.9124 34.2596 18.9124 32.9652C18.9124 31.6708 19.9614 30.6215 21.2558 30.6215ZM11.8816 47.0277C10.5874 47.0277 9.53799 45.9783 9.53799 44.684C9.53799 43.3896 10.5872 42.3402 11.8816 42.3402C13.1758 42.3402 14.2252 43.3896 14.2252 44.684C14.2252 45.9783 13.176 47.0277 11.8816 47.0277Z"></path><path d="M49.8481 32.9861C32.8436 30.6881 19.0686 39.9971 19.0686 54.0588C19.0686 60.9658 22.3081 66.5741 28.437 70.2774C33.7154 73.4667 41.0108 75.1525 49.5344 75.1525C58.1014 75.1525 65.3939 73.4975 70.6234 70.3666C76.7576 66.6939 80 61.0549 80 54.0588C80 37.5433 66.2456 35.2022 49.8481 32.9861ZM32.9734 56.4027C31.6792 56.4027 30.6298 55.3533 30.6298 54.0589C30.6298 52.7646 31.679 51.7152 32.9734 51.7152C34.2676 51.7152 35.317 52.7646 35.317 54.0589C35.317 55.3533 34.2678 56.4027 32.9734 56.4027ZM40.004 44.6839C40.004 43.3896 41.0533 42.3402 42.3476 42.3402C43.642 42.3402 44.6912 43.3896 44.6912 44.6839C44.6912 45.9783 43.642 47.0277 42.3476 47.0277C41.0533 47.0277 40.004 45.9783 40.004 44.6839ZM44.6911 63.4339C43.3969 63.4339 42.3475 62.3846 42.3475 61.0902C42.3475 59.7958 43.3967 58.7464 44.6911 58.7464C45.9854 58.7464 47.0347 59.7958 47.0347 61.0902C47.0347 62.3846 45.9853 63.4339 44.6911 63.4339ZM51.7215 54.0589C50.4273 54.0589 49.3779 53.0096 49.3779 51.7152C49.3779 50.4208 50.4272 49.3714 51.7215 49.3714C53.0159 49.3714 54.0651 50.4208 54.0651 51.7152C54.0651 53.0096 53.0159 54.0589 51.7215 54.0589ZM61.0956 63.4339C59.8014 63.4339 58.752 62.3846 58.752 61.0902C58.752 59.7958 59.8012 58.7464 61.0956 58.7464C62.3898 58.7464 63.4392 59.7958 63.4392 61.0902C63.4392 62.3846 62.39 63.4339 61.0956 63.4339ZM65.7826 51.7152C64.4884 51.7152 63.4392 50.6658 63.4392 49.3714C63.4392 48.0771 64.4884 47.0277 65.7826 47.0277C67.0769 47.0277 68.1262 48.0771 68.1262 49.3714C68.1262 50.6658 67.077 51.7152 65.7826 51.7152Z"></path></svg>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/PotatoesIcon.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const Potatoes = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$B = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><circle cx="10" cy="10" r="10"></circle></svg>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/BulletIcon.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const Bullet = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$s]]);
const _imports_0$1 = buildAssetsURL("burger.fd3c3306.png");
const _imports_1 = buildAssetsURL("burger-board.16446b79.png");
const _sfc_main$A = vue_cjs_prod.defineComponent({
  name: "La Cabane \xE0 Burger",
  components: {
    Button,
    Subtitle: __nuxt_component_0$3,
    CardCarrousel: __nuxt_component_1$3,
    Bun,
    Steak,
    Potatoes,
    Bullet
  },
  setup() {
    const burgers = [
      {
        title: "Le Montagnard",
        image: "montagnard.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      },
      {
        title: "Le Savoyard",
        image: "savoyard.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      },
      {
        title: "Le Gaulois",
        image: "gaulois.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      }
    ];
    return { burgers };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const meta$3 = void 0;
const _sfc_main$z = vue_cjs_prod.defineComponent({
  components: {
    SearchIcon: SearchIcon$1,
    LocationMarkerIcon
  },
  emits: ["geolocate", "stop"],
  setup({}, { emit }) {
    const config = useRuntimeConfig();
    let geolocationStatus = vue_cjs_prod.ref(false);
    let watchID = 0;
    let results = vue_cjs_prod.ref([]);
    let address = vue_cjs_prod.ref("");
    const onSubmit = async (e) => {
      e.preventDefault();
      if (address.value.length >= 3) {
        const { data } = await useFetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address.value}.json?access_token=${config.mapboxToken}`, { parseResponse: JSON.parse });
        results.value = data.value.features;
      } else {
        emit("stop");
        results.value = [];
      }
    };
    const onChooseAddress = (e) => {
      const { geometry } = e;
      const { coordinates } = geometry;
      emit("geolocate", {
        lat: coordinates[1],
        lng: coordinates[0]
      });
      results.value = [];
      address.value = "";
    };
    const onGeolocate = () => {
      console.log(geolocationStatus.value);
      if (!geolocationStatus.value) {
        geolocationStatus.value = true;
        if ("geolocation" in navigator) {
          watchID = navigator.geolocation.watchPosition((position) => {
            const { latitude: lat, longitude: lng } = position.coords;
            emit("geolocate", { lat, lng });
          });
        } else {
          alert("geolocation is not supported by your browser");
        }
      } else {
        navigator.geolocation.clearWatch(watchID);
        geolocationStatus.value = false;
        emit("stop");
      }
      console.log(geolocationStatus.value);
    };
    return {
      onGeolocate,
      onSubmit,
      onChooseAddress,
      address,
      results,
      geolocationStatus
    };
  }
});
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchIcon = vue_cjs_prod.resolveComponent("SearchIcon");
  const _component_LocationMarkerIcon = vue_cjs_prod.resolveComponent("LocationMarkerIcon");
  _push(`<!--[--><div class="flex p-1 my-4 border border-gray-500 rounded-md bg-gray-50">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_SearchIcon, { class: "w-10 h-10 text-slate-600" }, null, _parent));
  _push(`<input${serverRenderer.exports.ssrRenderAttr("value", _ctx.address)} class="w-full h-auto ml-2 text-lg bg-gray-50 focus:outline-none" type="text" name="address" id="address" placeholder="Saisir une adresse">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_LocationMarkerIcon, {
    class: ["w-10 h-10 cursor-pointer hover:text-blue-600 text-slate-600", _ctx.geolocationStatus ? "text-blue-600" : "text-slate-600"]
  }, null, _parent));
  _push(`</div><ul class="${serverRenderer.exports.ssrRenderClass([_ctx.results.length === 0 ? "hidden" : "", "absolute z-10 bg-white border border-b border-gray-500 rounded left-10 right-10"])}"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.results, (result) => {
    _push(`<li class="border-b border-gray-500 cursor-pointer hover:bg-blue-500 hover:text-white last:border-b-0">${serverRenderer.exports.ssrInterpolate(result.place_name)}</li>`);
  });
  _push(`<!--]--></ul><!--]-->`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GeoSearch.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$r]]);
const _sfc_main$y = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M7.99996 0C4.95997 0 2.49634 2.46432 2.49634 5.5043C2.49634 7.82162 5.69535 13.1614 7.21537 15.568C7.38571 15.8371 7.68233 16 8.00051 16C8.31882 15.9993 8.61482 15.8365 8.78464 15.5675C10.3052 13.1603 13.5037 7.82159 13.5037 5.50427C13.5036 2.46432 11.04 0 7.99996 0ZM7.99996 8.86467C6.28074 8.86467 4.88699 7.47112 4.88699 5.75167C4.88699 4.03242 6.28071 2.63871 7.99996 2.63871C9.71921 2.63871 11.1129 4.03239 11.1129 5.75167C11.1129 7.47112 9.71924 8.86467 7.99996 8.86467Z"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/PointIcon.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const PointIcon = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$x = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M14.7368 10.5347C13.7499 10.5347 12.7832 10.3806 11.8669 10.0783C11.4198 9.92421 10.912 10.0429 10.6181 10.3427L8.80169 11.7145C6.71748 10.6021 5.38358 9.26906 4.28633 7.20001L5.62106 5.42653C5.95706 5.09053 6.07749 4.59873 5.93349 4.13811C5.62864 3.216 5.4737 2.24842 5.4737 1.26316C5.4737 0.566724 4.90698 0 4.21054 0H1.26316C0.566724 0 0 0.566724 0 1.26316C0 9.38863 6.61137 16 14.7368 16C15.4333 16 16 15.4333 16 14.7368V11.7979C16 11.1015 15.4333 10.5347 14.7368 10.5347Z"></path></svg>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/PhoneIcon.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const PhoneIcon = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$p]]);
const _imports_0 = buildAssetsURL("cab-logo-variant.e0011ce7.png");
const _sfc_main$w = vue_cjs_prod.defineComponent({
  components: {
    PointIcon,
    PhoneIcon,
    Button
  },
  props: {
    location: Object,
    isSelected: Boolean
  }
});
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PointIcon = vue_cjs_prod.resolveComponent("PointIcon");
  const _component_PhoneIcon = vue_cjs_prod.resolveComponent("PhoneIcon");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["flex flex-col justify-between p-3 mt-10 border border-white rounded-md cursor-pointer hover:border-gray-400", { "border-gray-400": _ctx.isSelected }]
  }, _attrs))}><div class="flex flex-row"><div class="flex-col flex-1"><div class="flex flex-row items-center mb-4"><img class="w-12 h-12"${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} alt="Petit logo de la Cabane \xE0 Burger"><h4 class="ml-2 font-semibold text-md font-text"> - ${serverRenderer.exports.ssrInterpolate(_ctx.location.city)}</h4></div><div class="flex flex-row items-center mb-4">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_PointIcon, null, null, _parent));
  _push(`<p class="ml-2 font-normal text-gray-600 font-text">${serverRenderer.exports.ssrInterpolate(_ctx.location.address)}</p></div><div class="flex flex-row items-center mb-4">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_PhoneIcon, null, null, _parent));
  _push(`<p class="ml-2 font-normal text-gray-600 font-text">${serverRenderer.exports.ssrInterpolate(_ctx.location.phone)}</p></div></div></div><div class="relative"><button class="font-semibold text-green-500">Ouvert</button></div></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LocationCard.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __nuxt_component_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$v = vue_cjs_prod.defineComponent({
  props: {
    locations: Array,
    position: Object,
    selected: String
  },
  setup(props, { emit }) {
    const { $L } = useNuxtApp();
    const config = useRuntimeConfig();
    let map;
    let markers = [];
    const container = vue_cjs_prod.ref(null);
    let user;
    const initializeMap = (center, zoom, locations) => {
      map = $L.map(container.value).setView(center, zoom);
      $L.tileLayer(`https://api.mapbox.com/styles/v1/marceaudavid/cl0jk6z9i004v14qbzpkz0knc/tiles/256/{z}/{x}/{y}@2x?access_token=${config.mapboxToken}`, {
        attribution: 'Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery \xA9 <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        detectRetina: true
      }).addTo(map);
      map.on("click", (e) => {
        emit("selected", { id: null });
      });
      let icon = $L.icon({
        iconUrl: "../assets/img/cab-logo-variant.png",
        iconSize: [40, 40],
        tooltipAnchor: [0, -20]
      });
      markers = locations.map((location2) => {
        let { latitude, longitude, city } = location2;
        let store = $L.marker([latitude, longitude], { icon, title: city }).addTo(map).on("click", () => {
          emit("selected", location2);
        });
        return store;
      });
    };
    const createTooltips = (stores) => {
      stores.map((store) => {
        return store.bindPopup(store.options.title || "", {
          offset: [0, -10],
          className: "text-base"
        });
      });
    };
    vue_cjs_prod.onMounted(() => {
      initializeMap([46.62, 2], 5.3, props.locations);
      createTooltips(markers);
    });
    vue_cjs_prod.watch(() => props.position, (position) => {
      if (position.lat != 0 || position.lng != 0) {
        if (user !== void 0) {
          map.removeLayer(user);
        }
        user = $L.marker([position.lat, position.lng]).addTo(map);
        map.flyTo([position.lat, position.lng], 8);
      } else {
        map.removeLayer(user);
      }
    });
    vue_cjs_prod.watch(() => props.selected, (selected) => {
      if (selected !== null && selected !== void 0 && selected !== "") {
        let location2 = props.locations.filter((location22) => location22.id === selected)[0];
        map.flyTo([location2.latitude, location2.longitude], 8);
        markers.filter((marker) => marker.options.title === location2.city)[0].openPopup();
      } else {
        map.closePopup();
        map.flyTo([46.62, 2], 5.3);
      }
    });
    return { container };
  }
});
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "w-full h-full",
    id: "map",
    ref: "container"
  }, _attrs))}></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Map.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$n]]);
var earthRadius = 63710088e-1;
var factors = {
  centimeters: earthRadius * 100,
  centimetres: earthRadius * 100,
  degrees: earthRadius / 111325,
  feet: earthRadius * 3.28084,
  inches: earthRadius * 39.37,
  kilometers: earthRadius / 1e3,
  kilometres: earthRadius / 1e3,
  meters: earthRadius,
  metres: earthRadius,
  miles: earthRadius / 1609.344,
  millimeters: earthRadius * 1e3,
  millimetres: earthRadius * 1e3,
  nauticalmiles: earthRadius / 1852,
  radians: 1,
  yards: earthRadius * 1.0936
};
function feature(geom, properties, options) {
  if (options === void 0) {
    options = {};
  }
  var feat = { type: "Feature" };
  if (options.id === 0 || options.id) {
    feat.id = options.id;
  }
  if (options.bbox) {
    feat.bbox = options.bbox;
  }
  feat.properties = properties || {};
  feat.geometry = geom;
  return feat;
}
function point(coordinates, properties, options) {
  if (options === void 0) {
    options = {};
  }
  if (!coordinates) {
    throw new Error("coordinates is required");
  }
  if (!Array.isArray(coordinates)) {
    throw new Error("coordinates must be an Array");
  }
  if (coordinates.length < 2) {
    throw new Error("coordinates must be at least 2 numbers long");
  }
  if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
    throw new Error("coordinates must contain numbers");
  }
  var geom = {
    type: "Point",
    coordinates
  };
  return feature(geom, properties, options);
}
function radiansToLength(radians, units) {
  if (units === void 0) {
    units = "kilometers";
  }
  var factor = factors[units];
  if (!factor) {
    throw new Error(units + " units is invalid");
  }
  return radians * factor;
}
function degreesToRadians(degrees) {
  var radians = degrees % 360;
  return radians * Math.PI / 180;
}
function isNumber(num) {
  return !isNaN(num) && num !== null && !Array.isArray(num);
}
function getCoord(coord) {
  if (!coord) {
    throw new Error("coord is required");
  }
  if (!Array.isArray(coord)) {
    if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
      return coord.geometry.coordinates;
    }
    if (coord.type === "Point") {
      return coord.coordinates;
    }
  }
  if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
    return coord;
  }
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function distance(from, to, options) {
  if (options === void 0) {
    options = {};
  }
  var coordinates1 = getCoord(from);
  var coordinates2 = getCoord(to);
  var dLat = degreesToRadians(coordinates2[1] - coordinates1[1]);
  var dLon = degreesToRadians(coordinates2[0] - coordinates1[0]);
  var lat1 = degreesToRadians(coordinates1[1]);
  var lat2 = degreesToRadians(coordinates2[1]);
  var a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(lat1) * Math.cos(lat2);
  return radiansToLength(2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)), options.units);
}
const _sfc_main$u = vue_cjs_prod.defineComponent({
  components: {
    Map: __nuxt_component_2,
    LocationCard: __nuxt_component_1$2,
    GeoSearch: __nuxt_component_0$1
  },
  setup() {
    const selected = vue_cjs_prod.ref("");
    let position = vue_cjs_prod.ref({ lat: 0, lng: 0 });
    vue_cjs_prod.onMounted(async () => {
    });
    const locations = [
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be2",
        city: "Dijon",
        address: "36-38 Rue de la Libert\xE9, 21000 Dijon",
        latitude: 47.32233,
        longitude: 5.03715,
        phone: "02 45 17 23 34",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" }
        ]
      },
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be1",
        city: "Pontch\xE2teaux",
        address: "2A rue Gutenberg ZI du Landas",
        latitude: 47.43081,
        longitude: -2.07996,
        phone: "02 51 75 39 32",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" }
        ]
      }
    ];
    const sortedLocations = vue_cjs_prod.computed(() => {
      if (position.value.lat !== 0 || position.value.lng !== 0) {
        let sortedLocations2 = locations.map((_a2) => {
          var _b = _a2, { latitude, longitude } = _b, rest = __objRest(_b, ["latitude", "longitude"]);
          let location2 = point([longitude, latitude]);
          let user = point([position.value.lng, position.value.lat]);
          return __spreadValues({
            distance: distance(location2, user),
            latitude,
            longitude
          }, rest);
        }).sort((a, b) => a.distance - b.distance);
        selected.value = sortedLocations2[0].id;
        return sortedLocations2;
      } else {
        return locations;
      }
    });
    const onGeolocate = (p) => {
      position.value = p;
    };
    const onStop = () => {
      position.value = { lat: 0, lng: 0 };
      selected.value = "";
    };
    return {
      sortedLocations,
      onGeolocate,
      onStop,
      selected,
      position
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/information.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const meta$2 = void 0;
const _sfc_main$t = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M31.609 29.7237L22.5091 20.6238C24.2718 18.4465 25.3331 15.6798 25.3331 12.6666C25.3331 5.68263 19.6504 0 12.6665 0C5.68257 0 0 5.68257 0 12.6665C0 19.6504 5.68263 25.3331 12.6666 25.3331C15.6798 25.3331 18.4465 24.2718 20.6238 22.5091L29.7237 31.609C29.9837 31.869 30.325 31.9997 30.6664 31.9997C31.0078 31.9997 31.3491 31.869 31.6091 31.609C32.1304 31.0877 32.1304 30.245 31.609 29.7237ZM12.6666 22.6664C7.15193 22.6664 2.66666 18.1811 2.66666 12.6665C2.66666 7.15187 7.15193 2.6666 12.6666 2.6666C18.1812 2.6666 22.6665 7.15187 22.6665 12.6665C22.6665 18.1811 18.1811 22.6664 12.6666 22.6664Z"></path></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/SearchIcon.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$s = vue_cjs_prod.defineComponent({
  components: { SearchIcon, Card: __nuxt_component_1$4, Button, Input },
  setup() {
    const { result, loading, onResult } = useGetStoresQuery();
    const stores = vue_cjs_prod.ref([]);
    onResult(({ data }) => {
      var _a2;
      stores.value = (_a2 = data == null ? void 0 : data.getStores) != null ? _a2 : [];
    });
    const filteredStores = vue_cjs_prod.computed(() => {
      if (stores.value.length === 0) {
        return [];
      }
      return stores.value.filter((store) => store.city.toLowerCase().includes(storeSearch.value.toLowerCase()));
    });
    const storeSearch = vue_cjs_prod.ref("");
    return {
      stores,
      loading,
      storeSearch,
      filteredStores
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const meta$1 = void 0;
const _sfc_main$r = vue_cjs_prod.defineComponent({
  setup() {
    const isOpen = vue_cjs_prod.ref(false);
    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggleAccordion };
  }
});
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><button class="flex w-full">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`<svg class="${serverRenderer.exports.ssrRenderClass([{
    "rotate-180": _ctx.isOpen,
    "rotate-0": !_ctx.isOpen
  }, "w-3 transition-all duration-200 transform float-right ml-auto my-auto"])}" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" aria-hidden="true"><path d="M15 1.2l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button><div style="${serverRenderer.exports.ssrRenderStyle(_ctx.isOpen ? null : { display: "none" })}">`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordion.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$q = vue_cjs_prod.defineComponent({
  components: { LocationMarkerIcon, CheckIcon, Button, Accordion: __nuxt_component_1$1 },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { result, loading, onResult } = useGetStoreBySlugQuery({ slug: route.params.name });
    const myStore = dist.useResult(result, { openings: [] });
    onResult(({ data, loading: loading2 }) => {
      if (!loading2 && !data.getStoreBySlug) {
        router.push("/404");
      }
    });
    const formattedOpennings = vue_cjs_prod.computed(() => {
      var _a2;
      if ((_a2 = myStore.value) == null ? void 0 : _a2.openings) {
        let sortFunc = function(a, b) {
          return weekdays.indexOf(a.day.toLowerCase()) - weekdays.indexOf(b.day.toLowerCase());
        };
        const weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        const finalWeek = [];
        const finalDay = [];
        let time1 = "";
        const memory = [];
        let valid = false;
        const weekOpenings = myStore.value.openings.map(function(opening) {
          return (opening == null ? void 0 : opening.start) === (opening == null ? void 0 : opening.end) ? (opening == null ? void 0 : opening.weekday) + ":" + (opening == null ? void 0 : opening.start) : (opening == null ? void 0 : opening.weekday) + ":" + (opening == null ? void 0 : opening.start) + "/" + (opening == null ? void 0 : opening.end);
        });
        weekdays.forEach((weekday) => {
          weekOpenings.forEach((weekOpening) => {
            const formatWeek = weekOpening.split(":");
            const objectWeek = { day: formatWeek[0], time: formatWeek[1] };
            if (formatWeek[0].toLowerCase() === weekday) {
              finalWeek.push(objectWeek);
            }
          });
        });
        weekdays.forEach((weekday) => {
          finalWeek.forEach((day) => {
            if (weekday === day.day.toLowerCase()) {
              if (!memory.includes(weekday)) {
                time1 = day.time;
                valid = true;
              } else {
                valid = false;
              }
              if (time1 !== null && valid === true) {
                memory.push(weekday);
                finalDay.push(day);
              } else {
                finalDay.splice(-1, 1);
                Object.keys(day).forEach((key) => {
                  if (key === "time") {
                    const arrTime1 = time1.length === 10 || time1.length === 9 ? "0" + time1 : time1;
                    const arrTime2 = day[key].length === 10 || day[key].length === 9 ? "0" + day[key] : day[key];
                    const arr = [arrTime1, arrTime2];
                    arr.sort();
                    const hour = arr[0] === arrTime1 ? time1 + ", " + day[key] : day[key] + ", " + time1;
                    day[key] = hour;
                  }
                });
                finalDay.push(day);
              }
            }
          });
        });
        if (finalDay.length !== 7) {
          weekdays.forEach((weekday) => {
            let end = false;
            finalDay.forEach((day, idx) => {
              if (weekday === day.day.toLowerCase()) {
                end = true;
              }
              if (idx === finalDay.length - 1 && !end) {
                finalDay.push({ day: weekday.charAt(0).toUpperCase() + weekday.substring(1).toLowerCase(), time: "Ferm\xE9" });
              }
            });
          });
        }
        finalDay.sort(sortFunc);
        return finalDay;
      } else {
        return {};
      }
    });
    function map(lat, long) {
      window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + lat + "," + long, "_blank").focus();
    }
    return { myStore, loading, formattedOpennings, map };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/restaurant/[name].vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const meta = void 0;
const routes = [
  {
    name: "404",
    path: "/:catchAll(.*)*",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/404.vue",
    children: [],
    meta: meta$a,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _404$1;
    })
  },
  {
    name: "account",
    path: "/account",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/account.vue",
    children: [],
    meta: meta$9,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return account$1;
    })
  },
  {
    name: "auth",
    path: "/auth",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/auth.vue",
    children: [
      {
        name: "auth-login",
        path: "login",
        file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/auth/login.vue",
        children: [],
        meta: meta$7,
        alias: [],
        component: () => Promise.resolve().then(function() {
          return login$1;
        })
      },
      {
        name: "auth-register",
        path: "register",
        file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/auth/register.vue",
        children: [],
        meta: meta$6,
        alias: [],
        component: () => Promise.resolve().then(function() {
          return register$1;
        })
      }
    ],
    meta: meta$8,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return auth$1;
    })
  },
  {
    name: "concept",
    path: "/concept",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/concept.vue",
    children: [],
    meta: meta$5,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return concept$1;
    })
  },
  {
    name: "franchise",
    path: "/franchise",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/franchise.vue",
    children: [],
    meta: meta$4,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return franchise$1;
    })
  },
  {
    name: "index",
    path: "/",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/index.vue",
    children: [],
    meta: meta$3,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return index$1;
    })
  },
  {
    name: "information",
    path: "/information",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/information.vue",
    children: [],
    meta: meta$2,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return information$1;
    })
  },
  {
    name: "menu",
    path: "/menu",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/menu.vue",
    children: [],
    meta: meta$1,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return menu$1;
    })
  },
  {
    name: "restaurant-name",
    path: "/restaurant/:name",
    file: "/Users/valentin/Documents/COURS/La Cabane a\u0300 Burger/DEV/repos2/lacabaneaburger/packages/landing/pages/restaurant/[name].vue",
    children: [],
    meta,
    alias: [],
    component: () => Promise.resolve().then(function() {
      return _name_$1;
    })
  }
];
const configRouterOptions = {};
const routerOptions = __spreadValues({}, configRouterOptions);
const globalMiddleware = [];
const namedMiddleware = {};
const _57c922bd = defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtChild", NuxtPage);
  const baseURL2 = useRuntimeConfig().app.baseURL;
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory(baseURL2);
  const initialURL = nuxtApp.ssrContext.url;
  const router = vueRouter_cjs_prod.createRouter(__spreadProps(__spreadValues({}, routerOptions), {
    history: routerHistory,
    routes
  }));
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = vue_cjs_prod.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    var _a2, _b, _c, _d;
    if (((_b = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = vue_cjs_prod.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp._activeRoute = vue_cjs_prod.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    callWithNuxt(nuxtApp, throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    var _a2;
    to.meta = vue_cjs_prod.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry2 of componentMiddleware) {
          middlewareEntries.add(entry2);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry2 of middlewareEntries) {
      const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_a2 = namedMiddleware[entry2]) == null ? void 0 : _a2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
      const result = await callWithNuxt(nuxtApp, middleware, [to, from]);
      {
        if (result === false || result instanceof Error) {
          const error2 = result || createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return callWithNuxt(nuxtApp, throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (to.matched.length === 0) {
      callWithNuxt(nuxtApp, throwError, [createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else {
      const currentURL = to.fullPath || "/";
      if (!isEqual(currentURL, initialURL)) {
        await callWithNuxt(nuxtApp, navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace(__spreadProps(__spreadValues({}, router.resolve(initialURL)), {
        force: true
      }));
    } catch (error2) {
      callWithNuxt(nuxtApp, throwError, [error2]);
    }
  });
  return { provide: { router } };
});
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __2() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__2.prototype = b.prototype, new __2());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var genericMessage = "Invariant Violation";
var _a$3 = Object.setPrototypeOf, setPrototypeOf = _a$3 === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a$3;
var InvariantError = function(_super) {
  __extends(InvariantError2, _super);
  function InvariantError2(message) {
    if (message === void 0) {
      message = genericMessage;
    }
    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError2.prototype);
    return _this;
  }
  return InvariantError2;
}(Error);
function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant2) {
  invariant2.debug = wrapConsoleMethod("debug");
  invariant2.log = wrapConsoleMethod("log");
  invariant2.warn = wrapConsoleMethod("warn");
  invariant2.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}
const global$1 = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a2) {
    Object.defineProperty(global$1, GLOBAL_KEY, {
      value: maybe$1(function() {
        return "production";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return global$1[GLOBAL_KEY];
  }
}
const DEV = getDEV();
function maybe(thunk) {
  try {
    return thunk();
  } catch (_) {
  }
}
var safeGlobal = maybe(function() {
  return globalThis;
}) || maybe(function() {
  return window;
}) || maybe(function() {
  return self;
}) || maybe(function() {
  return global;
}) || maybe(function() {
  return maybe.constructor("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe(function() {
    return "production";
  }) && !maybe(function() {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          NODE_ENV: "production"
        }
      },
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
}
install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}
function removeTemporaryGlobals() {
  return typeof Source === "function" ? remove() : remove();
}
function checkDEV() {
  __DEV__ ? invariant(typeof DEV === "boolean", DEV) : invariant(typeof DEV === "boolean", 36);
}
removeTemporaryGlobals();
checkDEV();
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : invariant(evaledValue !== void 0, 37);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root2) {
  var names = [];
  visit(root2, {
    Directive: function(node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root2) {
  return getDirectiveNames(root2).some(function(name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client"], document2) && hasDirectives(["export"], document2);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : invariant(directiveArguments && directiveArguments.length === 1, 38);
      var ifArgument = directiveArguments[0];
      __DEV__ ? invariant(ifArgument.name && ifArgument.name.value === "if", "Invalid argument for the @".concat(directiveName, " directive.")) : invariant(ifArgument.name && ifArgument.name.value === "if", 39);
      var ifValue = ifArgument.value;
      __DEV__ ? invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : invariant(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 40);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw __DEV__ ? new InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : "", ". ") + "No operations are allowed when using a fragment as a query. Only fragments are allowed.") : new InvariantError(41);
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    __DEV__ ? invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : invariant(fragments.length === 1, 42);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragment = fragmentMap && fragmentMap[selection.name.value];
      __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value, ".")) : invariant(fragment, 43);
      return fragment;
    }
    default:
      return null;
  }
}
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new InvariantError('The inline argument "'.concat(name.value, '" of kind "').concat(value.kind, '"') + "is not supported. Use variables instead of inline arguments to overcome this limitation.") : new InvariantError(52);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  __DEV__ ? invariant(doc && doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc && doc.kind === "Document", 44);
  var operations = doc.definitions.filter(function(d) {
    return d.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw __DEV__ ? new InvariantError('Schema type definitions not allowed in queries. Found: "'.concat(definition.kind, '"')) : new InvariantError(45);
    }
    return definition;
  });
  __DEV__ ? invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : invariant(operations.length <= 1, 46);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && definition.name;
  }).map(function(x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? invariant(queryDef && queryDef.operation === "query", "Must contain a query definition.") : invariant(queryDef && queryDef.operation === "query", 47);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? invariant(doc.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql') : invariant(doc.kind === "Document", 48);
  __DEV__ ? invariant(doc.definitions.length <= 1, "Fragment must have exactly one definition.") : invariant(doc.definitions.length <= 1, 49);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? invariant(fragmentDef.kind === "FragmentDefinition", "Must be a fragment definition.") : invariant(fragmentDef.kind === "FragmentDefinition", 50);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw __DEV__ ? new InvariantError("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.") : new InvariantError(51);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def2) {
      if (def2.defaultValue) {
        valueToObjectRepresentation(defaultValues, def2.variable.name, def2.defaultValue);
      }
    });
  }
  return defaultValues;
}
function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function(elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}
var TYPENAME_FIELD = {
  kind: "Field",
  name: {
    kind: "Name",
    value: "__typename"
  }
};
function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function(selection) {
    return selection.kind === "FragmentSpread" && isEmpty(fragments[selection.name.value], fragments);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function(dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}
function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = /* @__PURE__ */ Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = /* @__PURE__ */ Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(visit(doc, {
    Variable: {
      enter: function(node, _key, parent) {
        if (parent.kind !== "VariableDefinition") {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function(node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function(directive) {
            return directive.remove;
          });
          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function(arg) {
                if (arg.value.kind === "Variable") {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }
            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function(frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }
            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function(node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function(node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));
  if (modifiedDoc && filterInPlace(variablesToRemove, function(v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }
  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function(fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }
  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === "OperationDefinition") {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d) {
          return d.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function(directive) {
    var willRemove = directive.name.value === "connection";
    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function(arg) {
        return arg.name.value === "key";
      })) {
        __DEV__ && invariant.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.");
      }
    }
    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function(aConfig) {
      return argument.value && argument.value.kind === "Variable" && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}
function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(visit(doc, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function(varDef) {
          return !config.some(function(arg) {
            return arg.name === varDef.variable.name.value;
          });
        }) : [] });
      }
    },
    Field: {
      enter: function(node) {
        var shouldRemoveField = config.some(function(argConfig) {
          return argConfig.remove;
        });
        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          if (node.arguments) {
            node.arguments.forEach(function(arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }
          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function(node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function(def2) {
      return def2.name === node.name.value;
    })) {
      return null;
    }
  }
  return nullIfDocIsEmpty(visit(doc, {
    FragmentSpread: { enter },
    FragmentDefinition: { enter }
  }));
}
function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function(selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function(frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === "FragmentSpread") {
      allFragments.push(selection);
    }
  });
  return allFragments;
}
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  if (modifiedDoc) {
    modifiedDoc = visit(modifiedDoc, {
      FragmentDefinition: {
        enter: function(node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function(selection) {
              return isField(selection) && selection.name.value === "__typename";
            });
            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }
  return modifiedDoc;
}
var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$5.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([target, source, sourceKey], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (this.pastCopies.has(value)) {
        if (!Object.isFrozen(value))
          return value;
        this.pastCopies.delete(value);
      }
      if (Array.isArray(value)) {
        value = value.slice(0);
      } else {
        value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
      }
      this.pastCopies.add(value);
    }
    return value;
  };
  return DeepMerger2;
}();
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return { done: true };
      return { done: false, value: o[i++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x) {
  return x instanceof Observable;
}
function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function() {
      throw e;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m)
          m.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m)
          m.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m)
          m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e) {
            return observer.error(e);
          }
          observer.next(value);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscription;
      var index2 = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v) {
            observer.next(v);
          },
          error: function(e) {
            observer.error(e);
          },
          complete: function() {
            if (index2 === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C.from(sources[index2++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C = getSpecies(this);
    return new C(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }
          var inner = C.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e) {
              observer.error(e);
            },
            complete: function() {
              var i = subscriptions.indexOf(inner);
              if (i >= 0)
                subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e) {
          observer.error(e);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from(x) {
    var C = typeof this === "function" ? this : Observable2;
    if (x == null)
      throw new TypeError(x + " is not an object");
    var method = getMethod(x, SymbolObservable);
    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable)
        throw new TypeError(observable + " is not an object");
      if (isObservable(observable) && observable.constructor === C)
        return observable;
      return new C(function(observer) {
        return observable.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x, SymbolIterator);
      if (method) {
        return new C(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x)) {
      return new C(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x + " is not observable");
  };
  Observable2.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C = typeof this === "function" ? this : Observable2;
    return new C(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}
function symbolObservablePonyfill(root2) {
  var result;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result;
      } catch (err) {
      }
    }
  } else {
    result = "@@observable";
  }
  return result;
}
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
symbolObservablePonyfill(root);
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}
var toString$1 = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString$1.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i) {
        copy_1[i] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable, mapFn, catchFn) {
  return new Observable(function(observer) {
    var next = observer.next, error = observer.error, complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function(arg) {
          ++activeCallbackCount;
          var both = function() {
            return examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            --activeCallbackCount;
            next && next.call(observer, result);
            if (completed) {
              handler.complete();
            }
          }, function(error2) {
            --activeCallbackCount;
            throw error2;
          }).catch(function(caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function(arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }
    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function() {
        completed = true;
        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$1(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
typeof maybe$1(function() {
  return window.document.createElement;
}) === "function";
maybe$1(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set(Symbol.species);
  }
  set("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.addCount = 0;
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        var sub = _this.sub;
        if (sub !== null) {
          var value = _this.sources.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
      ++this.addCount;
    }
  };
  Concast2.prototype.removeObserver = function(observer, quietly) {
    if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.cleanup = function(callback) {
    var _this = this;
    var called = false;
    var once = function() {
      if (!called) {
        called = true;
        _this.observers.delete(observer);
        callback();
      }
    };
    var observer = {
      next: once,
      error: once,
      complete: once
    };
    var count = this.addCount;
    this.addObserver(observer);
    this.addCount = count;
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
function graphQLResultHasError(result) {
  return result.errors && result.errors.length > 0 || false;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value) {
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}
function mergeOptions(defaults2, options) {
  return compact(defaults2, options, options.variables && {
    variables: __assign(__assign({}, defaults2 && defaults2.variables), options.variables)
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new InvariantError("illegal argument: ".concat(key)) : new InvariantError(24);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext2 = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext2
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var LinkError = function(_super) {
  __extends(LinkError2, _super);
  function LinkError2(message, link) {
    var _this = _super.call(this, message) || this;
    _this.link = link;
    return _this;
  }
  return LinkError2;
}(Error);
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x, y) {
      return x.concat(y);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      __DEV__ && invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw __DEV__ ? new InvariantError("request is not implemented") : new InvariantError(19);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
var version = "3.6.4";
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$4.call(result, "data") && !hasOwnProperty$4.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = __DEV__ ? new InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new InvariantError(21);
    parseError.parseError = e;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), headersToLowerCase(config.headers)) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }
  return headers;
}
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw __DEV__ ? new InvariantError(`
"fetch" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:

import fetch from 'cross-fetch';
import { ApolloClient, HttpLink } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql', fetch })
});
    `) : new InvariantError(20);
  }
};
var createSignalIfSupported = function() {
  if (typeof AbortController === "undefined")
    return { controller: false, signal: false };
  var controller = new AbortController();
  var signal = controller.signal;
  return { controller, signal };
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$1(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);
  if (__DEV__) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      visit(operation.query, {
        Variable: function(node, _key, parent) {
          if (parent && parent.kind !== "VariableDefinition") {
            unusedNames_1.delete(node.name.value);
          }
        }
      });
      if (unusedNames_1.size) {
        body.variables = __assign({}, body.variables);
        unusedNames_1.forEach(function(name) {
          delete body.variables[name];
        });
      }
    }
    var controller;
    if (!options.signal) {
      var _c2 = createSignalIfSupported(), _controller = _c2.controller, signal = _c2.signal;
      controller = _controller;
      if (controller)
        options.signal = signal;
    }
    var definitionIsMutation = function(d) {
      return d.kind === "OperationDefinition" && d.operation === "mutation";
    };
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (options.method === "GET") {
      var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$1(function() {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function(response) {
        operation.setContext({ response });
        return response;
      }).then(parseAndCheckHttpResponse(operation)).then(function(result) {
        observer.next(result);
        observer.complete();
        return result;
      }).catch(function(err) {
        if (err.name === "AbortError")
          return;
        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }
        observer.error(err);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
var _a$2 = Object.prototype, toString = _a$2.toString, hasOwnProperty$3 = _a$2.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = /* @__PURE__ */ new Map();
function equal(a, b) {
  try {
    return check(a, b);
  } finally {
    previousComparisons.clear();
  }
}
function check(a, b) {
  if (a === b) {
    return true;
  }
  var aTag = toString.call(a);
  var bTag = toString.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a, b))
        return true;
      var aKeys = definedKeys(a);
      var bKeys = definedKeys(b);
      var keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (var k = 0; k < keyCount; ++k) {
        if (!hasOwnProperty$3.call(b, aKeys[k])) {
          return false;
        }
      }
      for (var k = 0; k < keyCount; ++k) {
        var key = aKeys[k];
        if (!check(a[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a.name === b.name && a.message === b.message;
    case "[object Number]":
      if (a !== a)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
    case "[object String]":
      return a == "" + b;
    case "[object Map]":
    case "[object Set]": {
      if (a.size !== b.size)
        return false;
      if (previouslyCompared(a, b))
        return true;
      var aIterator = a.entries();
      var isMap2 = aTag === "[object Map]";
      while (true) {
        var info = aIterator.next();
        if (info.done)
          break;
        var _a2 = info.value, aKey = _a2[0], aValue = _a2[1];
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap2 && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a = new Uint8Array(a);
      b = new Uint8Array(b);
    case "[object DataView]": {
      var len = a.byteLength;
      if (len === b.byteLength) {
        while (len-- && a[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      var aCode = fnToStr.call(a);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  var fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
  var bSet = previousComparisons.get(a);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}
var defaultMakeData = function() {
  return /* @__PURE__ */ Object.create(null);
};
var _a$1 = Array.prototype, forEach = _a$1.forEach, slice = _a$1.slice;
var Trie = function() {
  function Trie2(weakness, makeData) {
    if (weakness === void 0) {
      weakness = true;
    }
    if (makeData === void 0) {
      makeData = defaultMakeData;
    }
    this.weakness = weakness;
    this.makeData = makeData;
  }
  Trie2.prototype.lookup = function() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      array[_i] = arguments[_i];
    }
    return this.lookupArray(array);
  };
  Trie2.prototype.lookupArray = function(array) {
    var node = this;
    forEach.call(array, function(key) {
      return node = node.getChildTrie(key);
    });
    return node.data || (node.data = this.makeData(slice.call(array)));
  };
  Trie2.prototype.getChildTrie = function(key) {
    var map = this.weakness && isObjRef(key) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    var child = map.get(key);
    if (!child)
      map.set(key, child = new Trie2(this.weakness, this.makeData));
    return child;
  };
  return Trie2;
}();
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}
var currentContext = null;
var MISSING_VALUE = {};
var idCounter = 1;
var makeSlotClass = function() {
  return function() {
    function Slot2() {
      this.id = [
        "slot",
        idCounter++,
        Date.now(),
        Math.random().toString(36).slice(2)
      ].join(":");
    }
    Slot2.prototype.hasValue = function() {
      for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
        if (this.id in context_1.slots) {
          var value = context_1.slots[this.id];
          if (value === MISSING_VALUE)
            break;
          if (context_1 !== currentContext) {
            currentContext.slots[this.id] = value;
          }
          return true;
        }
      }
      if (currentContext) {
        currentContext.slots[this.id] = MISSING_VALUE;
      }
      return false;
    };
    Slot2.prototype.getValue = function() {
      if (this.hasValue()) {
        return currentContext.slots[this.id];
      }
    };
    Slot2.prototype.withValue = function(value, callback, args, thisArg) {
      var _a2;
      var slots = (_a2 = {
        __proto__: null
      }, _a2[this.id] = value, _a2);
      var parent = currentContext;
      currentContext = { parent, slots };
      try {
        return callback.apply(thisArg, args);
      } finally {
        currentContext = parent;
      }
    };
    Slot2.bind = function(callback) {
      var context = currentContext;
      return function() {
        var saved = currentContext;
        try {
          currentContext = context;
          return callback.apply(this, arguments);
        } finally {
          currentContext = saved;
        }
      };
    };
    Slot2.noContext = function(callback, args, thisArg) {
      if (currentContext) {
        var saved = currentContext;
        try {
          currentContext = null;
          return callback.apply(thisArg, args);
        } finally {
          currentContext = saved;
        }
      } else {
        return callback.apply(thisArg, args);
      }
    };
    return Slot2;
  }();
};
var globalKey = "@wry/context:Slot";
var host = Array;
var Slot = host[globalKey] || function() {
  var Slot2 = makeSlotClass();
  try {
    Object.defineProperty(host, globalKey, {
      value: host[globalKey] = Slot2,
      enumerable: false,
      writable: false,
      configurable: false
    });
  } finally {
    return Slot2;
  }
}();
Slot.bind;
Slot.noContext;
function defaultDispose() {
}
var Cache = function() {
  function Cache2(max, dispose) {
    if (max === void 0) {
      max = Infinity;
    }
    if (dispose === void 0) {
      dispose = defaultDispose;
    }
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  Cache2.prototype.has = function(key) {
    return this.map.has(key);
  };
  Cache2.prototype.get = function(key) {
    var node = this.getNode(key);
    return node && node.value;
  };
  Cache2.prototype.getNode = function(key) {
    var node = this.map.get(key);
    if (node && node !== this.newest) {
      var older = node.older, newer = node.newer;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  };
  Cache2.prototype.set = function(key, value) {
    var node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  };
  Cache2.prototype.clean = function() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  };
  Cache2.prototype.delete = function(key) {
    var node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  };
  return Cache2;
}();
var parentEntrySlot = new Slot();
var _a;
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var toArray = (_a = Array.from, _a === void 0 ? function(collection) {
  var array = [];
  collection.forEach(function(item) {
    return array.push(item);
  });
  return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
  var unsubscribe = entryOrDep.unsubscribe;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
function assert(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a, b) {
  var len = a.length;
  return len > 0 && len === b.length && a[len - 1] === b[len - 1];
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
var Entry = function() {
  function Entry2(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry2.count;
  }
  Entry2.prototype.peek = function() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  };
  Entry2.prototype.recompute = function(args) {
    assert(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  };
  Entry2.prototype.setDirty = function() {
    if (this.dirty)
      return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this);
    maybeUnsubscribe(this);
  };
  Entry2.prototype.dispose = function() {
    var _this = this;
    this.setDirty();
    forgetChildren(this);
    eachParent(this, function(parent, child) {
      parent.setDirty();
      forgetChild(parent, _this);
    });
  };
  Entry2.prototype.forget = function() {
    this.dispose();
  };
  Entry2.prototype.dependOn = function(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  };
  Entry2.prototype.forgetDeps = function() {
    var _this = this;
    if (this.deps) {
      toArray(this.deps).forEach(function(dep2) {
        return dep2.delete(_this);
      });
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  };
  Entry2.count = 0;
  return Entry2;
}();
function rememberParent(child) {
  var parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry2, args) {
  forgetChildren(entry2);
  parentEntrySlot.withValue(entry2, recomputeNewValue, [entry2, args]);
  if (maybeSubscribe(entry2, args)) {
    setClean(entry2);
  }
  return valueGet(entry2.value);
}
function recomputeNewValue(entry2, args) {
  entry2.recomputing = true;
  entry2.value.length = 0;
  try {
    entry2.value[0] = entry2.fn.apply(null, args);
  } catch (e) {
    entry2.value[1] = e;
  }
  entry2.recomputing = false;
}
function mightBeDirty(entry2) {
  return entry2.dirty || !!(entry2.dirtyChildren && entry2.dirtyChildren.size);
}
function setClean(entry2) {
  entry2.dirty = false;
  if (mightBeDirty(entry2)) {
    return;
  }
  reportClean(entry2);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  var parentCount = child.parents.size;
  if (parentCount) {
    var parents = toArray(child.parents);
    for (var i = 0; i < parentCount; ++i) {
      callback(parents[i], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(mightBeDirty(child));
  var parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert(parent.childValues.has(child));
  assert(!mightBeDirty(child));
  var childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  var dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach(function(_value, child) {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry2, args) {
  if (typeof entry2.subscribe === "function") {
    try {
      maybeUnsubscribe(entry2);
      entry2.unsubscribe = entry2.subscribe.apply(null, args);
    } catch (e) {
      entry2.setDirty();
      return false;
    }
  }
  return true;
}
var EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
};
function dep(options) {
  var depsByKey = /* @__PURE__ */ new Map();
  var subscribe = options && options.subscribe;
  function depend(key) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
      var dep_1 = depsByKey.get(key);
      if (!dep_1) {
        depsByKey.set(key, dep_1 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep_1);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep_1);
        dep_1.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    var dep2 = depsByKey.get(key);
    if (dep2) {
      var m_1 = entryMethodName && hasOwnProperty$2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      toArray(dep2).forEach(function(entry2) {
        return entry2[m_1]();
      });
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
function makeDefaultMakeCacheKeyFunction() {
  var keyTrie = new Trie(typeof WeakMap === "function");
  return function() {
    return keyTrie.lookupArray(arguments);
  };
}
makeDefaultMakeCacheKeyFunction();
var caches = /* @__PURE__ */ new Set();
function wrap(originalFunction, options) {
  if (options === void 0) {
    options = /* @__PURE__ */ Object.create(null);
  }
  var cache = new Cache(options.max || Math.pow(2, 16), function(entry2) {
    return entry2.dispose();
  });
  var keyArgs = options.keyArgs;
  var makeCacheKey = options.makeCacheKey || makeDefaultMakeCacheKeyFunction();
  var optimistic = function() {
    var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    var entry2 = cache.get(key);
    if (!entry2) {
      cache.set(key, entry2 = new Entry(originalFunction));
      entry2.subscribe = options.subscribe;
      entry2.forget = function() {
        return cache.delete(key);
      };
    }
    var value = entry2.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry2);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach(function(cache2) {
        return cache2.clean();
      });
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get: function() {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  function dirtyKey(key) {
    var entry2 = cache.get(key);
    if (entry2) {
      entry2.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    var entry2 = cache.get(key);
    if (entry2) {
      return entry2.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return cache.delete(key);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}
var ApolloCache = function() {
  function ApolloCache2() {
    this.getFragmentDoc = wrap(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a2) {
    var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a2) {
    var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function() {
  function MissingFieldError2(message, path, query, variables) {
    this.message = message;
    this.path = path;
    this.query = query;
    this.variables = variables;
  }
  return MissingFieldError2;
}();
var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id !== void 0 ? { id } : _id !== void 0 ? { _id } : void 0;
    }
    if (id === void 0)
      id = _id;
    if (id !== void 0) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
var isArray = function(a) {
  return Array.isArray(a);
};
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref2 = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref2;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    __DEV__ ? invariant(typeof dataId === "string", "store.merge expects a string ID") : invariant(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a2;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root2 = this.data[dataId];
      if (!root2)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root2]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a2) {
      var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p = this.parent;
    while (p.parent)
      p = p.parent;
    return p.getStorage.apply(p, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root2) {
    return _super.call(this, "EntityStore.Stump", root2, function() {
    }, new CacheGroup(root2.group.caching, root2.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array = value.map(this.admit, this);
          var node = this.pool.lookupArray(array);
          if (!node.array) {
            this.known.add(node.array = array);
            if (__DEV__) {
              Object.freeze(array);
            }
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i) {
              obj_1[key] = array_1[firstValueIndex_1 + i];
            });
            if (__DEV__) {
              Object.freeze(obj_1);
            }
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap(function(options) {
      var _a2;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a2) {
        var field = _a2.field, array = _a2.array, context = _a2.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
    var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var merger = new DeepMerger();
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: {
        store,
        query,
        policies,
        variables,
        varString: canonicalStringify(variables),
        canonizeResults,
        fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
        merge: function(a, b) {
          return merger.merge(a, b);
        }
      }
    });
    var missing;
    if (execResult.missing) {
      missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
    var _this = this;
    var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var result = {};
    var missing;
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      result = { __typename: typename };
    }
    function handleMissing(result2, resultName) {
      var _a3;
      if (result2.missing) {
        missing = context.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a3, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = context.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          result = context.merge(result, (_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.fragmentMap);
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
    var _this = this;
    var field = _a2.field, array = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
    var missing;
    function handleMissing(childResult, i) {
      var _a3;
      if (childResult.missing) {
        missing = context.merge(missing, (_a3 = {}, _a3[i] = childResult.missing, _a3));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }
    array = array.map(function(item, i) {
      if (item === null) {
        return null;
      }
      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i);
      }
      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        __DEV__ ? invariant(!isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : invariant(!isReference(value), 5);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object, context) {
    var extract = function(from, key) {
      return context.readField(key, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object !== context.storeObject && hasOwn.call(object, schemaKeyPath[0])) {
        extracted = extractKeyPath(object, schemaKeyPath, extractKey);
      }
      __DEV__ ? invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join("."), "' while extracting keyFields from ").concat(JSON.stringify(object))) : invariant(extracted !== void 0, 2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d = field.directives.find(function(d2) {
            return d2.name.value === directiveName_1;
          });
          var directiveArgs = d && argumentsObjectFromField(d, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path) {
    var _a2;
    var toMerge = extractor(path);
    if (toMerge !== void 0) {
      for (var i = path.length - 1; i >= 0; --i) {
        toMerge = (_a2 = {}, _a2[path[i]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s, i) {
      if (isArray(s)) {
        getSpecifierPaths(s).forEach(function(p) {
          return paths_1.push(currentPath_1.concat(p));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s);
        if (!isArray(spec[i + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object, key) {
  return object[key];
}
function extractKeyPath(object, path, extract) {
  extract = extract || extractKey;
  return normalize(path.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object));
}
function normalize(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path) {
      return extractKeyPath(value, path);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config) {
    this.config = config;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }
    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object, partialContext) {
    var _a2;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object;
    var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(object, context);
      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      __DEV__ ? invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : invariant(!old || old === which, 3);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match = subtype.match(TypeOrFieldNameRegExp);
        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes = this.supertypeMap.get(typename);
      if (supertypes && supertypes.size) {
        supertypes.forEach(function(supertype) {
          var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;
      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
            }
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match = typename.match(regExp);
            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
    var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename, fieldName: field.name.value, field, variables: context.variables }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, context), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (__DEV__ && options.from === void 0) {
    __DEV__ && invariant.warn("Undefined 'from' passed to readField with arguments ".concat(stringifyForDisplay(Array.from(readFieldArgs))));
  }
  if (options.variables === void 0) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw __DEV__ ? new InvariantError("Cannot automatically merge arrays") : new InvariantError(4);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader) {
    this.cache = cache;
    this.reader = reader;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a2) {
    var _this = this;
    var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = {
      store,
      written: /* @__PURE__ */ Object.create(null),
      merge: function(existing, incoming) {
        return merger.merge(existing, incoming);
      },
      variables,
      varString: canonicalStringify(variables),
      fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
      overwrite: !!overwrite,
      incomingById: /* @__PURE__ */ new Map(),
      clientOnly: false,
      deferred: false,
      flavors: /* @__PURE__ */ new Map()
    };
    var ref2 = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref2)) {
      throw __DEV__ ? new InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new InvariantError(6);
    }
    context.incomingById.forEach(function(_a3, dataId2) {
      var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      if (__DEV__ && !context.overwrite) {
        var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
        fieldNodeSet.forEach(function(field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });
        var hasSelectionSet_1 = function(storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };
        var hasMergeFunction_1 = function(storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref2.__ref);
    return ref2;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a2) {
    var _this = this;
    var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if (typeof typename === "string") {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a3;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
      } else if (__DEV__ && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        __DEV__ && invariant.error("Missing field '".concat(resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1e3));
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e) {
      if (!dataId)
        throw e;
    }
    if (typeof dataId === "string") {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return __DEV__ ? cloneDeep(value) : value;
    }
    if (isArray(value)) {
      return value.map(function(item, i) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
        maybeRecycleChildMergeTree(mergeTree, i);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.fragmentMap);
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a2;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (iVal === void 0)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map = _a2.map;
  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map = _a2.map;
  var childTree = map.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  __DEV__ && invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config) {
    if (config === void 0) {
      config = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.typenameDocumentCache = /* @__PURE__ */ new Map();
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
    }));
    this.maybeBroadcastWatch = wrap(function(c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c.optimistic, rootId = c.rootId, variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic, rootId, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([
      this.data.group,
      this.optimisticData.group
    ])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e) {
      if (e instanceof MissingFieldError) {
        return null;
      }
      throw e;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch2) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch2);
    if (watch2.immediate) {
      this.maybeBroadcastWatch(watch2);
    }
    return function() {
      if (_this.watches.delete(watch2) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch2);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object) {
    if (isReference(object))
      return object.__ref;
    try {
      return this.policies.identify(object)[0];
    } catch (e) {
      __DEV__ && invariant.warn(e);
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch2) {
        return _this.maybeBroadcastWatch.forget(watch2);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2) {
        alreadyDirty.add(watch2);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch2, diff) {
        var result = onWatchUpdated.call(this, watch2, diff);
        if (result !== false) {
          alreadyDirty.delete(watch2);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch2) {
          return _this.maybeBroadcastWatch.dirty(watch2);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document2);
      if (!result) {
        result = addTypenameToDocument(document2);
        this.typenameDocumentCache.set(document2, result);
        this.typenameDocumentCache.set(result, result);
      }
      return result;
    }
    return document2;
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };
  InMemoryCache2.prototype.broadcastWatch = function(c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);
    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var message = "";
  if (isNonEmptyArray(err.graphQLErrors) || isNonEmptyArray(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function(error) {
      var errorMessage = error ? error.message : "Error message not found.";
      message += "".concat(errorMessage, "\n");
    });
  }
  if (err.networkError) {
    message += "".concat(err.networkError.message, "\n");
  }
  message = message.replace(/\n$/, "");
  return message;
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a2) {
    var graphQLErrors = _a2.graphQLErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a2) {
    var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a3) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.queryManager.transform(this.options.query).document;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
    if (fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby" || this.queryManager.transform(this.options.query).hasForcedResolvers)
      ;
    else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff.complete) {
        delete result.partial;
        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
      if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff.missing);
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult) {
    return !this.last || !equal(this.last.result, newResult);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var _a2;
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.query);
      var vars = queryDef.variableDefinitions;
      if (!vars || !vars.some(function(v) {
        return v.variable.name.value === "variables";
      })) {
        __DEV__ && invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
      }
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    var qid = this.queryManager.generateQueryId();
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous) {
              return updateQuery(previous, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch2) {
          updatedQuerySet.add(watch2.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a2) {
            var variables = _a2.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
        __DEV__ && invariant.error("Unhandled GraphQL subscription error", err);
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    __DEV__ ? invariant(pollInterval, "Attempted to start a polling query without a polling interval.") : invariant(pollInterval, 10);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    this.last = __assign(__assign({}, this.last), { result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables });
    if (!isNonEmptyArray(newResult.errors)) {
      delete this.last.error;
    }
    return this.last;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = mergeOptions(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && (!newOptions.fetchPolicy || newOptions.fetchPolicy === oldFetchPolicy)) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    var variables = options.variables && __assign({}, options.variables);
    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function(result) {
        _this.reportResult(result, variables);
      },
      error: function(error) {
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer, true);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast.promise;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    if (lastError || this.isDifferentFromLastResult(result)) {
      if (lastError || !result.partial || this.options.returnPartialData) {
        this.updateLastResult(result, variables);
      }
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
  __DEV__ && invariant.error("Unhandled error", error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (__DEV__ && missing) {
    __DEV__ && invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
  }
}
var LocalState = function() {
  function LocalState2(_a2) {
    var cache = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a2) {
    var document2 = _a2.document, remoteResult = _a2.remoteResult, context = _a2.context, variables = _a2.variables, _b = _a2.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign(__assign({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a2, cache, client, execContext;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a2 = this, cache = _a2.cache, client = _a2.client;
        execContext = {
          fragmentMap,
          context: __assign(__assign({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a2) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a3) {
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function(fieldResult) {
                  var _a4;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? invariant(fragment, "No fragment named ".concat(selection.name.value)) : invariant(fragment, 9);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a2) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = /* @__PURE__ */ new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.lastDiff = void 0;
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function(variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var options = this.getDiffOptions(variables);
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a2;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff = _this.getDiff();
        if (diff.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      this.subscriptions.forEach(function(sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, options, cacheWriteBehavior) {
    var _this = this;
    this.graphQLErrors = isNonEmptyArray(result.errors) ? result.errors : [];
    this.reset();
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: _this.document,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff = cache.diff(diffOptions);
          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff, diffOptions);
          if (diff.complete) {
            result.data = diff.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a2) {
    var cache = _a2.cache, link = _a2.link, defaultOptions2 = _a2.defaultOptions, _b = _a2.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a2.onBroadcast, _c = _a2.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a2.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a2.localState, assumeImmutableResults = _a2.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    this.cache = cache;
    this.link = link;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new InvariantError("QueryManager stopped while query was in flight") : new InvariantError(11));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a2) {
    var _b, _c;
    var mutation = _a2.mutation, variables = _a2.variables, optimisticResponse = _a2.optimisticResponse, updateQueries = _a2.updateQueries, _d = _a2.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a2.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a2.update, onQueryUpdated = _a2.onQueryUpdated, _f = _a2.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a2.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a2.keepRootFields, context = _a2.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, mutationStoreValue, self2;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            __DEV__ ? invariant(mutation, "mutation option is required. You must specify your GraphQL document in the mutation option.") : invariant(mutation, 12);
            __DEV__ ? invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : invariant(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 13);
            mutationId = this.generateMutationId();
            mutation = this.transform(mutation).document;
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _h.sent();
            _h.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: result.errors
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  resolve(storeResult);
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result.data,
        dataId: "ROOT_MUTATION",
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a2, queryId) {
          var observableQuery = _a2.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          if (update) {
            if (!skipCache) {
              var diff = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff.complete) {
                result = __assign(__assign({}, result), { data: diff.result });
              }
            }
            update(cache2, result, {
              context: mutation.context,
              variables: mutation.variables
            });
          }
          if (!skipCache && !mutation.keepRootFields) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a2) {
                var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
      } catch (error) {
        __DEV__ && invariant.error(error);
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var transformed = this.cache.transformDocument(document2);
      var forLink = removeConnectionDirectiveFromDocument(this.cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = forLink && this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: hasClientExports(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery,
        serverQuery,
        defaultVars: getDefaultValues(getOperationDefinition(transformed)),
        asQuery: __assign(__assign({}, transformed), { definitions: transformed.definitions.map(function(def2) {
          if (def2.kind === "OperationDefinition" && def2.operation !== "query") {
            return __assign(__assign({}, def2), { operation: "query" });
          }
          return def2;
        }) })
      };
      var add = function(doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };
      add(document2);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign(__assign({}, this.transform(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    options = __assign(__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: observable.query,
      observableQuery: observable,
      variables: observable.variables
    });
    return observable;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    __DEV__ ? invariant(options.query, "query option is required. You must specify your GraphQL document in the query option.") : invariant(options.query, 14);
    __DEV__ ? invariant(options.query.kind === "Document", 'You must wrap the query string in a "gql" tag.') : invariant(options.query.kind === "Document", 15);
    __DEV__ ? invariant(!options.returnPartialData, "returnPartialData option only supported on watchQuery.") : invariant(!options.returnPartialData, 16);
    __DEV__ ? invariant(!options.pollInterval, "pollInterval option only supported on watchQuery.") : invariant(!options.pollInterval, 17);
    return this.fetchQuery(queryId, options).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(__DEV__ ? new InvariantError("Store reset while query was in flight (not completed in link chain)") : new InvariantError(18));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a2, queryId) {
      var oq = _a2.observableQuery, document2 = _a2.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
        });
        invariant(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function(included, nameOrDoc) {
        if (!included) {
          __DEV__ && invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
        }
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a2) {
    var _this = this;
    var query = _a2.query, fetchPolicy = _a2.fetchPolicy, errorPolicy = _a2.errorPolicy, variables = _a2.variables, _b = _a2.context, context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);
    var makeObservable = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        if (graphQLResultHasError(result)) {
          throw new ApolloError({
            graphQLErrors: result.errors
          });
        }
        return result;
      });
    };
    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a2;
    if (deduplication === void 0) {
      deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
    }
    var observable;
    var serverQuery = this.transform(query).serverQuery;
    if (serverQuery) {
      var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable = byVariables_1.get(varJson_1);
        if (!observable) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.cleanup(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable = new Concast([
        Observable.of({ data: {} })
      ]);
      context = this.prepareContext(context);
    }
    var clientQuery = this.transform(query).clientQuery;
    if (clientQuery) {
      observable = asyncMap(observable, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    return asyncMap(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function(result) {
      var hasErrors = isNonEmptyArray(result.errors);
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors: result.errors
          }));
        }
        queryInfo.markResult(result, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = result.errors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchQueryObservable = function(queryId, options, networkStatus) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults2 = this.defaultOptions.watchQuery;
    var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults2 && defaults2.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults2 && defaults2.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast = new Concast(this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.cleanup(function() {
      _this.fetchCancelFns.delete(queryId);
      if (queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
    });
    return concast;
  };
  QueryManager2.prototype.refetchQueries = function(_a2) {
    var _this = this;
    var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch2, diff, lastDiff) {
          var oq = watch2.watcher instanceof QueryInfo && watch2.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a3, queryId) {
        var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
    var _this = this;
    var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: this.transform(query).document,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff(variables);
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      if (__DEV__ && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff2.missing);
      }
      var fromData = function(data2) {
        return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return [
            resultsFromCache(diff, queryInfo.markReady())
          ];
        }
        if (returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return [
            resultsFromCache(diff),
            resultsFromLink()
          ];
        }
        return [
          resultsFromLink()
        ];
      }
      case "cache-only":
        return [
          resultsFromCache(readCache(), queryInfo.markReady())
        ];
      case "network-only":
        if (shouldNotify) {
          return [
            resultsFromCache(readCache()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "no-cache":
        if (shouldNotify) {
          return [
            resultsFromCache(queryInfo.getDiff()),
            resultsFromLink()
          ];
        }
        return [resultsFromLink()];
      case "standby":
        return [];
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var hasSuggestedDevtools = false;
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a2 = options.ssrMode, ssrMode = _a2 === void 0 ? false : _a2, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? false : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    if (!cache) {
      throw __DEV__ ? new InvariantError("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new InvariantError(7);
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    if (connectToDevTools && false) {
      window.__APOLLO_CLIENT__ = this;
    }
    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;
    }
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    __DEV__ ? invariant(options.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : invariant(options.fetchPolicy !== "cache-and-network", 8);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c) {
        return c !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error) {
      __DEV__ && invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
const apollo_cff029b6 = defineNuxtPlugin((nuxt) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000",
    ssrMode: true
  });
  nuxt.vueApp.provide(dist.DefaultApolloClient, apolloClient);
});
const route_7e8e6c3d = defineNuxtPlugin((nuxt) => {
  const isLoggedIn = () => {
    let loggedIn = false;
    if (typeof localStorage !== "undefined") {
      loggedIn = localStorage.getItem("auth-token") !== null;
    }
    return loggedIn;
  };
  const router = useRouter();
  router.beforeEach((to, from) => {
    const protectedRoutes = ["account"];
    const path = to.fullPath.split("/");
    if (protectedRoutes.includes(path[1]) && !isLoggedIn()) {
      return {
        path: "/auth/login"
      };
    }
  });
});
const _plugins = [
  preload,
  componentsPlugin_250f7b0b,
  vueuseHead_19648d73,
  _ee5ce932,
  _57c922bd,
  apollo_cff029b6,
  route_7e8e6c3d
];
const _sfc_main$p = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "404"
    },
    statusMessage: {
      type: String,
      default: "Not Found"
    },
    description: {
      type: String,
      default: "Sorry, the page you are looking for could not be found."
    },
    backHome: {
      type: String,
      default: "Go back home"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_2$1;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-1239ad4d><div class="fixed left-0 right-0 spotlight z-10" data-v-1239ad4d></div><div class="max-w-520px text-center z-20" data-v-1239ad4d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-1239ad4d>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-1239ad4d>${serverRenderer.exports.ssrInterpolate(__props.description)}</p><div class="w-full flex items-center justify-center" data-v-1239ad4d>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.exports.ssrInterpolate(__props.backHome)}`);
          } else {
            return [
              vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(__props.backHome), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Error404 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-1239ad4d"]]);
const _sfc_main$o = {
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: String,
      default: "500"
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-0c457c96><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0c457c96></div><div class="max-w-520px text-center" data-v-0c457c96><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0c457c96>${serverRenderer.exports.ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0c457c96>${serverRenderer.exports.ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Error500 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-0c457c96"]]);
const _sfc_main$m = {
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    var _a2;
    const props = __props;
    const error = props.error;
    (error.stack || "").split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n");
    const statusCode = String(error.statusCode || 500);
    const is404 = statusCode === "404";
    const statusMessage = (_a2 = error.statusMessage) != null ? _a2 : is404 ? "Page Not Found" : "Internal Server Error";
    const description = error.message || error.toString();
    const stack = void 0;
    const ErrorTemplate = is404 ? Error404 : Error500;
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(ErrorTemplate), vue_cjs_prod.mergeProps({ statusCode: vue_cjs_prod.unref(statusCode), statusMessage: vue_cjs_prod.unref(statusMessage), description: vue_cjs_prod.unref(description), stack: vue_cjs_prod.unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    vue_cjs_prod.onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        callWithNuxt(nuxtApp, throwError, [err]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_App = vue_cjs_prod.resolveComponent("App");
      serverRenderer.exports.ssrRenderSuspense(_push, {
        default: () => {
          if (vue_cjs_prod.unref(error)) {
            _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(_sfc_main$m), { error: vue_cjs_prod.unref(error) }, null, _parent));
          } else {
            _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../../node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "23",
    height: "23",
    viewBox: "0 0 23 23",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.5016 0C8.21584 0 5.52991 2.68593 5.52991 5.97166C5.52991 9.2574 8.21584 11.9433 11.5016 11.9433C14.7873 11.9433 17.4732 9.2574 17.4732 5.97166C17.4732 2.68593 14.7873 0 11.5016 0Z"></path><path d="M21.7499 16.7154C21.5934 16.3242 21.3848 15.9592 21.1501 15.6202C19.9506 13.8469 18.0992 12.6734 16.013 12.3866C15.7522 12.3605 15.4654 12.4126 15.2567 12.5691C14.1615 13.3775 12.8577 13.7947 11.5016 13.7947C10.1456 13.7947 8.84175 13.3775 7.74651 12.5691C7.53787 12.4126 7.25102 12.3344 6.99027 12.3866C4.9041 12.6734 3.02656 13.8469 1.8531 15.6202C1.61841 15.9592 1.40978 16.3503 1.25335 16.7154C1.17513 16.8719 1.20119 17.0544 1.2794 17.2109C1.48804 17.576 1.74879 17.9411 1.98348 18.254C2.34854 18.7495 2.73971 19.1927 3.18304 19.61C3.54811 19.975 3.96533 20.314 4.38261 20.6531C6.44267 22.1916 8.92002 23 11.4756 23C14.0311 23 16.5085 22.1916 18.5685 20.6531C18.9858 20.3401 19.403 19.975 19.7681 19.61C20.1853 19.1927 20.6026 18.7494 20.9677 18.254C21.2284 17.915 21.4632 17.576 21.6717 17.2109C21.8021 17.0544 21.8281 16.8718 21.7499 16.7154Z"></path></svg>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/UserIcon.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "33",
    height: "19",
    viewBox: "0 0 33 19",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M0 3.53535C0 1.58283 1.58283 0 3.53535 0H29.4646C31.4172 0 33 1.58283 33 3.53535C33 4.34426 32.3443 5 31.5354 5H1.46465C0.655745 5 0 4.34426 0 3.53535Z"></path><path d="M33 15.4646C33 17.4172 31.4172 19 29.4646 19L3.53535 19C1.58283 19 1.38376e-07 17.4172 3.0907e-07 15.4646C3.79787e-07 14.6557 0.655747 14 1.46465 14L31.5354 14C32.3443 14 33 14.6557 33 15.4646Z"></path><path d="M33 9.5C33 10.8807 31.8807 12 30.5 12L2.5 12C1.11929 12 9.78513e-08 10.8807 2.18557e-07 9.5C3.39263e-07 8.11929 1.11929 7 2.5 7L30.5 7C31.8807 7 33 8.11929 33 9.5Z"></path></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/MenuIcon.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Menu = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    width: "29",
    height: "28",
    viewBox: "0 0 29 28",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M27.5029 24.5772C26.1223 25.9579 23.8838 25.9579 22.5032 24.5772L4.1684 6.24244C2.78776 4.86179 2.78776 2.62333 4.1684 1.24269V1.24269C4.74038 0.670712 5.66774 0.670712 6.23972 1.24269L27.5029 22.5059C28.0749 23.0779 28.0749 24.0052 27.5029 24.5772V24.5772Z"></path><path d="M25.2236 1.24268C26.6043 2.62332 26.6043 4.86178 25.2236 6.24243L6.88886 24.5772C5.50822 25.9578 3.26976 25.9578 1.88911 24.5772V24.5772C1.31713 24.0052 1.31713 23.0779 1.88911 22.5059L23.1523 1.24268C23.7243 0.670701 24.6517 0.670701 25.2236 1.24268V1.24268Z"></path></svg>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/CrossIcon.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Cross = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$h = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    id: "Layer_1",
    "data-name": "Layer 1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 350 350"
  }, _attrs))} data-v-1c84121e><path class="cls-1" d="M239.72,31.63C243.2,33.2,251.63,29.16,255,31s4.4,11.13,7.59,13.25,12.15-.48,15.15,1.9,2.51,11.71,5.3,14.32S295.1,62,297.66,64.84s.55,12,2.87,15,11.66,3.5,13.71,6.71-1.41,11.9.37,15.27,10.93,5.37,12.43,8.88-3.36,11.49-2.15,15.12,9.89,7.09,10.79,10.8-5.2,10.79-4.61,14.56,8.59,8.62,8.87,12.43-6.91,9.78-6.94,13.6,7,9.92,6.69,13.73-8.42,8.51-9.08,12.26,5.32,11,4.35,14.65-9.72,7-11,10.61,3.45,11.67,1.89,15.15-10.74,5.31-12.59,8.66,1.48,12.08-.63,15.25S301.17,271,298.8,274s-.53,12.17-3.14,14.95-11.87,1.54-14.7,4.1-2.53,11.91-5.57,14.23-12-.44-15.18,1.62-4.45,11.34-7.82,13.12-11.74-2.4-15.25-.9-6.25,10.45-9.87,11.65-11.19-4.29-14.89-3.39-7.89,9.27-11.66,9.86-10.32-6.08-14.13-5.79-9.3,7.84-13.12,7.81-9.18-7.7-13-8.05-10.47,6.21-14.23,5.55-7.79-9.1-11.48-10.07-11.35,4.4-15,3.12-6.18-10.26-9.66-11.82-11.92,2.48-15.26.63-4.41-11.14-7.59-13.25-12.16.47-15.15-1.9-2.52-11.71-5.31-14.32-12.07-1.53-14.64-4.36-.55-12-2.87-15-11.66-3.5-13.71-6.72,1.41-11.89-.37-15.26-10.93-5.37-12.43-8.88S26.2,229.42,25,225.8s-9.9-7.1-10.8-10.8,5.21-10.79,4.61-14.57S10.22,191.81,9.94,188s6.91-9.79,7-13.61-7-9.92-6.71-13.72,8.43-8.51,9.1-12.27S14,137.46,14.93,133.77s9.71-7,11-10.61S22.46,111.49,24,108s10.73-5.31,12.57-8.65-1.47-12.08.65-15.26,11.46-3.48,13.83-6.47.53-12.16,3.13-15,11.89-1.54,14.72-4.1,2.52-11.9,5.56-14.22,12,.43,15.18-1.62,4.45-11.34,7.82-13.13,11.74,2.41,15.25.9,6.25-10.44,9.88-11.65,11.18,4.3,14.89,3.4,7.88-9.27,11.65-9.87,10.32,6.08,14.13,5.8,9.3-7.85,13.12-7.81,9.18,7.69,13,8,10.46-6.21,14.23-5.54,7.78,9.1,11.47,10.07,11.35-4.4,15-3.13,6.18,10.26,9.67,11.82" data-v-1c84121e></path><path class="cls-2" d="M97.15,243.41h0q.61,0,2.9,18.9l-.18.18H95c-.24,0-.36-.18-.36-.52ZM93,231c-.36,0-1.42,5.11-6.55,38.11l6.17,6.51c1-7.18.91-6,1.12-6.13l.73-.16h6.12q.77,0,2,11l.16.18h7.37l-7.19-44.27.73-.35c-1.08-.82-1.64-2.45-1.64-4.86H98.8l-.18-.17-.22.17Z" data-v-1c84121e></path><path class="cls-2" d="M264.64,284.66h0l.36.25-.36,0-.13.13.35.27-.6.07v-.3Zm-1.16-1.47h0l.27.27.6-.35.12-.21-.86.07Zm1.43-4.95h0l.65-.47.13.13.07.56h-.56Zm7-10.51h0l.13-.2.09.6-.13.2Zm-5.76,4.35h0l-.48.87.17.13.27,0,.12.13-.25.29.17.14.25-.05-.21.3.3.26c.32-.4.78-.35,1.38.13l.25-.31-1.45-.42.13-.13.29-.05.13-.13-.86-.16-.34-.56.13-.13h.29Zm-5.86,7.19h0l.13-.12.51-.09-.33.43ZM259,283h0l.22.13v.6l-.13.13-.25-.26Zm1-1.55h0l.14-.17,1.07.6.34.56L262,282l.21.18-.25.25.25.26.95.25.12.13-.12.13-.3-.26-.14.13.53.74.12-.22a1.19,1.19,0,0,1,0,1.69l-.29-.27.38-.51-.47-.38v.29l-.27.35-.56-1.34-.25.34-.48-.38h.26l.27-.35-.13-.12-1-.53v-.25c-.34.4-.63.52-.85.34l-.13-.12.13-.13.25,0,.13-.18Zm6.28-10.5h0l.48.38.25-.3-.2-.13Zm-3.95,5.21h0l.13-.13.42.34,0-.25L263,276l.34.56-.12.13-.57-.22Zm4.77-6.55h0l.09.56.34-.43-.12-.13Zm-8.61,12.74h0l.26-.34.34.27v.56l-.13-.09,0-.31-.17-.12Zm14.3-18h0l.38-.47.18.12-.27.6Zm-5.91,4.6h0l.18.13.51-.33-.29-.27Zm-4.86,6h0l.35.25-.09-.82Zm-4.87,7.66h0l.4-.47.16.13,0,.56-.24,0Zm3.75-6.9h0l.09-.13.18.13.33.52-.25.31-.31-.27Zm-3.48,3.41h0l.13-.13.29.22h.27l0,.25-.13.13h.26l.3.22-.3.05-.08.16,0,.26-.49-.39Zm10.89-14h0l.13-.18.42.34v.31l-.08.13-.12-.09Zm-9,11.32h0l.33-.43.14.09,0,.29a.51.51,0,0,1,.82-.09l-.35.74-.56,0Zm13.39-15.29h0l.26-.34.68.81.13-.16.22-.62-.18-.11-.26.29-.12-.09.34-.81.31.25.12-.12.39-.77.13-.18.12.13L273.68,263l-.11-.13-.05-.25-.17-.13,0,.26-.52.68-.35-.25.31-.09.13-.13c.19-.25.06-.63-.44-1.11l.31-.05.29-.29Zm.42-1.25h0l.52.43h-.56l-.09-.25Zm-3.1,3.84h0l.13-.13.61.22-.27.34Zm-3.53,2.92h0l.14-.17-.09-.52-.14.14Zm-11.49,13.22h0l.13-.12.72-.35.31.26C255.71,280,255.31,280.06,255.09,279.92Zm20.33-23.29h0l.25-.3q.39.3-.18,1.2l-.25.31-.18-.13Zm-1.81,2.28h0l-.4.47v.27h.27l.2.12V260l.18.13.51-.6,0-.31Zm-7.92,7.37h0l.55-.09.12-.18-.56.05ZM256,278h0l.82.42a1.89,1.89,0,0,1,1.43.18l-.09-.82.13-.18.12.13V278l.31.21.13-.16v-.22l.12-.23.26.27-.34.47-.26,0,.42.34-.69.22.53.6.12.14h.31l-.13-1.08.78-.39,0-.25.18.12c.19.17.17.41,0,.69l.25.26.4-.47.16.13v.25l.27-.29.42.34-.33.47.29.22.6-.69-.29-.27c.31-.39.36-.67.17-.85l-.22.56c-.11.14-.53.06-1.25-.27l.25-.29-.16-.13-.26,0,.22-.31.25,0v-.25l.31.25,0,.26.09-.13.29.27.13-.23-.29-.2.38-.49c.21.18.18.42-.09.69l.31.27.08-.13v-.56l.13-.13v.26l.82-.09c.28.22.52.24.69.05l.17.13v.29l.13.14.78-.65.17.13v.25l.56-.09-.78-.6-.22.31-.16-.09.25-.34-.56-.17v.26l-.13.16-.12-.13v-.29l.12-.14.26,0-.56-.18-.22-.12.27-.35-.13-.09-.14.14c-.82,0-1.32.1-1.45.3l-.13.12.29.27-.12.13-.13-.13L261,275.1l.22-.34.73.34.16.13v.31l.14-.18.31.25.11-1.37.87.74-.18.56,1,0,.16.12V276a1.35,1.35,0,0,1,1.25.25l.18-.81-.25-.26c-.42.51-.81.62-1.22.31l.22-.56h-.3l0-.56.29.21.61.82.82-.65-.09-.82-.13.13c-.25.3-1.49,0-3.71-1l-.08.16v.26l.17.14.27-.05-.27.3-.56.08-.17.56-.12.14,0-.95.13-.17.27.25.25-.3v-.26l-.9-.43-1,1.61-.78.85L258,276.61l.13.13h.29l.13.12-.25.26-.3-.26-.14.18.09.31-.34-.27.25-.29-.13-.14a3,3,0,0,1-1.54,1Zm17.65-20.11h0l.48.38.05.61-.31,0-.34-.27.34,0,.13-.16-.22-.13-.25,0V258ZM272.7,259h0l.13-.17.56-.09-.13.17Zm-7.5,7.57h0l.31.27.52-.09-.14-.14-.25.05-.17-.13.22-.56-.31-.25Zm8.92-10.67h0l.21.12v.57l-.12-.13Zm-3.49,5.63h0l-.72.22.72.09c.2-.66.2-1.1,0-1.34C270.38,261,270.38,261.34,270.63,261.53Zm-17.1,16.93h0l.82-.09-.47.61Zm11.94-14.68h0l.29.25.4-.43-.56,0Zm-13.88,18.56h0l.27-.31.47.39-.56.08Zm-1,.25h0l.51-.34.09.56-.29.05Zm16.88-23.12h0l.3.21.73-.85-.55,0Zm-16.28,19.12h0l.82-.08.34.47.13-.14.52,0c-.22.29-.24.51-.05.69l-.13.18-.29-.27-.43.87-.31,0-.13-.13-.09-.29h.31l.27-.31-.27,0Zm14.39-17.66h0l.25-.08.13.12,0,.56.17.13.08-.69.26,0,.31.26.2.65.14.13.13-.17-.31-.23.13-.11.27,0,.13-.17-.05-.27-.17-.09a1.52,1.52,0,0,1-1.52-.29Zm-2.25,2.42h0l.56-.09.09-.13-.3-.26Zm7.07-8.14h0l.47.38-.56.09-.09-.27Zm-4.14,3h0l.82.18.31.56.38-.49-.3-.2.3,0,.22-.35-.18-.12-1.47.34Zm.3-.69h0l.43.34.4-.47-.27,0-.13-.09,0-.29Zm-.94.22h0l.34.25.22-.34,0-.51-.18-.09Zm2-3.36h0l.49.39.25-.09-.14.17.05.26.56,0c-.19-.18-.18-.4,0-.69l-.69,0-.16-.13.25-.34-.13-.09Zm-2.14,1.47h0l.29.2.09-.69.26.27.21-.83-.16-.12-.13.12-.18.56-.16-.12Zm-18.1,21.6h0l1.3.31,0,.22.13.12L249,278l.38,1.07.13.09-.13.12-.69-.29.22-.61-1.21-.69,0,.74-.18-.13Zm-.8-.16h0l.13-.18.07.83-.12-.13Zm4.35-7.2h0l.11.13.36-.42.2.6.58.26.11-.17,0-.52-1.16-.44Zm-5.4,5.08h0l.13-.17c.21-.25.71-.16,1.52.26l-.27.34c-.45-.4-.81-.45-1.07-.16Zm6.12-8.17h0l.17.12.52,0-.43-.39Zm-7.37,8.17h0l.65.78.35-.47-.87-.48Zm8.62-10.89h0l.3.22.25,0,.14-.13-.56-.22Zm-9,10.51h0l.42.38-.2.31-.18-.13Zm1.6-4.39h0l.29.26.27-.35-.09-.25.13-.18h.29l0-.31-.13-.11-.25.34-.13-.14Zm-.53.33h0l.35.49.25-.31-.34-.51ZM240,276.43h0l.27-.29.55.2-.26.31Zm1.34-1.89h0l.31.26.25-.09-.25.3.16.13.69-.9c.32.25.56.28.73.09l.09-.13-.26-.27a.51.51,0,0,1-.81.09c-.24.3-.46.36-.65.22Zm7.27-9h0l.53.9.68-.21-.16-.13-.61-.18v-.29l-.31-.26Zm-5.85,6.94h0l-.56,1.25.3.25.6-.74,0-.55Zm-.64.43h0l-.43.89.12.09.39-.43Zm-.94.26h0L241,274l.6.26.09-.13a.55.55,0,0,1,0-.87l-.18-.11Zm5-6.42h0l.44.34.25-.25-.13-.14Zm1.69-2.37h0l.51,0,.14-.18-.31-.2Zm-5.73,7h0l0,.31.13.13.56,0-.22-.69Zm.42-1.11h.27l.13.13,0,.26.12-.13-.16-.13.29-.09.27-.3-.35-.48Zm2.81-4.65h0l.29.21.47-.3-.11-.13ZM242,269.81h0l.44.33,0-.51-.18-.13Zm2.41-3.28h0c.49.17.81.19,1,0l.13-.18-.18-.07-.82-.17,0,.24Zm26.1-5.6h0l.39.31-.34,0-.18.18.38.29-.69.09v-.34Zm-2.54-1.85h0l.13-.17.94-.08-.17.17-.61.38Zm4-3.67h0l.82-.51.17.13.09.69h-.69Zm6.93-13.68h0l.18-.22,0,.65-.13.22ZM273.48,248h0l.38.29h-.38l-.13.18.38.64,1,.21-.13.18-.35,0-.17.18,1.77.51-.31.38c-.72-.6-1.28-.67-1.68-.2l-.38-.31.3-.34-.3,0-.22-.14.31-.38-.18-.13h-.31l-.2-.18Zm-9.17,9.29h0l.33.57-.13.21h-.29l-.14.17.18.13c.22.17.53,0,.9-.39v.31l1,.51.16.13-.29.34-.27.05.48.38.3-.34.6,1.38.27-.35V260l.51.43-.43.56.34.26a1.23,1.23,0,0,0,0-1.72l-.13.16-.56-.72.13-.17.34.25.13-.12-.13-.13-1-.27-.3-.25.26-.31-.18-.16-.42.51-.34-.6-1.16-.64Zm9.33-10.67h0l.65-.09.22.17-.3.34Zm-6,6.58h0l.36.27.64.25.13-.14-.35-.63-.18.21.05.31-.52-.45Zm7-8.19h0l.34,0,.17.16-.42.51Zm6.76,45.61h0l.43-.56.17.14-.31.69Zm-7-46.41h0l.49-.56.34.29-.61.4Zm-7.05,7.61h0l.34.31-.09-1Zm-1.34.91h0l.09.65.34.25.26-.34-.35-.56-.21-.18Zm11.71,39.45h0l.18-.22.52.47v.34l-.14.17-.17-.17Zm3.62-5.22h0l.29-.38.78.94.14-.22.29-.68-.21-.13-.3.34-.17-.13.43-.9.34.3.13-.17.43-.86.17-.22.14.17-1.43,4-.16-.13v-.35l-.22-.12.09.29-.61.78-.39-.31.31-.07.17-.18c.22-.26.07-.67-.48-1.25l.35,0,.29-.35Zm.52-1.38h0l.6.44-.69,0-.05-.34Zm-3.53,4.31h0l.13-.14.69.27-.31.38ZM274,241.38h0l.13-.16,0-.69-.18.16Zm10.37,40.39h0l.31-.34c.25.24.18.68-.22,1.34l-.31.38-.2-.18Zm-2.1,2.54h0l-.44.56.05.31h.3l.21.13v.34l.22.13.6-.69-.09-.34Zm-7.76,9.17h0l.69,0,.13-.21-.64,0ZM261,255.08h0l1,.56a1.94,1.94,0,0,1,1.69.17l-.09-1,.17-.16.17.13v.34l.39.29.12-.2v-.31l.13-.21.36.3-.49.56-.29,0,.56.43-.83.26.6.78.18.13h.34l-.16-1.33,1-.45-.09-.33.23.17c.26.2.25.49,0,.86l.3.26.48-.51.21.13v.29l.3-.34.56.43-.47.52.38.3.74-.86-.38-.31c.39-.49.47-.82.2-1l-.2.69c-.15.18-.65.06-1.52-.34l.27-.35-.22-.13h-.31l.31-.38h.29v-.31l.4.31v.3l.13-.17.38.29.18-.21-.4-.3.44-.56c.25.2.24.48,0,.86l.29.3.18-.18,0-.67.13-.13,0,.29,1-.13c.35.32.61.35.82.08l.21.18v.35l.17.12,1-.76.16.16,0,.31.69-.09-.94-.74-.31.39-.17-.16.31-.36-.69-.25,0,.3-.18.22-.16-.14v-.33l.12-.18.35-.09-.69-.22-.22-.16.31-.35-.18-.17-.17.17c-1,0-1.61.13-1.81.39l-.13.16.39.31-.17.18-.18-.18-1-1.72.3-.39.81.44.22.16.05.35.13-.22.38.31.13-1.69,1.08.91-.22.69,1.16,0,.22.13v.34A1.89,1.89,0,0,1,273,253l.16-1-.3-.27c-.51.61-1,.71-1.51.31l.27-.69h-.36l0-.65.35.31.78.94.94-.78-.09-1-.16.17c-.32.31-1.82-.08-4.48-1.2l-.13.16v.35l.21.18.3-.09-.3.38-.64.09-.27.69-.13.18.05-1.18.17-.2.3.29.31-.34v-.35l-1.08-.56-1.29,2-.91,1.07-1.68,1.69.18.12H264l.13.13-.26.35-.38-.31-.18.23.09.33-.38-.29.29-.4-.16-.12a3.82,3.82,0,0,1-1.85,1.21Zm21.27,28.07h0l.51.43,0,.64-.29.09-.38-.29.34,0,.17-.17-.22-.18-.29,0-.05-.29Zm-1,1.29h0l.13-.17.65-.08-.18.17Zm-9-43.18h0l.38.29.61-.13-.14-.11-.33,0-.23-.16.31-.69-.39-.31Zm10.58,39.66h0l.22.17.05.63-.18-.11Zm-4,6.45h0l-.87.22.87.09c.24-.75.24-1.25,0-1.52C278.58,286.71,278.58,287.12,278.9,287.37Zm-4.73,3.14h0l.38.31.43-.56-.65.08Zm2.5-5.29h0l.38.3.87-1.08-.7.09ZM274.33,287h0l.31-.05.17.13.08.7.17.11.09-.81.31,0,.38.29.25.78.18.18.13-.18-.31-.29.14-.18.3,0,.18-.18,0-.29-.22-.18a1.73,1.73,0,0,1-1.81-.31Zm-2.75,2.92h0l.69,0,.13-.16-.35-.31Zm7-9.73h0l.56.43-.63.08,0-.29Zm-3.44,3.53h0l.18-.13,1.76-.43.21.18-.29.38-.39,0,.39.31-.43.52-.4-.65Zm.38-.85h0l.56.47.44-.61-.3,0-.17-.13,0-.34Zm-1.11.25h0l.39.3.25-.35-.08-.64-.12-.12Zm2.41-4.05h0l.6-.77.18.17-.31.34.22.18.82,0c-.29.37-.31.66,0,.87l-.69.07-.09-.34.17-.22-.35.09Zm-3.44,5.38h0l.13.14.3-.39-.52-.44Zm0-2.72h0c.37.3.46.58.25.83l.36.31.13-.18c.19-.26.07-.59-.4-1l.13-.18.36,0,.11-.17-.16-.13h-.31Zm.78-.94h0l.34.31.09-.82.34.25.26-1-.22-.13-.13.18-.25.69-.22-.18Zm-1.16-1.2h0a1.6,1.6,0,0,1,.47,1.29l.16.18.14-.18-.09-1,.17-.22-.73-.22Zm-18.47-33.29h0l.16.13.44-.51.2.73.65.25.13-.16,0-.6-1.34-.49Zm.89-3.57h0l.18.17.6,0-.51-.43Zm3.41,48.4h0l.38.3.3-.08.13-.18-.69-.25ZM268,274.07h0l.16-.22.69.56-.12.22Zm-1.29.86h0l0,.3.38.31.22-.65Zm-18.35-28.29h0l.34.25.31-.34-.09-.31.18-.2h.29l0-.35-.13-.12-.3.34-.13-.14Zm-.56.34h0l.39.56.26-.34-.35-.56Zm4.22-5.89h0l.56,1,.78-.25-.18-.13-.69-.22v-.34l-.33-.26ZM263.35,277h0l.22.18.6.25.18-.16-.22-.14-.65-.26Zm-14.12-34.52h0l.48.38.29-.31-.17-.12Zm3.49,48.78h0l.65-.09.12-.18-.34-.29Zm12.1-18.43h0l-.27.64.52.39.13-.12-.09-.65ZM245.1,246.47h.3l.17.13,0,.29.13-.16-.17-.13.35,0,.25-.35-.38-.56ZM264,273.8h0l.31.31c-.3.34-.33.62-.09.82l.42-.52-.38-.61-.13-.12Zm-14.33,18.92h0l.38.29.6-.38-.17-.13Zm-5.27-46.81h0l.52.42,0-.6-.17-.16Zm2.77-3.71h0c.57.21.92.22,1.07.05l.13-.18-.17-.13-.9-.16V242Zm12.48,30.71h0l.64-.09.14-.13-.23-.17-.64-.26Zm-5-1.25h0l.36.29.78-.25-.36-.26-.64.08Zm-2.79-36.31h0l-2,13.53,2.94.42c3.53.56,5.57-1,6.15-4.78l.35-2.36c.54-3.71-1-5.81-4.48-6.34Zm-6.41-7.45h0L256,229.5q12.5,1.86,10.64,14.29l-.31,1.85c-.73,5-2.94,8.16-6.58,9.57l2,12.9-6.5,5.59-2.89-18-3.48-.51L246.12,274l-.55.43-6.88-1Zm-7,51.41h0l0-6.76-13.23-.29.36-13.91.17-.08,10.2-.14q.33-.12.18-7L225.43,251l.42-13,13-.31-.13-6.72-20.24-.29q-.47,1.36-.38,48.53Zm-41.89-37.24h0l-1.34,25.37q-.69,12.48,9.48,13.05,10.38.51,11-11.93l.87-15.56-10.17-.55-.38,7,3.05.13.47.6-.42,8.22q-.27,5.13-3.84,4.95c-2.52-.12-3.64-2.61-3.36-7.49l1.17-21.79q.47-6.59,2.15-6.49c.34-.47,1.06-.66,2.16-.6q3.57.15,3.26,6.23l-.13,2.54,6.42,0,.18-2.84q.63-12.48-9.86-13.1Q197.33,229.26,196.59,242.07Zm-4.86,42.59h0l.36.25-.36,0-.13.13.35.27-.6.07v-.3Zm-1.16-1.47h0l.27.27.6-.35.12-.21-.85.07Zm1.43-4.95h0l.65-.47.13.13.07.56h-.56Zm7.05-10.51h0l.14-.2.08.6-.13.2Zm-5.76,4.35h0l-.48.87.17.13.27,0,.12.13-.25.29.17.14.25-.05-.2.3.29.26c.32-.4.78-.35,1.38.13l.25-.31-1.45-.42.13-.13.29-.05.14-.13-.87-.16-.34-.56.13-.13h.3Zm-5.86,7.19h0l.13-.12.51-.09-.33.43ZM186.09,283h0l.22.13v.6l-.13.13-.25-.26Zm1-1.55h0l.14-.17,1.07.6.34.56.39-.47.21.18-.25.25.25.26.95.25.12.13-.12.13-.3-.26-.14.13.53.74.12-.22a1.19,1.19,0,0,1,0,1.69l-.29-.27.38-.51-.47-.38v.29l-.27.35-.55-1.34-.25.34-.49-.38h.27L189,283l-.13-.12-1-.53v-.25c-.34.4-.63.52-.85.34l-.13-.12.13-.13.25,0,.13-.18Zm6.28-10.5h0l.48.38.25-.3-.2-.13Zm-3.95,5.21h0l.29.25.57.22.12-.13-.34-.56-.13.18,0,.25-.42-.34Zm4.77-6.55h0l.09.56.34-.43-.12-.13Zm-8.61,12.74h0l.26-.34.34.27v.56l-.13-.09,0-.31-.17-.12Zm14.3-18h0l.38-.47.18.12-.26.6ZM194,269h0l.18.13.51-.33-.29-.27Zm-4.86,6h0l.35.25-.09-.82Zm-4.87,7.66h0l.4-.47.16.13,0,.56-.26,0Zm3.75-6.9h0l0,.56.31.27.25-.31-.33-.52-.18-.13Zm-3.48,3.41h0l.13-.13.29.22h.27l0,.25-.13.13h.26l.3.22-.3.05-.08.16,0,.26-.48-.39Zm10.89-14h0l.13-.18.43.34v.31l-.09.13-.12-.09Zm-8.95,11.32h0l.42.64.56,0,.35-.74a.51.51,0,0,0-.82.09l0-.29-.14-.09Zm13.39-15.29h0l.26-.34.68.81.13-.16.22-.62-.18-.11-.26.29-.12-.09.34-.81.31.25.12-.12.39-.77.14-.18.11.13L200.77,263l-.11-.13,0-.25-.18-.13,0,.26-.52.68-.35-.25.31-.09.13-.13c.19-.25.06-.63-.44-1.11l.31-.05.3-.29Zm.42-1.25h0l.52.43h-.56l-.09-.25Zm-3.1,3.84h0l.13-.13.61.22-.27.34Zm-3.53,2.92h0l.14-.17-.09-.52-.13.14Zm-11.49,13.22h0l.13-.12.72-.35.31.26C182.8,280,182.4,280.06,182.18,279.92Zm20.33-23.29h0l.25-.3q.39.3-.18,1.2l-.25.31-.17-.13Zm-1.81,2.28h0l-.4.47v.27h.27l.2.12V260l.18.13.51-.6,0-.31Zm-7.92,7.37h0l.56-.09.11-.18-.56.05ZM183.08,278h0l.82.42a1.89,1.89,0,0,1,1.43.18l-.09-.82.13-.18.12.13V278l.31.21.13-.16v-.22l.12-.23.26.27-.34.47-.26,0,.42.34-.69.22.53.6.12.14h.31l-.13-1.08.77-.39,0-.25.18.12c.19.17.17.41-.05.69l.25.26.4-.47.16.13v.25l.27-.29.42.34-.33.47.29.22.6-.69-.29-.27c.31-.39.37-.67.17-.85l-.22.56c-.11.14-.53.06-1.25-.27l.25-.29-.16-.13-.26,0,.22-.31.25,0v-.25l.31.25,0,.26.09-.13.29.27.14-.23-.3-.2.38-.49c.21.18.18.42-.08.69l.3.27.08-.13v-.56l.13-.13v.26l.82-.09c.28.22.52.24.69.05l.16.13v.29l.14.14.78-.65.17.13v.25l.56-.09-.78-.6-.22.31-.16-.09.25-.34-.56-.17v.26L191,277l-.12-.13v-.29l.12-.14.26,0-.55-.18-.23-.12.27-.35-.13-.09-.14.14c-.82,0-1.32.1-1.45.3l-.13.12.29.27-.12.13-.13-.13-.82-1.38.22-.34.73.34.17.13v.31l.13-.18.31.25.11-1.37.87.74-.18.56,1,0,.16.12V276a1.35,1.35,0,0,1,1.25.25l.18-.81-.25-.26c-.41.51-.81.62-1.22.31l.22-.56h-.3l0-.56.29.21.61.82.82-.65-.09-.82-.13.13c-.25.3-1.49,0-3.7-1l-.09.16v.26l.17.14.27-.05-.27.3-.55.08-.18.56-.12.14,0-.95.13-.17.27.25.25-.3v-.26l-.9-.43-1,1.61-.78.85-1.33,1.38.13.13h.29l.13.12-.25.26-.3-.26L185,277l.09.31-.34-.27.25-.29-.13-.14a3,3,0,0,1-1.54,1Zm17.65-20.11h0l.48.38,0,.61-.31,0-.34-.27.34,0,.13-.16-.22-.13-.25,0V258Zm-.94,1.16h0l.13-.17.56-.09-.13.17Zm-7.5,7.57h0l.31.27.52-.09-.14-.14-.25.05-.17-.13.22-.56-.31-.25Zm8.92-10.67h0l.21.12v.57l-.12-.13Zm-3.49,5.63h0l-.72.22.72.09c.2-.66.2-1.1,0-1.34C197.47,261,197.47,261.34,197.72,261.53Zm-17.1,16.93h0l.83-.09L181,279Zm11.94-14.68h0l.29.25.4-.43-.56,0Zm-13.88,18.56h0L179,282l.47.39-.56.08Zm-1,.25h0l.51-.34.09.56-.29.05Zm16.88-23.12h0l.3.21.73-.85-.55,0ZM178.3,278.59h0l.82-.08.34.47.13-.14.52,0c-.22.29-.24.51-.05.69l-.13.18-.29-.27-.43.87-.31,0-.13-.13-.09-.29H179l.27-.31-.27,0Zm14.39-17.66h0l.25-.08.13.12.05.56.17.13.08-.69.26,0,.31.26.2.65.14.13.13-.17-.31-.23.13-.11.27,0,.13-.17,0-.27-.17-.09a1.52,1.52,0,0,1-1.52-.29Zm-2.25,2.42h0l.56-.09.09-.13-.3-.26Zm7.07-8.14h0l.47.38-.56.09-.09-.27Zm-4.14,3h0l.82.18.31.56.38-.49-.3-.2.3,0,.22-.35-.18-.12-1.47.34Zm.3-.69h0l.43.34.4-.47-.27,0-.13-.09,0-.29Zm-.94.22h0l.34.25.22-.34,0-.51-.18-.09Zm2-3.36h0l.49.39.25-.09-.14.17,0,.26.56,0c-.19-.18-.18-.4,0-.69l-.69,0-.16-.13.25-.34-.13-.09Zm-2.14,1.47h0l.29.2.09-.69.26.27.21-.83-.16-.12-.13.12-.18.56-.16-.12Zm-18.1,21.6h0l1.3.31,0,.22.13.12.14-.12.38,1.07.13.09-.13.12-.69-.29.22-.61-1.21-.69,0,.74-.18-.13Zm-.8-.16h0l.13-.18.07.83-.12-.13Zm4.35-7.2h0l.11.13.36-.42.2.6.58.26.11-.17,0-.52-1.16-.44Zm-5.4,5.08h0l.31.27c.27-.29.62-.24,1.07.16l.27-.34c-.81-.42-1.31-.51-1.51-.26Zm6.12-8.17h0l.17.12.52,0-.43-.39Zm-7.37,8.17h0l.65.78.35-.47-.86-.48ZM180,264.29h0l.3.22.25,0,.14-.13-.56-.22Zm-9,10.51h0l0,.56.18.13.2-.31Zm1.6-4.39h0l.29.26.27-.35-.09-.25.13-.18h.3l-.05-.31-.13-.11-.25.34-.13-.14Zm-.53.33h0l.35.49.25-.31-.34-.51Zm-4.91,5.69h0l.56.22.26-.31-.55-.2Zm1.34-1.89h0l.31.26.25-.09-.25.3.16.13.69-.9c.32.25.56.28.73.09l.09-.13-.26-.27a.51.51,0,0,1-.81.09c-.24.3-.46.36-.65.22Zm7.27-9h0l.53.9.68-.21-.16-.13-.61-.18v-.29l-.31-.26Zm-5.85,6.94h0l.3.21,0,.55-.6.74-.29-.25Zm-.64.43h0l.09.55-.4.43-.12-.09Zm-.94.26h0l-.18.81.6.26.09-.13a.55.55,0,0,1,0-.87l-.18-.11Zm5-6.42h0l.44.34.25-.25-.13-.14Zm1.69-2.37h0l.51,0,.14-.18-.31-.2Zm-5.73,7h0l0,.31.13.13.56,0-.22-.69Zm.42-1.11h.27l.13.13,0,.26.12-.13-.16-.13.29-.09.27-.3-.35-.48Zm2.81-4.65h0l.3.21.47-.3-.12-.13ZM169,269.81h0l.44.33,0-.51-.18-.13Zm2.41-3.28h0c.49.17.81.19,1,0l.13-.18-.18-.07-.82-.17,0,.24Zm26.1-5.6h0l.39.31-.34,0-.18.18.38.29-.69.09v-.34ZM195,259.08h0l.13-.17.94-.08-.17.17-.61.38Zm4-3.67h0l.82-.51.17.13.09.69h-.69Zm6.93-13.68h0l.18-.22,0,.65-.13.22ZM200.57,248h0l.38.29h-.38l-.14.18.39.64,1,.21-.13.18-.35,0-.17.18,1.77.51-.31.38c-.72-.6-1.28-.67-1.68-.2l-.38-.31.3-.34-.3,0-.22-.14.31-.38-.18-.13h-.3L200,249Zm-9.18,9.29h0l.34.57-.13.21h-.29l-.13.17.17.13c.22.17.53,0,.9-.39v.31l1,.51.16.13-.29.34-.27.05.49.38.29-.34.6,1.38.27-.35V260l.51.43-.43.56.34.26a1.23,1.23,0,0,0,0-1.72l-.13.16-.56-.72.13-.17.34.25.13-.12-.13-.13-1-.27-.3-.25.26-.31-.18-.16-.42.51-.34-.6-1.16-.64Zm9.34-10.67h0l.65-.09.22.17-.3.34Zm-6,6.58h0l.36.27.64.25.13-.14-.35-.63-.18.21,0,.31-.52-.45Zm7-8.19h0l.34,0,.17.16-.42.51Zm6.76,45.61h0l.43-.56.17.14-.31.69Zm-7-46.41h0l.49-.56.34.29-.61.4Zm-7.05,7.61h0l.34.31-.09-1Zm-1.34.91h0l.09.65.34.25.26-.34-.35-.56-.21-.18Zm11.72,39.45h0l.17-.22.52.47v.34l-.14.17-.17-.17Zm3.61-5.22h0l.29-.38.78.94.14-.22.29-.68-.2-.13-.31.34-.17-.13.43-.9.34.3.13-.17.43-.86.17-.22.14.17-1.43,4-.16-.13v-.35l-.22-.12.09.29-.61.78-.39-.31.31-.07.17-.18c.22-.26.07-.67-.48-1.25l.35,0,.29-.35Zm.52-1.38h0l.6.44-.69,0-.05-.34Zm-3.53,4.31h0l.13-.14.69.27-.31.38ZM201,241.38h0l.13-.16,0-.69-.18.16Zm10.37,40.39h0l.31-.34c.25.24.18.68-.22,1.34l-.31.38L211,283Zm-2.1,2.54h0l-.44.56,0,.31h.3l.21.13v.34l.22.13.6-.69-.08-.34Zm-7.76,9.17h0l.69,0,.14-.21-.65,0Zm-13.43-38.4h0l1,.56a1.94,1.94,0,0,1,1.69.17l-.09-1,.18-.16.16.13v.34l.39.29.12-.2v-.31l.13-.21.36.3-.49.56-.29,0,.56.43-.83.26.61.78.17.13h.34l-.16-1.33,1-.45-.09-.33.23.17c.26.2.25.49-.05.86l.3.26.48-.51.21.13v.29l.31-.34.55.43-.47.52.38.3.74-.86-.38-.31c.4-.49.47-.82.2-1l-.2.69c-.15.18-.65.06-1.52-.34l.27-.35-.22-.13h-.31l.31-.38H194v-.31l.4.31v.3l.13-.17.38.29.18-.21-.4-.3.44-.56c.25.2.24.48,0,.86l.29.3.18-.18,0-.67.13-.13,0,.29,1-.13c.35.32.61.35.82.08l.21.18v.35l.17.12,1-.76.16.16,0,.31.7-.09-.95-.74-.31.39-.17-.16.31-.36-.69-.25,0,.3-.18.22-.16-.14v-.33l.12-.18.35-.09-.69-.22-.22-.16.31-.35-.18-.17-.17.17c-1,0-1.61.13-1.81.39l-.13.16.39.31-.17.18-.18-.18-1-1.72.3-.39.81.44.22.16,0,.35.13-.22.38.31.14-1.69,1.07.91-.22.69,1.16,0,.22.13v.34a1.88,1.88,0,0,1,1.56.33l.16-1-.3-.27c-.51.61-1,.71-1.51.31l.27-.69h-.36l0-.65.35.31.78.94.94-.78-.09-1-.16.17c-.32.31-1.82-.08-4.48-1.2l-.13.16v.35l.22.18.29-.09-.29.38-.65.09-.27.69-.13.18.05-1.18.17-.2.3.29.31-.34v-.35l-1.08-.56-1.29,2-.91,1.07-1.68,1.69.18.12h.38l.13.13-.26.35-.38-.31-.18.23.09.33-.38-.29.29-.4-.16-.12a3.82,3.82,0,0,1-1.85,1.21Zm21.27,28.07h0l.51.43,0,.64-.29.09-.38-.29.34,0,.17-.17-.22-.18-.29,0-.05-.29Zm-1,1.29h0l.13-.17.65-.08-.18.17Zm-9-43.18h0l.39.29.6-.13-.13-.11-.34,0-.22-.16.3-.69-.39-.31Zm10.58,39.66h0l.23.17,0,.63-.18-.11ZM206,287.37h0l-.87.22.87.09c.24-.75.24-1.25,0-1.52C205.67,286.71,205.67,287.12,206,287.37Zm-4.73,3.14h0l.38.31.43-.56-.65.08Zm2.5-5.29h0l.38.3.87-1.08-.69.09ZM201.42,287h0l.31-.05.18.13.07.7.18.11.08-.81.31,0,.38.29.25.78.18.18.13-.18-.31-.29.14-.18.3,0,.18-.18,0-.29-.22-.18a1.73,1.73,0,0,1-1.81-.31Zm-2.75,2.92h0l.69,0,.14-.16-.36-.31Zm7-9.73h0l.56.43-.63.08-.05-.29Zm-3.44,3.53h0l.18-.13,1.76-.43.21.18-.29.38-.39,0,.39.31-.43.52-.4-.65Zm.39-.85h0l.55.47.44-.61-.3,0-.17-.13,0-.34Zm-1.12.25h0l.4.3.25-.35-.09-.64-.12-.12Zm2.41-4.05h0l.6-.77.18.17-.31.34.22.18.82,0c-.29.37-.31.66,0,.87l-.69.07-.09-.34.18-.22-.36.09Zm-3.44,5.38h0l.13.14.3-.39-.52-.44Zm0-2.72h0c.37.3.46.58.25.83l.36.31.13-.18c.19-.26.07-.59-.4-1l.13-.18.36,0,.11-.17-.16-.13H201Zm.78-.94h0l.34.31.09-.82.34.25.26-1-.22-.13-.13.18-.25.69-.22-.18Zm-1.16-1.2h0a1.6,1.6,0,0,1,.47,1.29l.16.18.14-.18-.09-1,.17-.22-.73-.22Zm-18.47-33.29h0l.16.13.44-.51.2.73.65.25.13-.16,0-.6-1.34-.49Zm.89-3.57h0l.18.17.6,0-.51-.43Zm3.41,48.4h0l.39.3.29-.08.13-.18-.69-.25Zm9.13-17.05h0l.16-.22.69.56-.12.22Zm-1.29.86h0l0,.3.38.31.22-.65Zm-18.35-28.29h0l.34.25.31-.34-.09-.31.18-.2h.29l0-.35-.13-.12-.3.34-.13-.14Zm-.55.34h0l.38.56.26-.34-.35-.56Zm4.21-5.89h0l.56,1,.78-.25-.18-.13-.69-.22v-.34l-.33-.26ZM190.44,277h0l.22.18.6.25.18-.16-.22-.14-.65-.26Zm-14.12-34.52h0l.48.38.29-.31-.17-.12Zm3.49,48.78h0l.65-.09.12-.18-.34-.29Zm12.1-18.43h0l-.26.64.51.39.13-.12-.08-.65Zm-19.72-26.35h.31l.16.13,0,.29.13-.16-.17-.13.35,0,.25-.35-.38-.56Zm18.9,27.33h0l.3.31c-.29.34-.32.62-.08.82l.42-.52-.38-.61-.13-.12Zm-14.33,18.92h0l.38.29.6-.38-.18-.13Zm-5.26-46.81h0l.51.42,0-.6-.17-.16Zm2.76-3.71h0c.57.21.92.22,1.07.05l.13-.18-.17-.13-.9-.16V242Zm12.48,30.71h0l.64-.09.14-.13-.23-.17-.64-.26Zm-5-1.25h0l.36.29.78-.25-.36-.26-.65.08ZM179,235.35h0l-2,13.53,2.94.42c3.53.56,5.57-1,6.15-4.78l.35-2.36c.54-3.71-1-5.81-4.49-6.34Zm-6.41-7.45h0l10.54,1.6q12.49,1.86,10.64,14.29l-.31,1.85c-.73,5-2.94,8.16-6.58,9.57l-.22,0,3.45,21.91-7.67-1.16-2.93-20.2-3.48-.51L173.22,274l-.56.43-6.88-1Zm-6.41,56.76h0l.34.25-.34,0-.13.13.34.27-.6.07v-.3ZM165,283.19h0l.12-.22.87-.07-.14.21-.6.35Zm2.41-3.39h0l.34.25h.56l0-.6-.17-.14Zm6.07-12.07h0l.12-.2.09.6-.12.2Zm-4.7,5.51h0l-.52.87.23.13h.25l.13.14-.25.33.2.14.27-.09-.27.34.36.26c.33-.4.82-.35,1.45.18l.26-.36-1.51-.42.09-.13.35-.09.12-.13-.94-.17-.34-.6.12-.13h.35Zm-6.23,7.68h0l.29.25.38-.48-.56.09Zm-2,2.1h0l.2.13v.6l-.11.13-.27-.26Zm1-1.55h0l.35.52-.13.18-.27,0-.13.13.13.12c.24.18.52.06.87-.34v.25l.94.53.13.12-.25.35h-.26l.47.38.26-.34.56,1.34.25-.35v-.29l.49.38-.4.51.31.27a1.23,1.23,0,0,0,0-1.69l-.13.22-.52-.74.13-.13.3.26.13-.13-.13-.13-.94-.25-.27-.26.27-.25-.22-.18-.39.47-.35-.56-1.07-.6ZM169,272h0l.55-.09.18.13-.27.36Zm-4.27,5.55h0l.31.27.6.25.12-.16-.34-.56-.13.16.05.31-.48-.4Zm5.13-7h0l.3-.05.17.12-.38.49Zm-9.77,11.74h0l.25-.34.35.27v.56l-.13-.09-.05-.31-.17-.12Zm14.28-18h0l.4-.47.16.12-.25.6Zm-4.73,5.51h0l.38-.47.36.25-.56.35Zm-5.2,6.41h0l.25-.6.09.87Zm-5.69,6.34h0l.38-.47.18.13,0,.56-.26,0Zm4.44-5.47h0l.12-.18.17.18.39.51-.3.36-.31-.27Zm-3.75,3.61h0l.43.87.47.38-.09-.31.18-.16h.3l-.35-.26h-.25l.12-.13-.07-.3-.27.05-.35-.31Zm11.72-15h0l.11-.17.49.38v.31l-.13.16-.14-.12ZM161.47,278h0l.4-.49.16.13,0,.31a.54.54,0,0,1,.87-.13l-.35.78-.59.09Zm12.83-16.76h0l.26-.34.69.81.14-.16.2-.62-.16-.11-.26.29L175,261l.35-.81.29.25.13-.12.39-.77.13-.18.13.13L175.21,263l-.13-.13,0-.25-.18-.13,0,.26-.51.68-.34-.25.29-.09.14-.13c.2-.25.06-.63-.43-1.11l.29-.05.31-.29Zm.44-1.25h0l.51.43h-.55l-.09-.25Zm-3.1,3.84h0l.12-.13.62.22-.27.34Zm-2.41,3.66h0l.12-.18-.08-.56-.13.14Zm-12.32,14.21h0c.22.13.65.06,1.25-.26l-.35-.27-.81.35Zm20-25h0l.27-.3q.38.3-.18,1.2l-.27.31-.16-.13Zm-1.81,2.28h0l-.38.47v.27H175l.22.12V260l.18.13.51-.6,0-.31ZM168.27,267h0l.14-.18.6-.09-.13.18Zm-10.42,12.52h0l.27-.29a3.46,3.46,0,0,0,1.63-1.09l.13.13-.26.31.35.29,0-.29.13-.18.34.27.22-.31-.14-.13h-.3l-.17-.13,1.46-1.46.82-1,1.12-1.72,1,.48v.3l-.26.3-.26-.25-.17.17,0,1,.13-.17.21-.61.6-.08.26-.3-.3.05-.17-.14v-.3l.12-.17c2.37,1,3.68,1.37,4,1.08l.13-.14.09.87-.87.65-.69-.82-.25-.27v.6l.34,0-.26.61c.44.36.88.27,1.33-.27l.27.27-.18.85a1.66,1.66,0,0,0-1.34-.29l0-.27-.16-.13-1-.05.22-.6-1-.81-.12,1.5-.31-.25-.17.16v-.29l-.16-.13-.74-.39-.31.34.91,1.52.18.12.12-.12-.34-.27.13-.17c.18-.22.71-.34,1.59-.34L166,277l.13.13-.26.29.18.18.64.18-.31.08-.11.14v.29l.16.13.13-.17V278l.6.16-.25.35.12.13.26-.35.83.69-.6,0v-.26l-.18-.12-.82.63-.18-.07v-.35l-.16-.13c-.18.23-.43.22-.74-.05l-.86.09-.05-.29-.12.17,0,.56-.13.16-.31-.25c.26-.32.29-.56.09-.73l-.43.47.34.26-.13.16-.34-.25-.14.18v-.31l-.33-.25,0,.25-.31.05-.25.33.25,0,.22.13-.26.31c.78.34,1.22.44,1.34.3l.22-.61c.22.18.16.47-.22.91l.35.3-.65.73-.35-.25.43-.48-.52-.38-.25.33v-.29l-.17-.13-.43.47-.27-.21c.27-.35.28-.6.05-.78l-.18-.13.05.31-.86.38.16,1.16h-.33l-.14-.13-.55-.69.73-.21-.47-.39h.25l.44-.52-.31-.25-.13.16v.31l-.13.18-.34-.27v-.29l-.13-.13-.13.16.08.87a1.83,1.83,0,0,0-1.5-.18Zm17.32-21.65h0l.47.38,0,.61-.29,0-.35-.27.35,0,.11-.16-.2-.13-.26,0V258Zm-.94,1.16h0l.11-.17.56-.09-.11.17Zm-6.51,8.31h0l.35.26.56-.09-.13-.13-.31,0-.17-.13.25-.6-.33-.29Zm7.92-11.41h0l.22.12v.57l-.14-.13Zm-3.49,5.63h0l-.73.22.73.09c.21-.66.21-1.1,0-1.34C171.89,261,171.89,261.34,172.15,261.53Zm-16.93,18.52h0l.91-.09-.51.65ZM168,264.29h0l.34.3.39-.47-.61,0Zm-14.9,18h0l.18.16.56-.08-.47-.39Zm-1,.25h0l.51-.34.09.56-.31.05Zm18.07-22.91h0l.31.26.77-.94-.56.05Zm-17.47,20.5h0l.85-.09.4.52.12-.12.55-.09c-.25.31-.26.56,0,.72l-.13.22-.35-.29-.47.9-.29.08-.18-.13-.05-.34h.34l.27-.35-.31.09Zm15.4-18.94h0l.31-.05.13.09,0,.6.16.14.09-.74h.26l.34.25.22.69.18.13.11-.17-.29-.25.13-.13.25-.05.13-.18v-.25l-.17-.13a1.53,1.53,0,0,1-1.63-.31Zm-2.41,2.58h0l.6-.09.14-.13-.34-.25Zm6.2-8.61h0l.47.38-.55.09-.09-.27Zm-3.05,3.14h0l.13-.13,1.54-.35.22.13-.25.31-.35.09.35.25-.39.47-.34-.6Zm.35-.77h0l.47.42.38-.56-.25.09-.17-.13,0-.34Zm-1,.26h0l.31.25.29-.34-.08-.56-.17-.13Zm2.12-3.59h0l.51-.69.18.14-.27.35.18.12.73,0c-.26.32-.27.57,0,.78l-.6,0,0-.25.14-.22-.31.09ZM167.29,259h0l.18.12.25-.3-.48-.38Zm0-2.37h0c.34.25.43.5.25.72l.31.27.13-.18c.17-.19.06-.47-.35-.81l.13-.17.27-.05.12-.13-.12-.13h-.31Zm.69-.82h0l.3.25.13-.72.27.25.2-.86-.17-.13-.12.13-.18.61-.22-.13ZM148.64,279h0l1.38.29,0,.31.14.09.13-.14.42,1.12.14.13-.14.18-.78-.35.27-.65-1.25-.72-.09.72-.17-.12Zm-.9-.18h0l.13-.21.12.9-.16-.13ZM167,254.74h0a1.4,1.4,0,0,1,.45,1.12l.11.13.14-.18-.09-.87.13-.16-.6-.22ZM152.39,271.1h0l.22-.6,1.25.42,0,.6-.13.14-.61-.22-.22-.7-.38.49Zm-5.77,5.47h0l.17-.23c.2-.25.73-.14,1.6.31l-.27.34c-.51-.42-.89-.48-1.16-.16Zm6.59-8.84h0l.25-.25.48.38h-.53Zm-7.88,8.79h0l.13-.13.94.44-.42.52Zm9.22-11.67h0l.11-.22.61.27-.12.17-.27.05Zm-9.7,11.29h0l.48.38-.26.34-.18-.12ZM163.67,251h0l.14-.22.67.52-.12.21Zm-1.25.81h0l.61-.09-.18.65-.34-.25Zm-15.88,19.59h0l.38-.76.13.11.29-.33.14.13,0,.34h-.29l-.13.17,0,.3-.27.31Zm-.52.35h0l.25-.3.35.51-.26.35Zm-5.3,6.12h0l.3-.31.61.22-.27.34Zm1.42-2h0l.25-.34c.24.19.49.12.74-.22a.53.53,0,0,0,.86-.09l.3.27-.12.16c-.18.21-.43.18-.74-.07l-.77,1-.18-.13.31-.34-.31,0Zm7.83-9.64h0l.14-.18.34.27v.29l.6.22.22.13-.74.21Zm-6.29,7.41h0l.31.25.09.6-.65.78-.35-.25Zm-.69.51h0l.09.6-.38.47-.18-.13Zm16.29-20.37h0l.13-.13.6.22.17.18-.12.13-.6-.27ZM142,274.38h0l.26-.05.21.12a.58.58,0,0,0,0,.91l-.13.13-.6-.22Zm5.33-6.9h0l.56,0,.14.13-.21.29Zm1.78-2.5h0l.39-.51.29.25-.12.18Zm-6.16,7.5h0l.61-.31.2.69-.6.09-.18-.13Zm17.7-22.69h0l.29.25.05.6-.13.13-.47-.38Zm-17.18,21.48h0l.65-.77.33.51-.26.34-.34,0,.22.13-.13.14-.09-.27-.13-.12Zm16.4-20.54h0l.13-.14.14.14.33.56-.38.47c-.23-.17-.22-.43.05-.77Zm-13.43,15.55h0l.73-.22.12.13-.51.34Zm-3.66,4.46h0l.25-.33.22.17v.56Zm2.59-3.48h0l.11-.17v-.25l.91.17.14.12-.14.13Q146.19,267.53,145.38,267.26Zm10.42-17.4h0l-.09-.59.6.25.18.13-.09.14Zm-4.71-1.16h0l.14-.12.6-.09.31.25-.69.22Zm-9.3-16.18h0l1.17,38.4q.82,6.81,8.69,8.53l3.5-.14.94-.07q8-1,8.57-10.6l-.94-36.9-7,.22q1,34.47.6,38.83a4.61,4.61,0,0,1-2.63,1.94l-.64,0c-2.78,0-4.29-1.08-4.56-3.27l-.65-37.25Zm-15.35,25.19h2c3.19,0,4.79,2.11,4.79,6.36v2.46q0,5.87-4.79,5.86h-2l-.53-.56V258.22Zm0-20H128q4.26,0,4.26,6.55c0,4.25-1.53,6.36-4.6,6.36h-1.25l-.53-.51V238.25Zm-7.24-7.06v48.83h7.24q9.51,0,11.32-4.09c1.44-1.78,2.16-4.5,2.16-8.14v-2.28q0-8.67-4.79-10.8c-.37,0-.56-.12-.56-.36,3-1.41,4.44-4.35,4.44-8.81v-1.61q0-9.44-5.81-12.05a19.55,19.55,0,0,0-5.35-.69Z" data-v-1c84121e></path><path class="cls-2" d="M134.52,199.47h0L133,210.84c0,.21.07.32.22.32h3l.11-.11q-1.39-11.58-1.77-11.58M132,191.88h3.29l.14-.1.11.1h2c0,1.48.34,2.47,1,3l-.45.21,4.4,27.11H138l-.1-.11c-.5-4.48-.9-6.72-1.22-6.72h-3.74l-.45.1a57.68,57.68,0,0,0-1.11,6.73h-4.4Q131.64,191.88,132,191.88Zm-14.6-.63-1.24,28.92q11.05.63,11.9.45c.22-2.69.19-4.08-.11-4.19l-7-.43,1-24.62-.11,0C119,191.09,117.47,191.06,117.39,191.25Z" data-v-1c84121e></path><path class="cls-2" d="M234.2,221.46h0l0-4.12-8.05-.18.21-8.47.11-.05,6.21-.08c.14-.06.17-1.47.11-4.26l-6.56-.09.26-7.9,7.92-.19-.08-4.09L222,191.85q-.28.83-.23,29.57Zm-29-29.35h0v29.43h4.28V203.13h.13q.21,0,4.9,16.16a7.71,7.71,0,0,0,.87,2.25h4.38V192.11h-4.27v16.58h-.11q-.31-.27-4.93-16.16l-.1-.11c0-.2-.07-.31-.22-.31Zm-7.58,7.48h0l-1.52,11.3c0,.21.07.32.22.32h3l.1-.11Q198,199.6,197.66,199.59ZM195.15,192h3.27l.14-.1.11.1h2c0,1.47.34,2.46,1,3l-.45.22,4.38,27h-4.49l-.1-.11q-.74-6.69-1.21-6.69H196l-.45.1a56.23,56.23,0,0,0-1.1,6.7h-4.38Q194.81,192,195.15,192ZM182,208.3h1.2q2.93,0,2.92,3.88v1.49q0,3.57-2.92,3.57H182l-.32-.34v-8.29Zm0-12.21h1c1.73,0,2.6,1.34,2.6,4s-.93,3.87-2.81,3.87H182l-.32-.31v-7.21Zm-4.41-4.29h0v29.74H182q5.79,0,6.9-2.49a7.78,7.78,0,0,0,1.31-5v-1.38q0-5.28-2.91-6.59c-.23,0-.34-.07-.34-.21q2.7-1.29,2.7-5.37v-1q0-5.75-3.54-7.34a11.66,11.66,0,0,0-3.26-.42ZM170,199.59h0l-1.52,11.3c0,.21.07.32.22.32h3l.11-.11Q170.35,199.6,170,199.59ZM167.46,192h3.27l.14-.1.11.1h2c0,1.47.34,2.46,1,3l-.45.22,4.38,27h-4.49l-.09-.11q-.75-6.69-1.21-6.69h-3.73l-.45.1a56.23,56.23,0,0,0-1.1,6.7h-4.38Q167.12,192,167.46,192Zm-7.34.45h-.29l-1.81-1-2.71,0a6.73,6.73,0,0,0-3.19,1c-.23,0-.55.31-.94,1l-.14,0,0,0a9.51,9.51,0,0,0-1.74,4.09l-.26,18.35a6.47,6.47,0,0,0,2.63,5c.91.26,1.36.54,1.36.85l.1-.11h.11c2.1.11,3.15.07,3.15-.11l.1.22.42.1a8.21,8.21,0,0,0,3.57-1.47,7.24,7.24,0,0,0,2.1-5.35,1.22,1.22,0,0,1,.74-.32v-.32h-.11l-.32.32-.31-.1v-3.26l-3.78-.2h-.53l-.09.42.09,2.82c-.22,2.18-1,3.26-2.2,3.26h-.31q-2,0-2.31-2.73l.11-.53-.11-1,.11-.42-.11-.74v-8.81q.08-8.58,3.15-7.56c1.12.46,1.67,1.79,1.67,4v2.1l4.31-.21V199.3a8,8,0,0,0-1.57-5.25Z" data-v-1c84121e></path><path class="cls-2" d="M101.19,211.12a4.5,4.5,0,1,0-4.5-4.5,4.52,4.52,0,0,0,4.5,4.5" data-v-1c84121e></path><path class="cls-2" d="M86.45,209.52a2.9,2.9,0,1,0-2.9-2.9,2.9,2.9,0,0,0,2.9,2.9" data-v-1c84121e></path><path class="cls-2" d="M75.77,208.16a1.54,1.54,0,1,0-1.55-1.54,1.55,1.55,0,0,0,1.55,1.54" data-v-1c84121e></path><path class="cls-2" d="M249.39,211.12a4.5,4.5,0,1,0-4.5-4.5,4.52,4.52,0,0,0,4.5,4.5" data-v-1c84121e></path><path class="cls-2" d="M264.13,209.52a2.9,2.9,0,1,0-2.9-2.9,2.9,2.9,0,0,0,2.9,2.9" data-v-1c84121e></path><path class="cls-2" d="M274.82,208.16a1.54,1.54,0,1,0-1.54-1.54,1.54,1.54,0,0,0,1.54,1.54" data-v-1c84121e></path><path class="cls-3" d="M189.05,184.8h0c-6.12-.88,1.24-3.73,0,0m-5.32-17.19h0C182.3,165.19,187.32,165.1,183.73,167.61ZM182.25,171h0c-.89-.17-.08-.94,0,0,1.92,1,1.63,2.82,2.12,4.36C180.37,174.2,183.17,173.34,182.25,171Zm-1.44,1.5h0c-.5.2-.75-.65-.48-.76C180.85,171.55,181.06,172.39,180.81,172.5Zm-2.92,4.88h0c-.51.2-.74-.64-.48-.75C177.91,176.45,178.14,177.29,177.89,177.38Zm-5.07,2.43h0c-.84-.38-.23-1.31.49-1.13C173.54,179.31,173.75,179.92,172.82,179.81ZM163,178.43h0c-.5.19-.74-.65-.49-.76C163,177.48,163.29,178.33,163,178.43Zm-.5,1.13h0c-.49.2-.73-.66-.48-.75C162.56,178.61,162.8,179.45,162.53,179.56Zm-2.19-20.76h0c-.82-.23-.16-.69.25-.58C161.41,158.45,160.75,158.91,160.34,158.8Zm-.18,18.87h0c-.81-.23-.16-.68.23-.58C161.22,177.31,160.56,177.76,160.16,177.67Zm-.69-27.95h0c.49-.19.75.67.48.77C159.45,150.68,159.21,149.84,159.47,149.72Zm-.31,8.12h0c-.49.19-.75-.65-.48-.75C159.18,156.9,159.42,157.74,159.16,157.84Zm-.78,5.47h0C159.8,165.74,154.78,165.83,158.38,163.31Zm-1,4.13h0c-.8-.21-.14-.66.24-.55C158.45,167.11,157.78,167.56,157.38,167.44Zm-2.48,9.43h0c-.85-.38-.24-1.32.48-1.13C156.31,176.27,155.11,176.22,154.9,176.87Zm-.79-18.49h0c-.92-.53.3-.48.51-1.13C155.45,157.62,154.86,158.56,154.11,158.38Zm-.65-5.87h0c.5-.18.75.67.47.77C153.45,153.48,153.2,152.63,153.46,152.51Zm-.73,25.67h0c-.81-.21-.14-.67.25-.57C153.78,177.83,153.13,178.29,152.73,178.18ZM158,149.34h0c.5-.19.74.65.48.77C158,150.29,157.78,149.45,158,149.34Zm-7.62,19.39h0c-.21.7-1.18.06,0,0C150.76,166.21,152.62,169.18,150.42,168.73Zm12.33-11.81h0c.49-.19.73.65.48.75C162.73,157.86,162.48,157,162.75,156.92Zm6.8-10.16h0C168.65,144.41,171.38,148.78,169.55,146.76Zm1.2,1h0C172.53,145.55,174.51,148.75,170.75,147.73Zm1-9.82h0c.47-.18.51,1.22.24,1.34C171.58,139.42,171.54,138,171.79,137.91Zm1.66,3.6h0c.83.38.22,1.32-.51,1.13C172,142.11,173.25,142.16,173.45,141.51Zm.26-4.33h0c.84.21.16.66-.23.56C172.66,137.52,173.34,137.07,173.71,137.18Zm1.48-3.4h0c.5-.19.74.66.48.76C175.17,134.75,174.94,133.89,175.19,133.78Zm18.41,3.7h0c.5-.19.74.66.49.76C193.57,138.43,193.33,137.58,193.6,137.48Zm-.34,34h0c.5-.18.74.65.48.76C193.24,172.4,193,171.56,193.26,171.44Zm2.64-.55h0c.5-.19.74.66.49.76C195.87,171.85,195.64,171,195.9,170.89Zm.85-13h0c.46-.18.49,1.23.23,1.33C196.53,159.38,196.49,158,196.75,157.88Zm-3.38,2.25h0c-.49.2-.73-.66-.47-.77C193.39,159.16,193.63,160,193.37,160.13Zm-1.17-2.84h0l-.72-.2c-.2.71-1.18.07,0,0,.48-1.12-1.63-1.24-.45-2.64C193,155,193.92,156.67,192.2,157.29Zm4.93,10.78h0c-.45.17-.5-1.22-.24-1.31C197.36,166.57,197.38,168,197.13,168.07Zm1-6h0c.82.21.17.66-.22.55C197.09,162.39,197.76,161.94,198.13,162.05Zm.94,3.39h0c-.49.2-.74-.66-.46-.76C199.09,164.5,199.34,165.35,199.07,165.44Zm-.19-5.09h0c.5-.2.73.66.47.76C198.86,161.31,198.61,160.46,198.88,160.35Zm.67,4h0c-.49.19-.72-.66-.46-.75C199.58,163.37,199.82,164.22,199.55,164.31ZM202,182.63c-.13.32-.85.49-.72-.19-3.19-.74.76-2.28,0,0l.72.19c.72-1.1,2.1-1.11,3.13-1.67-.77-.6-3-1-3.67-2a12.05,12.05,0,0,1-5.4,1.24c1,.31,1.62.85,1.14,2.38-2.76-.81-5-1.8-4.74-3.79a4,4,0,0,0,2.14,1,1.68,1.68,0,0,1-.36-1.18,18.56,18.56,0,0,1,1.45-3.93q1.44-3.33,3.21-7.16.9-2,2.05-4.64c-.78-.69-1-1.53.31-2.57a1.39,1.39,0,0,1,.71.18c.14-.34.3-.71.44-1.06-.33-.05-.59-.27-.39-.82-.92-.18-.11-.93,0,0a4.87,4.87,0,0,1,.7.1c.2-.5.4-1,.62-1.5a4.36,4.36,0,0,0,.62-2,5.26,5.26,0,0,0-1.76-3.73,17.63,17.63,0,0,0-4.13-3.05,23.25,23.25,0,0,0-5-2,17.17,17.17,0,0,0-4.24-.69c-.67,0-1.06.1-1.18.27.1.13.1.23,0,.28a1.39,1.39,0,0,0,.26.43,2.3,2.3,0,0,1,.31,1.38,29.2,29.2,0,0,1-.5,4.74.76.76,0,0,1-.18,1c-.13.7-.28,1.42-.46,2.19a34.22,34.22,0,0,1-1,3.35,1.87,1.87,0,0,0,1.49-1c1.25,2-1.88,1.36-2,2.62s1.18.22,1.46.4c1.62,1,2.14,3.69,3.52,4.72.73.21,1.06-.21,1.68-.16-1-1.48-1.77-2.29,0-3.79.77,2.29,2.27,1.83,4.29,3.06-2.13.21-1.27,1.54-2.66,2.43-.43.28-2.14-.63-1.94.74,1,.86,3.86,1,2.86,2.67-1.81-.4-1.83-1.48-3.11-2.1a3.64,3.64,0,0,0,.25-.57c-2.28-1.71-5.32-4.19-8.08-3.83-.2.41-.39.83-.61,1.24a30.58,30.58,0,0,1-6.52,8.34l-.22.18.06,0c.41.22.1.48-.68.49a13.52,13.52,0,0,1-3,1.75,1.72,1.72,0,0,1-.2,1.14,2.19,2.19,0,0,1-1.68-.51,15,15,0,0,1-3.79.47,6.57,6.57,0,0,1-4.14-1.67q-2.07-1.66-2.07-7.37A20,20,0,0,1,164.56,157a30,30,0,0,1,7.86-7.76,32.39,32.39,0,0,1,8.9-4.22l.18-.05c-.46.1-.68-.66-.42-.75.48-.18.71.59.49.73.85-.24,1.62-.45,2.34-.63-.22-.16-.3-.53,0-1.22-2.74-.91,1.23-2.46,0,0,1,.32,1.1.71.94,1a23.24,23.24,0,0,1,3-.53c5,0,8.45.32,10.44,1s3,1.11,3,1.37a12,12,0,0,0,1-3.1,1,1,0,0,1,.17-1.16c0-.34.06-.69.06-1a10.49,10.49,0,0,0-4.35-8.54q-4.35-3.43-11.58-3.43c-.72,0-1.42,0-2.11.06.31,1.33-1.93,2.1-.85.07a33.29,33.29,0,0,0-5.4.92c.12.22-.32.45-.61.37a.73.73,0,0,1-.28-.13,32.86,32.86,0,0,0-5.44,2.14A44.18,44.18,0,0,0,159.8,141c-.38.4-.73.83-1.09,1.24a1.15,1.15,0,0,1,.6.53c-.19-.28-1.52,1.49-1.47,1.5a.51.51,0,0,1-.43-.55,41.57,41.57,0,0,0-5.88,9.64,34.58,34.58,0,0,0-3,13.94,22.14,22.14,0,0,0,3.93,13.06q3.93,5.59,11.79,5.6a20.3,20.3,0,0,0,3.11-.3,13.92,13.92,0,0,0,2.17-.56,9.08,9.08,0,0,1,1.85-3.77c.64-.4.29,1.39.22,1.33,1.35,1.27,2.37-.51,2.61.21.74-.46,1.49-1,2.25-1.53a27.62,27.62,0,0,0,5-5l.42-.79a16.78,16.78,0,0,0,.31,2.36,11.52,11.52,0,0,0,1.34,3.63,10.38,10.38,0,0,0,3.11,3.34,9.85,9.85,0,0,0,5.79,1.47,17.63,17.63,0,0,0,10.18-3.24A.86.86,0,0,0,202,182.63Z" data-v-1c84121e></path><path class="cls-3" d="M221.47,153.34h0c.5-.19.73.65.47.74-.5.2-.74-.65-.47-.74m2.26-58.68h0c.45-.17.48,1.22.22,1.32C223.5,96.16,223.47,94.77,223.73,94.66Zm.9,7.18h0c.47-.2.72.66.45.75C224.59,102.79,224.35,101.94,224.63,101.84ZM237.45,111h0c.23-.71,1.19-.08,0,0C236.57,112.63,234.71,109.62,237.45,111Zm-18.83,39.7h0c-.89,1.64-2.74-1.35,0,0C218.84,150,219.82,150.61,218.62,150.68Zm-1.94,2.63h0c.13-2.27-3.38-.56-4.05-1.74-.55-.91.17-3.33,2.9-3-.08.2-.16.39-.25.57.4.11.63.68-.24.57C214.48,151.33,218.15,151.33,216.68,153.31Zm-3.38,4.12h0c-3.61-.28,1.91-2.43,0,0,1.79.23-1.52,2.47,1.42,2.28C212.54,161.85,210.6,158.73,213.3,157.43Zm3.14-27.53h0c.5-.19.73.66.45.76C216.42,130.85,216.17,130,216.44,129.9Zm.9,5.28h0c-.49.21-.74-.64-.47-.74C217.37,134.24,217.61,135.09,217.34,135.18Zm-8.19,28.08h0c-.35.48,1.21.92,1.2,1-.47.65-1.72.57-3.36.36C207.79,162.93,210.13,161.87,209.15,163.26Zm4.51,4.37h0c-.76,2.6-4.08,1.11-6.23,1.47C208.17,167.44,210.05,166.87,213.66,167.63Zm-1.78,11.5h0c-.84-.38-.23-1.32.48-1.13C213.29,178.53,212.08,178.48,211.88,179.13Zm-.67-4h0c-.5.19-.76-.67-.48-.77C211.22,174.2,211.45,175.06,211.21,175.16Zm-.08,5.66h0c-.49.19-.73-.65-.46-.76C211.18,179.88,211.41,180.72,211.13,180.82Zm-1.11-6.6h0c-.51.17-.75-.67-.48-.77C210,173.26,210.27,174.11,210,174.22Zm-1-1.53h0c-.81-.21-.17-.67.25-.56C210.13,172.34,209.45,172.8,209.07,172.69Zm-.7-2.08h0c.51-.19.73.66.47.77C208.34,171.56,208.1,170.72,208.37,170.61ZM206,164.94h0c-.89-.18-.1-.95,0,0C209.24,165.19,205.45,166.67,206,164.94Zm.25-2.45h0c.46-.17.5,1.22.22,1.32C206.07,164,206,162.59,206.29,162.49Zm1.48-3.39h0c.48-.19.73.65.46.75C207.75,160.05,207.49,159.2,207.77,159.1ZM215,177.44h0c.22.62.44,1.25-.48,1.14C213.66,178.2,214.28,177.26,215,177.44Zm3.37-.35h0c.49-.2.72.66.45.75C218.34,178,218.09,177.18,218.37,177.09Zm.67,4h0c.8.22.15.68-.25.56C218,181.4,218.64,181,219,181.06Zm7.68-1.08h0c.88.17.06.93,0,0C225.83,179.8,226.63,179,226.72,180Zm.44,2.64h0c-.43.17-.49-1.22-.23-1.33C227.39,181.11,227.43,182.52,227.16,182.62Zm4.07,1.72h0c.48-.2.72.66.46.76C231.19,185.28,231,184.44,231.23,184.34Zm15.16-9.16h0c.81.22.14.68-.24.58C245.34,175.54,246,175.08,246.39,175.18Zm2.75-10h0c.8.23.14.69-.26.58C248.08,165.55,248.74,165.09,249.14,165.19Zm0-23.95h0c.36-.69,1.29-.5,1.93-.75-.13.06,1.57-.91,1.2-.93,1.2.06,1.73,2.33,1.91,1.14C253.87,142.84,253.57,142.37,249.12,141.24Zm5.09-6.2h0c.5-.19.75.65.48.76C254.18,136,253.94,135.14,254.21,135Zm-.34,11.89h0c-.89-.18-.11-.93,0,0C257.07,147.19,253.26,148.66,253.87,146.93Zm0-3.78h0c.81.22.13.68-.26.58C252.84,143.5,253.48,143,253.9,143.15Zm.16,7h0a5.16,5.16,0,0,1-.71-.19C251.65,147.23,257.75,151.13,254.06,150.14Zm1.66,1.7h0a1.08,1.08,0,0,0,1.21-.93c6,1.49-1.16,3.48,3.56,4.74-2.08,2.74-2.69-.17-5.77.33-.21.72-1.19.08,0,0-1-1.14,2.32-2.44,1-4.14C254.83,151.66,255.63,150.9,255.72,151.84Zm.36-11.89h0a1.46,1.46,0,0,1,.7,2.08A1.46,1.46,0,0,1,256.08,140Zm1.13,6.62h0c.5-.19.74.66.47.75C257.18,147.53,256.94,146.68,257.21,146.57Zm.54-4.91h0c.49-.18.73.67.46.76C257.71,142.61,257.48,141.77,257.75,141.66Zm.06-7.53h0c.5-.2.74.64.49.75C257.78,135.08,257.56,134.23,257.81,134.13ZM260.2,136h0C261.92,138,256.69,137.62,260.2,136Zm.45,26.6h0c-.51.21-.74-.65-.46-.75C260.66,161.68,260.92,162.53,260.65,162.62Zm.63-14.33h0c.48-.19.72.65.45.75C261.23,149.25,261,148.39,261.28,148.29Zm-4.92,11.3h0c.5-.2.74.64.49.75C256.34,160.53,256.1,159.69,256.36,159.59Zm-3.05-5.88h0c.45-.17.49,1.22.22,1.32C253.09,155.22,253,153.81,253.31,153.71Zm3.95,11.17h0c-1.18,2.52-8.65,1-5-1.36.47,3.52,4.13-.29,5,1.36C257.48,164.18,258.47,164.81,257.26,164.88Zm-1.95,4.51h0c-.8-.21-.15-.68.24-.57C256.36,169,255.7,169.5,255.31,169.39Zm-2.62-1.34h0c-.82-.22-.16-.67.25-.56C253.76,167.71,253.09,168.15,252.69,168.05Zm-1.27,6.6h0c-.5.19-.73-.65-.47-.76C251.45,173.7,251.68,174.55,251.42,174.65Zm-4.92-34.74h0c-.33,2.52-2.19-.47,0,0C246.71,139.2,247.69,139.83,246.5,139.91Zm16,7.45h0c.5-.19.74.65.45.75C262.45,148.31,262.21,147.46,262.47,147.36Zm-58.18,23.41h0c-.5.2-.73-.65-.46-.75C204.32,169.83,204.56,170.67,204.29,170.77ZM219,101.12a40.06,40.06,0,0,1,.93,8.83,52,52,0,0,1-.41,6.87,31.6,31.6,0,0,1-.83,4.52c-.29,1-.63,2.13-1,3.27,1.61-.77,1.9,4-1,3-.59,1.8-1.25,3.69-2,5.72l-5,13.74c-1.1,3.05-2.08,6-3,8.89a3.66,3.66,0,0,1,.78,1.82c.9.18.09.94,0,0a1.67,1.67,0,0,1-1.35,0c-.25.83-.54,1.69-.78,2.51-.29,1-.53,1.92-.75,2.82l.43.3a.6.6,0,0,1-.58.36,32,32,0,0,0-1,7,17,17,0,0,0,.25,2.8,18.48,18.48,0,0,1-2.34,3c.92,0,1.85,0,2.3-1,2.41-.19,0,1.06,0,1.88,0,.32.84.74,1.11.9.15-.19.32-.37.47-.56A14.26,14.26,0,0,0,206.8,180a5.64,5.64,0,0,1,.07-2.23c2.84-1.16,4.31,3,1.51,3.83.15.13.29.27.45.4a17.15,17.15,0,0,0,5.07,2.81c-.41-1.1-2.2-.8-.86-2.85,1.47-.25,1.23,1.38,2.4,1.89.47.21,1.91,0,1.66-.17.24.2,1.58,2,1.41,2.26h0a32.59,32.59,0,0,0,3.42.32c-1.08-1.37,1.89-2.27,1.78,0,1.24,0,2.45-.07,3.65-.16.34-.29.78-.5,1-.71-.47-.11-.94-.24-1.43-.38.34,1.92-3.93.78-2.14-.58l2.14.58c.26-.57,1.56-.37,1.43.38a2.5,2.5,0,0,1,1,.48,39.85,39.85,0,0,0,5.83-1.17,2.51,2.51,0,0,1,1-.25,37.44,37.44,0,0,0,3.88-1.42A42.57,42.57,0,0,0,253,174.65c.4-.39.75-.8,1.13-1.19a6.52,6.52,0,0,1-1.24-.31,1.66,1.66,0,0,1,2-.44c.23-.26.49-.5.72-.76a4.43,4.43,0,0,1-.5-.12,3,3,0,0,1-.73-.19c-1-1.66.84-.84,1.61-.19a39.66,39.66,0,0,0,5.55-8.68.5.5,0,0,1,0-.13c0-.17,0-.33.08-.37s0,0,.07,0c.17-.38.31-.77.47-1.16l0,0c-1-1.23-.06-1.6.64-1.47a35.06,35.06,0,0,0,1.59-6.22,5.42,5.42,0,0,1-2.39-1.19c.5-1.12,2.29-.19,2.42-1.87-1.84-1.35-.23-1,.41-1.72a21.86,21.86,0,0,0-1.43-8.09,17.38,17.38,0,0,0-3.73-5.79,14.46,14.46,0,0,0-5.17-3.34,17,17,0,0,0-6-1.08,35.76,35.76,0,0,0-4.14.3,15,15,0,0,0-4.75,1.37,10.56,10.56,0,0,0-3.83,3.05,8.6,8.6,0,0,0-1.55,5.49,20.83,20.83,0,0,0,2.27,8.44,22.71,22.71,0,0,1,2.69-2.16,13.1,13.1,0,0,1,2.8-1.66,7.78,7.78,0,0,1,3.2-.69,4.39,4.39,0,0,1,3.93,1.86,9.07,9.07,0,0,1,1.45,4.32,21.11,21.11,0,0,1-.21,5.11,24.1,24.1,0,0,1-.49,2.43c.83.49,1.4,1.19-.23.79-.1.29-.2.56-.31.8v.2a38.1,38.1,0,0,1-5.69,9.23c-.13.14-.26.27-.38.42s0,.18-.11.21-.05,0-.07,0a34.69,34.69,0,0,1-5.85,5.36,24.35,24.35,0,0,1-4.21,2.42c.84,1.44,2.78,3.31,0,4.62-1.35-1-1.09-2.61-.47-4.38-.53.22-1.07.42-1.59.59a18.87,18.87,0,0,1-5.59,1c-2.89,0-5-.85-6.31-2.56a10,10,0,0,1-.74-1.13.62.62,0,0,1-.27-.5,8.37,8.37,0,0,1-.9-3.25,1.92,1.92,0,0,1-1.27,0c-1.08-.43.24-.66,1-.36a2.4,2.4,0,0,1,.28.14c0-.12,0-.23,0-.35a18.52,18.52,0,0,1,1.86-6.48c.37-.87.78-1.78,1.21-2.72a2,2,0,0,1-2.74-1.15c-.2.32-.41.63-1,.35-.7,1.42,2.21,2,1.89,3-.53,1.77-5,.59-4.54-.6-.24,0-.48-.13-.71-.19a3.85,3.85,0,0,1-2,2.63c-1.21-.21.16-4.09,2-2.63-1.25-1.24-2.66-2.43-4-3.61,1.9-.93,2.85,1.57,4.05,1.71,1.58.22,2.41-2.11,4.33-.7a2.83,2.83,0,0,1,1.45-1.51c1.13.19,1.29.75,2,1.11.8-1.71,1.67-3.53,2.63-5.45q2.68-5.4,6-11.68c.59-1.13,1.13-2.25,1.69-3.37L229,139.6c2.07-.76.72-1.84.52-3a3.52,3.52,0,0,1-1.9-1.15c.57-.83,1.73,0,2.14.58-.07.19-.17.38-.24.57,1.29-.4,2.11.68,2.37,2,1.23-2.54,2.41-5.07,3.5-7.6A127,127,0,0,0,240,118.69c0-.1,0-.2.08-.3a1.46,1.46,0,0,1-.28.14,5.45,5.45,0,0,1-1.42-.38c-.12-.06-.66-.1-.72-.2-1-1.65,1.81-1.36,2.72-.61.41-1.45.75-2.86,1-4.19-.52,0-.9-.42-.06-1.77a2.57,2.57,0,0,1,.29.15,27.73,27.73,0,0,0,.26-3.54,12.15,12.15,0,0,0-1.65-6.68,12.35,12.35,0,0,0-4.24-4,18.34,18.34,0,0,0-5.8-2.06,33.17,33.17,0,0,0-6.1-.59,31.3,31.3,0,0,0-6,.49c-1.65.33-2.48.69-2.48,1.08Q218,97,219,101.12Z" data-v-1c84121e></path><path class="cls-4" d="M180.37,68.4h0c-.5.2-.75-.66-.47-.75.49-.2.74.65.47.75m-1,2.26h0c-.5.2-.74-.66-.47-.75C179.41,69.7,179.64,70.56,179.38,70.66ZM177,65h0c-1.2-.47-1.2-1.4-.45-2.64C177.39,63,177.4,63.91,177,65Zm-11.17,6.18h0C170.87,69.92,169.83,74.83,165.87,71.16Zm10.55,27.1h0c-.49.18-.73-.66-.46-.77C176.45,97.31,176.7,98.13,176.42,98.26Zm-3.09-2.11h0c-2,1-1.36.26-4.07.17.79-1.42,4.36-2.55,4.07-.17C174.22,96.33,173.42,97.1,173.33,96.15Zm-4.21-6.92a8.29,8.29,0,0,1,2.19-.32C170.58,89,169.85,89.12,169.12,89.23Zm-.85,11.24h0c-.82-.22-.16-.68.23-.57C169.33,100.11,168.66,100.57,168.27,100.47Zm-4-5.5h0c.32-2,1.88-.51,2.4,0C166.23,95.61,165.13,95.1,164.25,95Zm-3.68,32.43h0c-.29-.44-2.81-2.24-3.58-1-.65-.05-.58-.4-.46-.75s.32-.76.49-1.13C157,126,162.2,125.37,160.57,127.4Zm-4.93-8.9h0c.4.78,2.55.89,1.41,2.27l-2.15-.58C155.14,119.63,155.39,119.07,155.64,118.5Zm-.93-3.4h0c.47-.18.5,1.22.23,1.32C154.48,116.59,154.44,115.2,154.71,115.1Zm-2.74,10h0c-.83-.39-.22-1.33.5-1.14C152.69,124.58,152.89,125.19,152,125.09Zm-1.5,5.27h0l-.7-.2c-.21.71-1.19.07,0,0,.29-.73-.57-1,0-1.88C151.11,128.54,151.23,129.29,150.47,130.36Zm-3.39-18h0c-.47.17-.49-1.22-.24-1.32C147.31,110.91,147.34,112.3,147.08,112.41Zm2.33-18.29h0c1.05.23.11,1.75-.75,1.69C147.43,95.72,149.21,94.07,149.41,94.12Zm0-3.78h0c.49-.19.74.65.48.76C149.42,91.3,149.18,90.44,149.45,90.34Zm-6.78,30.34h0C144.4,122.63,139.16,122.29,142.67,120.68Zm-1.8-10.57h0c-.49.18-.74-.66-.47-.77C140.9,109.16,141.15,110,140.87,110.11Zm16.62-34.63h0c-.49.19-.74-.65-.47-.75C157.52,74.53,157.76,75.39,157.49,75.48Zm-3.59-1h0c.51-1.44,1.9-1.45,2.67-2.45C158.69,72.64,156.43,75.88,153.9,74.53Zm-1.17-1h0c-.83-.21-.15-.65.25-.55C153.78,73.23,153.13,73.68,152.73,73.56ZM148.19,73h0c-.5.19-.75-.66-.48-.76C148.21,72,148.45,72.88,148.19,73Zm-10.13,4.84h0c-.48.2-.72-.65-.46-.74C138.1,76.88,138.34,77.72,138.06,77.82Zm-4.51-2.47h0c-.46.17-.48-1.24-.23-1.33C133.78,73.84,133.82,75.24,133.55,75.35Zm-7.76,10.51h0c-.49.2-.74-.65-.47-.76C125.81,84.91,126.05,85.76,125.79,85.86Zm-3.3-5.31h0c-.13.69.41,1.1.93,1.52-1.94,1.32-4.06-1.2-2.83-2.66a3.74,3.74,0,0,1,1.9,1.14C122.82,78,124.68,81,122.49,80.55Zm-4.7,14.51h0c-.5.19-.73-.65-.46-.76C117.83,94.11,118.06,95,117.79,95.06Zm-8,3.54h0c-2.07-.88.93-2-2.33-3.79C109.18,92.37,112.66,97.94,109.84,98.6Zm-.75,5.46h0c-.82-.22-.15-.67.23-.56C110.15,103.72,109.48,104.16,109.09,104.06Zm-2,8.29h0a3.54,3.54,0,0,1-1.91-1.14c.58-.82,1.75,0,2.15.58-.09.19-.17.38-.24.56C108,112.52,107.16,113.29,107.09,112.35Zm-4.65-13.24h0c-1-.85-.82-2.19,0-3.76C104,96.11,104.5,98.32,102.44,99.11Zm-1.79,9.62h0c-.31,2.53-2.2-.47,0,0C100.87,108,101.85,108.66,100.65,108.73Zm.73,48.12h0c.81.22.15.68-.25.57C100.32,157.19,101,156.74,101.38,156.85Zm-.59,10.56h0c-.49.18-.72-.65-.47-.75C100.82,166.46,101.06,167.31,100.79,167.41Zm-.86-9.06h0c-.81-.21-.15-.67.25-.57C101,158,100.34,158.46,99.93,158.35Zm-.8-16.61h0c-.5.19-.73-.66-.47-.76C99.16,140.79,99.4,141.64,99.13,141.74ZM98.32,175h0c-.5.19-.72-.65-.46-.76C98.35,174,98.59,174.85,98.32,175Zm-1.92.74h0c0-.07-.72-.12-.72-.2,0-.86,2.16.28,2.16.58C97.82,177.18,96.41,175.69,96.4,175.69ZM95,173.42h0c-.82-.23-.16-.68.24-.57C96.05,173.06,95.38,173.52,95,173.42Zm-1.24-21.15h0c-.82-.21-.14-.67.25-.57C94.82,151.93,94.16,152.39,93.76,152.27Zm-2.39-24h0l2.13.58C92.57,130.31,90.35,130.65,91.37,128.29Zm1,43.79h0c-.82-.23-.16-.67.24-.57C93.44,171.73,92.77,172.18,92.38,172.08Zm-3.81-26.25h0C95.23,143.53,92.43,150.88,88.57,145.83Zm1.77,12.46h0c-.44.18-.48-1.22-.22-1.31C90.58,156.8,90.61,158.19,90.34,158.29ZM86.48,137.7h0c-.89-.18-.07-.94,0,0,1,.85,1.5,1.92,2.86,2.66C87.34,141.85,85,140,86.48,137.7Zm-.87-7.18h0c-1.29-.88.94-4.13,1.94-4.51a5.73,5.73,0,0,1-1.94,4.51C87.49,131.77,83.52,133.31,85.61,130.52ZM83.2,154.47h0c.33-2,1.88-.5,2.41,0C85.18,155.13,84.1,154.61,83.2,154.47Zm-.19-29h0c.5-.2.74.65.48.75C83,126.36,82.74,125.51,83,125.42Zm2,19.44h0c-.9-.17-.08-1,0,0C85.87,145,85.06,145.79,85,144.86Zm-.39-10.19h0c.5-.19.74.65.49.76C84.58,135.62,84.34,134.77,84.59,134.67Zm3.36-.36h0c-.8-.22-.15-.66.25-.56C89,134,88.36,134.41,88,134.31Zm.35-10h0c.92.54-.29.48-.5,1.13C87,125.07,87.56,124.13,88.3,124.31Zm1.09,10.39h0c.49-.18.74.66.47.76C89.36,135.65,89.12,134.81,89.39,134.7Zm1.14,6.61h0C92.17,143.15,88.12,144.7,90.53,141.31ZM92.69,116h0c.86,0,1.78-.85,2.64-.55,3.4,1.18-2.33,3.85-4.08.16C91.75,114.55,92.9,116,92.69,116Zm5.36-10.54h0c.81.22.16.68-.23.57C97,105.85,97.67,105.39,98.05,105.5Zm-1.66,48.11h0c-.51.19-.75-.65-.48-.75C96.41,152.67,96.65,153.5,96.39,153.61Zm-2.6-5.11h0c1.84.23,1.12,1.45,3.35,1.53C96.34,151.7,92.21,150.39,93.79,148.5Zm-.12-10.75h0c.49-.19.74.65.47.75C93.65,138.69,93.4,137.84,93.67,137.75Zm1.43.38h0c.49-.19.74.65.46.75C95.07,139.08,94.84,138.22,95.1,138.13Zm-.7-2.08h0c-.84-.38-.23-1.32.49-1.14C95.12,135.55,95.33,136.16,94.4,136.05Zm-1.5-16.8h0a4,4,0,0,1,3.34-.36C95.82,120.74,93.57,120.43,92.9,119.25ZM94,124h0c.22-.72,1.2-.08,0,0C93.17,125.63,91.3,122.63,94,124ZM97,167h0c3.45,1.61-.64,3.2,0,0C92.91,166.6,96.87,165.08,97,167Zm.86-38.87h0c-1.2,1.09-1.11,3.59-3.37,2.25-.18-.1.3-2.16.26-2.45-.17-1.8-1.12-2.82,1-4.15,1.7,1.07.59,3.23,2.12,4.35.5.28,1.41.41,1.19,1,2.75.91-1.21,2.45,0,0C98.52,128.83,97.61,128.7,97.83,128.14Zm1.68-.17h0c-.11,0-.68-.12-.72-.2C97.1,125.05,103.19,129,99.51,128Zm5.36,39.28h0c1.27.58-.78.59-1.69.18C101.92,166.85,104,166.83,104.87,167.25Zm1.42,2.28h0c.48-.2.73.65.46.75C106.25,170.48,106,169.62,106.29,169.53Zm1.65,4.07h0c.21-.7.94-1.22,0,0a.73.73,0,0,0,.21.84c1.31,1,1.45-.79,1.91-.74.87.06.66,1.21,1,1.51s2,.73,1.91,1.14c-.08.7-1.13.06-1.57.16.29.17-2,4.52-2.07,4.55-1,.41-4-.76-4.31-1.18-.63-.75-.12-2.85,0-3.76,0,0-.68-.21-.71-.2a19.87,19.87,0,0,0,3.11-1.67C107.66,174,107.8,173.78,107.94,173.6Zm17.89,4.34h0c.82.23.16.68-.24.57C124.78,178.29,125.43,177.84,125.83,177.94Zm3.09,2.1h0c.82.22.17.68-.24.55C127.86,180.38,128.53,179.93,128.92,180Zm13.16,1h0c.51-.18.74.66.48.76C142.07,182,141.82,181.16,142.08,181.06Zm.74-1.69h0c.46-.17.49,1.22.23,1.33C142.6,180.87,142.56,179.47,142.82,179.37Zm7-6.94h0c.45-.18.5,1.22.23,1.33C149.61,173.93,149.58,172.54,149.83,172.43Zm11.89-90.92h.08c-1.36.47-2.63,1-3.87,1.58a.54.54,0,0,1,.22,0c.8.22.14.67-.25.55h-.15c-.25-.1-.27-.23-.19-.34A34.76,34.76,0,0,0,151,87.34,35.78,35.78,0,0,0,143.59,95a30.6,30.6,0,0,0-4.24,8.45,25.35,25.35,0,0,0-.52,14.53,23.32,23.32,0,0,0,2.59,6.28,15.44,15.44,0,0,0,4.45,4.81,12.14,12.14,0,0,0,6.41,2.06,22.74,22.74,0,0,0,10-4.61c.17-.13.32-.28.49-.41h-.06c.91-2.18-.46-3,2.19-3.19.07,0,1-.05,1.49-.1a42.48,42.48,0,0,0,4.07-4.93,44.7,44.7,0,0,0,5.58-10.9,33.79,33.79,0,0,0,2.07-11.19,24.8,24.8,0,0,0-.76-6.07h0a52.85,52.85,0,0,0-8.53.67l-1,.16v-.06a20.84,20.84,0,0,0-2.36.58l-1,.39A24.23,24.23,0,0,1,163,97.25a37.63,37.63,0,0,1-3.42,7,34.06,34.06,0,0,1-5.27,6.58,25,25,0,0,1-6.83,4.81c.28-1.31.56-2.82.83-4.52s.59-3.27.93-4.71a29.48,29.48,0,0,1,1.14-3.73,3.42,3.42,0,0,1,1.45-2h.21c0-.53-.28-.79-.83-.79s-1,.56-1.86,1.67A26.33,26.33,0,0,0,147,105.5a35.11,35.11,0,0,0-2,4.71,13.63,13.63,0,0,0-.83,4.22,24.18,24.18,0,0,1,4.14-13.15q4.14-6.48,14.07-10.21c.83-.27,1.72-.59,2.69-1a22.32,22.32,0,0,1,2.9-.68c.37-.07.74-.11,1.11-.17l-.29.07-.08,0-.08,0h0a56.91,56.91,0,0,1,8.69-.69h.1a.46.46,0,0,1,.31-.1l.82,0h0l.67,0h.19l.56,0h0l.18,0h.1l.37,0h.05C196.42,86.51,205.22,72.1,207,57.53c-7,15.5-16.83,21-26.18,22h-.22l-.33,0h-.76l-.44,0h-1.83l-.43,0h-1.38l-.22,0h-.95l-.2,0h-.11A35.72,35.72,0,0,0,161.72,81.51Zm9.61-3.06a27.16,27.16,0,0,0-12-7.61,52.48,52.48,0,0,0-39.83,4.72c-1.32.75-2.59,1.54-3.85,2.36a.17.17,0,0,1-.08.14s-.08,0-.12,0a74.11,74.11,0,0,0-15.08,13.08c1.54.92,1.32,2.52,1.4,4-1-.72-2.61-1.21-3-2.17a79.9,79.9,0,0,0-6.49,9.07.48.48,0,0,1-.43.68c-.62,1-1.22,2.06-1.78,3.11.29.18.29,1.23.06,1.32s-.38-.32-.38-.71a76.49,76.49,0,0,0-6.38,16c.08.19.09.3-.06.2a60.64,60.64,0,0,0-2.18,14.79c.38,0,.54.66.31.74a.34.34,0,0,1-.33,0v.18a65.9,65.9,0,0,0,2.06,16.1A48.64,48.64,0,0,0,89.8,169.6a38.79,38.79,0,0,0,11.9,11.49,31.57,31.57,0,0,0,7,3.21,1.36,1.36,0,0,1-.09-1.56c.44.08.86.15.94-.37a4.28,4.28,0,0,1,1.67,1.72c.89.17.08.93,0,0-.8-.15-1.57-.27-1.84.42,1,.31,2,.58,3,.81-.08-.19,0-.45.22-.85.35-.61,1.44-1.06,1.45-1.51,0-.14-1-1.19-1.19-.94,1-1.66,4.59-1,5.31-4.88,1.79.57,3.65,1.11,2.86,2.66-4.32-1.91-2,1.29-4.08,2,2.76,0,1.41-.87,3.56,1a14,14,0,0,1,1.92,1.14c.43.61-.32,1.2,0,1.89a2,2,0,0,0,.58.47,59.7,59.7,0,0,0,6.21-.44c.06-.29.11-.56-.07-.74-.84-.83-2.93.48-3.34-1.53,0-.67.59-.27.95-.38,0,0,1.55-.9,1.21-.93,1.08.13,1.52,2.43,3.16,3.31a48.77,48.77,0,0,0,11.24-3.15,88.22,88.22,0,0,0,12.22-6.2s0,0,0,0,0,0,0,0c1.17-.72,2.32-1.45,3.42-2.2v-6.6a58.52,58.52,0,0,1-10.1,5.51q-7.24,3.15-17.59,3.14a31.18,31.18,0,0,1-13.86-2.75,24.78,24.78,0,0,1-9-7.26,28.17,28.17,0,0,1-4.86-10.5.15.15,0,0,1,0-.06c0,.13,0,.25,0,.41-1.23-.75-1.6-2.47-.52-2.95a51.92,51.92,0,0,1-.82-6.88h0c0-1-.09-2-.09-3a68.15,68.15,0,0,1,4.66-24.94,82.58,82.58,0,0,1,9.35-17.62c-.61-.8-.09-2,0-3.05,1.15.36,1.56.64,1.59,1,.34-.46.65-.94,1-1.38a62,62,0,0,1,16-14.54q8.79-5.4,17.06-5.39A14,14,0,0,1,158.49,79a28.13,28.13,0,0,1,2.39,1.69l.41-.19-.08.09.17,0A37.37,37.37,0,0,1,171.33,78.45Z" data-v-1c84121e></path><path class="cls-2" d="M129.13,305.37A127.27,127.27,0,0,1,101,291.62c-1.36-.86-2.41-2.41-4.3-2.34-.08,0-.24-.16-.23-.19.33-.72-.37-.83-.7-1.07a140.53,140.53,0,0,1-21.89-19.38c-.25-.27-.55-.5-.83-.76v.34c-.6.27-1.21.53-1.92.83.19.68.56,1.53-.73,1.76-.29-.78-.87-1.56-.35-2.43.27-.46-.55-1.15.37-1.36-.69-.75.17-1.29.26-1.88L65.05,258c-.11-.14-.29-.4-.35-.38-1.11.4-1.2-.63-1.59-1.16a1.85,1.85,0,0,0-2.75-.4c-1.33,1.1-1.57,1-2-.56.59-.31,1.7,1.06,1.79-.23l2-1.25-4-6.06c-.19.54-.3.86-.41,1.19l-.35-.1.4-1.57-3.81-6.72-1.37.93c-.15-.94-.3-1.65-.36-2.36s.19-1.43-.06-2c-1.25-2.88-2.61-5.72-4-8.56a1.12,1.12,0,0,0-1.84-.31c-.45-.63-.85-1.27-1.33-1.86-.2-.24-.63-.56-.81-.49a13.23,13.23,0,0,0-2,1.11.85.85,0,0,1-1.35-.3,4.9,4.9,0,0,1-.31-.9l1.55.36c.13-.27.25-.55.37-.83a1.61,1.61,0,0,0,1.1-.43,1.23,1.23,0,0,1,1.82.2l-.64.45,2.69.93c-1.26-2-.86-4.78-3.61-5.82l1.14-.05a11.63,11.63,0,0,0-.22-1.36c-.78-2.71-1.59-5.41-2.36-8.12-.16-.58-.35-.84-1-.72-.23,0-.65-.41-.83-.72s0-.6,0-.93c1-.21,1.16-.43.93-1.46-.26-1.21-.54-2.4-.77-3.61-.14-.73-.23-1.46-1.39-1.53a1.12,1.12,0,0,0,.66-1.9c-.7-.93-1.9-.49-2.94-.55.16.27.4.38.58.56a1.66,1.66,0,0,1,.48.74c0,.14-.22.5-.39.53-.76.14-1.54.2-2.31.29l-.25-.3a7.07,7.07,0,0,1,1.21-2.08,1.54,1.54,0,0,0,.44-2l-1.19.13c-.42.06-1.19.07-1.21.19-.17,1.08-1.26.86-1.85,1.35.06.39.09.75.17,1.1,1.28,5.43,2.39,10.92,3.92,16.28,1.28,4.48,3,8.82,4.62,13.21a6.26,6.26,0,0,0,1,1.4,5.48,5.48,0,0,0,.24,1.62c1.33,3,2.79,6,4.08,9a1.74,1.74,0,0,0,2.25,1,10.33,10.33,0,0,0,2.49-1.36l.82.61-2,2.56c-1.13-1.11-1.13-1.11-2.58-.88,1.07,1.79,2.1,3.49,3.12,5.19a4.25,4.25,0,0,0,.28.73q1.13,1.88,2.29,3.74c.43.67.9,1.31,1.29,1.88.32-.36.46-.68.66-.71a.79.79,0,0,1,.63.36,13.79,13.79,0,0,1,.56,1.55H55.19c.46.67.82,1.2,1,1.46a6,6,0,0,1,1.73-.38c.24,0,.42.65.63,1l-.27.17-.61-.61c-1,.79-.89,1.11.69,2.78l1.89-.81c-.67,1.69-.71,2.83.36,4,2.41,2.63,4.68,5.37,7,8.05,1.54,1.76,3,3.54,4.68,5.21,1.8,1.83,3.68,3.58,5.58,5.3,14,12.78,30.27,21.93,48,28.6-.12-.54-.66-1.07.11-1.59.27-.18.36-.65.5-1a13.37,13.37,0,0,1,.91-2.31c.69-1.08,1.58-1,2.36.09.16.22.62.21.95.31l.2-.5a11.62,11.62,0,0,0-1.79-1" data-v-1c84121e></path><path class="cls-2" d="M163.75,320c4.54.06,13.89.09,18.43.08a4.3,4.3,0,0,0,1.45-.52,4.38,4.38,0,0,0,1.31.36c1.78-.11,3.56-.28,5.34-.47.36,0,1.07.23.91-.64.18,0,.52-.12.54-.08.31.8,1,.47,1.45.38,5.75-1.1,11.56-2,17.23-3.38a144.82,144.82,0,0,0,34.25-13.48,19.49,19.49,0,0,0,2.17-1.65c.92.38,1.58-.53,2.37-1,.37-.22.58-.7,1-.91a31.4,31.4,0,0,0,3.17-1.61c4.39-3.12,8.83-6.19,13-9.53a87.3,87.3,0,0,0,12-11.22c2.57-3,5.5-5.69,7.89-8.81,3.76-4.9,7.26-10,10.75-15.11,1.47-2.13,2.64-4.46,4.05-6.88-1.42.37-1.77-.35-2-1.31s.78-1.28,1-2l-1.52,0,.39.87-.85.2c.06-.93.12-1.76.16-2.45l2.17-.16a5.23,5.23,0,0,0,2.27,1c.31,0,.72-.76,1.08-1.17-1-.81-1.05-.88-.49-2.15-.55,0-1.17-.21-1.55,0s-.51.85-.76,1.3c-.27-.72-1.27-1.61-1.72-1.42a4.61,4.61,0,0,0-1.06.84c-.3-.37-.3-.37.35-1,0-.53,0-.91,0-1.29l-.25-.15a20.82,20.82,0,0,0-1.41,2.73c1.68,1.28.36,2.21-.06,3-.69.06-1.4-.08-1.59.18a25.58,25.58,0,0,0-1.76,3.06c0,.07.19.26.23.41a3.52,3.52,0,0,1,.12,1c0,.08-.52.26-.6.18a1.16,1.16,0,0,1-.28-.51L280.38,264l.86.39,0,.32c-.53-.07-1.14-.34-1.55-.16s-.52.87-.86,1.25-1.13.89-1.58,1.44a2,2,0,0,0-.12,2.53c-.36,0-.79.05-1-.16-.46-.48-.77-.38-1.16.05-.63.69-1.32,1.34-1.93,2.05a2.56,2.56,0,0,0-.33.88,7.12,7.12,0,0,0-1.33.78c-2.41,2.18-4.8,4.39-7.19,6.6L262,282l.64.63c-.19.25-.36.47-.47.63-.29-.2-.61-.54-.72-.48a14.12,14.12,0,0,0-1.57,1l.21.39,1.88-.2c-.13.35-.23.59-.32.84.09.07.2.12.25.21.21.36.41.74.61,1.12a6.51,6.51,0,0,1-1.31.44c-1.45.19-1.77-1.39-2.87-1.84l-1.08.83.44.55c-.61.06-1.09,0-1.38.17-1.8,1.21-3.57,2.47-5.32,3.75-.18.13-.18.51-.27.79-.26.52-1.53-.51-1.38.64l-4.11,2.15c1.09.69,2.16-.65,2.88.58a3.65,3.65,0,0,1-.71.23c-1.13.1-1.54.76-1.24,1.85a7.88,7.88,0,0,1,.1,1.58l-1.27-.57.69-2.07-.13-.27c-.41.17-1,.24-1.2.55-.44.68-.71.82-1.26.13-.36-.45-1.5-.12-1.68.47l.36.32-.76.49c-.09-.22-.17-.39-.27-.65L239,297.3l.74.71c-.77.26-1.18-.68-2-.19-1.77,1-3.67,1.84-5.5,2.8a24,24,0,0,0-2.11,1.37,3.65,3.65,0,0,0-1.19.12,128.54,128.54,0,0,1-22.4,7.29c-1.45.34-2.87.88-4.33,1.17s-3,.37-4.47.56c-3.11.4-6.23.9-9.36,1.2a73,73,0,0,1-9.11.61,5.23,5.23,0,0,0-.93.15l.91,1.18c-.77-.08-1.29-.3-1.67-.14-1.5.61-1.86.47-2.16-1.11l-1.29,0c-2,0-4,.07-6,0s-4.18-.4-6.28-.58c-1-.08-1.18.2-.71,1,.13.22.7.18,1.22.28,0,.28-.09.76-.16,1.41l2.52,1c.28-.61.45-1,.66-1.47l.16,1.9.31,0c-.39,1.25-1.24,1.2-2.21.8a16,16,0,0,0-2.49-1c-.6-.13-.85-.21-.68-.85,0-.1-.17-.27-.27-.41a18,18,0,0,0-1.62,1.89,3.28,3.28,0,0,0-.33,1.48,1.11,1.11,0,0,0,.22.81c.1.11.69,0,.71-.09.21-1.25,1.67-1.17,2.12-2.11l2.54,3" data-v-1c84121e></path><path class="cls-2" d="M220.17,305.37a127.34,127.34,0,0,0,28.1-13.75c1.36-.86,2.4-2.41,4.29-2.34.08,0,.25-.16.23-.19-.32-.72.38-.83.71-1.07a141,141,0,0,0,21.89-19.38c.25-.27.55-.5.82-.76v.34l1.92.83c-.18.68-.55,1.53.74,1.76.28-.78.87-1.56.35-2.43-.27-.46.55-1.15-.38-1.36.7-.75-.16-1.29-.25-1.88l5.67-7.19c.11-.14.29-.4.35-.38,1.11.4,1.2-.63,1.59-1.16a1.83,1.83,0,0,1,2.74-.4c1.34,1.1,1.58,1,2.05-.56-.59-.31-1.7,1.06-1.8-.23l-2-1.25,4-6.06c.18.54.3.86.41,1.19l.34-.1c-.13-.54-.27-1.09-.4-1.57l3.82-6.72c.41.29.77.53,1.37.93.14-.94.3-1.65.36-2.36s-.19-1.43.05-2c1.26-2.88,2.62-5.72,4-8.56a1.13,1.13,0,0,1,1.85-.31c.44-.63.85-1.27,1.33-1.86.19-.24.63-.56.81-.49a13.62,13.62,0,0,1,2,1.11.85.85,0,0,0,1.35-.3,4.85,4.85,0,0,0,.32-.9l-1.56.36c-.12-.27-.24-.55-.37-.83a1.6,1.6,0,0,1-1.09-.43,1.23,1.23,0,0,0-1.82.2l.63.45-2.69.93c1.27-2,.86-4.78,3.62-5.82l-1.14-.05a11.54,11.54,0,0,1,.21-1.36c.78-2.71,1.6-5.41,2.36-8.12.17-.58.36-.84,1-.72.24,0,.65-.41.84-.72s0-.6,0-.93c-1-.21-1.15-.43-.92-1.46.26-1.21.54-2.4.77-3.61.14-.73.23-1.46,1.39-1.53a1.12,1.12,0,0,1-.67-1.9c.7-.93,1.9-.49,2.94-.55-.15.27-.4.38-.57.56a1.69,1.69,0,0,0-.49.74.69.69,0,0,0,.4.53c.76.14,1.53.2,2.31.29l.25-.3a7.29,7.29,0,0,0-1.21-2.08,1.53,1.53,0,0,1-.44-2l1.18.13c.43.06,1.2.07,1.22.19.16,1.08,1.25.86,1.84,1.35-.06.39-.08.75-.16,1.1-1.29,5.43-2.4,10.92-3.92,16.28-1.28,4.48-3,8.82-4.62,13.21a7,7,0,0,1-1,1.4,5.48,5.48,0,0,1-.24,1.62c-1.33,3-2.79,6-4.09,9a1.73,1.73,0,0,1-2.25,1,10.45,10.45,0,0,1-2.48-1.36l-.83.61,2,2.56c1.14-1.11,1.14-1.11,2.59-.88l-3.12,5.19a4.27,4.27,0,0,1-.29.73c-.75,1.25-1.5,2.5-2.28,3.74-.43.67-.9,1.31-1.29,1.88-.32-.36-.47-.68-.66-.71a.77.77,0,0,0-.63.36,10.73,10.73,0,0,0-.56,1.55h1.13l-1,1.46a6,6,0,0,0-1.73-.38c-.25,0-.43.65-.63,1l.26.17c.21-.2.41-.41.61-.61,1,.79.9,1.11-.68,2.78l-1.9-.81c.67,1.69.72,2.83-.35,4-2.41,2.63-4.69,5.37-7,8.05-1.54,1.76-3,3.54-4.68,5.21-1.79,1.83-3.68,3.58-5.58,5.3-14,12.78-30.26,21.93-48,28.6.12-.54.66-1.07-.11-1.59-.27-.18-.37-.65-.51-1a12.59,12.59,0,0,0-.9-2.31c-.7-1.08-1.59-1-2.36.09-.16.22-.63.21-.95.31l-.2-.5a11.08,11.08,0,0,1,1.78-1" data-v-1c84121e></path><path class="cls-2" d="M143.6,311.75c.78-1.08.9-2.1-.8-2.49-3-.67-6-1.53-8.9-2.35-1.74-.49-1.94-.43-2.78,1.22a5.6,5.6,0,0,1-.75,1.25,5.43,5.43,0,0,0-1.53,3.14l11,3.33-.52-2.59,1.75-.91,1,.91a2.53,2.53,0,0,0-.67.11c-.31.18-.76.37-.85.65a1.24,1.24,0,0,0,.39,1,5.39,5.39,0,0,0,3.71,1.9,13.05,13.05,0,0,0,1.84-.22c.39-.87.82-1.81,1.22-2.71l-4.23-1.91a1.25,1.25,0,0,1,.1-.31" data-v-1c84121e></path><path class="cls-2" d="M156.75,313.82A18.07,18.07,0,0,1,157.8,312c-1.41-.21-2.76-.36-4.08-.62a1.32,1.32,0,0,0-1.4.47c-.24.28-.66.4-.89.68a1.28,1.28,0,0,0-.1.77c0,.11.23.24.21.31-.33.91-.71,1.8-1,2.71-.19.54-.27,1.1-.41,1.66.58,0,1.27.18,1.69-.07a1,1,0,0,1,1.43.12c.66.86,1.59.7,2.44.89s1-.29.83-1a6.65,6.65,0,0,1,.25-4.09" data-v-1c84121e></path><path class="cls-2" d="M158.45,312.36a5.88,5.88,0,0,1-.94,1.53c-.2.17-.77.14-.53.55a1.38,1.38,0,0,0,1.1.6,9.7,9.7,0,0,0,2.07-.8l-1.7-1.88" data-v-1c84121e></path><path class="cls-2" d="M162.18,318.53l-.86-.44-.62,1.38,1.39.3c-.18-.25-.35-.51-.52-.77l.61-.47" data-v-1c84121e></path><path class="cls-2" d="M205.7,311.75c-.77-1.08-.9-2.1.81-2.49,3-.67,5.94-1.53,8.9-2.35,1.74-.49,1.94-.43,2.77,1.22a5.64,5.64,0,0,0,.76,1.25,5.43,5.43,0,0,1,1.53,3.14l-11,3.33c.23-1.15.41-2.09.51-2.59-.5-.26-1.09-.56-1.74-.91l-1,.91a2.44,2.44,0,0,1,.66.11c.32.18.77.37.85.65a1.2,1.2,0,0,1-.38,1,5.39,5.39,0,0,1-3.72,1.9,13.42,13.42,0,0,1-1.84-.22c-.39-.87-.81-1.81-1.22-2.71l4.24-1.91a1.25,1.25,0,0,0-.11-.31" data-v-1c84121e></path><path class="cls-2" d="M192.56,313.82a20.23,20.23,0,0,0-1.05-1.82c1.41-.21,2.75-.36,4.08-.62a1.3,1.3,0,0,1,1.39.47c.24.28.66.4.89.68s.12.51.11.77-.24.24-.21.31c.32.91.7,1.8,1,2.71.18.54.27,1.1.4,1.66-.57,0-1.26.18-1.69-.07a1,1,0,0,0-1.42.12c-.66.86-1.6.7-2.44.89s-1-.29-.84-1a6.58,6.58,0,0,0-.24-4.09" data-v-1c84121e></path><path class="cls-2" d="M190.85,312.36a6.47,6.47,0,0,0,.94,1.53c.21.17.77.14.53.55a1.37,1.37,0,0,1-1.1.6,9.7,9.7,0,0,1-2.07-.8c.63-.69,1.08-1.18,1.7-1.88" data-v-1c84121e></path><path class="cls-2" d="M235,50.49c.48.78.33,1.27-.74,1.49,1.66.88,3.1,1.62,4.52,2.39s2.94,1.57,4.34,2.45A34.12,34.12,0,0,1,247,59.11c1.27,1,2.71,1.8,4.06,2.71s2.69,1.8,4,2.75,2.64,2,3.94,3,2.53,2,3.68,3c.38-.25.87-.68,1-.62.92.78,2.94.09,2.75,2.33l.31,0,1-.94c0,.64.07,1.22.09,1.6-.33.26-.72.42-.77.66a1.28,1.28,0,0,0,.21,1c.9.94,1.85,1.84,2.84,2.69a3.51,3.51,0,0,0,1.57,1,4.17,4.17,0,0,0,1.64-.4c0,.48,0,1.11,0,1.79l-.85-.38-.13.14,9,10c.2-.26.42-.55.63-.84,0,.12.08.24.13.36.28,0,.68.06.82-.09.65-.71,1.22-.27,1.82,0l1.24.55.22-.31c-.67-.66-1.35-1.31-1.87-1.81a18.29,18.29,0,0,0,2.31-.43,1.4,1.4,0,0,0,.8-.85c.08-.25-.23-.62-.37-.94a2.84,2.84,0,0,0-.23.86.66.66,0,0,1-.28,0c0-.36-.06-.72-.06-.84a12.72,12.72,0,0,0-1.09-2,135.7,135.7,0,0,0-16.14-16.29,8.74,8.74,0,0,0-1.49-.66c-.41-.23-.74-.74-1.14-.8-.84-.12-.91-.61-1.14-1.27s-.89-1.07-1.4-1.65l-.64,1.17c-.22-.44-.57-.82-.49-1,.38-.83-.24-1.08-.71-1.42-1.43-1-2.83-2.12-4.3-3.1-2.69-1.79-5.37-3.6-8.15-5.24s-5.93-3.28-8.92-4.88c-.68-.37-1.42-.65-1.86-.85-.08.39-.11.93-.2.94-.74.09-1.58,1-2.24-.19-.09-.16-.44-.18-.58-.23.19.8.37,1.54.51,2.17l-1.56.69" data-v-1c84121e></path><path class="cls-2" d="M136.91,296.82c-.47-.17-.93-.34-1.4-.49a111.17,111.17,0,0,1-29.61-14.25c-5-3.42-9.76-7.32-14.64-11a15.71,15.71,0,0,1-1.51-1c-.46-.45-.73-1.1-1.18-1.56-2-2.09-4.16-4.12-6.18-6.24-.9-.95-1.68-1.94-3.2-1.34-.17.07-.4,0-.67,0,.25-1.27-.6-1.41-1.63-1.41,1.29-1.34,2,.78,3.13.26l-3.29-3.9A15.68,15.68,0,0,1,74.94,257c-1.11.48-1.3,1-.51,1.87,2.12,2.42,4.2,4.87,6.42,7.19a129.87,129.87,0,0,0,48.3,31.65c.57.22,1.14.41,1.71.62l4.34,1.58a11.85,11.85,0,0,0,.19-1.45,13.94,13.94,0,0,0-.13-1.52l1.57.32c0-.13,0-.27.08-.4" data-v-1c84121e></path><path class="cls-2" d="M258.6,76.19c-2.81-2.23-5.59-4.5-8.55-6.51-3.73-2.53-7.63-4.83-11.46-7.21-.2-.12-.55-.28-.67-.19A14.24,14.24,0,0,0,236,63.82c-.16.17-.06.59-.07.68a6.2,6.2,0,0,1,1,.79c.79.95,2.84,1.79,3.82,1.5,0,.23-.12.57,0,.67a9.23,9.23,0,0,0,1.48,1.16c1.42.87,3.1,1.48,4.25,2.62,1.57,1.56,3.69,2.29,5.16,3.94a13.84,13.84,0,0,0,2.11,1.67l5.58,4.24a2.74,2.74,0,0,1,.5.52c.45.56.84,1.17,1.34,1.68,2.21,2.26,4.57,4.4,6.65,6.77,3,3.46,5.92,7.09,8.86,10.65.58.72,1.12,1.47,1.66,2.22,1.24,1.77,1.23,1.77,3.08,1,0,0,0-.06.05-.19l-.48-.3,1.3-.7-.55-.8-.24.13c0,.26.07.52.11.79-1.54-.06-1.82-1.33-2.38-2.23l-1.1.38-.12-.23a4.38,4.38,0,0,1,.86-.76,9.84,9.84,0,0,1,1.46-.52c-.95-1.32-1.46-.52-2.14.14-.11-.55-.38-1-.25-1.31a2,2,0,0,0-.22-2.35q-4.08-4.77-8.2-9.53a4.37,4.37,0,0,0-1-.58c0-.58-1.8-2.6-3.62-3.88-.41.8.93,1.91-.39,2.49-.23-1-.5-2-.7-3.08a2.28,2.28,0,0,0-2.81-1.91c-.06-.42-.12-.88-.18-1.34-.22.07-.56.09-.62.23a3.22,3.22,0,0,0-.12,1L259,79c1.18-1.28.61-2-.36-2.77" data-v-1c84121e></path><path class="cls-2" d="M286.91,241.42c-.07-.16-.29-.38-.26-.42.7-.79.17-1.5-.11-2.18l.65-.09-1.49-1.23c-.19.28-.34.48-.47.69q-4,6.09-7.92,12.19c-.51.78-1.11,1.51-1.68,2.26a23.55,23.55,0,0,1-1.76,2.2c-.57.57-.69,1.37-1.29,2-1.49,1.43-2.83,3-4.23,4.53-.08.08-.21.19-.19.25.09.34.19.93.35,1,1.23.19,1,1.12,1,1.91-.32-.48-1.69,0-1.14-1.28,0,0-.35-.3-.47-.26a4.51,4.51,0,0,0-1.72.72q-5.5,5-10.92,10.07a4.92,4.92,0,0,0-.75,1.42c1.57-.34,1.57-.34,1.74.4l.88-.22.72,1.28.91-1.57,2.11-1.21-.49-.69c.49,0,1,.12,1.24-.08,2.38-2.19,4.73-4.44,7.13-6.72l-.57-.45a8.08,8.08,0,0,0,1.67-.89,12.86,12.86,0,0,0,1.74-1.87c3.07-3.83,6.22-7.61,9.15-11.55,1.24-1.66,3-3.16,3.06-5.5,0-.14.34-.24.48-.39.58-.59,1.14-1.2,1.65-1.74-.36-.49-.58-.77-.93-1.23a10.2,10.2,0,0,1,1-.14.83.83,0,0,0,.83-1.12" data-v-1c84121e></path><path class="cls-2" d="M83.76,83.23c-1.27,1.14-2.71,2.08-3.53,3.77l3.06-1.29.87,1-.73,1c1.21-.14,1.49-1,2.15-1.5L84,84.43a2.38,2.38,0,0,1,0-.26l1.72.55c2.49-.22,3.57-2.51,5.52-3.9l-1.2-.61-.44-1.5c.36-.64.75-1.32,1.14-2-1.3.91-2.64,1.75-2.92,3.63-.27-.39-.4-.6-.68-1a41.09,41.09,0,0,1-3.44,3.89" data-v-1c84121e></path><path class="cls-2" d="M54.91,99.65h0v0l0,0h0c0,.74-.68,1.74.63,2-.35.05-1,0-1.06.17a17.2,17.2,0,0,0-.21,2.43l-.79.62c-.33-.42-.27-1.47-1.22-.95a6.9,6.9,0,0,0-1.34,1.31c-.59-.76-1.1-.82-1.51-.12-.66,1.15-1.25,2.34-1.9,3.56l1.32.6c0-.22.08-.44.13-.67a3.72,3.72,0,0,1,.88.61,3.13,3.13,0,0,1,.4.91l-2.16,1c-.05-.07-.1-.14-.14-.21l.67-.82c-.16-.2-.32-.42-.5-.62s-.38-.34-.71-.64l-5.37,11.94.13.08.37-.5c1,.82,1.25.77,2.24-.17.57-.53,1.22-1,1.66-1.32.65.64,1.12,1,1.54,1.51.65.68,1,.5,1.38-.29,1.67-3.38,3.39-6.72,5.09-10.07a4,4,0,0,0,.18-.58l-1.49.42c-.07-.08-.12-.16-.18-.24l1.67-1.71.74.21c2.75-4.2,5.46-8.36,8.17-12.52L63,95.35l2.68-2.25c-.37-.86-.62-1.43-.86-2,1.8.08,1.87,0,1.76-1.17,1.45.35,2-.74,2.79-1.63.5-.62,1-1.21,1.55-1.82l1.41-1.68-.17-.18-.47.3a6.57,6.57,0,0,1-.47-1c-.2-.62-.67-1.5-.42-1.85a7.06,7.06,0,0,1,2-1.41c0,.07.08.14.13.21.12-.56.25-1.13.42-1.91.45.6,1.07,1.2,1,1.34-.63.94.21,1,.68,1.43,2.49-2.39,4.88-4.8,7.4-7.07s5.17-4.53,7.86-6.66,5.4-4.08,8.2-6,5.69-3.69,8.63-5.38,5.93-3.29,9-4.76a80.84,80.84,0,0,1,9.19-4.05c3.2-1.07,6.38-2.22,9.79-3.41-1-.16-1.67-1.21-2.47-.06l-.59-1,2-.46c.59-.14,1-.17,1.09.67,0,.25.67.69,1,.64,1-.18,2-.52,3-.81-.09-.42-.15-.72-.22-1.06l2-.11-.9.92,2.82-.68-.56-.66c2.4,1,4.46-.49,6.55-.59,0-.32-.05-.5-.07-.68h0l0-.06c-.09-.82.7-1,1.21-1.47-1-.12-1-.13-1.34-1a.53.53,0,0,0-.44-.23,8.56,8.56,0,0,0-.94.63l.92,1.27.12-.11c.16.31.31.63.47,1a.2.2,0,0,0,0,.07h0a2,2,0,0,0,1.75-1.46L151,40l-1,.77.13.27,3.29-.56-1-.83c.07-.11.14-.23.22-.34l1.55.88a3.41,3.41,0,0,0,1.49,0c1.49-.21,1.85-.93,1.16-2.29-.09-.17-.12-.55,0-.62.6-.44.31-.92.12-1.42s-.25-.73-.37-1.1l.32-.19L158,36c.75.5,2.6-.39,2.78,1.91a12.74,12.74,0,0,0-2.15.22c-.36.09-.62.55-.92.84a11.86,11.86,0,0,0,1.17.72c.17.08.42,0,.64-.06,2.27-.22,4.53-.56,6.8-.65,4-.14,7.92-.13,11.89-.19,1.41,0,2.83-.15,4.23,0,2,.14,4,.39,6,.7,1.11.18,2.25-.11,3.36.31A8.76,8.76,0,0,0,194,40c-.24-.37-.55-.45-.73-.66-.38-.44.28-1.88.86-2a7,7,0,0,0,1-.54l-.93-.33c1.79-1.46,2.43-1.59,3.9-.85-1.32.88-1.68,2.87-3.61,3l.69,1.57c2.82.53,5.93,1.16,9.06,1.68,1.41.23,2.74,1.07,4.25.56.08,0,.21.1.31.17a4.64,4.64,0,0,0,.82.54c.71.24,1.44.4,1.88-.46l.77.53c.1-.23.18-.39.22-.48,1.28,0,1,2.68,2.53,1.67l9.46,3.4L224,46.7a1.81,1.81,0,0,1,1,.7,2.12,2.12,0,0,0,3,1,4.32,4.32,0,0,0,3.51,2l-.94-1,1.35-.3c0-.11,0-.21-.08-.31l-1.1-.39a8.37,8.37,0,0,0,1.6-1.13c.77-.9.88-.37.94.38l1.41.13-.86-1c.37,0,.84-.14.86-.07.47,1.25,1,0,1.32.1l-2.53-1.55.49-.7c-3.25-1.34-6.44-2.67-9.65-3.94-.22-.09-.61.21-.92.33l-1.37.54.51-1-.92-.42c-1.37,1.95-1.35,2.2-.13,2.44.51.81.86,1.39,1.28,2.06-.5.09-.9.2-1.32.25-.18,0-.38-.12-.54-.08-.41.09-.81.25-1.21.37a9.49,9.49,0,0,1-.06-1.19c.08-1,.14-1.9-.62-2.53l1.46-1.15a3.82,3.82,0,0,0-2.82-2c-1.19-.27-2.35-.63-3.37-.9-.18.88-.31,1.47-.43,2.06h0c.32.56.63,1.13.9,1.61l3-1.67-1.48-.66-.41.73-.69-.85-1.36.84h0c-1.36,0-1.39,0-.85-1.35.13-.33.28-.64.47-1.06a136,136,0,0,0-21-4.32c.87,1-.43,1.18-.39,1.85-.75-.26-1.36-.43-1.43-1.36,0-.32-.72-.79-1.14-.82-3.56-.3-7.13-.53-10.7-.75-.82-.05-1.63,0-2.68,0L179.24,33l-1.19.4c-.56-.25-1-.42-1.34-.61-.11,0-.27-.11-.28-.19-.15-1-.82-1.06-1.61-1.05a115.14,115.14,0,0,0-17.5,1.19,35.85,35.85,0,0,1-4.83.53c-1.6,0-2.93,1.46-4.62.85,0,0-.07,0-.11,0-1.07.25-2.15.49-3.22.75-2.78.67-5.58,1.26-8.32,2s-5.39,1.77-8.09,2.65c-1.29.41-1.4.58-1.13,1.88a.91.91,0,0,1-.21.72c-.37.39-.81.73-1.41,1.24-.24-.5-.69-1-.63-1.46s.6-.91,1.16-1.67A120.59,120.59,0,0,0,108.38,48a2.85,2.85,0,0,1-.77,1.18,1.83,1.83,0,0,1-.93.2,8.85,8.85,0,0,0-1.27.07c-.29.08-.53.38-.81.54l-6,3.33a22.44,22.44,0,0,0,1,2.08,1.6,1.6,0,0,0,.87.6c.94.3,1.9.53,3.11.85l-3,1.26c-.29-.22-.78-.57-1,.49,0,.19-.7.48-.79.4a11,11,0,0,0-3.84-2.49,2.92,2.92,0,0,1-.67-.51c-3.42,2.58-6.88,5.18-10.33,7.81-.69.52-1.51,1-1.35,2.11,0,.24-.34.75-.53.76s-.59-.33-.93-.55c-.45.87-2.9,1.16-.73,2.92l-.95.29c-.1-.35-.18-.63-.36-1.22l-.74,1.18c-.37.1-.84.1-1.11.34C75.94,70.8,74.71,72,73.46,73.2l.25.12c-.08.42-.17.84-.26,1.26l-.22,0-.37-.87-6,6.45,1.12,0c.19-.43.25-.86.47-1a4.12,4.12,0,0,1,1.3-.18c-.37,1.41-1,2-2,1.61s-1.45.12-1.94.75c-2.15,2.83-4.28,5.67-6.45,8.49-1.25,1.64-2.55,3.24-3.84,4.86.61.62,1.06,1.07,0,1.52A1.6,1.6,0,0,0,55,97.39a17.17,17.17,0,0,0,0,2.27h0v0h0l0,0-1.68-.76c-.54.75-1,1.45-1.41,2l1.35,1.38,1.74-2.6" data-v-1c84121e></path><path class="cls-2" d="M61.21,239.47c.12.24.53.32.81.48l.32-.14c0,.35-.08.7-.15,1.38,1,1.62,2.1,3.59,3.34,5.49,1.45,2.21,3,4.38,4.51,6.51.49.66.91,1.5,2,1.52a16.29,16.29,0,0,1,2.46.44c.45.07.91.08,1.54.13l-9.14-13-.44.37c.61-.83-.13-1.36-.35-2-.32-1-1.12-.47-1.8-.69.75-.8.5-1.53,0-2.35-1-1.73-1.77-3.58-2.86-5.23-.57-.86-.46-2.53-2.35-2.22.39-.36.64-.59.94-.85-.7-1.23-1.95-.51-2.85-.81-.09-.31-.17-.58-.24-.86l-.42,0c-.12.66-.52,1.46-.29,1.95,1.56,3.34,3.25,6.62,4.93,9.9" data-v-1c84121e></path><path class="cls-2" d="M62.47,111.14c-.14,0-.3.24-.45.37a1.57,1.57,0,0,1-.21,2.46l2.06.23c.38-.44.71-.81,1-1.2,1-1.3,1.45-2.94,2.53-4.25a66.67,66.67,0,0,0,4.07-6,5.38,5.38,0,0,0,.36-1.5c1.71-.92,2.59-2,2.46-3.06,2-.7,2.29-2.72,3.31-4.22-1.28-.24.12-1-.41-1.62l-1.38.71c.94-1.78.94-1.78,2.46-1.46,0-.29,0-.54,0-.76,1.19-.16,2.46.45,3.4-.63.77-.89,2.09-1.59,1.27-3.14-1.57-.18-2,0-2.91,1.71l-.83-1.42L70.15,98.4l1,.24,0,.21-1.22-.14c-1.82,2.78-3.71,5.6-5.54,8.46-.52.82-1.08,1.74.06,2.56l.9-.39a3.44,3.44,0,0,1-2.89,1.8" data-v-1c84121e></path><path class="cls-2" d="M49.15,155.82c.27,0,.55,0,1.06-.08l-1.92-2.06a5.88,5.88,0,0,0,1-.15c.38-.13,1-.28,1-.53.33-1.21.51-2.45.75-3.71l-1.39-.4.8-.85.41.91.41,0c0-.93.09-1.87.18-2.81,0-.35-.25-.79.45-1.05.32-.12.34-1.06.56-1.86l-1.09.47c2.31-2.62,2.52-6,3.67-8.93-1.17-.61-1.16-.57-2.14-.12a4.13,4.13,0,0,1-1.38.08,9.57,9.57,0,0,0-.47,1.22c-1,3.61-2,7.23-3.05,10.84-.29,1-.31,1.8,1,1.9.06,0,.11.09.17.14,0,.33-.08.67-.13,1L47.5,149a67.17,67.17,0,0,0-1.56,9.89c.65-.47,1.14-.79,1.58-1.16a.77.77,0,0,0,.28-.57c-.15-1.07.41-1.39,1.35-1.35" data-v-1c84121e></path><path class="cls-2" d="M54.84,220.89l-.86-.64.7-.38-.29-.06c0-.71,0-1.41.15-2.1,0-.14.42-.22.61-.3-1-3.27-2-6.52-3-9.83-1,.44-2-.54-3,.18h0l0,0-.05,0-.27-1.66c1-.35,1-.45.82-.89a6.63,6.63,0,0,1-.33-1.1c-.74-.18-.74-.18,0-1.56l1.72.77c-.73-4.63-1.42-9-2.14-13.65-.65.08-1.33.14-2,.25a3.88,3.88,0,0,0-.72.26c0-.25-.13-.58,0-.75a8.77,8.77,0,0,1,1-1.05c-.13-.11-.24-.29-.33-.28-.92.14-.81-.27-.46-.83.54-.86.2-1.73,0-2.8-.48.22-1.08.32-1.14.57a3,3,0,0,0,.22,1.28l-.54-.08c.31,2.68.61,5.3.94,7.91,0,.32.46.7.37.9-.52,1.21.07,1.36,1.17,1.13,0,.11,0,.22,0,.34l-1.12.51c.3,1.54.61,3.11.92,4.74l1-.43c.63.83.63.83-.75,1.58.32,1.39.62,2.8,1,4.19.07.26.42.44.67.65a.11.11,0,0,1,0,.05h0c-.08.4-.34.87-.24,1.22,1.22,4,2.49,7.92,3.78,11.87a4.73,4.73,0,0,0,.83,1.11c-.07-1.19,1.09-.54,1.3-1.08" data-v-1c84121e></path><path class="cls-2" d="M44.62,176.62c-.1,1.34,0,2.41,1.7,2.6a2.29,2.29,0,0,1,1.07.72,1.61,1.61,0,0,1,.33.79c0,.17-.15.45-.07.55a.55.55,0,0,0,.55.11c.13-.06.19-.34.19-.53,0-1.4-.1-2.81-.07-4.22a7.89,7.89,0,0,0-.88-4.6l.89.49c0-.65,0-1.17.05-1.71l-2.55.46c0,.19-.06.45-.1.76l-.95.18c-.05,1.49-.05,2.95-.16,4.4" data-v-1c84121e></path><path class="cls-2" d="M45.14,165.8c-.14,1.75-.32,3.49-.48,5.24l.31.09,1.77-3.94,1.82.39c.1-1.23.18-2.41.29-3.89-.75,1.3-.75,1.3-1.51,1l.4-.32-1.87-1.05.06-.22,2.89.51c-.07-.49,0-.88-.18-1a10.71,10.71,0,0,0-1.42-1c-.22.93-1,.86-1.71,1.07-.14,0-.22.43-.24.66-.06.82-.06,1.64-.13,2.45" data-v-1c84121e></path><path class="cls-2" d="M55.89,123.71c-.62,1.36-1.2,2.66-1.78,4l1.52.28c.44-.28.8-.54,1.18-.77s.77-.21.94-.46c.53-.78,1-1.62,1.44-2.44l-.16-.22c-1.27,1.35-2.05-.45-3.14-.34" data-v-1c84121e></path><path class="cls-2" d="M47.28,183.77a2,2,0,0,0,.84.54c.07,0,.38-.4.41-.63.17-1.31-.18-1.69-1.7-1.74l.74,1.15c-.11.26-.35.61-.29.68" data-v-1c84121e></path><path class="cls-2" d="M57.52,224.34c-.75-.58-1.21.24-1.82.44l.79.77,1.89,0a5.23,5.23,0,0,0-.86-1.19" data-v-1c84121e></path><path class="cls-2" d="M49.13,161.4c.09-1,.15-1.66.22-2.36-.55.34-1,.6-1.51.94l1.29,1.42" data-v-1c84121e></path><path class="cls-2" d="M54.8,131.52l-1.46-1.47c-.2.34-.4.7-.62,1.09l2,.56c0-.06,0-.12,0-.18" data-v-1c84121e></path><path class="cls-2" d="M39,196.87l-.56.65c.28.65.5,1.16.83,1.89.26-1,.57-1.81-.27-2.54" data-v-1c84121e></path><path class="cls-2" d="M61.84,115.27c.22.32.38.79.68.91.67.28.83-.19.85-.83l-1.26-.29-.27.21" data-v-1c84121e></path><path class="cls-2" d="M36.08,194.41a4.44,4.44,0,0,0-1-.17c-1.05.08-1.26-.38-1-1.29a11.66,11.66,0,0,0,.27-1.26l1.61.82c-.34-1.21,1-.42,1.12-1l-.84-.6.76-.51-1.27-1,1-.69c0-.05,0-.34,0-.52a8.47,8.47,0,0,0,1.36,0,4.13,4.13,0,0,0,.09-1c-1.31,1.41-1.36-.65-2.15-.41-.06-.77,1.22-1.2.55-2.1l1.34-.45c-.09-2.79-.17-5.57-.26-8.49-.24.18-.58.32-.57.42.1.91-.64,1.48-.88,2.25s-1,1-1.7.37c.06-.19.12-.37.15-.45l-2.07-.17c-.16,0-.4-.1-.46,0-.57.67-.63-.09-.83-.31a8.89,8.89,0,0,1-.64-1l1.28-.41-.32-1.65c-1.6-.23,0-1-.32-1.57l1.7.66c.14-.47.25-.83.37-1.21l1.3.84.23-.22c-.09-.34-.18-.69-.26-1l.85-.19-.65-.74.79-.43,2.11,1.82c.05-1.45.1-2.92.14-4.25l-1.39-.62-.79.75-.25-.21.91-1.26-.55-.54,1.08-.44-.93-.28.19-.34,1.78,1c.61-1.85-1.11-1-1.78-1.63l2.08-1.41-.44-.4c.26-.84.56-1.64.74-2.47s.18-1.43.27-2.15c.16-1.32.65-2.76-1.41-3.32l.25-.27h1.62c.15-.86.31-1.71.45-2.56,0-.25.16-.64.05-.73-.86-.69-.25-1.33,0-2s.63-1.42.84-2.16c.27-1,.31-2,.61-3,.89-3.06,1.51-6.21,2.23-9.33.29-1.22,0-1.49-1.07-1.25L43,132.1l-.28-.36-2.14.78,1,1.54-.23.2a11.6,11.6,0,0,1-1.07-.56c.39-1-.65-.72-1-1.06a2,2,0,0,1-.07-.48.86.86,0,0,0-1-1c-.27,0-.63.58-.75,1-.81,2.63-1.7,5.24-2.33,7.91-.8,3.35-1.38,6.76-2.07,10.14-.29,1.4-.67,2.79-1,4.19a7.67,7.67,0,0,0,0,1.32c.55-.49.83-.94,1.18-1a2.78,2.78,0,0,1,1.47.2c.13,0,.17.63.07.91-.23.65-.74.47-1.21.29s-.67-.3-1-.45c0,.1-.11.19-.17.29l1.29,1.21c-.45.29-.85.54-1.26.78-1.21.7-1.05,2-1.2,3.08a57,57,0,0,0-.56,6.39c-.12,4.93-.13,9.86-.15,14.78,0,.25.31.58.56.72.53.31,1.12.52,1.75.81l-2.27-.28c.06,1,.14,1.81.15,2.63,0,1.17,1.41.66,1.77,1.61l-1.76-.34c.32,2.44.67,4.68.87,6.94.08.94.29,1.56,1.32,1.6l-.51,1.32c2.5.54,3.55-.28,3.52-2.71" data-v-1c84121e></path><path class="cls-2" d="M212.4,296.82c.46-.17.93-.34,1.4-.49a111.32,111.32,0,0,0,29.61-14.25c5-3.42,9.76-7.32,14.63-11a15.87,15.87,0,0,0,1.52-1c.46-.45.72-1.1,1.17-1.56,2-2.09,4.17-4.12,6.18-6.24.91-.95,1.69-1.94,3.21-1.34.17.07.4,0,.66,0-.24-1.27.61-1.41,1.63-1.41-1.29-1.34-2,.78-3.13.26l3.3-3.9a16.58,16.58,0,0,0,1.78,1.09c1.12.48,1.3,1,.52,1.87-2.12,2.42-4.2,4.87-6.43,7.19a129.79,129.79,0,0,1-48.3,31.65c-.56.22-1.13.41-1.7.62l-4.34,1.58a12.09,12.09,0,0,1-.2-1.45,14.26,14.26,0,0,1,.14-1.52l-1.57.32c0-.13-.06-.27-.08-.4" data-v-1c84121e></path><path class="cls-2" d="M101.27,68.47a4.29,4.29,0,0,1-.71.76c-2,1.44-4.12,2.84-6.18,4.27-.43.3-.81.65-1.22,1l.22.38c.3-.14.7-.2.87-.43.4-.54.71-.67,1.29-.18a1.33,1.33,0,0,0,1.82.14,17.3,17.3,0,0,0,1.3-1.28c.48.78,1,.93,1.74.34a7.78,7.78,0,0,1,.74-.42l10.28-6.67c.39-.25.77-.52,1.17-.8l-.65-.76c2.4.61,3.65-1,5.48-1.73a1.59,1.59,0,0,0-2.25.54c-.06,0-.15-.07-.17-.12-.11-.31-.21-.63-.3-.94a8,8,0,0,0,.85,0c.27,0,.53-.16.8-.21a7.35,7.35,0,0,1,1.39-.18c.3,0,.63.34.86.26s.26-.51.28-.56a11.82,11.82,0,0,0,1.93-.48c.59-.27,1.08-.79,1.68-1.05,1.15-.48,2.36-.85,3.54-1.29,2.79-1,5.55-2.16,8.38-3.11,1.12-.37,1.66-.93,1.5-2.13.73.11,1.53,0,1.93.35a1.54,1.54,0,0,0,2,0c.32-.2.28-1,.43-1.46a2.93,2.93,0,0,1,.33-.55l1.15,1.5a2.85,2.85,0,0,0,.76-.15c1.92-1,4.54-.17,5.92-2.26l-.93-1.76,1-.85a2.43,2.43,0,0,0-.14-.2l-1.12.22c0,.21.1.37.12.46-2.22-.36-4.09.64-6.08,1l0,.26,1.5.26.06.36a4.31,4.31,0,0,1-1.51.38c-.37,0-.69-.54-1.17-1l-5.78,1.75c.14.4.22.66.31.92l-.11.1-.73-.81C125.26,54.9,107.67,63.41,103.59,67l1.42.73a7.54,7.54,0,0,0-.78.06c-1,.3-2.13-.3-3,.65" data-v-1c84121e></path><path class="cls-2" d="M213.61,55.27l2.78.93,3.11,1c-.31-.44-.5-.72-.68-1l.21-.19c.32.31.66.6,1,.93s.24.54.44.62c2.46,1,4.93,2.07,7.4,3.09a1.61,1.61,0,0,0,.37,0l-.65-.87c1.41,1,2.51,1.85,3.73,2.54a8.2,8.2,0,0,0,4.46,1.56c-.57-.44-1.21-.75-1.17-.94a13.23,13.23,0,0,1,.74-2.2c-5-3-20.21-9.13-23.72-9.56l.92.82-.44.87h0l0,0-1.15-.52c.5-1.14.09-1.63-.94-1.87-2.6-.61-5.18-1.29-7.77-1.92-1.12-.27-2.26-.49-3.4-.7a23.73,23.73,0,0,0-3.52-.59c-1,0-2.1-1-3.08.19-.14-.21-.28-.44-.42-.64-.3.1-.56.17-.8.27s-.84.23-.34.81c.07.08-.3.8-.49.81a3.34,3.34,0,0,1-1.73-.29,16.21,16.21,0,0,1-2-1.65l-.58.61c-.22-1.95-1.68-1.37-2.7-1.46-.37,0-1,.59-1.17,1-.33,1.23-.83,1.05-1.43.48l1.27-1.36-.14-.32c-2-.05-4-.26-6-.11s-3.94-.18-5.91,0-4,.25-5.89.37l1.93,1.84-1.39,0c0,.1,0,.19,0,.28l.92.73c-.32.21-.63.43-.91.63l18.55-.21c-.22-.58-1-1.25.09-1.75.35.36.68.68,1,1-.17.32-.34.61-.55,1,1.29.11,2.47.25,3.66.29.44,0,1.16-.44,1.28-.3.67.83.9.05,1.29-.23.12-.09.31-.07.63-.14l-.79.86c2.66.42,5.13.93,7.62,1.15A45.31,45.31,0,0,1,204,52.66c2.45.58,4.89,1.24,7.15,1.82l.86-1.55h0l0,0c.12.07.3.15.29.2-.23,1.67-.24,1.67,1.25,2.16" data-v-1c84121e></path><path class="cls-2" d="M152.84,50.55c.27.68.68.58,1.2.5,1.67-.26,3.36-.46,5-.75.4-.07.74-.44,1.13-.62.68-.31.73-1.2,1.53-1.49s1.9-.6,1-2.12c-4,.63-8.15,1.26-12.27,1.93-.26,0-.46.42-.69.65l.95.75-2,2.62c1.33-.39,2.61-.12,3.53-1.22l-.71-.83.19-.2c.37.25.92.43,1.06.78" data-v-1c84121e></path><path class="cls-2" d="M98.4,56.8c.07-.86.14-1.59.22-2.49l-.47-.3-3,1.49c0,.15,0,.3,0,.44l3.24.86" data-v-1c84121e></path><path class="cls-2" d="M248,68.47a4.34,4.34,0,0,0,.72.76c2.05,1.44,4.12,2.84,6.18,4.27.42.3.81.65,1.21,1l-.22.38c-.29-.14-.69-.2-.86-.43-.41-.54-.72-.67-1.29-.18a1.34,1.34,0,0,1-1.83.14,17.23,17.23,0,0,1-1.29-1.28c-.48.78-1,.93-1.75.34a5.91,5.91,0,0,0-.74-.42l-10.28-6.67c-.39-.25-.76-.52-1.16-.8l.65-.76c-2.4.61-3.66-1-5.48-1.73a1.59,1.59,0,0,1,2.25.54c.06,0,.15-.07.17-.12.11-.31.2-.63.3-.94a8,8,0,0,1-.85,0c-.27,0-.53-.16-.8-.21a7.46,7.46,0,0,0-1.4-.18c-.29,0-.63.34-.85.26s-.26-.51-.29-.56a11.68,11.68,0,0,1-1.92-.48c-.6-.27-1.08-.79-1.68-1.05-1.16-.48-2.36-.85-3.54-1.29-2.79-1-5.56-2.16-8.38-3.11-1.12-.37-1.66-.93-1.51-2.13-.72.11-1.52,0-1.93.35a1.53,1.53,0,0,1-2,0c-.32-.2-.28-1-.43-1.46a2.58,2.58,0,0,0-.34-.55l-1.15,1.5a2.93,2.93,0,0,1-.76-.15c-1.91-1-4.53-.17-5.92-2.26l.94-1.76-1-.85a2.43,2.43,0,0,0,.14-.2l1.13.22c-.06.21-.1.37-.13.46,2.23-.36,4.1.64,6.09,1,0,.09,0,.18,0,.26l-1.5.26-.06.36a4.36,4.36,0,0,0,1.52.38c.37,0,.69-.54,1.16-1l5.78,1.75c-.13.4-.22.66-.3.92l.11.1.73-.81C224,54.9,241.63,63.41,245.71,67l-1.41.73a7,7,0,0,1,.77.06c1,.3,2.14-.3,3,.65" data-v-1c84121e></path><path class="cls-2" d="M196.47,50.55c-.28.68-.68.58-1.2.5-1.68-.26-3.36-.46-5-.75-.4-.07-.74-.44-1.13-.62-.68-.31-.73-1.2-1.53-1.49s-1.9-.6-1-2.12c4,.63,8.15,1.26,12.27,1.93.26,0,.46.42.69.65l-.95.75,2,2.62c-1.34-.39-2.62-.12-3.53-1.22l.7-.83-.19-.2c-.36.25-.91.43-1.05.78" data-v-1c84121e></path><path class="cls-2" d="M250.91,56.8c-.08-.86-.14-1.59-.22-2.49l.46-.3,3,1.49,0,.44-3.24.86" data-v-1c84121e></path><path class="cls-2" d="M286.84,111.14c.14,0,.3.24.44.37a1.58,1.58,0,0,0,.22,2.46l-2.06.23c-.38-.44-.72-.81-1-1.2-1-1.3-1.44-2.94-2.52-4.25a68.93,68.93,0,0,1-4.08-6,6.2,6.2,0,0,1-.36-1.5c-1.71-.92-2.58-2-2.45-3.06-2-.7-2.3-2.72-3.31-4.22,1.28-.24-.13-1,.4-1.62l1.38.71c-.93-1.78-.93-1.78-2.45-1.46,0-.29,0-.54,0-.76-1.19-.16-2.47.45-3.4-.63-.77-.89-2.1-1.59-1.27-3.14,1.56-.18,2,0,2.9,1.71l.84-1.42,9.09,11.05-1.05.24c0,.07,0,.14,0,.21l1.21-.14c1.83,2.78,3.71,5.6,5.54,8.46.53.82,1.09,1.74,0,2.56l-.9-.39a3.42,3.42,0,0,0,2.89,1.8" data-v-1c84121e></path><path class="cls-2" d="M301.37,162.07l.3.47L303,162c-.08-.42-.14-.72-.24-1.26-.56.53-1,1-1.42,1.37" data-v-1c84121e></path><path class="cls-2" d="M286.46,91.71c1.43.18,1.6.41,1.27,1.63l1,.83-.32.39a5.7,5.7,0,0,0-1.16-.94c-.51-.22-1.11-.26-1.26.58l1.72,1.2-1.66.09c.12.24.17.41.26.55,2.75,4.29,5.49,8.58,8.26,12.86a1.23,1.23,0,0,0,.61.49c1.34.5,2.41-.19,3.43-.91.11-.07.14-.32.11-.47-.16-.77-.35-1.55-.47-2.05l-1.52-.43,1.15-2.1a3.59,3.59,0,0,1-.07-1.33,2.14,2.14,0,0,0-.16-2.11q-3-4.5-6-9a4.5,4.5,0,0,0-.85-.78c-.06,0-.19,0-.35,0l.18.7L286.27,90c.08.65.13,1.17.19,1.69" data-v-1c84121e></path><path class="cls-2" d="M280.83,105.51c.1.33.31.62.24.83-.23.71.09,1,.71,1.15a8.48,8.48,0,0,1,2,.76,5.64,5.64,0,0,1,1,1h-1.31c.15.45.33.92.32.93-1.07.44-.1.86.06,1.15,1.57,2.89,3.18,5.76,4.81,8.68a6,6,0,0,0,1.32-.31c.37-.18.92-.49,1-.81a3.8,3.8,0,0,0-.22-2.64c-1.46-2.46-2.78-5-4.2-7.47a16.42,16.42,0,0,0-1.44-1.82,1,1,0,0,1-.21-.5c0-1.09-.92-1.87-1.56-1.63-.22.67-.39,1.16-.56,1.65l-1.26-.7c-.19-.1-.41-.18-.66-.3" data-v-1c84121e></path><path class="cls-2" d="M311.45,214.57a11.68,11.68,0,0,0-1.24-.53c-.09,0-.34.16-.38.29-.14.43-.21.87-.34,1.42l-1.33-.7c-.12.35-.42.89-.31,1a8.77,8.77,0,0,0,1.54,1c-.07.05-.33.38-.44.34-1.28-.51-2.67-1-2.36-2.85-.27.92-.55,1.83-.91,3l.81-1,.68.95c-1.45.33-1.62.78-1.19,2.34-.51.33-1.15.52-1.28.89-.47,1.29-.76,2.65-1.12,4l.28.17c.26-.19.65-.31.77-.57a27.9,27.9,0,0,1,1.09-2.57,5,5,0,0,1,1.44-1.12.31.31,0,0,1,.3.06c.34.36.65.75,1.1,1.28a1.28,1.28,0,0,0,.17-.57c-.1-1.18.79-1.59,1.62-1.93.25-.1.73.32,1.09.54a3.57,3.57,0,0,1,.44.57c.58-1.87,1.12-3.57,1.62-5.17l-2,.19c0-.52-.05-.88-.06-1.09" data-v-1c84121e></path><path class="cls-2" d="M316.08,162.63c-.19-.33-.37-.63-.63-1.09-.25.54-.4.85-.53,1.16s-.59.71.25,1a7.83,7.83,0,0,1,1.88,1.11c-.73,1-1.42.58-2.19.17-.28-.15-.71,0-1.07,0a6.47,6.47,0,0,1-.7-.08c-.37.73.24,1.9-1,2.2.11.64.23,1.22.31,1.79s.12,1.12.2,1.85a3.82,3.82,0,0,1,3.2-.68,2.92,2.92,0,0,0,1.06-.07c.11,0,.18-.22.26-.34-.12,0-.25-.08-.37-.14l-1.42-.74L319,168c-.13-1.2-.27-2.59-.43-4l-.92,0c-.16-1.32-.26-1.41-1.58-1.33" data-v-1c84121e></path><path class="cls-2" d="M293.77,132.41l.3,0c.52-1.29,1.32-2.12,2.72-1.8-.67-1.86-1.29-3.7-2-5.51-.58-1.47-1.29-2.89-1.89-4.35-.25-.6-.56-.92-1.13-.7-.09.77-.17,1.48-.26,2.19l-.4.14,1.94.87-2.13.87c1,2.78,1.9,5.52,2.85,8.26" data-v-1c84121e></path><path class="cls-2" d="M313.76,156.33c-.28.14-.67.2-.81.43-.45.68-1,.62-1.54.27-.2-.12-.39-.26-.74-.51.22,2,.42,3.72.66,5.74.4-.5.66-.78.87-1.1.82-1.27,3.39-1.57,4.28-.36.55.74,1.22.77,2,1,0-.49-.08-.9-.13-1.5-.32.38-.49.6-.76.93-.1-.44-.16-.74-.23-1l.93-.18c-.07-.66-.11-1.25-.19-1.85a1.23,1.23,0,0,0-1.6-.87c-.21.07-.54.15-.66.05-.67-.56-1.17-.37-1.64.5-.06-.42-.05-.74-.13-.76a1.72,1.72,0,0,0-.63,0l0-.14.4-.22c0-.13-.07-.26-.1-.39" data-v-1c84121e></path><path class="cls-2" d="M314.82,178.35c-.56-.22-1.57-.13-.65-1.17.07-.08,0-.4-.11-.5-.61-.59-1.24-1.15-2.06-1.88,0,1.7,0,3.07-.07,4.43s-.08,2.79-.14,4.52c.6-.36,1-.8,1.36-.78,1.25.05.8-.55.61-.9.41-.3.68-.52,1-.7s1.09,0,.52-.8c0-.06.18-.35.32-.48.44-.36.89-.7,1.4-1.1,0,.45.09.8.13,1.14.85,0,.85,0,1.29-.74,0-.06.2,0,.26-.11.19-.21.37-.45.55-.67a10,10,0,0,0-1-.51c-.18-.08-.55,0-.59-.08-.4-.79-1-.49-1.71-.4l.44,1.39c-.46-.21-1-.46-1.48-.66" data-v-1c84121e></path><path class="cls-2" d="M311.63,203.46l.44-.83a5.11,5.11,0,0,0-.68-.28c-.4-.13-.82-.22-1.12-.3-.16.36-.45.72-.44,1.07a2.82,2.82,0,0,0,.53,1c.45.76.16,1.42-.74,1.82a5.4,5.4,0,0,0-1,.71l1.05.63c-1.13-.25-1.47.08-1.43,1.48l1.65.37c.09-.41.34-.84.22-1.13-.37-.94,0-1.45.79-1.85.3-.15.55-.43.86-.55a.86.86,0,0,1,.74,0,6,6,0,0,1,.88.92c-.88.5-2.18-.08-2.79,1.14l1.58.3-.27.42a10.34,10.34,0,0,0,1.17,1.2,8.71,8.71,0,0,0,1.45.67c-.95-.58-1.14-2.6,0-3.77.07,1.14.13,2.09.19,3.05a5,5,0,0,0,.82-1.88c.5-2.07.48-2.09-1.62-2.2-.05,0-.11-.09-.23-.19.19-.4.38-.83.66-1.46-1-.16-2.24,1.16-2.71-.43" data-v-1c84121e></path><path class="cls-2" d="M295.68,110.87l2.24,4.3c.7-.55,2.24.36,2.2-1.16a20.11,20.11,0,0,0,2.26-1.42c.18-.14.09-.74,0-1.09s-.36-.47-.55-.7l1.59-.28c0-.07,0-.15,0-.22l-2-.39c0-.83-.1-1.34-1-.61-.24.18-.67.12-1.08.18l.91.48a1.45,1.45,0,0,1-2.19.65,1.54,1.54,0,0,0-2.39.26" data-v-1c84121e></path><path class="cls-2" d="M302.75,179a1.14,1.14,0,0,0-1.3,1.13,33.23,33.23,0,0,0-.15,3.64l1.25-.64c.34.5.49,1,.74,1a1.89,1.89,0,0,0,1.43,0c.49-.37.27-2.72-.13-3.21,1-1.14.25-2.49.66-3.9l-1.67.37.74.09a2.11,2.11,0,0,1-.35.74c-.36.32-.83.81-1.22.78" data-v-1c84121e></path><path class="cls-2" d="M291.56,233.75c-1.77-.4-1.18-1.21-.71-2.08.11-.19-.12-.56-.21-.86l0,0,0,0,.14-.75c.29-.12,1-.25,1.07-.47a13.21,13.21,0,0,0-.12-2.34l-.35-.08,1.19-.79a4.57,4.57,0,0,1,.19-.64c.08-.15.28-.24.34-.39.56-1.2,1.1-2.41,1.64-3.62l-.23-.1,1.26-.33-1.34-.85a5,5,0,0,1,.8-1.32,5.32,5.32,0,0,1,1.45-.64c-.26-.31-.52-.61-.77-.92.74,0,1,1.27,2,.54l-.75-1.15a11.93,11.93,0,0,0,3.34-7l-1,.16a5,5,0,0,1,1-1.45,2.24,2.24,0,0,0,.57-.8c.63-2.67,1.25-5.34,1.81-8,.32-1.53.53-3.09.83-4.84l-2,.54c0,.09.05.19.08.28l-1.66-1q-.23,1.5-.39,2.67c1,.49,1.84-1.45,2.76,0l-.6.73-1.55-.51c.07.62.12,1.14.17,1.66l-.23.06-.75-.79c-.11.52-.19.9-.25,1.14.37.36.65.63.77.76-.45.29-.93.43-1,.7a14.39,14.39,0,0,0-.42,2.05l1.08.88-.16.25-1.17-.36c-.14,2.14-1.71,4.11-.22,6.57L297,210c-.4,1.31-.8,2.54-1.16,3.78-.63,2.16-1.1,4.39-1.93,6.47-.33.81-.75,1.31.34,2-1.24-.09-1.58.53-1.91,1.33a20.2,20.2,0,0,1-1.05,3.13c-.36.59-1,1.45,0,2.25l-1.52.68.95,1.08s0,0,0,.06a0,0,0,0,0,0,0l-.75.86-1.05-.79a6.57,6.57,0,0,0,.06,1.79,3.83,3.83,0,0,0,.8,1.07l-1.79.18,0,.29,1.13.51c-.76,0-1.48-.15-1.84.14s-.67,1.11-1,1.69l.27.25,1.61-1.21c-.08.48-.13.75-.18,1,.52.16,1.05.51,1.52.43.62-.11.87-.66.51-1.31,0,0,0-.07,0-.09l1.6-1.9" data-v-1c84121e></path><path class="cls-2" d="M310.61,138.66c1.21.06,2.42-.06,3.67-.1-.27-.86-.56-1.76-.84-2.67l-.4.14c.13.36.27.72.52,1.39-.72-.79-1.76,0-2.15-1,0,0-.43.06-.66.07a6.48,6.48,0,0,1-.76-.06l0,0,0,0,0,0h0l.7-.69c-.34-.65-.71-.94-1.43-.24.12-.51.34-1.09.58-1.09a31.77,31.77,0,0,1,3.22.19,3.84,3.84,0,0,0-.13-.57c-1.16-3.31-2.29-6.62-3.51-9.9a8.63,8.63,0,0,0-1.24-1.78h0s0,0,0,0a.21.21,0,0,0,.1-.16c0-.41.09-1-.14-1.2a5.56,5.56,0,0,0-1.52-.69c-.34,1.35-1.14,0-1.65.28l-1.24,1.79-.27-.15c.06-.32.11-.65.21-1.19l-1.75,1.26-.19-.2c.27-.41.53-.83.81-1.24a2.42,2.42,0,0,1,.32-.32c-.16-.11-.3-.3-.46-.31-.57,0-1.09-.09-1.27-.8,0-.16-.44-.22-.68-.32-.08.26-.29.56-.22.77.28.83.66,1.62,1,2.44,1,2.55,2,5.11,3,7.66.12.31.26.62.41,1l.58-1,.38.07a3.8,3.8,0,0,0,.27,4.29l.64.24c-.78.56-.57,1.81.37,2.7l1.61-1.25,1.5.48,0,0h0l-1.7,1.73a13.31,13.31,0,0,0,2.32.54" data-v-1c84121e></path><path class="cls-2" d="M318.34,188.15l-1.92,2,.67,1.1-1,1.05.19.32a3.53,3.53,0,0,0,1.06-.54c.47-.49.94-1.08.14-1.77l.93.43c.13-1.37.25-2.68.37-4a6.15,6.15,0,0,0-1.15-.3,2.55,2.55,0,0,0-.81.26,3.17,3.17,0,0,0,.49.69,9.23,9.23,0,0,0,1,.69" data-v-1c84121e></path><path class="cls-2" d="M314.31,189.17c-.84.89-1.71.23-2.66.06-.07.77-.13,1.51-.19,2.24l.27,0-.78.79a2.62,2.62,0,0,0,.86-.34c.61-.28,1.25-.49,1.12-1.38a1.15,1.15,0,0,1,.75-.24,12.77,12.77,0,0,1,1.56,1.06c0-.66.2-1.11,0-1.36a2.66,2.66,0,0,0-1-.79" data-v-1c84121e></path><path class="cls-2" d="M303.91,118c1.1.7,1.21.67,1.81-.53.1-.22.46-.31.85-.57-.21-.21-.51-.48-.77-.78-.12-.13-.28-.38-.23-.48.41-.85-.16-.61-.46-.61,0,1.64-1.75,1.85-2.52,3.12.63-.08,1.09-.29,1.32-.15" data-v-1c84121e></path><path class="cls-2" d="M313.94,188.27c.32,0,.69-.31,1-.49a1.58,1.58,0,0,0-.19-.36c-1,.19-1.3-.34-1.49-1.26a1.24,1.24,0,0,0-1.75-1.09,7.05,7.05,0,0,0,.39,2.58c.25.45,1.29.53,2,.62" data-v-1c84121e></path><path class="cls-2" d="M285.1,91.51a1.93,1.93,0,0,0,.06-2.12l-3,1.13,1.39,1.79,1.56-.8" data-v-1c84121e></path><path class="cls-2" d="M306.94,229.09c.41,0,1,0,1.22-.22a5.92,5.92,0,0,0,.86-1.49c-.31-.14-.83-.21-.91-.44-.39-1.1-1-.84-1.47-.54-.09.66-.13,1-.21,1.42s-.32.64-.25.91.49.35.76.36" data-v-1c84121e></path><path class="cls-2" d="M308.2,224.71c.19.6.94,1,1.63,1.74l.77-2.61-2-1.09c-.16.64-.6,1.39-.43,2" data-v-1c84121e></path><path class="cls-2" d="M313.56,143.6c.25.32.78.4,1.14.66a8.21,8.21,0,0,1,.89.88c.08-.08.17-.16.25-.25a2.43,2.43,0,0,1-.43-.48c-.24-.42-.71-.95-.6-1.26a2.56,2.56,0,0,0-.11-2.14,7.65,7.65,0,0,1-.83.66c-.29.18-.91.37-.9.45a3.84,3.84,0,0,0,.59,1.48" data-v-1c84121e></path><path class="cls-2" d="M311.89,194.53c1.28.07,2.58-.49,2.45-1.25-.2-1.16.57-1.18,1.19-1.48-1.23-.69-3.52,1-3.64,2.73" data-v-1c84121e></path><path class="cls-2" d="M301.23,234.45c-.09,1,.71.47,1.08.57a1.18,1.18,0,0,0,1.49-1.22.65.65,0,0,0-.3-.5c-.15-.05-.36.15-.63.27l.76.44-1.52.38.75-1.68h0v0l1-.08c-.06-.56-.1-.94-.13-1.3l.79-.09-.55-1.32,1-.55a2.5,2.5,0,0,1-.05-.29l-2.21-.23c.13-.34.2-.54.28-.74a3.76,3.76,0,0,0-1.56,1.43c-.94,2-.74,2.26,1.32,2.28,0,.3.09.59.13.89h0s0,0,0,0l-.82-.37-1,1.71.36.16c-.06.08-.18.15-.19.24" data-v-1c84121e></path><path class="cls-2" d="M317.78,155.38c-.26-1.45-.49-2.7-.72-3.95-.36.44-.39,1-1,1.21.51.86.4,2.08,1.71,2.74" data-v-1c84121e></path><path class="cls-2" d="M313.88,146c0-.15-.15-.46-.23-.7h-1.41c-.31.57-.53,1-.83,1.51,0,0,.09.29.17.52l-.7-.42-.24.88c.07.06.18.11.23.19.18.34.36.7.53,1.05-.31.06-.62.11-.93.19s-.62.19-1,.3a18,18,0,0,0,.36,2.06c.16.54.56.83,1.16.46a2,2,0,0,1,1.75.62c.29.66,1.39,1,1.8.58.11-.12,0-.49-.1-.7s-.3-.11-.47-.17c0-.07,0-.14.05-.2l1.6.21c0-.08,0-.17.08-.26a10.93,10.93,0,0,1-3.83-3.46l2.41-1.77-1.34-.8.9-.1" data-v-1c84121e></path><path class="cls-2" d="M302.42,176.47c-.33.31-.62.66-.94,1,.44,0,.87,0,1.31,0a2,2,0,0,0,.4-.11c-.09-.36-.16-.68-.25-1.07a1.47,1.47,0,0,0-.52.18" data-v-1c84121e></path><path class="cls-2" d="M311.64,153a5.54,5.54,0,0,0-1.39.3,6.67,6.67,0,0,0,.25,1.55l1.14-1.85" data-v-1c84121e></path><path class="cls-2" d="M288.09,239.47c-.12.24-.53.32-.8.48l-.33-.14c0,.35.09.7.16,1.38-1,1.62-2.11,3.59-3.35,5.49-1.44,2.21-2.95,4.38-4.51,6.51-.48.66-.9,1.5-2,1.52a16.42,16.42,0,0,0-2.47.44c-.44.07-.9.08-1.54.13,3.18-4.5,6.16-8.74,9.15-13l.43.37c-.6-.83.13-1.36.35-2,.33-1,1.12-.47,1.8-.69-.74-.8-.49-1.53,0-2.35,1-1.73,1.77-3.58,2.86-5.23.57-.86.46-2.53,2.35-2.22l-.94-.85c.7-1.23,1.95-.51,2.85-.81.09-.31.16-.58.24-.86l.42,0c.11.66.52,1.46.29,1.95-1.56,3.34-3.25,6.62-4.94,9.9" data-v-1c84121e></path><path class="cls-2" d="M300.15,155.82c-.27,0-.54,0-1-.08l1.92-2.06a5.71,5.71,0,0,1-1-.15c-.38-.13-1-.28-1.05-.53-.33-1.21-.51-2.45-.75-3.71l1.39-.4-.8-.85-.41.91-.41,0c-.06-.93-.09-1.87-.18-2.81,0-.35.24-.79-.45-1.05-.33-.12-.34-1.06-.56-1.86l1.09.47c-2.32-2.62-2.52-6-3.68-8.93,1.18-.61,1.16-.57,2.15-.12a4.11,4.11,0,0,0,1.38.08c.11.29.33.74.47,1.22,1,3.61,2,7.23,3.05,10.84.29,1,.31,1.8-1,1.9,0,0-.11.09-.16.14,0,.33.08.67.12,1l1.58-.83a67.17,67.17,0,0,1,1.56,9.89c-.66-.47-1.14-.79-1.59-1.16a.8.8,0,0,1-.28-.57c.15-1.07-.4-1.39-1.35-1.35" data-v-1c84121e></path><path class="cls-2" d="M294.47,220.89c.25-.19.51-.39.86-.64l-.7-.38.28-.06c0-.71,0-1.41-.14-2.1,0-.14-.43-.22-.62-.3l3-9.83c1,.44,2-.54,3,.18h0l0,0,0,0c.09-.55.19-1.11.28-1.66-1-.35-1-.45-.83-.89a6.57,6.57,0,0,0,.34-1.1c.73-.18.73-.18,0-1.56l-1.72.77c.72-4.63,1.42-9,2.14-13.65.65.08,1.33.14,2,.25a4.07,4.07,0,0,1,.71.26c0-.25.14-.58,0-.75a8.14,8.14,0,0,0-1-1.05c.13-.11.25-.29.34-.28.91.14.81-.27.46-.83-.54-.86-.21-1.73,0-2.8.48.22,1.08.32,1.14.57a2.88,2.88,0,0,1-.23,1.28l.55-.08c-.32,2.68-.61,5.3-.94,7.91,0,.32-.46.7-.37.9.52,1.21-.07,1.36-1.17,1.13,0,.11,0,.22,0,.34L303,197c-.29,1.54-.6,3.11-.91,4.74l-1-.43c-.63.83-.63.83.75,1.58-.33,1.39-.63,2.8-1,4.19-.07.26-.43.44-.68.65v.05h0c.09.4.35.87.24,1.22q-1.83,6-3.77,11.87a4.73,4.73,0,0,1-.83,1.11c.07-1.19-1.09-.54-1.3-1.08" data-v-1c84121e></path><path class="cls-2" d="M304.69,176.62c.1,1.34,0,2.41-1.7,2.6a2.29,2.29,0,0,0-1.07.72,1.62,1.62,0,0,0-.34.79c0,.17.15.45.07.55a.53.53,0,0,1-.54.11c-.13-.06-.2-.34-.2-.53,0-1.4.11-2.81.07-4.22a7.89,7.89,0,0,1,.88-4.6l-.88.49c0-.65,0-1.17-.05-1.71l2.55.46c0,.19.06.45.1.76l.94.18c.06,1.49.06,2.95.17,4.4" data-v-1c84121e></path><path class="cls-2" d="M304.16,165.8c.15,1.75.33,3.49.49,5.24l-.31.09c-.58-1.29-1.16-2.58-1.78-3.94l-1.82.39c-.09-1.23-.18-2.41-.29-3.89.76,1.3.76,1.3,1.52,1l-.41-.32,1.87-1.05c0-.08,0-.15-.05-.22l-2.9.51c.08-.49,0-.88.19-1a10.09,10.09,0,0,1,1.42-1c.22.93,1,.86,1.71,1.07.14,0,.22.43.24.66.06.82,0,1.64.12,2.45" data-v-1c84121e></path><path class="cls-2" d="M293.42,123.71l1.78,4-1.53.28c-.43-.28-.79-.54-1.17-.77s-.77-.21-.94-.46c-.54-.78-1-1.62-1.44-2.44l.15-.22c1.27,1.35,2.06-.45,3.15-.34" data-v-1c84121e></path><path class="cls-2" d="M302,183.77a2,2,0,0,1-.84.54c-.06,0-.37-.4-.4-.63-.18-1.31.18-1.69,1.7-1.74-.32.49-.56.87-.75,1.15.12.26.36.61.29.68" data-v-1c84121e></path><path class="cls-2" d="M291.79,224.34c.75-.58,1.2.24,1.82.44l-.79.77-1.9,0a5.56,5.56,0,0,1,.87-1.19" data-v-1c84121e></path><path class="cls-2" d="M300.18,161.4c-.1-1-.16-1.66-.22-2.36l1.5.94-1.28,1.42" data-v-1c84121e></path><path class="cls-2" d="M294.5,131.52l1.47-1.47.62,1.09-2,.56-.06-.18" data-v-1c84121e></path><path class="cls-2" d="M310.36,196.87l.56.65c-.29.65-.51,1.16-.83,1.89-.26-1-.58-1.81.27-2.54" data-v-1c84121e></path><path class="cls-2" d="M287.46,115.27c-.22.32-.37.79-.67.91-.67.28-.84-.19-.85-.83l1.25-.29.27.21" data-v-1c84121e></path><path class="cls-2" d="M168.34,306c5.74-.08,11.47-.13,17.21-.29.92,0,2,.15,2.77-.76.11-.13.53-.05.8,0s.6.37.87.33c2.36-.3,4.72-.66,7.08-1,.24,0,.58-.07.69-.23.54-.79,1-1.63,1.53-2.45l-1.16-.22c.21-.37.36-.62.58-1-.48,0-.8.06-1.11.11a126,126,0,0,1-24.21,2c-.75,0-1.18.16-1.19,1,0,.16-.22.31-.34.46a5,5,0,0,1-.42-.38c-.2-.21-.39-.44-.58-.66-.31.27-.9.58-.88.83.14,1.46-.37,2.23-2.25,2a3,3,0,0,0,.61.27" data-v-1c84121e></path><path class="cls-2" d="M242,287.48a24.85,24.85,0,0,0,5-3q2.39-1.57,4.7-3.26c1.57-1.14,3.1-2.34,4.47-3.38a14.71,14.71,0,0,0-.73-1.4,2,2,0,0,0-.6-.55c-.87.77-1.07,0-1.29-.46L239.56,285c.53.42,1-.89,1.61,0a7.77,7.77,0,0,0,.92,1c-1.52-.4-2.63-.19-3.41.63A5.65,5.65,0,0,0,237.3,290c1.91-.39,3-1.88,4.66-2.47" data-v-1c84121e></path><path class="cls-2" d="M150.27,300.15a1.6,1.6,0,0,1-.42-.1c-3.68-.9-7.36-1.81-11-2.7-.34-.08-.94-.13-1.07,0-.58.83-1,1.75-1.69,2.9l16.16,4c-.1-1.08-.17-1.88-.27-2.68a1.45,1.45,0,0,0-1.66-1.48" data-v-1c84121e></path><path class="cls-2" d="M216.69,299.39,232.38,293c0-.13-.08-.27-.11-.41H229.6c.25-.57.39-.89.53-1.19a3.3,3.3,0,0,0-3.45.11,32,32,0,0,1-3.16,1.41l-2,.89c0,.12,0,.25,0,.37l1.63,1a3.25,3.25,0,0,1-.83.32,2.77,2.77,0,0,0-1.65.48c-.57.39-1.52.25-2.29.34,0-.13,0-.27,0-.4l1.73-.48c-1.53-1.23-2.49.21-3.67.17l.27,1.12-.87.07a8,8,0,0,1,.77.74,8.74,8.74,0,0,1,.57.88l-.59.76.16.3" data-v-1c84121e></path><path class="cls-2" d="M211.53,298.31a15.05,15.05,0,0,0,1.44-1.23c.15.67.25,1.11.36,1.64l1.3-1.36c-1.56-.85-4.59-.25-5,.63-3.06.23-5.74,1.5-8.63,1.81.55,1.34.54,1.32-.72,2-.25.14-.41.46-.64.73.9.25,1.45,1.58,2.52.6l-.49-.41.15-.47c.76,1.16,1.67.75,2.54.51s1.81-.62,2.74-.86c1.66-.43,3.34-.81,5-1.22a.89.89,0,0,0,.24-.13c0-.34,0-.63-.06-.95l-2.09-.54a.63.63,0,0,1,.24-.37c.35-.19.8-.2,1.12-.41" data-v-1c84121e></path><path class="cls-2" d="M156.37,304.8c2.1.28,4.21.54,6.31.8,0-.71,0-1.31,0-2.09l1.26.79.42-1.13.14.94,1.15-.15a2.56,2.56,0,0,1,.05.27l-1.63,1c.68,1.1,1.84.4,2.82.74a12.16,12.16,0,0,1-.7-2.53c0-.79-.22-1.21-1-1.29l-9.7-1c.52,1-.59.7-1,1.13.45.76.88,1.51,1.35,2.24a.79.79,0,0,0,.52.3" data-v-1c84121e></path><path class="cls-2" d="M233,289l-3.09.8c0,.13,0,.26,0,.4.86,0,1.56.12,1.57,1.14l.92-.64-.37-.72,1.11-.53L233,289" data-v-1c84121e></path><path class="cls-2" d="M170.46,302.53c-1.76-.34-2.17-.3-2.42.27.84.2,1.72.77,2.42-.27" data-v-1c84121e></path><path class="cls-2" d="M181,306c-5.74-.08-11.48-.13-17.21-.29-.92,0-2,.15-2.77-.76-.11-.13-.54-.05-.8,0s-.6.37-.87.33c-2.37-.3-4.72-.66-7.08-1-.24,0-.58-.07-.69-.23-.55-.79-1-1.63-1.53-2.45l1.16-.22c-.21-.37-.36-.62-.58-1,.48,0,.8.06,1.11.11a126,126,0,0,0,24.21,2c.75,0,1.17.16,1.19,1,0,.16.22.31.33.46a3.89,3.89,0,0,0,.43-.38c.2-.21.39-.44.58-.66.31.27.89.58.87.83-.13,1.46.38,2.23,2.26,2a3.34,3.34,0,0,1-.61.27" data-v-1c84121e></path><path class="cls-2" d="M199,300.15a1.6,1.6,0,0,0,.42-.1c3.68-.9,7.36-1.81,11-2.7.34-.08.94-.13,1.06,0,.59.83,1,1.75,1.69,2.9l-16.16,4c.11-1.08.18-1.88.27-2.68a1.46,1.46,0,0,1,1.67-1.48" data-v-1c84121e></path><path class="cls-2" d="M192.94,304.8c-2.11.28-4.21.54-6.31.8,0-.71,0-1.31,0-2.09l-1.25.79-.42-1.13-.14.94-1.15-.15a2.56,2.56,0,0,0,0,.27l1.63,1c-.68,1.1-1.84.4-2.82.74a12.16,12.16,0,0,0,.7-2.53c0-.79.22-1.21,1-1.29l9.7-1c-.52,1,.59.7,1,1.13-.46.76-.89,1.51-1.36,2.24a.77.77,0,0,1-.51.3" data-v-1c84121e></path><path class="cls-2" d="M178.85,302.53c1.76-.34,2.17-.3,2.42.27-.84.2-1.73.77-2.42-.27" data-v-1c84121e></path><path class="cls-2" d="M187.13,318.53l.85-.44.62,1.38-1.38.3.52-.77-.61-.47" data-v-1c84121e></path><path class="cls-3" d="M250.71,96.25h1.5a2.49,2.49,0,0,0,1.48-.32,1.06,1.06,0,0,0,.39-.85,1,1,0,0,0-.19-.61,1.16,1.16,0,0,0-.52-.4,3.92,3.92,0,0,0-1.25-.13h-1.41Zm-1.24,4.32V92.89h2.64a6.12,6.12,0,0,1,2,.22,1.84,1.84,0,0,1,1,.74A2,2,0,0,1,255.4,95a2.06,2.06,0,0,1-.6,1.47,2.44,2.44,0,0,1-1.6.7,2.12,2.12,0,0,1,.65.4A8.54,8.54,0,0,1,255,99.07l.93,1.5h-1.5l-.69-1.21a6.09,6.09,0,0,0-1.3-1.79,1.62,1.62,0,0,0-1-.26h-.73v3.26Zm3.14-9.91a6,6,0,0,0-2.94.78,5.55,5.55,0,0,0-2.23,2.2,6.09,6.09,0,0,0-.8,3,6,6,0,0,0,.79,3,5.57,5.57,0,0,0,2.21,2.2,6,6,0,0,0,5.93,0,5.54,5.54,0,0,0,2.2-2.2,6,6,0,0,0,.79-3,6.09,6.09,0,0,0-.8-3,5.55,5.55,0,0,0-2.23-2.2A6,6,0,0,0,252.61,90.66Zm0-1.18a7.32,7.32,0,0,1,3.51.93A6.48,6.48,0,0,1,258.78,93a7.18,7.18,0,0,1,0,7.14,6.64,6.64,0,0,1-2.64,2.64,7.13,7.13,0,0,1-7.11,0,6.6,6.6,0,0,1-2.65-2.64,7.18,7.18,0,0,1,0-7.14,6.56,6.56,0,0,1,2.67-2.63A7.27,7.27,0,0,1,252.61,89.48Z" data-v-1c84121e></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/img/logo.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__scopeId", "data-v-1c84121e"]]);
const scrollPosition = vue_cjs_prod.ref(0);
const handleScroll = () => {
  return scrollPosition.value = window ? window.scrollY : 0;
};
const _sfc_main$g = {
  components: {
    User,
    Menu,
    Cross,
    Logo,
    Button
  },
  setup() {
    const isMenuOpen = vue_cjs_prod.ref(false);
    const route = useRoute();
    const isTextWhite = vue_cjs_prod.computed(() => route.name === "index" || route.name === "franchise");
    const onToggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };
    const onScroll = () => {
      console.log("hello");
    };
    return {
      onToggleMenu,
      isMenuOpen,
      onScroll,
      scrollPosition,
      isTextWhite
    };
  },
  mounted() {
    window.addEventListener("scroll", handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", handleScroll);
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_2$1;
  const _component_Menu = vue_cjs_prod.resolveComponent("Menu");
  const _component_Cross = vue_cjs_prod.resolveComponent("Cross");
  const _component_Logo = vue_cjs_prod.resolveComponent("Logo");
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  const _component_User = vue_cjs_prod.resolveComponent("User");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: ["fixed z-50 flex flex-col w-full h-auto ellipse", { "bg-navbar": $setup.isMenuOpen, "bg-black/50": $setup.scrollPosition > 0 }],
    style: { "transition": "0.4s" }
  }, _attrs))}><div class="flex justify-between mx-2 my-6 sm:mx-16"><div class="${serverRenderer.exports.ssrRenderClass([{ "text-gray-900": !$setup.isTextWhite }, "flex-row items-center flex-1 hidden lg:flex text-white gap-5"])}">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
    class: "transition hover:text-primary-600",
    to: "/menu",
    "active-class": "text-primary-600 cursor-default"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Carte `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Carte ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
    class: "transition hover:text-primary-600",
    to: "/information",
    "active-class": "text-primary-600 cursor-default"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Informations `);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Informations ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
    class: "transition hover:text-primary-600",
    to: "/concept",
    "active-class": "text-primary-600 cursor-default"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Concept `);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Concept ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
    class: "transition hover:text-primary-600",
    to: "/franchise",
    "active-class": "text-primary-600 cursor-default"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Franchise `);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Franchise ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center flex-1 lg:hidden text-white">`);
  if (!$setup.isMenuOpen) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Menu, { class: "w-full fill-white text-primary" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.isMenuOpen) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Cross, { class: "w-full fill-white text-primary" }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex items-center justify-center flex-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Logo, {
          class: ["w-40 transition-all", { "w-20": $setup.scrollPosition > 0 }]
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Logo, {
            class: ["w-40 transition-all", { "w-20": $setup.scrollPosition > 0 }]
          }, null, 8, ["class"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center justify-end flex-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { class: "font-text mr-4 hidden" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Commander `);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Commander ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="hidden"><div><button type="button" class="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary-500" id="user-menu-button" aria-expanded="false" aria-haspopup="true"><span class="sr-only">Open user menu</span>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_User, {
    class: "rounded-full h-8 w-8 text-primary-900 bg-gray-900",
    alt: ""
  }, null, _parent));
  _push(`</button></div></div></div></div>`);
  if ($setup.isMenuOpen) {
    _push(`<div class="flex flex-col justify-start w-full pb-10 bg-opacity-95" style="${serverRenderer.exports.ssrRenderStyle({ "transition": "0.4s" })}"><div class="m-4 text-white font-text">Carte</div><div class="m-4 text-white font-text">Informations</div><div class="m-4 text-white font-text">Concept</div><div class="m-4 text-white font-text">Franchise</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/FacebookIcon.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const FacebookIcon = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/InstagramIcon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const InstagramIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _attrs))}><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("assets/icons/TwitterIcon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TwitterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  components: { Button, TwitterIcon, Logo, FacebookIcon, InstagramIcon }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Logo = vue_cjs_prod.resolveComponent("Logo");
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  const _component_FacebookIcon = vue_cjs_prod.resolveComponent("FacebookIcon");
  const _component_InstagramIcon = vue_cjs_prod.resolveComponent("InstagramIcon");
  const _component_TwitterIcon = vue_cjs_prod.resolveComponent("TwitterIcon");
  _push(`<footer${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "bg-secondary-900 text-white px-5 lg:px-20 py-6" }, _attrs))}><div class="flex flex-col gap-10"><div class="flex justify-between items-center gap-5 lg:gap-20"><hr class="w-full h-px bg-white"><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Logo, {
    style: { "width": "100px" },
    class: "cab-logo"
  }, null, _parent));
  _push(`</div><hr class="w-full h-px bg-white"></div><div class="justify-between gap-4 hidden lg:flex"><div class="flex flex-col gap-3"><h2 class="font-bold text-xl">La Franchise</h2><p class="w-40">Vous \xEAtes int\xE9r\xE9ss\xE9 par la franchise ?</p><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { secondary: "" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` D\xC9COUVREZ LA FRANCHISE `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" D\xC9COUVREZ LA FRANCHISE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-3"><h2 class="font-bold text-xl">Nos Restaurants</h2><p class="w-40">Un de nos restaurant est peut-\xEAtre pr\xEAt de chez vous !</p><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { secondary: "" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` NOUS TROUVER `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" NOUS TROUVER ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-3"><h2 class="font-bold text-xl">Notre concept</h2><p class="w-40">D\xE9couvrez le concept de la cabane \xE0 burger.</p><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { secondary: "" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` JE D\xC9COUVRE `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" JE D\xC9COUVRE ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex flex-col gap-3"><h2 class="font-bold text-xl">La carte</h2><p class="w-40">D\xE9couvrez nos produits du moment !</p><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { secondary: "" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` VOIR LE MENU `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" VOIR LE MENU ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="text-center"><h4 class="font-header text-2xl">POUR VOTRE SANTE, MANGEZ CINQ FRUITS ET LEGUMES PAR JOUR. WWW.MANGERBOUGER.FR</h4><div class="mt-2 text-xs"><a class="hover:text-primary-600" href="#">Mentions l\xE9gales</a> - <a class="hover:text-primary-600" href="#">CGV</a> - <a class="hover:text-primary-600" href="#">Donn\xE9es personnelles</a></div></div><hr class="w-full h-px"><div class="flex justify-center gap-4 lg:justify-between flex-wrap"><div class="flex gap-2 lg:gap-4 text-xs lg:text-xl"><a class="hover:text-primary-600 whitespace-nowrap" href="/menu">La Carte</a> / <a class="hover:text-primary-600 whitespace-nowrap" href="/information">Infos Pratiques</a> / <a class="hover:text-primary-600 whitespace-nowrap" href="/concept">Le Concept</a> / <a class="hover:text-primary-600 whitespace-nowrap" href="/franchise">La Franchise</a></div><div class="flex gap-2"><a href="#">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_FacebookIcon, { class: "fill-white hover:fill-primary-600" }, null, _parent));
  _push(`</a><a href="#">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_InstagramIcon, { class: "fill-white hover:fill-primary-600" }, null, _parent));
  _push(`</a><a href="#">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_TwitterIcon, { class: "fill-white hover:fill-primary-600" }, null, _parent));
  _push(`</a></div></div></div></footer>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
vue_cjs_prod.defineComponent({
  components: {
    Footer: __nuxt_component_1,
    Navbar: __nuxt_component_0
  }
});
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  const _component_Footer = __nuxt_component_1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch$1.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(_sfc_main$l);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "min-h-full pt-16 pb-12 flex flex-col bg-white" }, _attrs))}><main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mt-40"><div class="py-16"><div class="text-center"><p class="text-sm font-semibold text-primary-900 uppercase tracking-wide">404</p><h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page introuvable.</h1><p class="mt-2 text-base text-gray-500">D\xE9sol\xE9, la page recherch\xE9e n&#39;existe pas.</p><div class="mt-6"><a href="/" class="text-base font-medium text-primary-900 hover:text-primary-500">Retourner \xE0 la page d&#39;accueil<span aria-hidden="true"> \u2192</span></a></div></div></div></main></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = vue_cjs_prod.defineComponent({
  setup() {
  }
});
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}> Bienvenue </div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const account = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const account$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": account
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = vue_cjs_prod.defineComponent({
  components: {
    Checkbox,
    Button,
    Input
  },
  setup(_props, { emit }) {
    const loginFormData = vue_cjs_prod.ref({ email: "", password: "" });
    const { mutate: signInMutation } = useSignInMutation({});
    const router = useRouter();
    const submit = async () => {
      try {
        const data = await signInMutation({ input: loginFormData.value });
        console.log(data);
        router.push({ name: "account" });
        if (typeof localStorage !== "undefined" && data.data.signIn.token) {
          localStorage.setItem("auth-token", data.data.signIn.token);
        }
      } catch (e) {
        emit("showError", true);
        console.error(e);
      }
    };
    return {
      loginFormData,
      submit
    };
  }
});
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$4;
  const _component_Input = vue_cjs_prod.resolveComponent("Input");
  const _component_Checkbox = vue_cjs_prod.resolveComponent("Checkbox");
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  _push(`<form${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "space-y-6" }, _attrs))}><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          modelValue: _ctx.loginFormData.email,
          "onUpdate:modelValue": ($event) => _ctx.loginFormData.email = $event,
          label: "Adresse e-mail",
          id: "email",
          name: "email",
          type: "email",
          autocomplete: "email",
          required: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            modelValue: _ctx.loginFormData.email,
            "onUpdate:modelValue": ($event) => _ctx.loginFormData.email = $event,
            label: "Adresse e-mail",
            id: "email",
            name: "email",
            type: "email",
            autocomplete: "email",
            required: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label><div class="mt-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          modelValue: _ctx.loginFormData.password,
          "onUpdate:modelValue": ($event) => _ctx.loginFormData.password = $event,
          id: "password",
          name: "password",
          type: "password",
          autocomplete: "current-password",
          required: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            modelValue: _ctx.loginFormData.password,
            "onUpdate:modelValue": ($event) => _ctx.loginFormData.password = $event,
            id: "password",
            name: "password",
            type: "password",
            autocomplete: "current-password",
            required: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex items-center justify-between">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Checkbox, {
    name: "stayLogged",
    label: "Rester connect\xE9"
  }, null, _parent));
  _push(`<div class="text-sm"><a href="#" class="font-medium text-primary-600 hover:text-primary-500"> Mot de passe oubli\xE9 ? </a></div></div><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { class: "w-full flex justify-center text-sm font-medium" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Se connecter `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Se connecter ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/login.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const login$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = vue_cjs_prod.defineComponent({
  components: {
    Checkbox,
    Button,
    Input
  },
  setup(_props, { emit }) {
    const loginFormData = vue_cjs_prod.ref({ email: "", password: "", phone: "" });
    const { mutate: signInMutation } = useSignInMutation({});
    const router = useRouter();
    const submit = async () => {
      try {
        const data = await signInMutation({ input: loginFormData.value });
        console.log(data);
        router.push({ name: "account" });
      } catch (e) {
        emit("showError", true);
        console.error(e);
      }
    };
    return {
      loginFormData,
      submit
    };
  }
});
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$4;
  const _component_Input = vue_cjs_prod.resolveComponent("Input");
  const _component_Checkbox = vue_cjs_prod.resolveComponent("Checkbox");
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><form class="space-y-6" action="#" method="POST"><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          modelValue: _ctx.loginFormData.email,
          "onUpdate:modelValue": ($event) => _ctx.loginFormData.email = $event,
          label: "Adresse e-mail",
          id: "email",
          name: "email",
          type: "email",
          autocomplete: "email",
          required: ""
        }, null, _parent2, _scopeId));
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          modelValue: _ctx.loginFormData.phone,
          "onUpdate:modelValue": ($event) => _ctx.loginFormData.phone = $event,
          label: "T\xE9l\xE9phone",
          id: "phone",
          name: "phone",
          type: "phone",
          autocomplete: "phone",
          required: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            modelValue: _ctx.loginFormData.email,
            "onUpdate:modelValue": ($event) => _ctx.loginFormData.email = $event,
            label: "Adresse e-mail",
            id: "email",
            name: "email",
            type: "email",
            autocomplete: "email",
            required: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
          vue_cjs_prod.createVNode(_component_Input, {
            modelValue: _ctx.loginFormData.phone,
            "onUpdate:modelValue": ($event) => _ctx.loginFormData.phone = $event,
            label: "T\xE9l\xE9phone",
            id: "phone",
            name: "phone",
            type: "phone",
            autocomplete: "phone",
            required: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><label for="password" class="block text-sm font-medium text-gray-700"> Mot de passe </label><div class="mt-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          modelValue: _ctx.loginFormData.password,
          "onUpdate:modelValue": ($event) => _ctx.loginFormData.password = $event,
          id: "password",
          name: "password",
          type: "password",
          autocomplete: "current-password",
          required: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            modelValue: _ctx.loginFormData.password,
            "onUpdate:modelValue": ($event) => _ctx.loginFormData.password = $event,
            id: "password",
            name: "password",
            type: "password",
            autocomplete: "current-password",
            required: ""
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex items-center justify-between">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Checkbox, {
    name: "stayLogged",
    label: "Rester connect\xE9"
  }, null, _parent));
  _push(`<div class="text-sm"><a href="#" class="font-medium text-primary-600 hover:text-primary-500"> Mot de passe oubli\xE9 ? </a></div></div><div>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    type: "submit",
    class: "w-full flex justify-center text-sm font-medium"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` S&#39;inscrire `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" S'inscrire ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const register$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": register
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = vue_cjs_prod.defineComponent({
  components: { Alert: __nuxt_component_1$5 },
  setup() {
    const route = useRoute();
    const showError = vue_cjs_prod.ref(false);
    return { route, showError };
  }
});
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_2$1;
  const _component_Alert = __nuxt_component_1$5;
  const _component_NuxtChild = vue_cjs_prod.resolveComponent("NuxtChild");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="pt-40"><div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-md"><h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Mon compte </h2></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow"><div class="w-full flex font-medium">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    class: ["text-center py-2 mr-2 flex-1 cursor-default", { "bg-gray-50 rounded-tl-lg rounded-br-lg transition hover:bg-gray-100 hover:cursor-pointer": _ctx.route.name === "auth-login" }],
    to: "/auth/register"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nous rejoindre`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Nous rejoindre")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    class: ["text-center py-2 flex-1 cursor-default", { "bg-gray-50 rounded-tr-lg rounded-bl-lg transition hover:bg-gray-100 hover:cursor-pointer": _ctx.route.name === "auth-register" }],
    to: "/auth/login"
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Identifiez vous`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Identifiez vous")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white py-8 px-4 sm:rounded-b-lg sm:px-10">`);
  if (_ctx.showError) {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Alert, {
      type: "error",
      class: "mb-4"
    }, {
      title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Une erreur est survenue`);
        } else {
          return [
            vue_cjs_prod.createTextVNode(" Une erreur est survenue")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtChild, null, null, _parent));
  _push(`<div class="mt-6"><div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Ou continuez avec </span></div></div><div class="mt-6 grid grid-cols-3 gap-3"><div><a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span class="sr-only">Sign in with Facebook</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"></path></svg></a></div><div><a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span class="sr-only">Sign in with Twitter</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg></a></div><div><a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"><span class="sr-only">Sign in with GitHub</span><svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"></path></svg></a></div></div></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const auth = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const auth$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": auth
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: { Subtitle: __nuxt_component_0$3 }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Subtitle = __nuxt_component_0$3;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "grid gap-4 lg:grid-cols-2 grid-cols-1 pt-60" }, _attrs))}><div class="pt-11"><img alt="..." class=""${serverRenderer.exports.ssrRenderAttr("src", _imports_0$3)}></div><div class="p-10 pr-12">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    "top-text": "Notre",
    "bottom-text": "Savoir-faire"
  }, null, _parent));
  _push(`<p class="mt-5 text-justify ...">La Cabane \xE0 Burger, c\u2019est des burgers gourmets \xE0 la Fran\xE7aise, cuisin\xE9s \xE0 base de produits frais* s\xE9lectionn\xE9s par nos soins, sur demande et \xE0 la commande, \xE0 d\xE9guster sur place ou \xE0 emporter. <br><br>Notre pain bio, fabriqu\xE9 sp\xE9cialement pour nous suivant une recette tenue secr\xE8te, s\u2019agr\xE9mente d\u2019un steak hach\xE9 et de l\xE9gumes frais. Justes sal\xE9es ou saupoudr\xE9es de notre m\xE9lange sp\xE9cial d\u2019ail et de paprika doux pour relever le bon gout de la pomme de terre, nos frites fraiches compl\xE8tent l\u2019exp\xE9rience d\u2019un repas savoureux cuisin\xE9 devant vous. <br><br>Pour prolonger la d\xE9couverte, retrouvez chaque mois une nouvelle recette pens\xE9e et travaill\xE9e au gr\xE9 des exp\xE9riences gustatives des chefs. </p></div><div class="p-10 pl-12">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    "top-text": "Les",
    "bottom-text": "Cr\xE9ateurs"
  }, null, _parent));
  _push(`<p class="mt-5 text-justify ...">Charcutier Traiteur de formation, Laurent (\xE0 gauche) exerce depuis de nombreuses ann\xE9es le m\xE9tier de pizzaiolo en tant que g\xE9rant d\u2019\xE9tablissement. D\xE9couvrant la qualit\xE9 de ses pizzas, on lui sugg\xE8re de se lancer dans les burgers, nouvelle tendance de la restauration. S\xE9duit par le challenge et motiv\xE9 par l\u2019envie de proposer une alternative de qualit\xE9 face aux fast food et aux grandes enseignes, il cr\xE9e en 2016 la 1\xE8re Cabane \xE0 Burger surnomm\xE9e par ses clients La Cab. <br><br>Roland (\xE0 droite) est g\xE9rant depuis 10 ans de deux \xE9tablissements de restauration. Issu d\u2019une famille de fromagers, il a parcouru les \xE9tals de march\xE9s \xE0 leurs c\xF4t\xE9s, d\xE9veloppant ainsi son go\xFBt et sa comp\xE9tence \xE0 s\xE9lectionner des produits frais de qualit\xE9. <br><br>Partageant les m\xEAmes valeurs de la bonne cuisine, Roland rejoint rapidement Laurent pour d\xE9velopper La Cab en r\xE9seau de franchise. Ils d\xE9cident alors de proposer \xE0 d\u2019autres passionn\xE9s de cuisine une solution cl\xE9 en main pour se lancer. </p></div><div class="p-10"><img alt="..." class="mx-auto vertical-middle"${serverRenderer.exports.ssrRenderAttr("src", _imports_1$2)}></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/concept.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const concept = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const concept$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": concept
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: { StarsBackground: __nuxt_component_0$2, CabDrawingImage, Subtitle: __nuxt_component_0$3, Button }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StarsBackground = __nuxt_component_0$2;
  const _component_CabDrawingImage = vue_cjs_prod.resolveComponent("CabDrawingImage");
  const _component_Subtitle = __nuxt_component_0$3;
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "mb-20" }, _attrs))}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_StarsBackground, null, null, _parent));
  _push(`<div class="pt-40"><div class="relative w-full z-10">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_CabDrawingImage, { class: "mx-auto vertical-middle xl:w-[1200px]" }, null, _parent));
  _push(`<div class="absolute top-1/2 w-full mx-auto"><h1 class="uppercase text-s md:text-sm custom:text-base xl:text-xl font-extrabold tracking-tighter text-white text-center"> Et si vous aussi,<br>vous aviez votre propre<br><span class="text-yellow-600">Cabane \xE0 Burger ?</span></h1></div></div></div><div class="bg-white"><div class="mt-10 grid gap-4 lg:grid-cols-2 grid-cols-1"><div class="p-10 pl-12 m-auto vertical-middle">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    "top-text": "Le go\xFBt d'apprendre",
    "bottom-text": "et d'entreprendre"
  }, null, _parent));
  _push(`<p class="mt-10 text-justify ..."> Vous souhaitez devenir franchis\xE9 ? <br>Vous avez la volont\xE9 de lancer votre propre <span class="text-primary-900">Cabane \xE0 Burger</span> ? <br><br>Faites-le-nous savoir ! </p><div class="text-center mt-10">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, {
    class: "card-form__button w-1/3 justify-center",
    warn: ""
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Plus d&#39;infos `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Plus d'infos ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="p-10"><img alt="..." class="mx-auto vertical-middle"${serverRenderer.exports.ssrRenderAttr("src", _imports_0$2)}></div></div><div class="mt-10 grid gap-4 grid-cols-1"><div class="m-auto vertical-middle">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, { "top-text": "Vos avantages" }, null, _parent));
  _push(`</div></div><div class="grid gap-4 md:grid-cols-2 grid-cols-1 xl:p-10 ml-2"><div class="flex flex-row ml-5 vertical-middle"><div class="flex flex-2 justify-center items-center"><img alt="..." class="mx-auto vertical-middle lg:float-left w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_1$1)}></div><div class="flex flex-1 items-center"><p class="p-10"> Un investissement minimum pour une rentabilit\xE9 maximum </p></div></div><div class="flex flex-row ml-5 vertical-middle"><div class="flex flex-2 justify-center items-center"><img alt="..." class="mmx-auto vertical-middle lg:float-left w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_2)}></div><div class="flex flex-1 items-center"><p class="p-10"> Une solution cl\xE9 en main : vous signez, vous vous lancez ! </p></div></div><div class="flex flex-row ml-5 vertical-middle"><div class="flex flex-2 justify-center items-center"><img alt="..." class="mx-auto vertical-middle lg:float-left w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_3)}></div><div class="flex flex-1 justify-center items-center"><p class="p-10"> Formation et accompagnement assur\xE9s (conseil sur le choix du lieu d\u2019implantation, installation de la structure, r\xE9seau d\u2019approvisionnement n\xE9goci\xE9...) </p></div></div><div class="flex flex-row ml-5 vertical-middle"><div class="flex flex-2 justify-center items-center"><img alt="..." class="mx-auto vertical-middle lg:float-left w-full"${serverRenderer.exports.ssrRenderAttr("src", _imports_4)}></div><div class="flex flex-1 justify-center items-center"><p class="p-10"> Une carte nationale partag\xE9e, mais aussi une libert\xE9 de cr\xE9ation de recettes suivant vos envies et vos r\xE9gions. </p></div></div></div><div class="text-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { class: "mt-10" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Je souhaite me lancer `);
      } else {
        return [
          vue_cjs_prod.createTextVNode(" Je souhaite me lancer ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/franchise.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const franchise = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const franchise$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": franchise
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = vue_cjs_prod.defineComponent({
  name: "La Cabane \xE0 Burger",
  components: {
    Button,
    Subtitle: __nuxt_component_0$3,
    CardCarrousel: __nuxt_component_1$3,
    Bun,
    Steak,
    Potatoes,
    Bullet
  },
  setup() {
    const burgers = [
      {
        title: "Le Montagnard",
        image: "montagnard.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      },
      {
        title: "Le Savoyard",
        image: "savoyard.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      },
      {
        title: "Le Gaulois",
        image: "gaulois.png",
        text: "Pain, steak, galette de pomme de terre, raclette, poitrine fum\xE9e, oignons confits"
      }
    ];
    return { burgers };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Html = vue_cjs_prod.resolveComponent("Html");
  const _component_Head = vue_cjs_prod.resolveComponent("Head");
  const _component_Title = vue_cjs_prod.resolveComponent("Title");
  const _component_Meta = vue_cjs_prod.resolveComponent("Meta");
  const _component_Subtitle = __nuxt_component_0$3;
  const _component_Bun = vue_cjs_prod.resolveComponent("Bun");
  const _component_Bullet = vue_cjs_prod.resolveComponent("Bullet");
  const _component_Steak = vue_cjs_prod.resolveComponent("Steak");
  const _component_Potatoes = vue_cjs_prod.resolveComponent("Potatoes");
  const _component_CardCarrousel = __nuxt_component_1$3;
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Html, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Head, null, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_Title, null, {
                default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`La Cabane \xE0 Burger`);
                  } else {
                    return [
                      vue_cjs_prod.createTextVNode("La Cabane \xE0 Burger")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(serverRenderer.exports.ssrRenderComponent(_component_Meta, {
                name: "description",
                content: "Pour d\xE9guster des burgers gourmets, pr\xE9par\xE9s \xE0 la demande et sur commande au coin de la rue, rendez-vous \xE0 La Cabane \xE0 Burger !"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_Title, null, {
                  default: vue_cjs_prod.withCtx(() => [
                    vue_cjs_prod.createTextVNode("La Cabane \xE0 Burger")
                  ]),
                  _: 1
                }),
                vue_cjs_prod.createVNode(_component_Meta, {
                  name: "description",
                  content: "Pour d\xE9guster des burgers gourmets, pr\xE9par\xE9s \xE0 la demande et sur commande au coin de la rue, rendez-vous \xE0 La Cabane \xE0 Burger !"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Head, null, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(_component_Title, null, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("La Cabane \xE0 Burger")
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(_component_Meta, {
                name: "description",
                content: "Pour d\xE9guster des burgers gourmets, pr\xE9par\xE9s \xE0 la demande et sur commande au coin de la rue, rendez-vous \xE0 La Cabane \xE0 Burger !"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="z-40 w-full h-screen" style="${serverRenderer.exports.ssrRenderStyle({
    backgroundImage: `url('./assets/img/breizh-burger.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  })}"><div class="absolute left-16 top-64 lg:top-auto lg:bottom-32 lg:left-32 bg-black/40 rounded-md p-2"><div><p class="uppercase text-primary-900">Nouveau</p><p class="flex flex-col font-extrabold text-white uppercase text-8xl font-header"><span>Le Breizh</span><span>Burger</span></p></div><div class="flex-row justify-between hidden h-20 p-4 rounded-lg w-160 gap-4 lg:flex bg-primary-900"><ul class="grid grid-flow-col grid-rows-2 list-disc list-inside gap-y-2 gap-x-6"><li class="text-sm font-semibold text-white font-text">Salade</li><li class="text-sm font-semibold text-white font-text"> Sauce poivre </li><li class="text-sm font-semibold text-white font-text"> Viande hach\xE9e </li><li class="text-sm font-semibold text-white font-text"> Andouille au lard </li><li class="text-sm font-semibold text-white font-text"> Confit d&#39;oignons </li><li class="text-sm font-semibold text-white font-text"> Roquefort </li></ul><div class="w-px bg-white"></div><div class="grid grid-flow-col grid-rows-2 gap-y-2 gap-x-6"><p class="text-xl font-bold text-white font-text">10.90\u20AC</p><p class="text-white font-text"><span class="text-xs uppercase">Menu</span><span class="ml-1 text-sm font-bold">13.50\u20AC</span></p></div></div></div></div><div class="flex justify-center w-full" style="${serverRenderer.exports.ssrRenderStyle({
    backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#FBD69F"
  })}"><div class="w-10/12 py-20"><div class="flex flex-col items-start lg:flex-row"><div class="flex flex-col items-center flex-1 mb-10 lg:items-start">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    class: "text-center lg:text-left",
    topText: "Les burgers gourmets",
    bottomText: "\xE0 cot\xE9 de chez vous"
  }, null, _parent));
  _push(`<p class="pb-10 text-center lg:text-left text-md font-text"> Pour d\xE9guster des burgers gourmets, pr\xE9par\xE9s \xE0 la demande et sur commande au coin de la rue, rendez-vous \xE0 La Cabane \xE0 Burger ! Notre pain bio, cr\xE9\xE9 uniquement pour notre carte, s\u2019accorde avec des produits frais s\xE9lectionn\xE9s par nos soins pour vous r\xE9galer et r\xE9veiller vos papilles. Chaque mois, retrouvez une recette originale de saison, accompagn\xE9e de frites fraiches de La Cabane. </p><button color="#EF7202" border size="l">Int\xE9rr\xE9ss\xE9 par la franchise ? C\u2019est par ici ! </button></div><div class="flex justify-center flex-1 w-full lg:justify-end"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><ul class="justify-between hidden mt-20 lg:flex"><li class="flex flex-col items-center justify-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Bun, { class: "pb-4 text-dark w-full fill-current text-dark" }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    class: "items-center",
    topText: "Pains bio",
    bottomText: "recette Sp\xE9ciale"
  }, null, _parent));
  _push(`</li><li class="flex flex-col items-center justify-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Bullet, { class: "text-dark w-full fill-current text-dark" }, null, _parent));
  _push(`</li><li class="flex flex-col items-center justify-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Steak, { class: "pb-4 text-dark w-full fill-current text-dark" }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    class: "items-center",
    topText: "Viande bovine",
    bottomText: "fran\xE7aise"
  }, null, _parent));
  _push(`</li><li class="flex flex-col items-center justify-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Bullet, { class: "text-black w-full fill-current text-dark" }, null, _parent));
  _push(`</li><li class="flex flex-col items-center justify-center">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Potatoes, { class: "pb-4 w-full fill-current text-dark" }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    class: "items-center",
    topText: "Frites fra\xEEches",
    bottomText: "de la cabane"
  }, null, _parent));
  _push(`</li></ul></div></div><div class="flex justify-center w-full" style="${serverRenderer.exports.ssrRenderStyle({
    backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  })}"><div class="w-10/12 py-20">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
    topText: "Decouvrez",
    bottomText: "nos burgers"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_CardCarrousel, { cards: _ctx.burgers }, null, _parent));
  _push(`<div class="flex-row justify-between hidden p-10 my-20 lg:flex rounded-3xl bg-primary-400"><div class="flex-1"><h4 class="mb-2 text-lg font-semibold text-dark"> Le Burger du Mois </h4><p class="text-xs text-dark lg:text-base"> Chaque mois une nouvelle recette, imagin\xE9e par nos chefs pour vous proposer un burger de saison. </p></div><div class="flex items-center justify-center flex-1"><img${serverRenderer.exports.ssrRenderAttr("src", _imports_1)} alt="Burger sur une planche en bois"></div><div class="flex items-center justify-end flex-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { secondary: "" }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`D\xE9couvrir le burger du mois `);
      } else {
        return [
          vue_cjs_prod.createTextVNode("D\xE9couvrir le burger du mois ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="flex justify-center w-full">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Button, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Voir la carte`);
      } else {
        return [
          vue_cjs_prod.createTextVNode("Voir la carte")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = vue_cjs_prod.defineComponent({
  components: {
    Map: __nuxt_component_2,
    LocationCard: __nuxt_component_1$2,
    GeoSearch: __nuxt_component_0$1
  },
  setup() {
    const selected = vue_cjs_prod.ref("");
    let position = vue_cjs_prod.ref({ lat: 0, lng: 0 });
    vue_cjs_prod.onMounted(async () => {
    });
    const locations = [
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be2",
        city: "Dijon",
        address: "36-38 Rue de la Libert\xE9, 21000 Dijon",
        latitude: 47.32233,
        longitude: 5.03715,
        phone: "02 45 17 23 34",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" }
        ]
      },
      {
        id: "38217e29-88fb-48d5-a86d-4427d2660be1",
        city: "Pontch\xE2teaux",
        address: "2A rue Gutenberg ZI du Landas",
        latitude: 47.43081,
        longitude: -2.07996,
        phone: "02 51 75 39 32",
        openings: [
          { id: "1", weekday: "monday", start: "11h30", end: "13h45" },
          { id: "2", weekday: "monday", start: "17h00", end: "20h00" },
          { id: "3", weekday: "tuesday", start: "11h30", end: "13h45" },
          { id: "4", weekday: "tuesday", start: "17h00", end: "20h00" },
          { id: "5", weekday: "wednesday", start: "11h30", end: "13h45" },
          { id: "5", weekday: "wednesday", start: "17h00", end: "20h00" },
          { id: "6", weekday: "thursday", start: "11h30", end: "13h45" },
          { id: "7", weekday: "thursday", start: "17h00", end: "20h00" },
          { id: "8", weekday: "friday", start: "11h30", end: "13h45" },
          { id: "9", weekday: "friday", start: "17h00", end: "20h00" },
          { id: "10", weekday: "saturday", start: "11h30", end: "13h45" },
          { id: "11", weekday: "saturday", start: "17h00", end: "20h00" },
          { id: "12", weekday: "sunday", start: "17h00", end: "20h00" }
        ]
      }
    ];
    const sortedLocations = vue_cjs_prod.computed(() => {
      if (position.value.lat !== 0 || position.value.lng !== 0) {
        let sortedLocations2 = locations.map((_a2) => {
          var _b = _a2, { latitude, longitude } = _b, rest = __objRest(_b, ["latitude", "longitude"]);
          let location2 = point([longitude, latitude]);
          let user = point([position.value.lng, position.value.lat]);
          return __spreadValues({
            distance: distance(location2, user),
            latitude,
            longitude
          }, rest);
        }).sort((a, b) => a.distance - b.distance);
        selected.value = sortedLocations2[0].id;
        return sortedLocations2;
      } else {
        return locations;
      }
    });
    const onGeolocate = (p) => {
      position.value = p;
    };
    const onStop = () => {
      position.value = { lat: 0, lng: 0 };
      selected.value = "";
    };
    return {
      sortedLocations,
      onGeolocate,
      onStop,
      selected,
      position
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GeoSearch = __nuxt_component_0$1;
  const _component_LocationCard = __nuxt_component_1$2;
  const _component_Map = __nuxt_component_2;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="flex items-center justify-center w-full h-screen" style="${serverRenderer.exports.ssrRenderStyle({
    backgroundImage: `url('./assets/backgrounds/background-transparent.png'})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  })}"><div class="flex flex-row w-10/12 mt-48 bg-white shadow-lg h-4/6 rounded-xl"><div class="relative flex-1 p-10"><h3 class="text-lg font-semibold font-text"> Selectionnez une Cabane \xE0 Burger </h3>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_GeoSearch, null, null, _parent));
  _push(`<div class="relative z-0 w-full overflow-scroll h-4/6"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.sortedLocations, (location2, index2) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_LocationCard, {
      key: index2,
      location: location2,
      isSelected: _ctx.selected === location2.id
    }, null, _parent));
  });
  _push(`<!--]--></div></div><div class="flex-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_Map, {
    selected: _ctx.selected,
    position: _ctx.position,
    locations: _ctx.sortedLocations,
    class: "rounded-r-xl"
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/information.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const information = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const information$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": information
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = vue_cjs_prod.defineComponent({
  components: { SearchIcon, Card: __nuxt_component_1$4, Button, Input },
  setup() {
    const { result, loading, onResult } = useGetStoresQuery();
    const stores = vue_cjs_prod.ref([]);
    onResult(({ data }) => {
      var _a2;
      stores.value = (_a2 = data == null ? void 0 : data.getStores) != null ? _a2 : [];
    });
    const filteredStores = vue_cjs_prod.computed(() => {
      if (stores.value.length === 0) {
        return [];
      }
      return stores.value.filter((store) => store.city.toLowerCase().includes(storeSearch.value.toLowerCase()));
    });
    const storeSearch = vue_cjs_prod.ref("");
    return {
      stores,
      loading,
      storeSearch,
      filteredStores
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$4;
  const _component_Input = vue_cjs_prod.resolveComponent("Input");
  const _component_SearchIcon = vue_cjs_prod.resolveComponent("SearchIcon");
  const _component_Card = __nuxt_component_1$4;
  const _component_nuxt_link = __nuxt_component_2$1;
  _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
    class: "pt-60 flex flex-col items-center justify-center w-screen",
    style: {
      backgroundImage: `url('./assets/backgrounds/background-transparent.png')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }
  }, _attrs))}><div class="sm:mx-auto sm:w-full sm:max-w-md mb-24"><h2 class="mt-6 text-center text-3xl font-semibold text-secondary-900"> La Carte </h2></div><div class="mb-16"><h3> Trouver une cabane \xE0 Burger dans ma ville </h3>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_client_only, null, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.exports.ssrRenderComponent(_component_Input, {
          name: "storeSearch",
          placeholder: "Saisir un ville",
          modelValue: _ctx.storeSearch,
          "onUpdate:modelValue": ($event) => _ctx.storeSearch = $event
        }, {
          default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(serverRenderer.exports.ssrRenderComponent(_component_SearchIcon, { class: "text-gray-500 h-4" }, null, _parent3, _scopeId2));
            } else {
              return [
                vue_cjs_prod.createVNode(_component_SearchIcon, { class: "text-gray-500 h-4" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue_cjs_prod.createVNode(_component_Input, {
            name: "storeSearch",
            placeholder: "Saisir un ville",
            modelValue: _ctx.storeSearch,
            "onUpdate:modelValue": ($event) => _ctx.storeSearch = $event
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(_component_SearchIcon, { class: "text-gray-500 h-4" })
            ]),
            _: 1
          }, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="stores-cards flex flex-row flex-wrap"><!--[-->`);
  serverRenderer.exports.ssrRenderList(_ctx.filteredStores, (store) => {
    _push(serverRenderer.exports.ssrRenderComponent(_component_Card, {
      class: "mx-8 mb-8",
      image: store.image ? store.image : "/stores/default.png",
      image_alt: "La cabane \xE0 Burger",
      title: "La CAB " + store.city
    }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${serverRenderer.exports.ssrInterpolate(store.city)} <br${_scopeId}> ${serverRenderer.exports.ssrInterpolate(store.address + " " + store.postal_code + " " + store.city)} <div class="flex justify-end mt-4 mx-2"${_scopeId}>`);
          _push2(serverRenderer.exports.ssrRenderComponent(_component_nuxt_link, {
            class: "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
            to: "/menu/" + store.slug,
            "active-class": "text-primary-600 cursor-default"
          }, {
            default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`S\xE9lectionner `);
              } else {
                return [
                  vue_cjs_prod.createTextVNode("S\xE9lectionner ")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          return [
            vue_cjs_prod.createTextVNode(vue_cjs_prod.toDisplayString(store.city) + " ", 1),
            vue_cjs_prod.createVNode("br"),
            vue_cjs_prod.createTextVNode(" " + vue_cjs_prod.toDisplayString(store.address + " " + store.postal_code + " " + store.city) + " ", 1),
            vue_cjs_prod.createVNode("div", { class: "flex justify-end mt-4 mx-2" }, [
              vue_cjs_prod.createVNode(_component_nuxt_link, {
                class: "inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-sm shadow-sm text-white bg-primary-900 hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
                to: "/menu/" + store.slug,
                "active-class": "text-primary-600 cursor-default"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createTextVNode("S\xE9lectionner ")
                ]),
                _: 2
              }, 1032, ["to"])
            ])
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/menu.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const menu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const menu$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": menu
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = vue_cjs_prod.defineComponent({
  components: { LocationMarkerIcon, CheckIcon, Button, Accordion: __nuxt_component_1$1 },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { result, loading, onResult } = useGetStoreBySlugQuery({ slug: route.params.name });
    const myStore = dist.useResult(result, { openings: [] });
    onResult(({ data, loading: loading2 }) => {
      if (!loading2 && !data.getStoreBySlug) {
        router.push("/404");
      }
    });
    const formattedOpennings = vue_cjs_prod.computed(() => {
      var _a2;
      if ((_a2 = myStore.value) == null ? void 0 : _a2.openings) {
        let sortFunc = function(a, b) {
          return weekdays.indexOf(a.day.toLowerCase()) - weekdays.indexOf(b.day.toLowerCase());
        };
        const weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
        const finalWeek = [];
        const finalDay = [];
        let time1 = "";
        const memory = [];
        let valid = false;
        const weekOpenings = myStore.value.openings.map(function(opening) {
          return (opening == null ? void 0 : opening.start) === (opening == null ? void 0 : opening.end) ? (opening == null ? void 0 : opening.weekday) + ":" + (opening == null ? void 0 : opening.start) : (opening == null ? void 0 : opening.weekday) + ":" + (opening == null ? void 0 : opening.start) + "/" + (opening == null ? void 0 : opening.end);
        });
        weekdays.forEach((weekday) => {
          weekOpenings.forEach((weekOpening) => {
            const formatWeek = weekOpening.split(":");
            const objectWeek = { day: formatWeek[0], time: formatWeek[1] };
            if (formatWeek[0].toLowerCase() === weekday) {
              finalWeek.push(objectWeek);
            }
          });
        });
        weekdays.forEach((weekday) => {
          finalWeek.forEach((day) => {
            if (weekday === day.day.toLowerCase()) {
              if (!memory.includes(weekday)) {
                time1 = day.time;
                valid = true;
              } else {
                valid = false;
              }
              if (time1 !== null && valid === true) {
                memory.push(weekday);
                finalDay.push(day);
              } else {
                finalDay.splice(-1, 1);
                Object.keys(day).forEach((key) => {
                  if (key === "time") {
                    const arrTime1 = time1.length === 10 || time1.length === 9 ? "0" + time1 : time1;
                    const arrTime2 = day[key].length === 10 || day[key].length === 9 ? "0" + day[key] : day[key];
                    const arr = [arrTime1, arrTime2];
                    arr.sort();
                    const hour = arr[0] === arrTime1 ? time1 + ", " + day[key] : day[key] + ", " + time1;
                    day[key] = hour;
                  }
                });
                finalDay.push(day);
              }
            }
          });
        });
        if (finalDay.length !== 7) {
          weekdays.forEach((weekday) => {
            let end = false;
            finalDay.forEach((day, idx) => {
              if (weekday === day.day.toLowerCase()) {
                end = true;
              }
              if (idx === finalDay.length - 1 && !end) {
                finalDay.push({ day: weekday.charAt(0).toUpperCase() + weekday.substring(1).toLowerCase(), time: "Ferm\xE9" });
              }
            });
          });
        }
        finalDay.sort(sortFunc);
        return finalDay;
      } else {
        return {};
      }
    });
    function map(lat, long) {
      window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + lat + "," + long, "_blank").focus();
    }
    return { myStore, loading, formattedOpennings, map };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Subtitle = __nuxt_component_0$3;
  const _component_LocationMarkerIcon = vue_cjs_prod.resolveComponent("LocationMarkerIcon");
  const _component_Accordion = __nuxt_component_1$1;
  const _component_Button = vue_cjs_prod.resolveComponent("Button");
  const _component_CheckIcon = vue_cjs_prod.resolveComponent("CheckIcon");
  if (_ctx.myStore && !_ctx.loading) {
    _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}><div class="flex items-center justify-center w-full" style="${serverRenderer.exports.ssrRenderStyle({
      backgroundImage: `url('./assets/backgrounds/background-transparent.png'})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    })}"><div class="flex flex-col lg:flex-row w-10/12 mt-48 mb-12 bg-white shadow-lg h-4/6 rounded-xl"><div class="flex-[0_1_50%] p-10">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Subtitle, {
      class: "ml-5",
      "top-text": "La cabane \xE0 burger - " + _ctx.myStore.city
    }, null, _parent));
    _push(`<div class="flex"><div>`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_LocationMarkerIcon, { class: "w-7 mr-5" }, null, _parent));
    _push(`</div><div><p>La Cabane A Burger ${serverRenderer.exports.ssrInterpolate(_ctx.myStore.city)}</p><p>${serverRenderer.exports.ssrInterpolate(_ctx.myStore.address)}</p><p>${serverRenderer.exports.ssrInterpolate(_ctx.myStore.postal_code)} ${serverRenderer.exports.ssrInterpolate(_ctx.myStore.city)}</p><p>${serverRenderer.exports.ssrInterpolate(_ctx.myStore.phone)}</p></div></div><hr class="w-full mt-5"><div class="mt-5 mb-5">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Accordion, { class: "mb-4" }, {
      title: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<p${_scopeId}>Voir les horaires d&#39;ouverture</p>`);
        } else {
          return [
            vue_cjs_prod.createVNode("p", null, "Voir les horaires d'ouverture")
          ];
        }
      }),
      content: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<table class="border-collapse border border-gray-400 m-auto mt-5"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="border border-white w-1/3"${_scopeId}></th><th class="border border-white"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
          serverRenderer.exports.ssrRenderList(_ctx.formattedOpennings, (openning) => {
            _push2(`<tr${_scopeId}><td class="border border-white w-1/2"${_scopeId}>${serverRenderer.exports.ssrInterpolate(openning.day)}</td><td class="border border-white"${_scopeId}>${serverRenderer.exports.ssrInterpolate(openning.time)}</td></tr>`);
          });
          _push2(`<!--]--></tbody></table>`);
        } else {
          return [
            vue_cjs_prod.createVNode("table", { class: "border-collapse border border-gray-400 m-auto mt-5" }, [
              vue_cjs_prod.createVNode("thead", null, [
                vue_cjs_prod.createVNode("tr", null, [
                  vue_cjs_prod.createVNode("th", { class: "border border-white w-1/3" }),
                  vue_cjs_prod.createVNode("th", { class: "border border-white" })
                ])
              ]),
              vue_cjs_prod.createVNode("tbody", null, [
                (vue_cjs_prod.openBlock(true), vue_cjs_prod.createBlock(vue_cjs_prod.Fragment, null, vue_cjs_prod.renderList(_ctx.formattedOpennings, (openning) => {
                  return vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock("tr", {
                    key: openning.day
                  }, [
                    vue_cjs_prod.createVNode("td", { class: "border border-white w-1/2" }, vue_cjs_prod.toDisplayString(openning.day), 1),
                    vue_cjs_prod.createVNode("td", { class: "border border-white" }, vue_cjs_prod.toDisplayString(openning.time), 1)
                  ]);
                }), 128))
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><hr class="w-full mt-5"><div class="w-full flex items-center justify-center">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_Button, { class: "mt-5 mx-5" }, {
      default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`J&#39;Y VAIS`);
        } else {
          return [
            vue_cjs_prod.createTextVNode("J'Y VAIS")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><hr class="w-full mt-5"><div class="mt-5 flex justify-center flex-col sm:flex-row items-left"><div class="flex mr-2"><div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_CheckIcon, { class: "w-5 inline" }, null, _parent));
    _push(`</div><div>\xC0 emporter</div></div><div class="flex mr-2"><div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_CheckIcon, { class: "w-5 inline" }, null, _parent));
    _push(`</div><div>Sur place</div></div><div class="flex mr-2"><div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_CheckIcon, { class: "w-5 inline" }, null, _parent));
    _push(`</div><div>En livraison</div></div><div class="flex"><div class="w-6 h-6 rounded-full inline-flex items-center justify-center bg-green-500 text-white mr-2">`);
    _push(serverRenderer.exports.ssrRenderComponent(_component_CheckIcon, { class: "w-5 inline" }, null, _parent));
    _push(`</div><div>En click &amp; collect</div></div></div></div><div class="flex-1"><iframe${serverRenderer.exports.ssrRenderAttr("src", "https://www.google.com/maps?q=" + _ctx.myStore.address + "," + _ctx.myStore.postal_code + _ctx.myStore.city + "&output=embed")} class="lg:rounded-r-xl w-full h-full block h-80 lg:h-full" allowfullscreen="true" loading="lazy">
          </iframe></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/restaurant/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const _name_$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _name_
}, Symbol.toStringTag, { value: "Module" }));

export { entry$1 as default };
//# sourceMappingURL=server.mjs.map
