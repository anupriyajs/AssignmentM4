let coinFlip
let repeatCounter=parseFloat(prompt("Enter number of repeat count"))
for(i=0;i<repeatCounter;i++)
{
    coinFlip=Math.round(Math.random())
   
    if (coinFlip===0)
        console.log("Heads")
    else if (coinFlip===1)
        console.log("Tails")
}
