
let var1, var2;
var1 = 42;
var2 = var1;
var1 = {
    prop1: 42,
    prop2: 43,
    prop3: true
};
var1.prop3 = false;


let getSumOf = (nArr) => {
    let sum = 0;
    let len = nArr.length;
    for (let i = 0; i < len; i += 1) {
        sum += nArr[i];
    }
    return sum;
}

getSumOf([1, 2, 3, 4, 5]); // 15
getSumOf([1, 3, 5, 7, 9]); // 25

1 + 2 + 3 + 4 + 5; // 15
1 + 3 + 5 + 7 + 9; // 25

// 作用域
let n = 42;
let a = true;
(() => {
    let n = 43;
    a = false;
    console.log(n, a); // 43, false
})();
console.log(n, a); // 42, false

// 词法作用域

let a = 42;
let add_a = (b) => a + b;

add_a(5); // 47

{
    let a = 0;
    add_a(5); // 47
}

let f = (() => {
    return () => {

    }
})


(() => {
    let alloc_256M = () => {
        // Chrome: 256M, *使用1字节
        return new Array(268435440 + 1).join('*');
    }
    let bigData = [
        alloc_256M(), alloc_256M(),
        alloc_256M(), alloc_256M()
    ];
    document.addEventListener('click', function handler() {
        console.log(bigData.length);
        setTimeout(() => {
            document.removeEventListener('click', handler);
        }, 5000);
    });
})();



