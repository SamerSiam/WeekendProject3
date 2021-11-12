const longestWords=(str)=>
{
    let strArr= str.split(' ');
    console.log(strArr);
    let longestWord=0;
    for (let i=0; i<strArr.length; i++)
    {
          if (strArr[i].length > longestWord)
          {
            longestWord=strArr[i].length;
          }
    }
   
    return longestWord;
}
const sampleArr= "school egg kite me necessary beautiful";
console.log (longestWords(sampleArr));