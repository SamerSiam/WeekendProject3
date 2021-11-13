const myArray=[19, 5, 42, 2, 77];

const sumOfLowestvalues= (arr)=>
{
    let sum=0;
    // first need to sort the array
    const sorted=arraySort (arr);
    console.log(sorted);
    sum= sorted[0]+ sorted[1];
    return sum;
    
}

// bubble sort algorithm
const arraySort= (arr)=>
{
    let len=arr.length;
    for (let i=len-1 ;i>=0; i--)
    {
        for (let j=1; j<=i;j++)
        {
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
             }
        }
        
    }
    return arr;
}

let total= sumOfLowestvalues (myArray);
console.log(`Sum of the lowest positive values is: ${total}`);