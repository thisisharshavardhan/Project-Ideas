import { DB_connect } from "./DB/index.db.js";
import { app } from "./app.js";

DB_connect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`lisening on port ${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log(`Something went Wrong`);
})
