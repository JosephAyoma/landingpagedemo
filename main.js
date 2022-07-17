let price = 100;
let shippingCost;
if (price > 50) {
    shippingCost = 0;
} else {
    shippingCost = 5;
}
let priceS=`${price},  ${shippingCost}`
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0

let n = 0;
while(n < 91) {
   // console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}

function test(counter)
{
    console.log("test");
    if(counter>0)
    test(--counter);
}
test(2);

let show=function(){
    //console.log("test");
}
setTimeout(show,2000);

let x=10;
function testthis()
{
    let x=20;
    console.log(x);
}
testthis();