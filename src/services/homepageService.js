const db = require('../db')

module.exports = {
    getAll: () =>{
        return new Promise((accept, reject)=>{
            db.query('SELECT * FROM noticias', (error, results)=>{
                if(error) {
                    reject(error);
                    return;
                }
                    accept(results);
            });
        });
    }
};