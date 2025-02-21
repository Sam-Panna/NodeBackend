import express from 'express';
import { login } from '../controller/auth.js';
import { insertUser } from '../controller/auth.js';

const routes = express.Router();

// routes.post("/login", login);
routes.post("/register", insertUser);


export default routes;