const getQueryString = function(url) {
	let params = {};
	url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
	return params;
};

const getUrlFileName = function(url){
	let urlSplit = url.split("/");
	return urlSplit[ urlSplit.length - 1 ].split(".")[0];
};

export{getQueryString, getUrlFileName}