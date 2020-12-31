export const getQueryString = function (url) {
  const params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (str, key, value) => { params[key] = value; });
  return params;
};

export const promiseMap = function (vals, callback) {
    return Promise.all(
        vals.map(async function (cur) {
            let val = await cur;
            return callback(val);
        })
    );
};

export const makeQueryString = function (obj) {
    let rtnString = "";
    
    rtnString = Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');
    
    return rtnString;
}
