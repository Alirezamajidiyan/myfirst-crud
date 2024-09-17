import User from "../models/userModel.js"

export const getUsers= async (req,res)=>{
    try {
        const users= await User.find()
        res.json(users);
        console.log('send users in client')
    } catch (error) {
        res.status(500).json({massage:error.massage});
    }
}

export const saveUser= async (req,res)=>{
    const user= new User(req.body);
    try {
        const insertuser= await user.save()
        res.status(200).json(insertuser)
    } catch (error) {
        res.status(400).json({massage:error.massage});
    }
}

export const getUserById= async (req,res)=>{
    try {
        const user= await User.findById(req.params.id)
        res.json(user);
        console.log('send users in client')
    } catch (error) {
        res.status(500).json({massage:error.massage});
    }
}

export const updateUser=async (req,res)=>{
    try {
        const finduser= await User.updateOne({_id:req.params.id},{$set:req.body})
        res.status(200).json(finduser)
    } catch (error) {
        res.status(500).json({massage:error.massage});
    }
}

export const deleteUser=async (req,res)=>{
    try {
        const deleteuser=await User.deleteOne({_id:req.params.id})
        res.status(200).json(deleteuser)
    } catch (error) {
        res.status(500).json({massage:error.massage});
    }
}