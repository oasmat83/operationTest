function chkMath(json) {
    // Determine the operation
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

module.exports = {
    chkMath
}
