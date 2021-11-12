const sampleArr= [ 1, 1, 1, 2, 1, 1 ];
const findUnique= (arr)=>
{
    // call the sort function to make sure array of numbers is sorted
    let sortedArr= arraySort(arr);
    let len= arr.length;
    if (sortedArr[0] ===sortedArr[1])
    {
        return sortedArr[len-1];
    }
    else return sortedArr[0];
}

let result= findUnique(sampleArr);
console.log (result);



// bubble sort algorithm
function arraySort(arr)
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