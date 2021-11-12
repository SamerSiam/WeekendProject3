
const sampleArray=[1,0,1,0,1,0,1,0,1,0];
// console.log (sampleArray.length);

const binaryToInt= (arr)=>
{
    
    let decimalResult=0;
    if (arr.length> 0)
    {
        let powCount=0;
       for (let i= arr.length-1; i>=0 ;i--)
        {
         decimalResult=decimalResult + (arr[i] * (Math.pow(2, powCount)));
         console.log(decimalResult);
         powCount++;
        } 
        return decimalResult;
    }
   
    
}

let result=binaryToInt(sampleArray);
console.log (`the decimal number of your binary array = ${result}`);