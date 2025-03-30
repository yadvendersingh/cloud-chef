import {Request, Response} from 'express';
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
    try{
        const {auth0Id} = req.body;
        const existingUser = await User.findOne({auth0Id});
        if (existingUser){
            res.status(200).json(existingUser.toObject());
        }
        else {
            const newUser = new User(req.body);
            await newUser.save();
            res.status(201).json(newUser.toObject());
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Error creating user'});
    }
};
const updateCurrentUser = async (req: Request, res: Response) => {
    try{
        const {name, country, city, addressLine1} = req.body();
        const user = await User.findById(req.userId);

        if (!user){
            res.status(404).json({message: 'User not found'});
        }
        else{
            user.name = name;
            user.country = country;
            user.city = city;
            user.addressLine1= addressLine1;
            await user.save();
        }

    } catch(err){
        console.log(err);
        res.status(500).json({message: 'Error updating user'});
    }
}
export default {
    createCurrentUser,
    updateCurrentUser
};