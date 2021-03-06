function getParams(url) {
    if (typeof url !== 'string') {
        throw new Error('Parameter `url` must be a string.');
    }
    
    var query = null;
    if (url.indexOf('?') > 0) {
        query = url.substr(url.indexOf('?') + 1)
    }

    if (!query) return {};

    var params = {};
    var items = query.split('&');
    var len = items.length;

    while (len-- > 0) {
        var _name = items[len].split('=')[0];
        var value = items[len].split('=')[1] || true;
        params[_name] = value;
    }

    return params;
}

module.exports = getParams;

