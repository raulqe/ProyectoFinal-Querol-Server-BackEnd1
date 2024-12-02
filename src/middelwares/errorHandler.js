export const errorHandler=(error,req,res,next)=>{
console.log(`${error.message}`);
res.status(error.status || 500).json({message: error.message || "internal Server Error"})
};