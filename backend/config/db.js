import mongoose from "mongoose";

export const  connectDB=async() => {
    await mongoose.connect('mongodb+srv://KrishnanK:Krish_2005mongodb@cluster0.jz4az2e.mongodb.net/pizza-hat').then(()=>console.log("DB Connected"));
}