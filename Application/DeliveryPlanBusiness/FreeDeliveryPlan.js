const DeliveryPlan = require("./DeliveryPlan");

class FreeDeliveryPlan extends DeliveryPlan{
    getDeliveryFees(totalBasketCost){
        return totalBasketCost;
        }
}
module.exports=FreeDeliveryPlan