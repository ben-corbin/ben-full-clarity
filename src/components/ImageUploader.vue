<template>
  <div
    class="relative mt-[50px]"
    @dragover.prevent="dragEnter"
    @dragleave="dragLeave"
    @drop="onDrop"
  >
    <input
      id="fileInput"
      type="file"
      ref="fileInput"
      @change="onFileChange"
      accept="image/*"
      class="hidden"
    />
    <div v-if="imageSrc" class="relative w-36 h-36">
      <img :src="imageSrc" class="w-full h-full object-cover rounded-full" />
      <button
        class="absolute top-0 right-0 bg-white text-black font-bold p-1 rounded-full"
        @click="removeImage"
      >
        x
      </button>
    </div>
    <div
      v-else
      class="flex flex-col items-center justify-center cursor-pointer w-36 h-36 bg-gray-200 rounded-full hover:bg-opacity-80 hover:bg-[#517EB9] group"
    >
      <label for="fileInput">
        <GroupIcon class="h-[144px] w-[144px]" />

        <div
          class="hidden group-hover:block absolute top-[35%] left-[35%] flex items-center justify-center z-0"
        >
          <FileIcon class="h-[45px] w-[45px] text-white" />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import GroupIcon from './icons/GroupIcon.vue';
import FileIcon from './icons/FileIcon.vue';

export default {
  props: {
    initialImage: String,
  },
  components: {
    GroupIcon,
    FileIcon,
  },
  setup(props, { emit }) {
    const isDraggingOver = ref(false);
    const imageSrc = ref(null);

    watch(
      () => props.initialImage,
      (newValue) => {
        imageSrc.value = newValue;
      },
      { immediate: true },
    );

    const dragEnter = () => {
      isDraggingOver.value = true;
    };

    const dragLeave = () => {
      isDraggingOver.value = false;
    };

    const onDrop = (event) => {
      event.preventDefault();
      isDraggingOver.value = false;
      handleFiles(event.dataTransfer.files);
    };

    const onFileChange = (event) => {
      handleFiles(event.target.files);
    };

    const handleFiles = (files) => {
      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
          imageSrc.value = event.target.result;
          emit('image-uploaded', file);
        };

        reader.readAsDataURL(file);
      }
    };

    const removeImage = () => {
      imageSrc.value = null;
      emit('image-removed');
    };

    return {
      imageSrc,
      dragEnter,
      dragLeave,
      onDrop,
      onFileChange,
      removeImage,
    };
  },
};
</script>
