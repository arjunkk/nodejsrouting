const express = require('express');
const router = express.Router();

/*                            intex route                                              */

router.get('/',(req,res)=>{
    res.render('index');
})

/*                            role routes                                              */

router.get('/v1/role',(req,res)=>{
    res.send("you are on /v1/role");
})

router.post('/v1/role',(req,res)=>{
    res.send("you are on /v1/role");
})


/*                            user routes                                              */


router.get('/v1/auth/signup', (req, res) => {
  res.render('signup')
})

router.post('/v1/auth/signup', (req, res) => {
    res.render('signup')
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