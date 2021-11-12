const yearsCenturies= (year)=>
{
    return Math.ceil(year/100);
}

let result= yearsCenturies(2020);
console.log(result);