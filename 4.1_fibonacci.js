
const fibonacci=(n)=>
{
    const fibArr=[];
    fibArr[0]=0;
    fibArr[1]=1;
    for (let i=2; i<=n;i++)
    {
        let nMinus1= fibArr[i-1];
        let nMinus2=fibArr[i-2];
        fibArr[i]= nMinus1+nMinus2;
    }
    return fibArr[n];
}

console.log (fibonacci(6));