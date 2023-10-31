<script setup>
import { OptionsData, CompositionData } from './workshop/basics/data'
import { OptionsProps, CompositionProps } from './workshop/basics/props'
</script>

<template>
  <div class="container">
    <FieldsetBlock title="Data">
      <template #options>
        <OptionsData />
      </template>
      <template #composition>
        <CompositionData />
      </template>
    </FieldsetBlock>

    <FieldsetBlock title="Props">
      <template #options>
        <OptionsProps
          name="John Doe"
          age="42"
          :client-data="{
            isRegistered: true,
            balance: 100
          }"
        />
      </template>
      <template #composition>
        <CompositionProps
          name="John Doe"
          age="42"
          :client-data="{
            isRegistered: true,
            balance: 100
          }"
        />
      </template>
    </FieldsetBlock>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }

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
</style>
