import mongoose from "mongoose";
import { v4 as uuid } from 'uuid';

const EmailCredentials = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    vendorIdentifier: {
        type: String,
        required: true,
        default: uuid()
    },
    email: {
        type: String,
        required: true,
    },
    host:{
        type:String,
        required:true,
    },
    port:{
        type:Number,
        required:true
    },
    secure:{
        type:Boolean,
        required:true,
        default:true
    }
});

export default mongoose.model('EmailCredentials', EmailCredentials);
