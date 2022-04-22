const {cateogry,cateogryValidation} = require('../models/cateogry')

module.exports = {
    index : async (req,res)=>{
        const allCateogry = await cateogry.find({});
        res.status(200).json(allCateogry)
    },
    add : async (req,res)=>{
        // res.json('test')
        const {error} = cateogryValidation(req.body)
        if(error){
            return res.status(401).json({message: error.details[0].message})
        }
        const cateogrySave = new cateogry(req.body)
        try {
            await cateogrySave.save()
            res.json({status:true,message:"Category Added Successfully"})
        } catch (error) {
            if (error) {
                res.json({status:false,message:"Category Not Added"})
            }
        }
       
    },
    edit : async (req,res)=>{
        const {error} = cateogryValidation(req.body)
        if(error){
            return res.status(401).json({message: error.details[0].message})
        }
        try {
            await cateogry.findByIdAndUpdate({_id:req.params.id},req.body)
            res.json({status:true,message:"Category Updated Successfully"})
        } catch (error) {
            if (error) {
                res.json({status:false,message:"Category Not Updated"})
            }
        }

    },
    delete : async (req,res)=>{
        try {
            await cateogry.findByIdAndDelete({_id:req.params.id})
            res.json({status:true,message:"Category Deleted Successfully"})
        } catch (error) {
            if (error) {
                res.json({status:false,message:"Category Not Deleted"})
            }
        }
    },
    details      : async (req,res)=>{
      try {
        const categoryDeails = await cateogry.findById({_id:req.params.id})
        res.json(categoryDeails)
      } 
      catch (error) {
        if (error) {
            res.json({status:false,message:"Category Not Exists"})
        }
    }
  }
}

