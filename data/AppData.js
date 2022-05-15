const Plate = require("./Models/Plate")
const Plates=[
    new Plate("Red Plate","R01",32.95),
    new Plate("Green Plate","G01",24.95),
    new Plate("Blue Plate","B01",7.95),
]
const offerName="BuyOneGetHlfOfSecondRedPlate"
const deliveryPlan="BasicDeliveryPlan"
module.exports={Plates,offerName,deliveryPlan}
