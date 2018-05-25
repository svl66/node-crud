const db = require("../config/dbConfig").connect();

module.exports = function (app) {

    // Index page
    app.get('/', function (req, res) {
        res.render('pages/index', {
            site: "index"
        });
    });

    // Album page
    app.get('/album', function (req, res) {
        db.query(
            "SELECT * FROM album", function (err, results, fields){
            console.log('Antal: ' + results.length);
            res.render('pages/index', {  
                site: "album",
                data: results
            });
        });      
    });

    // Admin page
    app.get('/admin', function (req, res) {
        res.render('admin/index', {  
            site: "index"
        });    
    });
    
    // Admin -> vis side 'indsæt nyt album-form'
    app.get('/admin/newAlbum', function (req, res) {
        db.query(
            "SELECT * FROM artist", function (err, results, fields){
            res.render('admin/index', {  
                site: "newAlbum",
                data: results
            });
        });     
    });

    // Admin -> vis side 'indsæt nyt cover-form'
    app.get('/admin/newCover', function (req, res) {
        db.query(
            "SELECT album.id, album.titel, navn FROM album INNER JOIN artist ON album.FK_artist = artist.id ORDER BY artist.navn", function (err, results, fields){
            res.render('admin/index', {  
                site: "newCover",
                data: results
            });
        });     
    });

    // Admin -> vis side 'indsæt ny artist-form'
    app.get('/admin/newArtist', function (req, res) {
        db.query(
            "SELECT * FROM land", function (err, results, fields){
            res.render('admin/index', {  
                site: "newArtist",
                data: results
            });
        });     
    });

    // Admin -> vis side 'slet-form'
    app.get('/admin/slet', function (req, res) {
        db.query(
            "SELECT * FROM artist", function (err, results, fields){
            res.render('admin/index', {  
                site: "slet",
                data: results
            });
        });     
    });

    // Admin -> vis side 'ret-form'
    app.get('/admin/ret', function (req, res) {
        db.query(
            "SELECT * FROM artist", function (err, results, fields){
            res.render('admin/index', {  
                site: "ret",
                data: results
            });
        });     
    });

    app.post('/artist', function (req, res) {
        console.log('Test');
        let values = [];
        let artist = req.body.artist;
        let fk_land = req.body.fk_land
        values.push(artist);
        values.push(fk_land);
        db.query(
        "INSERT INTO artist (navn, FK_land) VALUES (?,?)", values, function (err, rows){ 
            if(err) {
                res.send('Fejlede');
            }else{
                res.send(req.body.artist);
            }
        });
    });


    app.post('/insertNewAlbum', function (req, res) {
        
        let values = [];
        let album = req.body.album;
        let fk_artist = req.body.fk_artist;
        let udgivaar = req.body.udgivaar + '-01-01';
        let cover = 'no-cover.jpg'; //+ req.files.coverFile.name;
        values.push(album);
        values.push(fk_artist);
        values.push(udgivaar);
        values.push(cover);
        db.query(
        "INSERT INTO album (titel, FK_artist, udgivaar, cover) VALUES (?,?,?,?)", values, function (err, rows){ 
            if(err) {
                res.send('Fejlede');
            }else{
                res.send(req.body.album);
            }
        });
    });
    
    app.post('/upload', function(req, res) {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        //Consple log af body med image giver fejl!! //console.log(req.body);
        let values = [];
        let coverFile = req.files.coverFile;
        let fk_album = req.body.fk_album;
        values.push(coverFile.name);
        values.push(fk_album);
        // Use the mv() method to place the file somewhere on your server
        coverFile.mv('public/images/' + coverFile.name, function(err) {
            if (err)
                return res.status(500).send('Fejl: ' + err);
            db.query(
                    "UPDATE album SET cover = ? WHERE id = ?", values, function(err, rows){
                        res.send('Filen blev uploadet. (id: '+fk_album+')! <a href="/admin">Tilbage</a>');
                    } );
            
        });
    });

    app.post('/slet', function(req, res) {
        let values = [];
        let artist = req.body.fk_artist;
        //console.log('Slettet: '+ artist);
        values.push(artist);
        db.query(
            "DELETE FROM artist WHERE id = ?", values, function (err, rows){
                db.query("DELETE FROM album WHERE FK_artist = ?", values, function (err, rows){
            });
        });
    });
    app.post('/ret', function(req, res) {
        console.log(req.body.artist, req.body.fk_artist);
        let values = [];
        let artist = req.body.artist;
        let fk_artist = req.body.fk_artist;
        //console.log('Slettet: '+ artist);
        values.push(artist);
        values.push(fk_artist);
        db.query(
            "UPDATE artist SET navn = ? WHERE id = ?", values, function (err, rows){
                
        });
    });
};