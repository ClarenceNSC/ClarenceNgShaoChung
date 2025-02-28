const bacData = [190.15, 194.21, 191.07, 192.44, 129000]
let   Low = 190.15,
  High = 194.21,
  Open = 191.07,
  Close = 192.44,
  Volume = 129000
if (Close > Open)
  if (Volume > 100000) {
  console.log ("Strong Bullish");
} else {
  console.log("Bullish");
} 
  else if (Close < Open) 
  if (Volume > 10000) {
      console.log ("Strong Bearish");
    
 } else {
  console.log ("Bearish");
 }
  else {
      console.log("neutral");
      }
