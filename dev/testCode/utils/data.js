export const StateManagement = ((initData) => {
    const observer = new Map();
    const dataStore = new Proxy(initData, {
        get(target, prop, receiver) {
            return target[prop];
        },
        set(target, prop, receiver) {
            target[prop] = receiver;

            if (observer.has(prop)) {
                observer.get(prop).forEach((callback, key, map) => {
                    callback(target[prop]);
                });
            }

            return true;
        },
    });

    const get = (key) => {
        if (Array.isArray(key)) {
            return key.map((key) => dataStore[key]);
        }
        return dataStore[key];
    };

    const set = (key, value) => {
        if (typeof value !== 'undefined') dataStore[key] = value;
        return StateManagement;
    };

    const regObserver = (target, callback) => {
        if (Array.isArray(target)) {
            target.map((cur) => {
                observer.has(cur)
                    ? observer.get(cur).push(callback)
                    : observer.set(cur, [callback]);
            });

            return;
        }

        observer.has(target)
            ? observer.get(target).push(callback)
            : observer.set(target, [callback]);

        return StateManagement;
    };

    return { get, set, regObserver };
})({});

export const receiveDataParse = (receiveData) => {
    const IsJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    };

    if (IsJsonString(receiveData)) return JSON.parse(receiveData)[0];

    //object일 때
    if (typeof receiveData === 'object' && receiveData !== null) {
        return receiveData;
    }

    return receiveData;
};