import { db } from "../database/db.js"
import bcrypt from "bcryptjs";

export const insertUser = (req, res) => {
    const { name, email, password, phone, age } = req.body;
    const q = "select * from user where email = ? ";

    db.query(q, [email], (err, result) =>{
        if(err){
            return res.send(err);
        }
        if(result.length > 0){
            return res.send({message : "User already exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        console.log(hashPassword, ":hashPassword");
    
    const qr = "insert into user(`name`, `email`, `password`, `phone`,`age`) values (?, ?, ?, ?, ?)";

    db.query(qr, [name, email, hashPassword, phone, age], (err, data) => {
        if (err) {
           return res.send(err);
        } else {
            return  res.send({data, message : "User inserted Successfully"});
        }
    });
});
};

export const getUser = (req, res) => {
    const q = "select * from user";

    db.query(q, [email, password], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.json(result);
        }
    });

};

export const login = (req, res) => {
    const { email, password } = req.body;
    const q = "select * from user where email = ?";

    db.query(q, [email], (err, result) => {
        if (err) {
            res.send({ err, message: "Database error" });
        } 
        else {
            if (result.length === 0) {
                res.send({ message: "User Not Found" });


            } else if (result[0].password === password) {
                res.json({ message: "Login Successful" });

            } else {
                res.json({ message: "Incorrect Password" });
            }


        }
        // res.send(result);


    })

        
};


