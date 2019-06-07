function chkMath(json) {
    // Determine the operation
    var xn = "";
    switch(json.operation) {
        case 'addition':
        xn = json.left + json.right;
        break;

        case 'multiplication':
        xn = json.left * json.right;
        break;

        case 'division':
        xn = json.left / json.right;
        break;

        case 'subtraction':
        xn = json.left - json.right;
        break;

        default:
        xn = json.left % json.right;
    }
    // return results
    return xn
}

function chkResponse(x) {
    // Determine the Status
    var status = '';
    switch(x.statusCode) {
        case 200:
        status = "Your status code is '" + x.statusCode + "', and your calcaulation is 'Successful'"
        break;

        case 400:
        status = "Your status code is '" + x.statusCode + "'. Incorrect value in result; no ID specified; value is invalid"
        break;

        case 500:
        status = "Your status code is '" + x.statusCode + "'. ID cannot be found"
        break;

        default:
        status = "Your status code is '" + x.statusCode + "'. Your request failed!"
    }
    return status
}

module.exports = {
    chkMath,
    chkResponse
}
