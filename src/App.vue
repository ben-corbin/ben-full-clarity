<template>
  <div id="app" class="bg-gray-300">
    <group-creation-modal />
  </div>
</template>

<script>
import GroupCreationModal from './components/GroupCreationModal.vue';

export default {
  components: {
    GroupCreationModal,
  },
};
</script>
