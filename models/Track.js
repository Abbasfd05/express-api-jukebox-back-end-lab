const mongoose=require('mongoose');
const TrackSchema=new mongoose.Schema({
title: {
   type:String,
   required:true,
},
artist: {
    type:String,
    required:true,
}
});
const Track=mongoose.model('Track', TrackSchema)
module.exports=Track;