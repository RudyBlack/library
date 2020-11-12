export const getQueryString = function (url) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => { params[key] = value; });
  return params;
};

export const promiseMap = function (vals, callback) {
    return Promise.all(
        vals.map(function (val) {
            return Promise.resolve(val).then((result) => {
                return new Promise((resolve) => {
                    resolve(callback(result));
                });
            });
        })
    );
};
