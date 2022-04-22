const uploadImage = require('express').Router()
const cloudinary = require('cloudinary');
const {userAuth} = require('../middleware/auth')

cloudinary.config({ 
    cloud_name: "djsjeedek", 
    api_key: "789662481463974", 
    api_secret: "Q7MjNeZizwuBLrIKVfeq2shZKmo",
    secure: true
  });

uploadImage.post('/',userAuth,async(req,res)=>{
    if (!req.files) {
        return res.json({message:"Please Upload file"})
    }
    const file = req.files.file;
    cloudinary.v2.uploader.upload(file.tempFilePath, {folder: "e-commerce-fwd"}, async(err, result)=>{
        if(err) throw err;
        res.json({public_id: result.public_id, url: result.secure_url})
    })
})


uploadImage.post('/delete',userAuth,(req,res)=>{
    try {
        const {public_id} = req.body;
        if(!public_id) return res.status(400).json({msg: 'No images Selected'})

        cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
            if(err) throw err;

            res.json({msg: "Deleted Image"})
        })

    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
})








module.exports = uploadImage