const BasicDeliveryPlan = require("../DeliveryPlanBusiness/BasicDeliveryPlan")
const FreeDeliveryPlan = require("../DeliveryPlanBusiness/FreeDeliveryPlan")

class DeliveryPlanFactory{
    getDelivery(DeliveryName)
    {
        if(DeliveryName=="FreeDeliveryPlan")
        return new FreeDeliveryPlan()
        else if (DeliveryName=="BasicDeliveryPlan")
        return new BasicDeliveryPlan()
    }
}


module.exports=DeliveryPlanFactory