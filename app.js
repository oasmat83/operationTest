var https = require('https'),
request = require('request'),
url = 'https://interview.adpeai.com/',
xn = require('./chkMath');

// Getting Data From API
httpreq = https.get(url + 'api/v1/get-task', res => {
    let body = '',
    json = "";
    if (res.statusCode !== 200) {
        console.log("Request Failed");
        return false
    }
    res.on('data', data => {
        body += data;
        json = JSON.parse(body),
        data = xn.chkMath(json);
        postData(json.id, data);
        console.log("Request is successfull! Here is your id '" + json.id + "'");
    })
})

httpreq.on('error', e => {
    console.log("Request Failed");
});


// Posting Data to API
function postData(x, y) {
    request.post(url + 'api/v1/submit-task', {
        json: {
          id: x,
          result: y
        }
    }, function (error, response, body) {
        console.log("Your status code is '" + response.statusCode + "', and your calcaulation is '" + body + "'");
    });
}