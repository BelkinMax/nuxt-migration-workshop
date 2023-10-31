<script setup>
import { OptionsData, CompositionData } from './workshop/basics/data'
import { OptionsProps, CompositionProps } from './workshop/basics/props'
import { OptionsComputed, CompositionComputed } from './workshop/basics/computed'
import { OptionsMethods, CompositionMethods } from './workshop/basics/methods'
import { OptionsLifecycle, CompositionLifecycle } from './workshop/basics/lifecycle'
import { OptionsRefs, CompositionRefs } from './workshop/basics/refs'
import { OptionsWatch, CompositionWatch } from './workshop/basics/watch'
import { OptionsEmits, CompositionEmits } from './workshop/basics/emits'

import { OptionsProvideInject, CompositionProvideInject } from './workshop/composables/provide-inject'

// Props
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

// Lifecycle
const message = ref('Hello World!')
function revertMessage() {
  message.value = message.value.split('').reverse().join('')
}

const isOptionsOpened = ref(false)
const isCompositionOpened = ref(false)
function toggleOptions() {
  isOptionsOpened.value = !isOptionsOpened.value
}
function toggleComposition() {
  isCompositionOpened.value = !isCompositionOpened.value
}

// Emits
const emittedData = ref('')
function setEmittedData(data) {
  emittedData.value = data
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
    <FieldsetBlock title="Lifecycle" actions>
      <template #options>
        <OptionsLifecycle v-if="isOptionsOpened" :message="message" />
      </template>
      <template #composition>
        <CompositionLifecycle v-if="isCompositionOpened" :message="message" />
      </template>
      <template #actions>
        <button @click="revertMessage">Revert message</button>
        <button @click="toggleOptions">Toggle options</button>
        <button @click="toggleComposition">Toggle composition</button>
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
    <FieldsetBlock title="Emits" common>
      <template #common>
        <div>Emitted Data: {{ emittedData }}</div>
      </template>
      <template #options>
        <OptionsEmits @updateNumber="setEmittedData" />
      </template>
      <template #composition>
        <CompositionEmits @updateNumber="setEmittedData" />
      </template>
    </FieldsetBlock>

    <h2>Composables</h2>
    <FieldsetBlock title="Provide & Inject">
      <template #options>
        <OptionsProvideInject />
      </template>
      <template #composition>
        <CompositionProvideInject />
      </template>
    </FieldsetBlock>
    <FieldsetBlock title="Mixins & Extends" />

    <h2>New Directives</h2>
    <FieldsetBlock title="v-once" single />
    <FieldsetBlock title="v-memo" single />
    <FieldsetBlock title="v-cloak" single />

    <h2>Global Components</h2>
    <FieldsetBlock title="KeepAlive" single />
    <FieldsetBlock title="Teleport" single />
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
