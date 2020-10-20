const Database = require('./db');

Database.then(function(db) {
    // insert data on the table
    db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-30.0826464",
            "-51.2131719",
            "lar das meninas",
            "1654651232",
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha se sentir a vontate e traga muito amor e paciência para dar.",
            "Horário de visitas Das 8h às 18h",
            "1"
        );
    `)

    // see data
})