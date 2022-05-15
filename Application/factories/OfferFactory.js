const BuyOneGetHlfOfSecondRedPlate = require("../OfferBusiness/BuyOneGetHlfOfSecondRedPlate")
const NoOffer = require("../OfferBusiness/NoOffer")

class OfferFactory{
     getOffer(offerName){
        if(offerName=="NoOffer")
            return new NoOffer()
        else if(offerName=="BuyOneGetHlfOfSecondRedPlate") 
            return new BuyOneGetHlfOfSecondRedPlate()   
    }
}


module.exports=OfferFactory