<template>
  <div class="container m-auto bg-[#F6F8FD] h-[564px] w-[500px] overflow-y-auto rounded">
    <div class="fixed-container">
      <div class="h-[54px] bg-[#FFFFFF] flex items-center rounded">
        <button class="flex w-1/3 pl-[20px] py-[12px]">
          <BackIcon class="h-[23.96px] w-[23.96px]" @click="backClick" />
        </button>
        <div class="flex w-1/3 justify-center">
          <h2 class="font-nunito text-lg text-[#405069]">Group Members</h2>
        </div>
        <div class="flex w-1/3 justify-end p-[2.5px]">
          <button
            @click="createGroup"
            :disabled="selectedContacts.length === 0 || isCreatingGroup"
            class="inline-flex items-center justify-center h-9 w-15 bg-[#EFFAFF] border border-[#EFFAFF] p-2.5 m-2.5 rounded-md opacity-50 font-nunito text-base text-[#57ADD3] font-semibold"
          >
            Save
          </button>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center bg-[#F6F8FD]">
        <input
          v-model="searchInput"
          type="text"
          placeholder="Search"
          class="box-border h-[50px] w-[460px] m-5 border border-gray-300 rounded-full bg-white pl-[21px] font-nunito text-sm text-[#405069]"
        />
      </div>
    </div>
    <div class="scroll-container">
      <div v-if="isCreatingGroup" class="fixed inset-0 flex items-center justify-center">
        <LoadingSpinner />
      </div>
      <div
      v-for="contact in filteredContacts"
      :key="contact.id"
      class="bg-[#F6F8FD] flex flex-row items-center justify-between px-5 h-[60px]"
    >
        <div class="flex flex-row items-center">
          <img :src="contact.avatar" class="w-12 h-12 rounded-full" />
          <span class="ml-4">{{ contact.first_name }} {{ contact.last_name }}</span>
        </div>
        <button @click="toggleContactSelection(contact)">
          <component
            :is="selectedContacts.includes(contact) ? 'TickIcon' : 'AddIcon'"
            custom-class="icon-wrapper"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, ref, computed } from 'vue';
import BackIcon from './icons/BackIcon.vue';
import AddIcon from './icons/AddIcon.vue';
import TickIcon from './icons/TickIcon.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import SearchIcon from './icons/SearchIcon.vue';

export default {
  components: {
    BackIcon,
    AddIcon,
    TickIcon,
    LoadingSpinner,
    SearchIcon,
  },
  emits: ['back'],
  setup(props, { emit }) {
    const store = useStore();
    const contacts = computed(() => store.state.contacts.contacts);
    const searchInput = ref('');
    const selectedContacts = ref(store.state.selectedContacts);
    const isCreatingGroup = ref(false);

    onMounted(async () => {
      try {
        await store.dispatch('fetchContacts');
      } catch (error) {
        console.error('Error fetching contacts:', error);
        // TO DO - Handle error on front end gracefully
      }
    });

    // search functionality
    const filteredContacts = computed(() => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) return contacts.value;

      return contacts.value.filter(contact => {
        const name = (contact.first_name + ' ' + contact.last_name).toLowerCase();
        return name.includes(query);
      });
    });

    // toggle contact selection and update vuex store
    function toggleContactSelection(contact) {
      if (selectedContacts.value.includes(contact)) {
        selectedContacts.value = selectedContacts.value.filter((c) => c !== contact);
      } else {
        selectedContacts.value = [...selectedContacts.value, contact];
      }
      store.commit('setSelectedContacts', selectedContacts.value);
    }

    async function createGroup() {
      if (selectedContacts.value.length === 0) {
        return;
      }
      // prevent multiple clicks - covered by button disabled state too

      isCreatingGroup.value = true;

      try {
        await store.dispatch('createGroup');
        store.commit('setSelectedContacts', []); // Clear the selected contacts
        store.commit('setGroupName', ''); // Clear the group name
        store.commit('setGroupImage', null); // Clear the group image

        emit('next');
      } catch (error) {
        console.error('Error creating group:', error);
        // TO DO - Handle error on front end gracefully
      } finally {
        isCreatingGroup.value = false;
      }
    }

    function backClick() {
      emit('back');
    }

    return {
      contacts,
      selectedContacts,
      toggleContactSelection,
      createGroup,
      backClick,
      isCreatingGroup,
      filteredContacts,
      searchInput,
    };
  },
};
</script>

<style scoped>
.fixed-container {
  position: sticky;
  top: 0;
  z-index: 10;
}

.scroll-container {
  max-height: 460px;
  overflow-y: auto;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 5px;
  border-radius: 50%;
}

.add-icon {
  background-color: #c5c6d6;
}

.tick-icon {
  background-color: #93cca7;
}
</style>
