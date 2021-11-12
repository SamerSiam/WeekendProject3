const summation=(num) =>
{
    let sum=0;
    for (let i=1; i<=num; i++)
    {
        sum=sum + i;
    }
    return sum;
}

let result= summation(8);
console.log(result);