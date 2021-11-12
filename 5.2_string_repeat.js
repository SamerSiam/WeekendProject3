const strRepeat=(n,str)=>
{  
    let newStr=str; 
    for (let i=1;i<n;i++)
    {
        newStr=newStr+str;
    }
    return newStr;
}

console.log(strRepeat(3,"Samer"));
