const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
    
    let result = 0
    let sumPrices = amdPrices[0]+amdPrices[1]+amdPrices[2]+amdPrices[3]+amdPrices[4]+amdPrices[5]+amdPrices[6]
    for (let value of amdPrices) {
        if (value > sumPrices/amdPrices.length) {
          result +=1;
        }
      }
      console.log (result);
