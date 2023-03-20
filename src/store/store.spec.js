import { createTestStore } from '@/store';
import { fetchContacts } from '@/services/api';
import { afterEach, beforeEach, describe, expect, it, vi, contains } from 'vitest'

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
    describe('create group with data', () => {
      it('should create a group', async () => {
        const response = await store.dispatch('createGroup', {
          groupName: 'test',
          selectedContacts: ['test'],
          groupImage: 'test',
        });
        expect(response).toEqual(undefined);
      });
    });
  }); 
});

// TO DO - add more tests

