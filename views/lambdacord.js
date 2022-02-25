const mysql = require('mysql');
const config = require('config.json');

const con = mysql.createConnection ({ 
    host: config.dbhost, 
    port: config.dbport,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbname,
    connectionLimit : 60
});
    function getname(){   
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const sql = "select * from user";
            con.query(sql, function (err, result) {
            resolve(result[0].name)
        })
        },10)
        
    });
    }


exports.handler = async (event, context) => {
    return getname()
    
};

