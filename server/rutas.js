const express = require("express");
const router = express.Router();

const mensajes = [
    {
        _id : "1",
        user: "usuario1",
        mensaje : "Este es el primer comentario"
    },
    {
        _id : "2",
        user: "usuario2",
        mensaje : "Este es el segundo comentario"
    },
    {
        _id : "3",
        user: "usuario3",
        mensaje : "Este es el tercer comentario"
    }
];

router.get( "/" , (req, resp) =>{
    resp.json( mensajes );
});

router.post( "/" , (req, resp) =>{

    const mensaje = {
        mensaje : req.body.mensaje,
        user : req.body.user,
        lat : req.body.lat,
        lng : req.body.lng,
        foto : req.body.foto
    }

    mensajes.push( mensaje );

    console.log("Mis mensajes:" , mensajes);

    resp.json( {
        ok : true,
        mensaje
    } );
});

module.exports = router;