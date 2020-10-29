export const makeDomElement = (params) => {
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
};

