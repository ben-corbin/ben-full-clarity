// Tests to write for ImageUploader.js

// 1. Test the initial component state:

// Check if the initial imageSrc is null.
// Check if the file input is hidden.
// Check if the image is not displayed. 

// 2. Test the component with an initialImage prop:

// Pass an image URL as the initialImage prop.
// Check if the image is displayed.

// 3. Test the drag and drop file upload functionality:

// Simulate a drag event and check if isDraggingOver is true.
// Simulate a drag leave event and check if isDraggingOver is false.
// Simulate a drop event with an image file.
// Check if the image is displayed and the image-uploaded event is emitted with the image file.

// 4. Test the file input change event:

// Simulate a change event on the file input with an image file.
// Check if the image is displayed and the image-uploaded event is emitted with the image file.

// 5. Test the remove image functionality:

// Pass an image URL as the initialImage prop.
// Click the remove image button.
// Check if the image is removed and the image-removed event is emitted.