import express from 'express';
import { getUser } from '../controller/user.js';


const routes = express.Router();
routes.get("/get-user", getUser);


export default routes;