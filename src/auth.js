import Cookies from 'js-cookie';

const TOKEN_COOKIE_KEY = import.meta.env.VITE_APP_API_AUTH_TOKEN;

//note API key is not secret and can be seen in the browser

export function setAuthToken(token) {
  Cookies.set(TOKEN_COOKIE_KEY, token, { secure: true, sameSite: 'strict', httpOnly: false });
}

export function getAuthToken() {
  return Cookies.get(TOKEN_COOKIE_KEY);
}

export function removeAuthToken() {
  Cookies.remove(TOKEN_COOKIE_KEY);
}
