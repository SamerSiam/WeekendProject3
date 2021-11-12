const toWeirdCase=(str)=>
{
    // console.log(str);
    let WeirdString='';
    for (let i=0; i<str.length;i++)
    {
        if (i%2===0)
        {
            WeirdString= WeirdString.concat(str[i].toUpperCase());
        }
        else{
            WeirdString= WeirdString.concat(str[i].toLowerCase());
        }
        
        
    }
    return WeirdString.replace( / /g, '' );
}

console.log(toWeirdCase("this is so weird"));