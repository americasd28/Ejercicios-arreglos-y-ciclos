
function sumAndProduct(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const product = arr.reduce((a, b) => a * b, 1);
    console.log(`The sum is ${sum}. The product is ${product}.`);
}
sumAndProduct([1, 2, 3, 4]);
