<script setup>
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const { result, loading, error } = useQuery(gql`
  query getWeather {
    weather
  }
`)
</script>

<template>
  <main>
    <div v-if="loading" class="loading">
      Loading <div class="spinner"></div>
    </div>
    <div v-else-if="error">
      Oops, looks like we can't get the weather details
    </div>
    <div v-else-if="result">
      Right now it is {{ result.weather }} degrees in LA
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
</style>
