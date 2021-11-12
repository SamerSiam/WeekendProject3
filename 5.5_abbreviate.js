const abbreviate=(str)=>
{
    let first, second, abb='';
    const arr= str.split(" ");
    // make sure only two words are sent
    if (arr.length >2){
        return -1;
    }
    
    first= arr[0].charAt(0).toUpperCase();
    second= arr[1].charAt(0).toUpperCase();
    abb=first+ '.' + second;
    return abb;
    
}

let initials= abbreviate("rinad nabulsi");
console.log(initials);