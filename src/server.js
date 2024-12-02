//General imports
import express from "express";

import router from "./routes/products.routes.js"; 
import { errorHandler} from "./middelwares/errorHandler.js";
import { initMongoDB } from "./dao/mongodb /db/conect.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/products",router);
app.use(errorHandler);
initMongoDB()
    .then(()=> console.log("Mongo data base is Connected propperly"))
    .catch((error)=>console.log(error));

const port=8080;
app.listen(port,()=> console.log(`server connected propperly on port: ${port}`));

