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
    },

    get: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let noticia = await homepageServices.get(id);

        if(noticia){
            json.result = noticia;
        }
        res.json(json);
    },

    post: async(req, res) => {
        let json = {error:'', result:{}};

        let title = req.body.title;
        let category = req.body.category;
        let descr = req.body.descr;
        let content = req.body.descr;

        if(title && category && descr && content){
            let noticiaId = await homepageServices.post(title, category, descr, content);
            json.result = {
                id: noticiaId,
                title,
                category,
                descr,
                content
            };
        }else{
            json.error = 'Unable to send data.';
        }
        res.json(json);
    },

    put: async(req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let title = req.body.title;
        let category = req.body.category;
        let descr = req.body.descr;
        let content = req.body.descr;

        if(id && title && category && descr && content){
            await homepageServices.put(id, title, category, descr, content);
            json.result = {
                id,
                title,
                category,
                descr,
                content
            };
        }else{
            json.error = 'Unable to send data.';
        }
        res.json(json);
    },

    delete: async(req, res) => {
        let json = {error:'', result:{}};
        await homepageServices.delete(req.params.id);
        res.json(json);
    }
}