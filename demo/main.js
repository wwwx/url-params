requirejs.config({
    baseUrl: '../dist',
    paths: {
        'urlparams': 'bundle'
    }
})

require(['urlparams'], function(urlparams) {
    
    function print(content) {
        var el = document.createElement('div')
        el.innerHTML = content;
        document.body.appendChild(el)
    }

    if (!location.search) {
        location.href = location.href + '?foo=123&bar'
    }
    var content = JSON.stringify((urlparams(location.href)), null, 4)
    print(content) // { foo: '123', bar: true }

})
