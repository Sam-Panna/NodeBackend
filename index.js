import express from "express";
import UserRoute from "./router/UserRoute.js";

const app = express();
const port = 5050;

app.use("/", UserRoute);

// app.get("/getMessage",(req, res) => {
//     res.send("I am from backend getMessage");

// })

app.listen(port, ()=>{
    console.log(port);
    
})


