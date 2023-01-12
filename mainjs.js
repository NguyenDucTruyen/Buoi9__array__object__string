//bai 1
function mergeArray(b,a){
    return [a,b].join();
}
let a=['a',"b",'c'];
let b =[1,2,3];
console.log(`+ Merge array [${b}] & [${a}] : ${mergeArray(a,b)}`);
//check even number array
function evenNumbers(a){
    for(let i of a){
        if(i%2!=0)
        return "No";
    }
    return "Yes"
}
 b=[2,1,6];
console.log(`+ Check every number in  array is even [ ${b}] : ${evenNumbers(b)}`)
// check one of numbers in array is even
function evenNumber(a){
    for(let i of a){
        if(i%2==0)
        return "Yes";
    }
    return "No";
}
 b=[1,3,4];
console.log(`+ Any even number in array [ ${b}] : ${evenNumber(b)}`)
// Find all postive number
function findPosNum(number){
    return number>0;
}
a=[-2,3,6,-1];
console.log(`+ All positive nubmer [${a}] : ${a.filter(findPosNum)}`)

// Find index, value of the first positive number
function findIndexValue(a){
    if(a.find(findPosNum)!=undefined)
        return `index: ${a.findIndex(findPosNum)} & value: ${a.find(findPosNum)}`;
    else
        return `No result`;
}
a=[-2,3,-6,1];
console.log(`+ Index and value of the first positive number in array [${a}]: ${findIndexValue(a)}`)

// Print element divisible by 5
function divisibleBy5(a){
    let numlist=[];
    for(let i of a){
        if(i%5==0)
            numlist.push(i);
    }
    return numlist;
}
a=[2,5,-10,15];
console.log(`+ Number divisible by 5 in [${a}]: ${divisibleBy5(a)}`)

// Fisrt and last index of value number 2 in array

function firstLastIndexOfTwo(a){
    if(a.find(Two))
        //    return `First index: ${a.findIndex(numberTwo)} __ Last index: ${a.lastIndexOf(numberTwo)}`;
        return `First index: ${a.findIndex(Two)} __ Last index: ${a.lastIndexOf(2)}`
    else
        return `No result`;
            
}
function Two(number){
    return number==2
}
let c=[-5,-1,2,15,3,7,2,6];
console.log(`+ Fisrt and last index of value number 2 in [${c}]: ${firstLastIndexOfTwo(c)}`)

// Join comma between each element in array
function joinComma(a){
    let text =`String: \"${a.join(",")}\"`;
    return text;
}
a=["A",1,4,"B"];
console.log(`Join comma [${a}] : ${joinComma(a)}`)

// Return abs for each element in array

function absNum(num){
    return Math.abs(num);
}
a=[2,-5,-10,15];
console.log(`+ Return absolute array [${a}]: ${a.map(absNum)}`)

