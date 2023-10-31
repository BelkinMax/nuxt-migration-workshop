<script setup>
import { OptionsData, CompositionData } from './workshop/basics/data'
import { OptionsProps, CompositionProps } from './workshop/basics/props'

const propsMock = reactive({
  name: 'John Doe',
  age: 42,
  clientData: {
    isRegistered: true,
    balance: 100
  }
})

function changeProps() {
  propsMock.age++
  propsMock.clientData.isRegistered = !propsMock.clientData.isRegistered
  propsMock.clientData.balance += 10
}
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
          :name="propsMock.name"
          :age="propsMock.age"
          :client-data="propsMock.clientData"
        />
      </template>
      <template #composition>
        <CompositionProps
          :name="propsMock.name"
          :age="propsMock.age"
          :client-data="propsMock.clientData"
        />
      </template>
    </FieldsetBlock>

    <button @click="changeProps">Change props</button>
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
