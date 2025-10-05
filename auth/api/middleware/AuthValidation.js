import Joi from "joi"
import { Schema } from "mongoose"

const signupValidation = ( req,res,next) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(50).required()
    });
    const {error} = schema.validate(req.body)
    if(error)
    {
        return res.status(400).json({message:"Bad Request",error:error.details[0].message})
            
    }
    next();
}

const LoginValidation = ( req,res,next) =>{
    const schema = Joi.object({
        
        email: Joi.string().email().required(),
        password: Joi.string().min(5).max(50).required()
    });
    const {error} = schema.validate(req.body)
    if(error)
    {
        return res.status(400).json({message:"Bad Request",error:error.details[0].message})
            
    }
    next();
}

export {
    signupValidation,
    LoginValidation
}