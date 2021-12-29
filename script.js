const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
    'happy'
];
const palindrome = [
    'Anna',
    'asa',
    'civic',
    'common',
    'Kayak',
    'Level',
    'Madam',
    'Mom',
    'Noon',
    'Rotor',
    'Sagas',
    'Solar',
    'Tenet',
    'Stats',
    'Wow'
  
];
for (let i = 0; i < words.length; i++){
    console.log(words[i]);
}
let numbers = [1, 2, 3, 4,];
let a = words.forEach(i => console.log(i));


words.forEach(function name(params) {
    console.log(params);
})

words.forEach(params => console.log(params.toUpperCase()));

words.forEach((params) => {
            let first = params.charAt(0).toUpperCase();
            let last = params.substring(1);
    console.log(first + last);
})

const newArray1 = words.map(item => item);
console.log(newArray1);

const newArray2 = words.map(function name(params) {
    return params.toUpperCase();
});
console.log(newArray2);

const newArray21 = words.map((params) => {
    
    return params.toUpperCase();
})
console.log(newArray21);

const newArray3 = words.map(function name(params) {
    let first = params.charAt(0).toUpperCase();
    let last = params.substring(1);
    return first + last;
});
console.log(newArray3);

const findItem = palindrome.find(item => item === "asa");
//console.log(findItem);
if (findItem){
    console.log(`${findItem} kelimesi bulundu.`);
palindrome.push("Musa");
    
}

console.log(palindrome);

const returnItem = palindrome.find(item => {
    
    if (item === "asa") {
        
        return item;
        
    }
})

console.log(returnItem);

const returnItem2 = palindrome.find(item => {
    
    if (item.length > 5) {
        return item;
        
    }
})

console.log(returnItem2);

if (returnItem2) {
    console.log(`${returnItem2} var.`)
    
}

const returnItem3 = palindrome.find(item => {
    let first = item.charAt(0).toUpperCase();
    let last = item.substring(1, 2);
    let final = first + last;
    console.log(final)
    if (final==="Ci") {
        return item;
    }
})

console.log(returnItem3);

const newResult = palindrome.filter(item => item.includes("a"));
console.log(newResult);

const filtered = palindrome.filter(item => !item.includes("a"));
console.log(filtered);

const filtered2 = palindrome.filter(item => item === "asa");
console.log(filtered2);

const filtered3 = palindrome.filter(item => item.length < 4);
console.log(filtered3);

const numbers = [0,"a","b", 4, 54, 62, 5, 89, 5];

const sum = numbers.reduce((a, b) => a + b,0);
console.log(sum);

const sum2 = numbers.reduce((a, b) => a + b);
console.log(sum2);

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
    
}

console.log(sum1);

const sum3 = numbers.reduce((a, b) => a - b);
console.log(sum3);

const everyItem = palindrome.every(item => item.length > 5);
console.log(everyItem);
let array=["1234","1234","1234","1234","123456"]
function check(params) {
    for (let i = 0; i < params.length; i++) {
        if (params[i].length<=3) {
            return true;
        } else {
            return false;
        }
        
    }
}

console.log(check(array));

const someItem = palindrome.some(item => item.length > 5);
console.log(someItem);

const indexItem = palindrome.findIndex(item => item.length > 5);
console.log(indexItem);

const sorted = numbers.sort((x, y) => x - y);
console.log(sorted);

const sortedLength = palindrome.sort((x, y) => x.length - y.length);
console.log(sortedLength);


const filtered22 = numbers.filter(item => typeof item === "number");

console.log(filtered22);

const sorted22 = filtered22.sort((a, b) => b - a);

console.log(sorted22);

const reswithMap = numbers.filter(item => typeof item === "number").sort((a, b) => b - a).map(item => item * 2);
console.log(reswithMap);

const date = +new Date();
const datestart = +new Date("2021-12-30 01:10");
console.log(date);
console.log(datestart);

setInterval(() => {
    console.log("Set interval çalıştı.")


}, 2000);

let a=setInterval(() => {
    console.log("set interval çalıştı.")
}, 2000);
setTimeout(() => {
    clearInterval(a); 
    console.log("timeout çalıştı");
}, 5000);

for (let i = 1; i <=5; i++) {
    console.log(`Merhaba ${i}`);
    
}
console.log("----------------------");
let i = 1;
while (i <= 5) {
    console.log(`Merhaba ${i}`);
    i++;
}
let i = 0;
do {
    
    console.log("Çalıştı");
    i++;
} while (i<5);
