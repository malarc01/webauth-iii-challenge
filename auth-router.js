const router = require(express).Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets = require()

const UsersInfo = require()

// endpoints for '/api/register'

router.post('/api/register', (req.res)=>{
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);// rounds
  user.password = hash;

  UsersInfo.add(user)
  .then(saved =>{
    res.status(201).json(saved)
  })
  .catch(error =>{
    res.status(500).json(error)
  })
})




module.exports = router