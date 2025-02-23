import express from 'express';
import { insertUser, login } from '../controller/auth.js';

const routes = express.Router();

// routes.post("/login", login);
routes.post("/register", insertUser);
routes.post("/login", login);

export default routes;