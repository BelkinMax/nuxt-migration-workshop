<script setup>
import { OptionsData, CompositionData } from './workshop/basics/data'
</script>

<template>
  <div class="container">
    <div class="block">
      <fieldset>
        <legend>Options Data</legend>
        <OptionsData />
      </fieldset>
      <fieldset>
        <legend>Composition Data</legend>
        <CompositionData />
      </fieldset>
    </div>
  </div>
</template>

<style>
  body {
    font-family: Roboto Mono, monospace;
    margin: 0;
    padding: 2rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    min-height: 100vh;
  }

  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }

  fieldset {
    flex: 1;
  }
</style>
