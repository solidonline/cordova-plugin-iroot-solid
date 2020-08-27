var exec = require('cordova/exec');

module.exports = {
    isRooted: function(onSuccess, onError) {
        exec(onSuccess, onError, 'solidAppSec', 'isScheck', []);
    },
    isRootedWithBusyBox: function(onSuccess, onError) {
        exec(onSuccess, onError, 'IRoot', 'isRootedWithBusyBox', []);
    }
};
