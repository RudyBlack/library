export const StateManagement = ((initData) => {
	const observer = new Map();
	const dataStore = new Proxy(initData, {
		get(target, prop, receiver){
			return target[prop];
		},
		set(target, prop, receiver){
			target[prop] = receiver;

			if(observer.has(prop)) {
				observer.get(prop).forEach((callback, key, map)=>{
					callback(target[prop])
			});
			}


			return true;
		},
	});

const get = (key) => {
	return dataStore[key];
};

const set = (key, value) => {
	if(typeof value !== "undefined") dataStore[key] = value;
};

const regObserver = (target, callback) => {
	observer.has(target)
		? observer.get(target).push(callback)
		: observer.set(target, [callback]);
};

return {get,set,regObserver}
})({});

