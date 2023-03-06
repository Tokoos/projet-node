
const PORT = 3000
const express = require('express')
const mysql = require('mysql')
const myconnection = require('express-myconnection')


const app = express()

const config = {
    host :'localhost',
    user :'root',
    password :'',
    port : 3306,
    db :'notesbasededonnées'
}

app.use(myconnection(mysql,config,'pool'))
app.use(express.urlencoded({extented : true }))

app.post('/ajouterNote', (requete , reponse , next)=>{
    const titre = requete.body.titre
    const contenu = requete.body.contenu

    requete.getConnection((err, conn)=>{
        if(!err){
            conn.query("INSERT INTO notes (id , titre , contenu) VALUES (?,?,?) ",[null,titre, contenu, ],(err, rows, fields)=>{
             if(err){
                reponse.status = 500
                reponse.send(JSON.stringify({reussi : false , message : err.message}))
             }else{ 
                reponse.send(JSON.stringify({reussi : true , message : "Note enregistrée avec succès !"}))
             }
                 
            }) 
        }else{

            reponse.status = 500
            reponse.send(JSON.stringify({reussi : false , message : err.message}))
        }
    })

})
app.post('/modifierNote', (requete , reponse , next)=>{
    const id =requete.body.titre
    const titre = requete.body.titre
    const contenu = requete.body.contenu

    requete.getConnection((err, conn)=>{
        if(!err){
            conn.query("UPDATE notes set titre = ?, contenu = ? WHERE id =?  ",[null,titre, contenu, id ],(err, rows, fields)=>{
             if(err){
                reponse.status = 500
                reponse.send(JSON.stringify({reussi : false , message : err.message}))
             }else{ 
                reponse.send(JSON.stringify({reussi : true , message : "Note modifiée avec succès !"}))
             }
                 
            })
        }else{

            reponse.status = 500
            reponse.send(JSON.stringify({reussi : false , message : err.message}))
        }
    })

})
app.delete('/supprimerNote', (requete , reponse , next)=>{
    const id =requete.body.titre
    const titre = requete.body.titre
    const contenu = requete.body.contenu

    requete.getConnection((err, conn)=>{
        if(!err){
            conn.query("DELETE FROM notes WHERE id =?  ",[id],(err, rows, fields)=>{
             if(err){
                reponse.status = 500
                reponse.send(JSON.stringify({reussi : false , message : err.message}))
             }else{ 
                reponse.send(JSON.stringify({reussi : true , message : "Note supprimée avec succès !"}))
             }
                 
            })
        }else{

            reponse.status = 500
            reponse.send(JSON.stringify({reussi : false , message : err.message}))
        }
    })

})
app.get('/notes', (requete , reponse , next)=>{


    requete.getConnection((err, conn)=>{
        if(!err){
            conn.query("SELECT * FROM notes",[null,titre, contenu, ],(err, rows, fields)=>{
             if(err){
                reponse.status = 500
                reponse.send(JSON.stringify({reussi : false , message : err.message}))
             }else{ 
                reponse.send(JSON.stringify({reussi : true , donnees :rows }))
             }
                 
            })
        }else{

            reponse.status = 500
            reponse.send(JSON.stringify({reussi : false , message : err.message}))
        }
    })

})
app.listen(PORT, () =>{
    console.log("Attente des requetes au port " + PORT );
})