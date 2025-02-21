import express from 'express';
import { getUser } from '../controller/user.js';
import { insertUser } from '../controller/user.js';
import { authUser } from '../middleware/authMiddleware.js';
import { ageVerify } from '../middleware/ageMiddleware.js';


const routes = express.Router();
// routes.post("/insert-user", insertUser);
// routes.post("/insert-user",ageVerify, insertUser);
// routes.get("/get-user", getUser);


export default routes;