import express from "express";
import UserRoute from "./router/UserRoute.js";
import { db } from "./database/db.js";

const app = express();
app.use(express.json());
const port = 5050;

app.use("/api", UserRoute);

// app.get("/getMessage",(req, res) => {
//     res.send("I am from backend getMessage");

// })

app.listen(port, ()=>{
    console.log(port);
    
})


