
const YesNo= (bolVal)=>
{
    if (bolVal===true)
    {
        return "Yes";
    }
    else return "No";
}

let myval=YesNo(false);
console.log(myval);