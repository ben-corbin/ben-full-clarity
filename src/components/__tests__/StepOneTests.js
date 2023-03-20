// Tests I would write for StepOne.js

// 1. Test if the initial state of the component is correct:

// Check if the initial group name is empty.
// Check if the initial group image is null.
// Check if the "Next" button is disabled.

// 2. Test the behavior when the group name is entered but no image is uploaded:

// Enter a valid group name.
// Check if the "Next" button is still disabled.

// 3. Test the behavior when an image is uploaded but no group name is entered:

// Upload a valid image.
// Check if the "Next" button is still disabled.

// 4. Test the behavior when both the group name and image are provided:

// Enter a valid group name.
// Upload a valid image.
// Check if the "Next" button is enabled.

// 5. Test the updateGroupImage function:

// Upload a valid image.
// Check if the groupImage state is updated with the correct image data.

// 6. Test the removeGroupImage function:

// Upload a valid image.
// Remove the uploaded image.
// Check if the groupImage state is set to null.

// 7. Test the onNext function:

// Enter a valid group name.
// Upload a valid image.
// Click the "Next" button.
// Check if the next event is emitted.