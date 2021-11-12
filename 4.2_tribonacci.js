const tribonacci=(signature,n)=>
{
    const fibArr=[];
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
    return fibArr[n];
}

console.log (tribonacci([1,1,1],5));