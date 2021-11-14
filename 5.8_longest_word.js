const longestWords=(str)=>
{
    let strArr= str.split(' ');
    let returnStr='';
    console.log(strArr);
    let longestWord=0;
    for (let i=0; i<strArr.length; i++)
    {
          if (strArr[i].length > longestWord)
          {
            longestWord=strArr[i].length;
            returnStr=strArr[i];
          }
    }
   
    return returnStr;
}
const sampleArr= "school egg kite me necessary beautiful";
console.log (`Sample array : ${sampleArr}`);
console.log ("Longest word is: " +longestWords(sampleArr));