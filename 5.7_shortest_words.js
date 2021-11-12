const shortestWords=(str)=>
{
    let strArr= str.split(' ');
    console.log(strArr);
    let shortestWord=100;
    for (let i=0; i<strArr.length; i++)
    {
          if (strArr[i].length <shortestWord)
          {
            shortestWord=strArr[i].length;
          }
    }

   
    return shortestWord;
}
const sampleArr= "school egg kite me necessary beautiful";
console.log (shortestWords(sampleArr));