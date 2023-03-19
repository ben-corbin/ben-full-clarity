<template>
  <div class="container mx-auto h-screen flex justify-center align-center" >
    <step1 v-if="step === 1" @next="step++"></step1>
    <step2 v-else-if="step === 2" @next="handleNextEvent" @back="step--"></step2>
    <success-screen v-else-if="step === 3" @reset="handleResetEvent"></success-screen>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Step1 from './Step1.vue';
import Step2 from './Step2.vue';
import SuccessScreen from './SuccessScreen.vue';

export default defineComponent({
  components: {
    Step1,
    Step2,
    SuccessScreen,
  },
  setup() {
    const step = ref(1);

    function handleNextEvent() {
      step.value = 3;
    }

    function handleResetEvent() {
      step.value = 1;
    }

    return {
      step,
      handleNextEvent,
        handleResetEvent,
    };
  },
});
</script>

