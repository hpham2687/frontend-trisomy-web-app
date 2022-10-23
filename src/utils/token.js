export default {
  get() {
    return {
      accessToken: window.sessionStorage.getItem('access_token'),
      refreshToken: window.sessionStorage.getItem('refresh_token'),
    };
  },

  save(accessToken = '', refreshToken = '') {
    if (accessToken) {
      window.sessionStorage.setItem('access_token', accessToken);
    }
    if (refreshToken) {
      window.sessionStorage.setItem('refresh_token', refreshToken);
    }
  },
  delete() {
    window.sessionStorage.removeItem('access_token');
    window.sessionStorage.removeItem('refresh_token');
  },
};
