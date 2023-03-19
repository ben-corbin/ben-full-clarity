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