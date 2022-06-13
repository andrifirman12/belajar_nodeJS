'use strict';

exports.ok = function(val, res) {
    var data = {
        'status':200,
        'values':val 
    };

    res.json(data);
    res.end();
}; 