function makeDomElement(params) {
  if (typeof params === 'string') {
    var template = document.createElement('template');
    template.innerHTML = params;
    return template.content.firstElementChild;
  }

  var $el = document.createElement(params.elType);

  for (var key in params) {
    if (typeof $el[key] !== 'undefined') $el[key] = params[key];
  }

  return $el;
};
function getQueryString(url) {
  var params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
    params[key] = value;
  });
  return params;
};
function sliceString(target, count) {
  var rtnVal = [];
  var beforeCount = 0;
  var nextCount = count;

  if (count === 0) {
    rtnVal.push(target);
    return rtnVal;
  }

  for (var i = 0; i < target.length; i++) {
    if (nextCount >= target.length) {
      rtnVal.push(target.slice(beforeCount, target.length));
      break;
    }

    rtnVal.push(target.slice(beforeCount, nextCount));
    beforeCount = nextCount;
    nextCount = beforeCount + count;
  }

  return rtnVal;
};
function getObjectString(target, findObj) {
  var rtnVal = "";

  if (findObj) {
    var regExp = new RegExp(findObj + '[\\s]+?=[\\s]+?\\{[\\s\\S]+?\\}\\;[^"]', 'g');
    var regMatch = target.match(regExp);

    if (regMatch) {
      rtnVal = regMatch[0].match(new RegExp('\\{[\\s\\S]+?\\}\\;', 'g'))[0];
    }
  } else {
    var regExp = new RegExp('\\{.*\\}', 'g');
    if (target.match(regExp)) rtnVal = target.match(regExp);
  }

  return rtnVal;
};
function getJsonString(target) {
  var regExp = new RegExp(/\{\n[\s\S]*\}/, 'g');
  var match = target.match(regExp);
  return match;
}