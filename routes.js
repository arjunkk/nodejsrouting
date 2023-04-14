const express = require('express');
const router = express.Router();
const conn = require('./config');
// include moment module to convert date time to yyyy-mm-dd hh:mm:ss format
const moment = require('moment');
//import snowflake module
const { Snowflake } = require('@theinternetfolks/snowflake');



//bodyparser to get the details given in form
var bodyparser = require('body-parser');

//convert data to json format
router.use(bodyparser.json());
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
    var id = Snowflake.generate();
    var name = req.body.name;

    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
    const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

    const datetime = dateString + ' ' + timeString;
    const created_at = moment(datetime, 'M/D/YYYY h:mm:ss A').format('YYYY-MM-DD HH:mm:ss');
    const updated_at = created_at;

    conn.connect((error)=>{
        const values =[id, name, created_at,updated_at];
        var sql = "INSERT INTO role (id,name,created_at,updated_at) VALUES(?,?,?,?)";
        conn.query(sql,values,(error,result)=>{
            if(error) throw error;
            res.send("role created successfull"+result.insertId);
        })
    })
})

/*                            user routes                                              */


router.get('/v1/auth/signup', (req, res) => {
  res.render('signup')
})

router.post('/v1/auth/signup', (req, res) => {
    var id = Snowflake.generate();
    // var name = req.body.name;
    // var email = req.body.email;
    // var password = req.body.password;
    const {name,email,password}= req.body;
    //var created_at = Date.now();
    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
    const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

    const datetime = dateString + ' ' + timeString;
    const created_at = moment(datetime, 'M/D/YYYY h:mm:ss A').format('YYYY-MM-DD HH:mm:ss');

    conn.connect((error)=>{
        const values =[id, name, email, password,created_at];
        var sql = "INSERT INTO user (id,name,email,password,created_at) VALUES(?,?,?,?,?)";
        conn.query(sql,values,(error,result)=>{
            if(error) throw error;
            res.send("user created successfull"+result.insertId);
        })
    })
})

router.get('/v1/auth/signin',(req,res)=>{
    res.render('signin');
})

router.post('/v1/auth/signin', (req, res) => {
    // var email = req.body.email;
    // var password = req.body.password;
    const {email,password}=req.body;

    const sql ="SELECT email,password FROM user WHERE email=?";
    conn.query(sql,[email],(error,result)=>{
        if(error) throw error;
        const user = result[0];
    if(!user){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
    })
    

})

router.get('/v1/auth/me', (req, res) => {
    res.send('YOU ARE IN /v1/auth/me');
})

/*                            community routes                                         */

router.get('/v1/community', (req, res) => {
    res.render('createcommunity');
})

router.post('/v1/community', (req, res) => {
    var id = Snowflake.generate();
    // var name = req.body.name;
    // var slug = req.body.slug;
    // var owner = req.body.owner;
    const {name,slug,owner}= req.body;

    const date = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
    const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

    const datetime = dateString + ' ' + timeString;
    const created_at = moment(datetime, 'M/D/YYYY h:mm:ss A').format('YYYY-MM-DD HH:mm:ss');
    const updated_at= created_at;

    conn.connect((error)=>{
        values = [id,name,slug,owner,created_at,updated_at];
        sql = "INSERT INTO community (id,name,slug,owner,created_at,updated_at) VALUES(?,?,?,?,?,?)";
        conn.query(sql,values,(error,result)=>{
            if (error) throw error;
            res.send("community created successfull"+result.insertId);
        })
    })
})

// router.get('/v1/community',(req,res)=>{
//         res.render('createcommunity');
// })

// router.post('/v1/community',(req,res)=>{
//     var id = Snowflake.generate();
//     var name = req.body.name;
//     var slug = req.body.slug;
//     var owner = req.body.owner;

//     const date = new Date();
//     const options = { timeZone: 'Asia/Kolkata' };
//     const dateString = date.toLocaleDateString('en-US', options); // Returns something like "4/22/2021"
//     const timeString = date.toLocaleTimeString('en-US', options); // Returns something like "8:47:30 AM"

//     const datetime = dateString + ' ' + timeString;
//     const created_at = moment(datetime, 'M/D/YYYY h:mm:ss A').format('YYYY-MM-DD HH:mm:ss');
//     const updated_at= created_at;

//     conn.connect((error)=>{
//         values = [id,name,slug,owner,created_at,updated_at];
//         sql = "INSERT INTO community (id,name,slug,owner,created_at,updated_at) VALUES(?,?,?,?,?,?)";
//         conn.query(sql,values,(error,result)=>{
//             if (error) throw error;
//             res.send("community created successfull"+result.insertId);
//             res.render('createcommunity'); // pass the result as a property of an object
//         })
//     })
// })



router.get('/v1/community/:id/members', (req, res) => {
    res.send('you are on /v1/community/:id')
})

router.get('/v1/community/me/owner', (req, res) => {
    res.send('you are on /v1/community/me/owner')
})

router.get('/v1/community/me/owner', (req, res) => {
    res.send('you are on /v1/community/me/owner')
})

/*                            member routes                                              */

router.get('/v1/member', (req, res) => {
    res.render('createmember')
})

router.post('/v1/member', (req, res) => {
    var id = Snowflake.generate();
    // var community = req.body.community;
    // var user = req.body.user;
    // var role = req.body.role;
    const {community,user,role}= req.body;

    conn.connect((error)=>{
        const values =[id, community,user,created_at];
        var sql = "INSERT INTO member (id,community,user,role,created_at) VALUES(?,?,?,?,?)";
        conn.query(sql,values,(error,result)=>{
            if(error) throw error;
            res.send("member created successfull"+result.insertId);
        })
    })
})

router.get('/v1/member/:id',(req,res)=>{
    res.render('deletemember');
})

router.post('/v1/member/:id', (req, res) => {
    var id = req.body.id;

    const values =[{value:id}];

    conn.connect((error)=>{
        var sql = "DELETE FROM member WHERE id=? ";
        conn.query(sql,values,(error,result)=>{
            if(error) throw error;
            res.send("member deleted successfully "+result.insertId);
        })
    })
})

/*                                                                                     */

module.exports = router;