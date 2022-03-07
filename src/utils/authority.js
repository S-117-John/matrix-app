export function getToken() {
  return localStorage.getItem('sword-token') || '';
}

export function removeAll() {
  localStorage.removeItem('sword-authority');
  localStorage.removeItem('sword-token');
  localStorage.removeItem('sword-top-menus');
  localStorage.removeItem('sword-routes');
  localStorage.removeItem('sword-buttons');
  localStorage.removeItem('sword-current-user');
  localStorage.removeItem('sword-captcha-key');
}
