const busArray= [[10,0], [20,13], [15,2]];
const bus=(arr)=>
{
    let inBus,outBus, endBus=0;
    let stationTotal, busTotal=0;

    for (let i=0; i< arr.length; i++)
    {
        stationTotal= arr[i][0]-arr[i][1];
        console.log(stationTotal);
        busTotal= busTotal+stationTotal;
    }
    return busTotal;
}
let total=bus(busArray);
console.log (`The Number of People left at the last station= ${total}`);