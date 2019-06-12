const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
 
const authRouter = require('../auth/auth-router');
// const usersinfoRouter = require('') 
// const DatabaseTableModel = require('../users/users-model.js')
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api', authRouter)
// server.use('/api/users',usersinfoRouter)

server.get('/', (req, res)=>{
  // res.send(500,console.log('ye yea'));
  res.status(200).send("DSOO")
  // console.log('ye yea nie');
})



// endpoints for '/api/register'

// server.post('/register', (req,res)=>{
//   let user = req.body;
//   DatabaseTableModel.add(user)
//   .then(saved =>{
//     res.status(201).json(saved)
//   })
//   .catch(error =>{
//     // res.status(500).json(error);
//     console.log("Something is not right",error);
//   })
// })



module.exports = server;