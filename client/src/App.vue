<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

const { result, loading, error, refetch } = useQuery(
  gql`
    query getWeather {
      weather
    }
  `,
  null,
  // notifyOnNetworkStatusChange allows the loading status to become true when the update button is clicked
  { notifyOnNetworkStatusChange: true }
);

const weather = computed(() => {
  if (result.value) {
    return result.value.weather;
  }
  return null;
});
</script>

<template>
  <main>
    <div v-if="loading" class="loading">
      Loading
      <div class="spinner"></div>
    </div>
    <div v-else-if="error">
      Oops, looks like we can't get the weather details
    </div>
    <div v-else-if="weather">
      Right now it is {{ weather }} degrees in LA
      <button @click="refetch()" class="refetch">Update</button>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  font-weight: normal;
}

.loading {
  display: flex;
  align-items: center;
  color: var(--color-primary);
  font-weight: 500;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 25px;
  height: 25px;
  margin-left: 10px;
  border-radius: 50%;
  border: 3px solid var(--vt-c-indigo);
  border-top-color: var(--color-primary);
  animation: spin 1s linear infinite;
}

.refetch {
  background: var(--color-primary);
  border: none;
  padding: 10px 30px;
  display: block;
  margin: 10px auto;
  border-radius: 5px;
}
</style>
