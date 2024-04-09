const homepageServices = require('../services/homepageService');

module.exports = {
    getAll: async (req, res)=> {
        let json = {error:'', result:[]};

        let noticias = await homepageServices.getAll();

        for(let i in noticias){
            json.result.push({
                id: noticias[i].cod,
                title: noticias[i].title,
                category: noticias[i].category,
                descr: noticias[i].descr,
                content: noticias[i].content
            })
        }
        res.json(json);
    }
}