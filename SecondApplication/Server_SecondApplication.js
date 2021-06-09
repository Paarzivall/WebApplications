var express = require('express');
var path = require('path');
var mysql = require('mysql');
var myConnection  = require('express-myconnection');
 
var app = express();
 
app.use(express.urlencoded());
 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webapplication',
    port: 3306
}

app.use(myConnection(mysql, dbOptions, 'pool'));

app.get('/', function(req, res){
    res.render('start');
});

app.get('/add', function(req, res){
    res.render('add');
});

app.post('/add', function(req, res){
    var animal={
        Rasa: req.body.Rasa,
        ZnakiSzczegolne: req.body.ZnakiSzczegolne,
    }
    req.getConnection(function(error, conn){
        conn.query('INSERT INTO zwierzeta SET ?',animal,function(err, rows){
            if(err){
                var message='Wystąpił błąd ' + err
            }else{
                var message='Dodano nowe zwierze'
            }
 
             res.render('add',{
                 message:message
             });
         });
    });
});

app.get('/list', function(req, res){
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
             res.render('list',{
                animalList: animalList
            });
        });
    });
});

app.get('/delete', function(req, res){
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
             res.render('delete',{
                animalList: animalList
            });
        });
    });
});


app.post('/delete', function(req, res){
    let id_zwierza = req.body.DeleteAnimal;
    var message = "";
    req.getConnection(function(error, conn){
        conn.query('DELETE FROM zwierzeta WHERE id_zwierza=' + id_zwierza,function(err, rows){
            if(err){
                message='Wystąpił błąd'
            }else{
                message='Usunięto zwierze'
            }     
         });
    });
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
            res.render('delete',{
                animalList: animalList,
                message:message
            });
        });
    });
});

app.get('/modify', function(req, res){
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
            console.log(animalList);
             res.render('modify',{
                animalList: animalList
            });
        });
    });
});

app.post('/modify', function(req, res){
    req.getConnection(function(error, conn){
        
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
            
             res.render('modify',{
                animalList: animalList
            });
        });
    });
});

app.post('/details', function(req, res){
    var animalList;
    let id_zwierza = req.body.Modify;
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta WHERE id_zwierza=' + id_zwierza,function(err, rows){
            animalList=rows;
            res.render('details',{
                animalList: animalList,
            });
        });
    });
});

app.post('/action', function(req, res){
    var message = "";
    var animal={
        id_zwierza: req.body.id_zwierza,
        Rasa: req.body.Rasa,
        ZnakiSzczegolne: req.body.ZnakiSzczegolne,
    }
    req.getConnection(function(error, conn){
        conn.query('UPDATE zwierzeta SET Rasa="' + animal.Rasa + '", ZnakiSzczegolne="' + animal.ZnakiSzczegolne + '"WHERE id_zwierza=' + animal.id_zwierza,function(err, rows){
            if(err){
                var message='Wystąpił błąd ' + err
            }else{
                var message='Zmodyfikowano zwierze'
            }
         });
    });
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM zwierzeta',function(err, rows){
            var animalList=rows;
            res.render('modify',{
                animalList: animalList,
                message:message
            });
        });
    });
});

app.listen(3001);