const express = require('express')
const fs = require('fs')
const routes = require('./routes')
const app = express()


app.use('/', routes);

//setting ejs template engine
app.set('view engine','ejs');

// Serve static files from the views directory
app.use(express.static(__dirname+"/views/css"));


// /************************************************************************************* */
// /*                            intex route                                              */
// /************************************************************************************* */

// app.get('/',(req,res)=>{
//     res.render('index');
// })


// /************************************************************************************* */
// /*                            role routes                                              */
// /************************************************************************************* */

// app.get('/v1/role',(req,res)=>{
//     res.send("you are on /v1/role");
// })

// app.post('/v1/role',(req,res)=>{
//     res.send("you are on /v1/role");
// })

// /************************************************************************************* */
// /*                            user routes                                              */
// /************************************************************************************* */

// app.get('/v1/auth/signup', (req, res) => {
//   res.render('signup')
// })

// app.post('/v1/auth/signup', (req, res) => {
//     res.render('signup')
// })

// app.get('/v1/auth/signin', (req, res) => {
//     res.render('signin')
// })

// app.get('/v1/auth/me', (req, res) => {
//     res.send('Hello World!')
// })

// /************************************************************************************* */
// /*                            community routes                                         */
// /************************************************************************************* */

// app.get('/v1/community', (req, res) => {
//     res.render('createcommunity');
// })

// app.post('/v1/community', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/v1/community/:id/members', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/v1/community/me/owner', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/v1/community/me/owner', (req, res) => {
//     res.send('Hello World!')
// })

// /************************************************************************************* */
// /*                            member routes                                              */
// /************************************************************************************* */

// app.get('/v1/member', (req, res) => {
//     res.render('createmember')
// })

// app.post('/v1/member', (req, res) => {
//     res.send('Hello World!')
// })

// app.post('/v1/member/:id', (req, res) => {
//     res.send('Hello World!')
// })

// /************************************************************************************* */
// /*                                                                                     */
// /************************************************************************************* */

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
