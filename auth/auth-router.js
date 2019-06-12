const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secrets= require('../config/secrets')

const DatabaseTableModel = require('../users/users-model')

// endpoints for '/api/register'

router.post('/register', (req,res)=>{
  let random = req.body
  console.log(random)
  const hash = bcrypt.hashSync(random.password, 10);// rounds
  // const hashUser = bcrypt.hashSync()
  random.password = hash;
  console.log(`password hash output is ${hash}`);
  DatabaseTableModel.add(random)
  .then(saved =>{
    res.status(201).json(saved)
  })
  .catch(error =>{
    // res.status(500).json(error)
    console.log("Something is not right",error);
  })
})

router.post('/login', (req, res) => {
  let { password, username } = req.body;
  console.log(`the request body is "${username} ${password}"`);
  // console.log(password);

  DatabaseTableModel.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // addded code
        res.status(200).json({
          message: `Welcome ${user.username}!`,token,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json(error);
    });
});

function generateToken(user){
  const payload = {
    subject:user.id, //what the token is decsribing
    username: user.username,
    roles:['student'], // user.roles
  }
  // const secret = process.env.JWT_SECRET  ;
  const options ={
    expiresIn: '1h',
  };

  return jwt.sign(payload,secrets.jwtSecret,options);
}



module.exports = router;