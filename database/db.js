import mysql from 'mysql2'

export const db = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "12345",
    database: "test_databse",
})

db.connect((err) => {
    if(err){
        console.error("error connecting:", err);
        
    }else{
        console.error("connection successful");
    }

});