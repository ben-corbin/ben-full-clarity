<template>
  <div class="container mx-auto h-screen flex justify-center align-center">
    <StepOne v-if="step === 1" @next="step++"></StepOne>
    <StepTwo v-else-if="step === 2" @next="handleNextEvent" @back="step--"></StepTwo>
    <success-screen v-else-if="step === 3" @reset="handleResetEvent"></success-screen>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import SuccessScreen from './SuccessScreen.vue';

export default defineComponent({
  components: {
    StepOne,
    StepTwo,
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
