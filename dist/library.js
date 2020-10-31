params => {
  if (typeof params === 'string') {
    const template = document.createElement('template');
    template.innerHTML = params;
    return template.content.firstElementChild;
  }

  const $el = document.createElement(params.elType);

  for (const key in params) {
    if (typeof $el[key] !== 'undefined') $el[key] = params[key];
  }

  return $el;
},function (target, count) {
  const rtnVal = [];
  let beforeCount = 0;
  let nextCount = count;

  if (count === 0) {
    rtnVal.push(target);
    return rtnVal;
  }

  for (let i = 0; i < target.length; i++) {
    if (nextCount >= target.length) {
      rtnVal.push(target.slice(beforeCount, target.length));
      break;
    }

    rtnVal.push(target.slice(beforeCount, nextCount));
    beforeCount = nextCount;
    nextCount = beforeCount + count;
  }

  return rtnVal;
},(target, findObj) => {
  var rtnVal = "";

  if (findObj) {
    var regExp = new RegExp(findObj + '[\\s]+?=[\\s]+?\\{[\\s\\S]+?\\}\\;[^"]', 'g');
    let regMatch = target.match(regExp);

    if (regMatch) {
      rtnVal = regMatch[0].match(new RegExp('\\{[\\s\\S]+?\\}\\;', 'g'))[0];
    }
  } else {
    var regExp = new RegExp('\\{.*\\}', 'g');
    if (target.match(regExp)) rtnVal = target.match(regExp);
  }

  return rtnVal;
},target => {
  var regExp = new RegExp(/\{\n[\s\S]*\}/, 'g');
  var match = target.match(regExp);
  return match;
}