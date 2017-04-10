; (function (window) {
    var delayCallbacks = {};
    var sweepCallbacks = {};
    window.delayRun = function (delay, callback,arg1,arg2,arg3) {
        var args = cloneArguments(arguments, 2);
        var cacheid = delayCallbacks[callback];
        if (cacheid) {
            clearTimeout(cacheid);
            delayCallbacks[callback] = setTimeout(function () {
                runDelayCallback(callback,this, args);
            }, delay)
        } else {
            delayCallbacks[callback] = setTimeout(function () {
                runDelayCallback(callback,this, args);
            }, delay);
        }
    }
    window.sweepRun = function (sweep, callback, arg1, arg2, arg3) {
        var cacheid = sweepCallbacks[callback];
        if (cacheid) {
            clearTimeout(cacheid);
            sweepCallbacks[callback] = setTimeout(function () {
                delete sweepCallbacks[callback];
            }, sweep)
        } else {
            sweepCallbacks[callback] = setTimeout(function () {
                delete sweepCallbacks[callback];
            }, sweep);
            var args = cloneArguments(arguments, 2);
            callback.apply(this,args)
        }
    }
    function runDelayCallback(callback,obj, args) {
        if (callback) {
            delete delayCallbacks[callback];
            callback.apply(obj,args);
        }
    }
    function cloneArguments(arguments, skip) {
        if (typeof skip === 'undefined') skip = 0;
        var res = [];
        for (var i = skip; i < arguments.length; i++) {
            res.push(arguments[i]);
        }
        return res;
    }
})(window)