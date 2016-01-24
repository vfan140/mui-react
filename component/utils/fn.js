'use strict';

module.exports = {

    contains(array, obj) {
        var length = array.length;
        while (length--) {
            if (array[length] === obj) {
                return true;
            }
        }
        return false;
    }

};
