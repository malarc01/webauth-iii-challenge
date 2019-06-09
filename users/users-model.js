const infoBase  = require('../database/dbConfig')

module.exports ={
  add,
  find,
  findBy,
  findById,
};

function find(){
  return infoBase('users').select('id', 'username', 'password');
}

function find