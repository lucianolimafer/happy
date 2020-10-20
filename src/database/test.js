const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    
    // insert data on the table
    /*await saveOrphanage(db, {
        lat: "-30.0826464",
        lng: "-51.2931719",
        name: "Lar do Joãozinho",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.",
        whatsapp: "651656562",
        images: [
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1596962248954-a0381dc10a20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontate e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 8h às 18h",
        open_on_weekends: "1"

    })*/

    // see data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)


    // see data by ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)


    // delete data on the TABLE
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "1"'))
})