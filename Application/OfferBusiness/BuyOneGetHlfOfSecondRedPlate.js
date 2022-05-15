const{redPlateCode,redPlatePrice} =require('../../data/RedPlateData')
class BuyOneGetHlfOfSecondRedPlate{//Buy one and get 50% of second

    getTotal(ListOfPlates) {
        
       let total=0 
       let notRedPlateSum=0
       let numberOfRedPlates=0
       let sumOfRedPlates=0
//sum not red plates
       ListOfPlates.forEach((plate)=>{
            if(plate.Code!=redPlateCode)
            {
                notRedPlateSum=notRedPlateSum+plate.Price
            }
        })
        
  //get count of red plates       
        ListOfPlates.forEach((plate)=>{
            if(plate.Code==redPlateCode)
            {
                numberOfRedPlates=numberOfRedPlates+1
            }
        })

    if(numberOfRedPlates%2==0)
        sumOfRedPlates=(((numberOfRedPlates/2)*1.5))*redPlatePrice
    else 
        sumOfRedPlates=((((numberOfRedPlates-1)/2)*1.5)+1)*redPlatePrice
    return sumOfRedPlates+notRedPlateSum
       }

}
module.exports=BuyOneGetHlfOfSecondRedPlate