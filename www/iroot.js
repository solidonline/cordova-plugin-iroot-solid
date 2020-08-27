var exec = require('cordova/exec');

module.exports = {
    isRooted: function(onSuccess, onError) {
        exec(onSuccess, onError, 'IRoot', 'solidAppSec', []);
    },
    isRootedWithBusyBox: function(onSuccess, onError) {
        exec(onSuccess, onError, 'IRoot', 'isRootedWithBusyBox', []);
    }
};
