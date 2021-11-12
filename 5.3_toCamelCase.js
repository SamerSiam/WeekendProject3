const toCamelCase=(str)=>
{
    
    let newStr='';
    const regex= /[- _]/g;
    
    //removes '-' and '_' charachters
    newStr=str.toLowerCase().replace(regex,' ')
    //capitalize the first letter
            .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
    
        // Removes spaces 
            .replace( / /g, '' );
    
    
    return newStr;
    
}

console.log(toCamelCase("this_iS-one-tEst"));