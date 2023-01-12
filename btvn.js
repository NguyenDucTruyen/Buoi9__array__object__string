// Bai tap ve nha



//                   Arrow function
// định nghĩa function mới bằng cách sử dụng dấu mui tên
//     cu phap: var functionName = (var1, var2) => {
//                  noi dung function
//     };
// vi du: 
let hello= (name) =>
{
    console.log("Chào " + name + " tớ thích " + name+" lắm á");
};
 
hello('cậu');


// Anonymous function
// Anonymous functions hay còn gọi là hàm ẩn danh, là một hàm được sinh ra đúng vào thời điểm chạy của chương trình, hàm không tên
// cu phap: thong thuong var Anonymous = function()
//  {
//      alert('Học Javascript');
//  };
// cu phap: arrow var Anonymous = () =>
//  {
//      alert('Học Javascript');
//  };
// thường sử dụng khi: Sử dụng hàm ẩn danh làm đối số, tham số của hàm khác - Hàm tự gọi ngay lập tức
var Anonymous = () =>
 {
     console.log('Học Javascript');
 };
 var Anonymous = function()
 {
    console.log("Học Javascript");
 };
 Anonymous();

//  Bài 2:
// date object
function getDateTime(){
    let today = new Date();
    //getDay(): tra ngay thu i trong tuaan
    //getDate(): tra ve ngay theo lich
    let date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`
    let time = `${today.getHours()}:${today.getMinutes()}`
    let dateTime = time+' '+date;
    return dateTime
}
let now = getDateTime();
console.log(now)

// Bai 3:
// date format
// function allFormatsOfDate(date) {
//     // console.log(day)
//     let result = []
// 	let isoDate = new Date(`${date.month}-${date.day}-${date.year}`)
//     let shortDate = new Date(`${date.month}/${date.day}/${date.year}`)
//     let longDate = new 
//     result.push(isoDate)
//     result.push(shortDate)
//     return result;
// }

// const date = { 
// 	day: 28,
// 	month: 12,
// 	year: 2022
// }

// const result = allFormatsOfDate(date)
// console.log(result)
// // 12-28-2022 
// // 12/28/2022
// // 28-12-2022
// // 28/12/2022


// Bai 4:  increase chain
 function isIncreaseChainNumber(number){

 }
//  Bai 5
console.log("bai 5: caesar cypher")
var caesarCypher = function (str, amount) {
    // Wrap the amount
    if (amount < 0) {
      return caesarCypher(str, amount + 26);
    }
  
    // Make an output variable
    var output = "";
  
    // Go through each character
    for (var i = 0; i < str.length; i++) {
      // Get the character we'll be appending
      var c = str[i];
  
      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        var code = str.charCodeAt(i);
  
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
        }
  
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
      }
  
      // Append
      output += c;
    }
  
    // All done!
    return output;
  };

  const name = "Hoang Nhan"
  const cypherText = caesarCypher(name, 3)
  console.log(cypherText)

//   Bai6
//   highesFreqNumber
console.log("HW 6: highesFreqNumber")
function highestFreqNumber(arr) {
    const map = {};
    let max = 0;
    let min = Infinity;
    arr.forEach((item) => {
      let count = map[item] + 1 || 1;
      map[item] = count;
      if (count > max) {
        max = count;
        min = item;
      } else if (count === max && item < min) {
        min = item;
      }
    });
    return min;
  }
const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) // 7
// bai 7
// contain javascript
console.log("HW 7: contain 'javascript'")
const isIncludeJS = (str) => {
	str = str.toLowerCase()
    return str.includes("javascript")
}

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc"
const str2 = "jjjjjjjavaaaaScriptttttttttt"
const str3 = "888javaScript888"

console.log(isIncludeJS(str1)); //true
console.log(isIncludeJS(str2)); //false
console.log(isIncludeJS(str3)); //true

// bai 9
//longest string
console.log("HW 9: longest word")
function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }

const str = "Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong

// bai 10
// sum all numbers not 5
console.log("HW 10: sum all numbers not 5")
function sum(number) {
    // must use reduce
    const sum = 0;
    let numArr = number.toString().split('').filter(item=>item!=5);
    return numArr.reduce( (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue),
    sum)
  }
  
  console.log(sum(1231312321378127391237219312n)) // 90
  console.log(sum(99999999999999999999999999999n))// 261
  console.log(sum(12345678908765432123456555566n)) // 98

