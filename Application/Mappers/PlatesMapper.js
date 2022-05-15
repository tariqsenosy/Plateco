const {Plates}=require('../../data/AppData');
class PlatesMapper{
 mapFromStringIntoArrayOfPlates(codes)
 {
     let result=[]
    codes=codes.split(",")
     result=codes.map((code)=>{
         return Plates.find(x=>x.Code==code);
     })
     return result
 }
}

module.exports=PlatesMapper