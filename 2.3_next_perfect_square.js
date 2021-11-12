
const nextPerfectSquare=(num)=>
{
    // check if the num itself is a perfect square
    let numSqrt= Math.sqrt(num);
    if (numSqrt % 1 !==0)
    {
        return -1;
    }
    else {

        return Math.pow(numSqrt+1,2);

    }
}
let result= nextPerfectSquare(625);
console.log(result);