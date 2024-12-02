//General imports (Schema to class)
import {ProductSchema} from "../models/productSchema.js";

class ProductDaoMongo{

    async getProducts(){
        try {
            return await ProductSchema.find();   
        } catch (error) {
            throw new Error(error.message);
        }
    };
    async createProduct(object) {
        try {
            return await ProductSchema.create(object);
        } catch (error) {
            throw new Error(error);
        }

    };
    async getProductById (id) {
        try {  
            return await ProductSchema.findById(id);
        } catch (error) {
            throw new Error(error);
        }
        
    };
    async updateProduct(id,object) {
        try {
            console.log(object);
            return await ProductSchema.findByIdAndUpdate(id,object,{new:true});
            
        } catch (error) {
            throw new Error(error);
        }
    };
    
    async deleteProduct (id) {
        try {
            return await ProductSchema.findByIdAndDelete(id);
        } catch (error) {
            throw new Error(error);
        }
    };
};

const productDaoMongo= new ProductDaoMongo(ProductSchema);

export default productDaoMongo;