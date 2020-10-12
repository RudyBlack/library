const getQueryString = function (url) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => { params[key] = value; });
  return params;
};

const getUrlFileName = function (url) {
  const urlSplit = url.split('/');
  return urlSplit[urlSplit.length - 1].split('.')[0];
};

export { getQueryString, getUrlFileName };
