<template>
  <div class="container m-auto bg-[#F6F8FD] h-[474px] w-[500px] flex flex-col rounded">
    <div class="h-[54px] bg-[#FFFFFF] flex items-center rounded">
      <button class="flex w-1/3 p-[20px]">
        <CloseIcon class="h-3.5 w-3.5 transform rotate-45" />
      </button>
      <div class="flex w-1/3 justify-center">
        <h2 class="font-nunito text-lg text-[#405069]">Group Created</h2>
      </div>
      <div class="flex w-1/3 justify-end p-[2.5px]">
        <button
          @click="onDone"
          class="inline-flex items-center justify-center h-9 w-15 bg-[#EFFAFF] border border-[#EFFAFF] p-2.5 m-2.5 rounded-md opacity-50 font-nunito text-base text-[#57ADD3] font-semibold"
        >
          Done
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center flex-grow">
  <ConfirmationIcon class="w-36 h-36 text-[#96A6BE]rounded-full group" fill="#96A6BE"/>
  <p class="pt-[20px] font-nunito text-base text-[#96A6BE]">
   Group created
  </p>
</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CloseIcon from './icons/CloseIcon.vue';
import ConfirmationIcon from './icons/ConfirmationIcon.vue';

export default defineComponent({
  components: {
    CloseIcon,
    ConfirmationIcon,
  },
  emits: ['reset'],
  setup(props, { emit }) {
    function onDone() {
      emit('reset');
    }

    return {
      onDone,
    };
  },
});
</script>

