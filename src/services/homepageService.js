const db = require('../db');

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
    },

    get: (id) => {
        return new Promise((accept, reject)=>{
            db.query('SELECT * FROM noticias WHERE cod = ?', [id], (error, results)=>{
                if(error) {
                    reject(error);
                    return;
                }
                    if(results.length > 0){
                        accept(results[0]);
                    }else{
                        accept(false);
                    }
            });
        });
    }
};