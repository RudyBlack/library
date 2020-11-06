export const getQueryString = function (url) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => { params[key] = value; });
  return params;
};


