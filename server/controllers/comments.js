const {commentsModels,commentsValidation} = require('../models/comments')

module.exports = {
    add : async (req,res)=>{
        const {error} = commentsValidation(req.body)
        if (error) {
            return res.status(404).json({status:false,message: error.details[0].message})
        }
        const addComment = new commentsModels(req.body)
        try {
            await addComment.save()
            res.json({comment : addComment , status: true , message:"Comment Added Successfully"})
        } catch (error) {
            return res.status(404).json({status:false,message:"Comment NOT Added"})
        }
    },
    index : async (req,res)=>{
        if (!req.params) {
            return res.status(404).json({status:false,message: "NO comments"})  
        }
        try {
            const comment = await commentsModels.find({product_id:req.params.id})
            res.json({comments:comment})
        } catch (error) {
            
        }
    }
}