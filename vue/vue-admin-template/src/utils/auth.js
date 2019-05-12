import Cookie from 'js-cookie';

const TokenKey = 'vue_admin_template_token';

export function getToken() {
  return Cookie.get(TokenKey);
}

export function setToken(token) {
  return Cookie.set(TokenKey, token);
}

export function removeToken() {
  return Cookie.remove(TokenKey);
}

