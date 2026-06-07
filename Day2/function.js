let l1 = [2,4,3]
let l2 = [5,6,4]
l1=Number(l1.reverse().join(""));
l2=Number(l2.reverse().join(""));
let res=(l1+l2).toString().split("").reverse().map(Number);
console.log(res);
