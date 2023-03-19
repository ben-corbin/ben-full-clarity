<template>
  <div class="container m-auto bg-[#F6F8FD] h-[474px] w-[500px] rounded">
    <div class="h-[54px] bg-[#FFFFFF] flex items-center rounded">
      <button class="flex w-1/3 p-[20px]">
        <CloseIcon class="h-3.5 w-3.5 transform rotate-45" />
      </button>
      <div class="flex w-1/3 justify-center">
        <h2 class="font-nunito text-lg text-[#405069]">New Group</h2>
      </div>
      <div class="flex w-1/3 justify-end p-[2.5px]">
        <button
          @click="onNext"
          :disabled="!fieldsPopulated"
          class="inline-flex items-center justify-center h-9 w-15 bg-[#EFFAFF] border border-[#EFFAFF] p-2.5 m-2.5 rounded-md opacity-50 font-nunito text-base text-[#57ADD3] font-semibold"
        >
          Next
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <image-uploader
        @image-uploaded="updateGroupImage"
        @image-removed="removeGroupImage"
        :initial-image="groupImage ? groupImage : null"
      ></image-uploader>
      <p class="pt-[20px] font-nunito text-base text-[#96A6BE]">
        Drag & drop an image, or click to upload
      </p>
    </div>
    <div class="flex justify-center pt-7">
      <input
        v-model="groupName"
        type="text"
        placeholder="Enter group name"
        class="box-border h-[50px] w-full mx-[50px] border border-gray-300 rounded-full bg-white pl-[21px] font-nunito text-sm text-[#405069]"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import ImageUploader from './ImageUploader.vue';

import CloseIcon from './icons/CloseIcon.vue';

export default {
  components: {
    ImageUploader,
    CloseIcon,
  },
  emits: ['next'],
  setup(props, { emit }) {
    const store = useStore();
    const groupName = computed({
      get: () => store.state.groupName,
      set: (value) => store.commit('setGroupName', value),
    });
    const groupImage = computed(() => store.state.groupImage);
    const fieldsPopulated = computed(() => groupName.value && groupImage.value);

    function updateGroupImage(image) {
      const reader = new FileReader();

      reader.onload = (event) => {
        store.commit('setGroupImage', event.target.result);
      };

      reader.readAsDataURL(image);
    }

    function removeGroupImage() {
      store.commit('setGroupImage', null);
    }

    function onNext() {
      emit('next');
    }

    return {
      groupName,
      groupImage,
      fieldsPopulated,
      updateGroupImage,
      removeGroupImage,
      onNext,
    };
  },
};
</script>

<style scoped></style>
