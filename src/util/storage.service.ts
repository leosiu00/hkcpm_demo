function tryParseJSONObject (jsonString:string){
    try {
        var o = JSON.parse(jsonString);

        // Handle non-exception-throwing cases:
        // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
        // but... JSON.parse(null) returns null, and typeof null === "object", 
        // so we must check for that, too. Thankfully, null is falsey, so this suffices:
        if (o && typeof o === "object") {
            return o;
        }
    }
    catch (e) { }

    return false;
};

const sessionService = {
    set: (key: string, obj: string | object | number) => {
        if (typeof obj === 'string' || typeof obj === 'number') {
            sessionStorage.setItem(key, obj.toString());
        } else {
            sessionStorage.setItem(key, JSON.stringify(obj));
        }
    },
    get: (key: string) => {
        let string = sessionStorage.getItem(key);
        if (string && tryParseJSONObject(string)) {
            return JSON.parse(string);
        }
        return string ?? null;
    }
}

export default sessionService;
