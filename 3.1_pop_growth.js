const nb_year=(p0,percent,aug,p)=>
{
    let pop=p0;
    let years=0;
    let perc= percent/100;
    console.log(p);
   
        while (pop<=p)
        {
        pop=pop + (pop*perc) + aug;
        years++;
        }
        
    
    
    return years;

}

console.log (nb_year(1500000, 2.5, 10000, 2000000));