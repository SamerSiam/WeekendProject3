
function basicMath(operation, value1, value2)
{
    switch (operation)
    {
        case ('+'):
            return value1+ value2;

        case ('-'):
            return value1- value2;

        case ('*'):
        return value1* value2;
    
        case ('/'):
            return value1/ value2;
    }
}
let result = basicMath('/', 1,1);
console.log(result);