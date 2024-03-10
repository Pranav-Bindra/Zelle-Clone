import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://bindra529:qLGia7vJ0tMsoz57@cluster0.lkhy5r8.mongodb.net/");
    }
    catch(error){
        console.log(error)
    }
}

export default connectMongoDB;