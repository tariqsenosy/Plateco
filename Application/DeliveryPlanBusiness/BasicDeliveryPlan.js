const DeliveryPlan = require("./DeliveryPlan");

class BasicDeliveryPlan extends DeliveryPlan{

    getDeliveryFees(totalBasketCost){
        
        let DeliveryCost=0
         if(totalBasketCost<50)
         DeliveryCost=4.95
         else if (totalBasketCost<90)
         DeliveryCost=2.95
         else if(totalBasketCost>=90)
         DeliveryCost=0
        totalBasketCost=totalBasketCost+DeliveryCost
         return totalBasketCost
        }

}
module.exports=BasicDeliveryPlan