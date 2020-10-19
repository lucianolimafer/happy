module.exports = {

    index(req, res) {
        const city = req.query.city
        return res.render('index', { city })

    },

    orphanage(req, res){
        return res.render('orphanage')

    },

    orphanages(req, res) {
        return res.render('orphanages')

    },

    createOrphanages(req, res) {
        return res.render('create-orphanages')

    }
}