import axios from 'axios';

const apiKey = import.meta.env.VITE_APP_API_AUTH_TOKEN;

export async function fetchContacts() {
  const options = {
    method: 'GET',
    url: 'https://europe-west2-coding-challenge-62755.cloudfunctions.net/getContacts',
    headers: { 'Content-Type': 'application/json', Authorization: apiKey },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    // TODO: Record error responses with logger
  }
}

// Alternative method to fetch contacts that allows for failure on attempt one of two

// export async function fetchContacts() {
//     const options = {
//       method: 'GET',
//       url: 'https://europe-west2-coding-challenge-62755.cloudfunctions.net/getContacts',
//       headers: { 'Content-Type': 'application/json', Authorization: apiKey },
//     };
  
//     async function tryRequest(attempts) {
//       for (let i = 0; i < attempts; i++) {
//         try {
//           const response = await axios.request(options);
//           return response.data;
//         } catch (error) {
//           if (i === attempts - 1) {
//             console.error(error);
//             // TODO: Record error responses with logger
//           } else {
//             await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Wait before trying again
//           }
//         }
//       }
//     }
  
//     return await tryRequest(3);
//   }

export async function createGroup(groupName, selectedContacts, groupImage) {
  const options = {
    method: 'POST',
    url: 'https://europe-west2-coding-challenge-62755.cloudfunctions.net/createGroup',
    headers: { 'Content-Type': 'application/json', Authorization: apiKey },
    data: {
      name: groupName,
      members: selectedContacts,
      avatar: groupImage,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    // TODO: Record error responses with logger
  }
}
