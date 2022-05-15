class Offer{//Parent offer

     getTotal(ListOfPlates) {
        let sum=0
         ListOfPlates.forEach((plate)=>sum+=plate.price)
         return sum
        }

}
module.exports=Offer