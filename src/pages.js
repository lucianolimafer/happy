const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })

    },

    async orphanage(req, res){
        const id = req.query.id;

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0") {
                orphanage.open_on_weekends = false
            } else {
                orphanage.open_on_weekends = true
            }
            
            return res.render('orphanage', { orphanage })

        } catch (error) {
            console.log(error);
            return res.send('Erro no BD')
        }

    },

    async orphanages(req, res) {
        // put with bd
        try{
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', { orphanages })
        } catch (error){
            console.log(error)
            return res.send('Erro no BD')
        } 
    },

    createOrphanages(req, res) {
        return res.render('create-orphanages')

    }
}