const {products,productValidation} = require('../models/products')
   

module.exports = {
    index       : async (req,res)=>{
      try {
        if (req.query.products || req.query.cat) {
          const title = new RegExp(req.query.products,'i')
          const cat = new RegExp(req.query.cat,'i')
          const productSearch = await products.find({$and:[{productName:title},{categoryName:cat}]})
          if (productSearch.length === 0) {
            return res.status(404).json({status:false,message:"Product Not Exists"})
          }
          res.status(200).json(productSearch)
        }else{
          const allProducts = await products.find({})
          return res.status(200).json(allProducts)
          // return res.status(404).json({status:false,message:"Product Not Exists"})
        }
      } catch (error) {
        return res.status(404).json({status:false,message:"Product Not Exists"})
      }
    },
    create      : async (req,res)=>{
          const {error} = productValidation(req.body)
          if (error) {
            return res.json({messsge: error.details[0].message})
          }
          
          addProduct = new products(req.body)

          try{
            addProduct.save()
            res.status(200).json({status:true,message:"Product Added Successfully"})
          }
          catch(errorsave){
            if(errorsave){
              res.json({status:false,message:"Product Not Added"})
            }
          }
    },
    edit      : async (req,res)=>{
          const {error} = productValidation(req.body)
          if (error) {
            return res.json({messsge: error.details[0].message})
          }
          try{
            await products.findByIdAndUpdate({_id:req.params.id},req.body)
            res.status(200).json({status:true,message:"Product Updated Successfully"})
          }
          catch(errorsave){
            if(errorsave){
              res.json({status:false,message:"Product Not Updated"})
            }
          }

    },
    delete      : async (req,res)=>{
        try {
          await products.findByIdAndDelete({_id:req.params.id})
          res.json({status:true,message:"Product Deleted Successfully"})
        } 
        catch (error) {
          if (error) {
              res.json({status:false,message:"Product Not Deleted"})
          }
      }
    },
    details      : async (req,res)=>{
      try {
        const productDeails = await products.findById({_id:req.params.id})
        res.json(productDeails)
      } 
      catch (error) {
        if (error) {
            res.json({status:false,message:"Product Not Exists"})
        }
    }
  }
} 


