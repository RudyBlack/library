const makeDomElement = (params) => {
	if(typeof params === 'string'){
		const template = document.createElement('template');
		template.innerHTML = params;
		return template.content.firstElementChild;
	}

	const $el = document.createElement(params.elType);
	for(let key in params){
		$el[key] = params[key];
	}
	return $el;
}


