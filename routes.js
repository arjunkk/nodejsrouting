const express = require('express');
const router = express.Router();
const conn = require('./config');

//bodyparser to get the details given in form
var bodyparser = require('body-parser');

//convert data to json format
router.use(bodyparser.json);
router.use(bodyparser.urlencoded({extended:true}));

/*                            intex route                                              */

router.get('/',(req,res)=>{
    res.render('index');
})

/*                            role routes                                              */

router.get('/v1/role',(req,res)=>{
    res.render('createrole');
})

router.post('/v1/role',(req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    //var created_at = Date.now();
    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
    const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

    const created_at = dateString + ' ' + timeString;
    const updated_at = created_at;

    conn.connect((error)=>{
        if(error) throw error;
        const values =[id, name, created_at,updated_at];
        var sql = 'INSERT INTO role (id,name,created_at,updated_at) VALUES ?';
        conn.query(sql,[values],(error,result)=>{
            if(err) throw err;
            res.send("role created successfull"+result.insertId);
        })
    })
})

/*                            user routes                                              */


router.get('/v1/auth/signup', (req, res) => {
  res.render('signup')
})

router.post('/v1/auth/signup', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    //var created_at = Date.now();
    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
    const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

    const created_at = dateString + ' ' + timeString;


    conn.connect((error)=>{
        if(error) throw error;
        const values =[id, name, email, password,created_at];
        var sql = 'INSERT INTO user (id,name,email,password,created_at) VALUES ?';
        conn.query(sql,[values],(error,result)=>{
            if(err) throw err;
            res.send("role created successfull"+result.insertId);
        })
    })
})

router.get('/v1/auth/signin', (req, res) => {
    res.render('signin')
})

router.get('/v1/auth/me', (req, res) => {
    res.send('Hello World!')
})

/*                            community routes                                         */

router.get('/v1/community', (req, res) => {
    res.render('createcommunity');
})

router.post('/v1/community', (req, res) => {
    res.send('Hello World!')
})

router.get('/v1/community/:id/members', (req, res) => {
    res.send('Hello World!')
})

router.get('/v1/community/me/owner', (req, res) => {
    res.send('Hello World!')
})

router.get('/v1/community/me/owner', (req, res) => {
    res.send('Hello World!')
})

/*                            member routes                                              */

router.get('/v1/member', (req, res) => {
    res.render('createmember')
})

router.post('/v1/member', (req, res) => {
    res.send('Hello World!')
})

router.post('/v1/member/:id', (req, res) => {
    res.send('Hello World!')
})

/*                                                                                     */

module.exports = router;