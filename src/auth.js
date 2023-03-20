import Cookies from 'js-cookie';

const TOKEN_COOKIE_KEY = import.meta.env.VITE_APP_API_AUTH_TOKEN;

//note API key is not secret and can be seen in the browser

export function setAuthToken(token) {
  Cookies.set(TOKEN_COOKIE_KEY, token, { secure: true, sameSite: 'strict', httpOnly: true });
}

export function getAuthToken() {
  return Cookies.get(TOKEN_COOKIE_KEY);
}

export function removeAuthToken() {
  Cookies.remove(TOKEN_COOKIE_KEY);
}

// benefits of this approach are:

// Scoped management: It provides a centralized and scoped management of the API key. If the API key changes, you only need to modify the code in one place.

// Code readability: Encapsulating the token management logic in separate functions makes the code more readable and maintainable.

// Reusability: You can reuse the same functions to set, get, and remove the API key across your application.
