import { createTestStore } from '@/store';
import { fetchContacts } from '@/services/api';
import { beforeEach, describe, expect, it } from 'vitest';

describe('store', () => {
  let store;

  beforeEach(() => {
    store = createTestStore();
  });

  describe('actions', () => {
    describe('fetchContacts', () => {
      it('should fetch contacts', async () => {
        const contacts = await fetchContacts();
        await store.dispatch('fetchContacts');
        expect(contacts).toEqual(store.state.contacts);
      });
    });
    describe('create group without data', () => {
      it('should not create a group', async () => {
        const response = await store.dispatch('createGroup');
        expect(response).toEqual(undefined);
      });
    });
  });
});

// TO DO - add more tests


// 1. Test setContacts mutation:

// Create a test store.
// Commit the setContacts mutation with sample contact data.
// Check if the state's contacts have been updated with the sample contact data.

// 2. Test setSelectedContacts mutation:

// Create a test store.
// Commit the setSelectedContacts mutation with sample selected contact data.
// Check if the state's selectedContacts have been updated with the sample selected contact data.

// 3. Test setGroupName mutation:

// Create a test store.
// Commit the setGroupName mutation with a sample group name.
// Check if the state's groupName has been updated with the sample group name.

// 4. Test setGroupImage mutation:

// Create a test store.
// Commit the setGroupImage mutation with a sample group image.
// Check if the state's groupImage has been updated with the sample group image.

// 5. Test fetchContacts action:

// Create a test store.
// Mock the fetchContacts function from the API to return sample contact data.
// Dispatch the fetchContacts action.
// Check if the state's contacts have been updated with the sample contact data.

// 6. Test createGroup action:

// Create a test store.
// Mock the createGroup function from the API to return a sample response.
// Set the test store state with sample groupName, selectedContacts, and groupImage.
// Dispatch the createGroup action.
// Check if the mocked createGroup function has been called with the correct arguments.
