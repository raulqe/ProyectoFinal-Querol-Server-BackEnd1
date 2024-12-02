import productDaoMongo from "../dao/mongodb /managers/product.manager.js";

export const getProduct = async ()=> {
    try {
        return await productDaoMongo.getProducts()
    } catch (error) {
        throw new Error(error);
        
    }
    
};
export const createProduct= async (object)=> {
    try {
        return await productDaoMongo.createProduct(object)
    } catch (error) {
        throw new Error(error);
        
    }
    
};
export const getProductById= async (id)=> {
    try {
        return await productDaoMongo.getProductById(id)
    } catch (error) {
        throw new Error(error);
        
    }
    
};
export const updateProduct= async (id,object)=> {
    try {
        return await productDaoMongo.updateProduct(id,object)
    } catch (error) {
        throw new Error(error);
        
    }
    
};
export const deleteProduct = async (id)=> {
    try {
        return await productDaoMongo.deleteProduct(id)
    } catch (error) {
        throw new Error(error);
        
    }
    
};