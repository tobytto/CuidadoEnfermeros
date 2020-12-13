
var mysql=require('mysql');

var conexion=mysql.createConnection({ //cambiar datos por los que correspondan.
    host:'localhost',
    user:'root',
    password:'',
    database:'escuela'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;