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

    // var url = 'http://www.google.com'
    if (!location.search) {
        location.href = location.href + '?hello=world&name'
    }
    var content = JSON.stringify((urlparams(location.href)), null, 4)
    print(content) // { hello: 'world', name: true }

})