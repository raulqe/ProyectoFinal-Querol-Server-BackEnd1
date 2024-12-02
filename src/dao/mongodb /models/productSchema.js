import { Schema,model } from "mongoose";

const productSchema= new Schema({

    title:{type:String,required:[true, "The name of the product is required"],minlength:[5, "minimun 5 characters"]},
    description:{ type:String, required:[true, "The description of the product is required"],},
    price:{ type:Number, required:[true, "The price of the product is required"],},
    stock:{ type:Number, required:[true, "The stock of the product is required"],}
});

export const ProductSchema= model("newProductsList",productSchema);