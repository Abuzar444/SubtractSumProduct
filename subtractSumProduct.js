const subtractSumProduct = (n) => {
    let product = 1;
    let sum = 0;
    let subtract;
    let newNum = n.toString().split('');
    for (let i = 0; i < newNum.length; i++) {
        product *= newNum[i];
        sum += newNum[i] % 10;
        subtract = product - sum;
    }
    return subtract;
}
console.log(subtractSumProduct(234))