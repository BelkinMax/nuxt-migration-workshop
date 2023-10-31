<script setup>
import { OptionsData, CompositionData } from './workshop/basics/data'
import { OptionsProps, CompositionProps } from './workshop/basics/props'
import { OptionsComputed, CompositionComputed } from './workshop/basics/computed'
import { OptionsMethods, CompositionMethods } from './workshop/basics/methods'
import { OptionsRefs, CompositionRefs } from './workshop/basics/refs'
import { OptionsWatch, CompositionWatch } from './workshop/basics/watch'

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
    <h2>Basics</h2>
    <FieldsetBlock title="Data">
      <template #options>
        <OptionsData />
      </template>
      <template #composition>
        <CompositionData />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Props" actions>
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
      <template #actions>
        <button @click="changeProps">Change props</button>
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Computed">
      <template #options>
        <OptionsComputed />
      </template>
      <template #composition>
        <CompositionComputed />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Methods">
      <template #options>
        <OptionsMethods />
      </template>
      <template #composition>
        <CompositionMethods />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Refs">
      <template #options>
        <OptionsRefs />
      </template>
      <template #composition>
        <CompositionRefs />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Watch">
      <template #options>
        <OptionsWatch />
      </template>
      <template #composition>
        <CompositionWatch />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Emits" />
    <FieldsetBlock title="Expose" />
    <FieldsetBlock title="Lifecycle" />

    <h2>Composables</h2>
    <FieldsetBlock title="Provide & Inject" />
    <FieldsetBlock title="Mixins & Extends" />

    <h2>New Directives</h2>
    <FieldsetBlock title="v-once" />
    <FieldsetBlock title="v-memo" />
    <FieldsetBlock title="v-cloak" />

    <h2>Global Components</h2>
    <FieldsetBlock title="KeepAlive" />
    <FieldsetBlock title="Teleport" />
    <FieldsetBlock title="Suspense (experimental)" />

    <h2>Advanced Reactivity</h2>
    <FieldsetBlock title="Ref & Reactive" />
    <FieldsetBlock title="Scopes" />
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

  h2 {
    width: 100%;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    padding: 1rem 0;
    text-align: center;
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
