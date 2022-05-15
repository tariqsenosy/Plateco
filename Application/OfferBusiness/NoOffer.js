const Offer = require("./Offer")

class NoOffer extends Offer{//No offer
    getTotal(ListOfPlates) {
        let sum=0
         ListOfPlates.forEach((plate)=>sum+=plate.price)
         return sum
        }

}
module.exports=NoOffer