const maskify = (str)=>
{
    const symbol='#';
    let len=str.length -4;
    let maskStr= str.slice(-4);
    let maskStr2= '';
    
        for (let i=0; i< len; i++)
        {
             maskStr2=maskStr2+ symbol;
         }
            maskStr2= maskStr2+ maskStr;
            return maskStr2;

}

console.log (maskify("I like to apples"));