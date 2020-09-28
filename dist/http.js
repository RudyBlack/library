function getQueryString(url) {
	var params = {};
	url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) { params[key] = value; });
	return params;
}

let getUrlFileName = function(url){
	var urlSplit = url.split("/");
	return urlSplit[ urlSplit.length - 1 ].split(".")[0];
}