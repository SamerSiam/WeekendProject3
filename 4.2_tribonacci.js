/**
 * @param {array} signature 
 * @param {number} n 
 * @returns {arrays}
 */

const tribonacci=(signature,n)=>
{
    const fibArr=[];
        if (n===0)
         {
        return fibArr;
        }
        if (n< 4)
        {
            return signature.slice(0,n) ;
        }
        //populate the first items of the fibonacci sequence
        for (let x=0; x<signature.length;x++)
        {   
            fibArr[x]=signature[x];
        }
    
    for (let i=3; i<=n;i++)
    {
        let nMinus1= fibArr[i-1];
        let nMinus2=fibArr[i-2];
        let nMinus3=fibArr[i-3];
        fibArr[i]= nMinus1+ nMinus2 +nMinus3;
    }
    return fibArr;
}
console.log (tribonacci([1,1,1],2));