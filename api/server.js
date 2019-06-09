const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
 
// const authRouter = require('../auth/auth-Router')  /// ADD FILES
// const usersinfoRouter = require('') /// ADD FILES

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

// server.use('/api/auth',authRouter )
// server.use('/api/users',usersinfoRouter)

server.get('/', (req, res)=>{
  res.send('U+1F603	')
})

module.exports = server