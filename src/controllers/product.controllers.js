//import Services
import * as Services from "../services/product.services.js";



export const getProducts= async (req,res,next)=>{
    try {
        const response = await Services.getProduct();
        res.json(response);
        
        
    } catch (error) {
        next(error);
    };
};
export const getProductById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const item = await Services.getProductById(id);
        if (!item) {
            const error= new Error("Product not found!");
            error.status=404;
            throw error;   
        }
        res.json(item);
    } catch (error) {
      next(error);
    }
  };

export const createProduct = async(req,res,next)=>{
    try {
        const newProd = await Services.createProduct(req.body);
        // (!newProd) ? new Error(`Validation error.`) : res.json(newProd);
        res.json(newProd);
    } catch (error) {
        next(error);
    };
};

export const updateProduct = async(req,res,next)=>{
    try {
        const{id}=req.params;
        const productUpdate = await Services.updateProduct(id,req.body);
        res.json(productUpdate);
        
    } catch (error) {
        next(error);
    };
};
export const deleteProduct= async(req,res,next)=>{
    try {
        const{id}=req.params;
        const ProdDelete= await Services.deleteProduct(id);
        if(!ProdDelete) throw new Error(`Product id not found `)
            res.json({ message:`Product id: ${ProdDelete.id} deleted okey` })
    } catch (error) {
        next(error);
    };
};
