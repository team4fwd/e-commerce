// const {users} = require('../models/users')
const {userProfile,userProfileValidation} = require('../models/userProfile')

const userProfileController = {
    index : async (req,res)=>{
        const profile = await userProfile.aggregate([
            { $match: { $expr : { $eq: [ '$user_id' , { $toObjectId: req.userId } ] } } },
            {$lookup:{
                from: 'users', 
                localField: 'users._id', 
                let:{id:req.userId},
                pipeline: [
                    {$match: {$expr: { $eq: [ "$_id" , { $toObjectId: "$$id" } ] }}},
                    {$project:{salt:0,hash:0,_id:0,isAdmin:0}}
                ],
                foreignField: 'user_id', 
                as: 'user'}}
        ])
        // const userprofile = await userProfile.find({user_id:req.session.user_id})
        // const user = await users.findById({_id:req.session.user_id}).select(["firstName","-_id","lastName","email"])
        res.json({userprofile:profile[0]})
    },
    edit : async (req,res)=>{
        user_id = req.userId
        const {error} = userProfileValidation(req.body)
        if (error) {
            return res.json({status:false,message: error.details[0].message})
        }
        try{
            await userProfile.updateOne({user_id:user_id},req.body)
            res.json({status:true,message:"User profile updated successfully."})
        }
        catch(err){
            res.json({status:false,message:"User profile not updated."})
        }
    }
}


module.exports = userProfileController