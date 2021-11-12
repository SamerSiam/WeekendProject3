
const stringTrim=(str)=>
{
    let strArr= str.split('');
    let str2=str.slice(1, strArr.length-1);
    return str2;
}

let newStr=stringTrim('abcdefgh');
console.log(newStr);