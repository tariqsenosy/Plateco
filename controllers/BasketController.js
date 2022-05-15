const {deliveryPlan,offerName}=require('../data/AppData');//can be get from db or config
const OfferFactory = require('../Application/factories/OfferFactory');
const DeliveryPlanFactory = require('../Application/factories/DeliveryPlanFactory');
const PlatesMapper = require('../Application/Mappers/PlatesMapper');

class BasketController{
    async getTotal(data){
        return new Promise((resolve,reject)=>{
            data=data.replace(/\s+/g, '')
            if(!data.match(/^\w+(,\w+)*$/)){
                reject("Input not recognized as valid input")
            }
            let total=0
            //map data 
            let mappedPlates=new PlatesMapper().mapFromStringIntoArrayOfPlates(data)
            //get Offer Object 
            let offer=new OfferFactory().getOffer(offerName)
            total=offer.getTotal(mappedPlates)
            //get Delivery Class
            let delivery=new DeliveryPlanFactory().getDelivery(deliveryPlan)
            total=delivery.getDeliveryFees(total)

            resolve( Math.floor(total*100)/100)// to get only 2 fractions
        })
        
    }
}


module.exports={
    BasketController
}