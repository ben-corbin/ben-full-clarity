// Tests to write for StepTwo.js

// 1. Test initial component state:

// Check if the initial search input is empty.
// Check if the initial list of contacts is empty.
// Check if the "Save" button is disabled.

// 2. Test if the component fetches contacts and populates the list:

// Wait for the component to fetch contacts.
// Check if the list of contacts is populated.

// 3. Test the search functionality:

// Enter a search query in the search input.
// Check if the list of contacts is filtered according to the query.

// 4. Test the contact selection and deselection:

// Select a contact from the list.
// Check if the selected contact is added to selectedContacts.
// Deselect the same contact.
// Check if the contact is removed from selectedContacts.

// 5. Test the "Save" button state when contacts are selected:

// Select a contact from the list.
// Check if the "Save" button is enabled.

// 6. Test the createGroup function:

// Select a contact from the list.
// Click the "Save" button.
// Check if the group is created and the next event is emitted.
// Check if selectedContacts, groupName, and groupImage are cleared in the store.

// 7. Test the backClick function:

// Click the back button.
// Check if the back event is emitted.
// Check if groupName, and groupImage are in the store