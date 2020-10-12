module.exports = function reverse (n) {
    let result, firstDigit, secondDigit, thirdDigit;

    firstDigit = Math.trunc(Math.abs(n)/100);
    secondDigit = Math.trunc((Math.abs(n)%100)/10);
    thirdDigit = Math.trunc (Math.abs(n)%10);
    result = String(thirdDigit) + String(secondDigit) + String(firstDigit);
    return result;
}
