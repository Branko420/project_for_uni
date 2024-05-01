document.getElementById('predictBtn').addEventListener('click', function(){
    const got_form = new FormData(document.getElementById('flagForm'));

    const values = {
        'stripes': 0,
        'colors':0,
        'red':0,
        'green':0,
        'blue':0,
        'gold':0,
        'white':0,
        'black':0,
        'orange':0,
        'circles':0,
        'crosses':0,
        'saltires':0,
        'quarters':0,
        'sunstars': 0,
        'crescent':0,
        'triangle':0,
        'animate':0,
        'icon':0,
        'text':0
    };
    got_form.forEach((value, key) => {
        values[key] = value === '' ? 0 : key.endsWith("s") ? parseInt(value) : value === 'on' ? 1:0;
        });
    console.log(values);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/predict', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(values));
})