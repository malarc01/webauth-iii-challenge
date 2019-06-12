const infoBase  = require('../database/dbConfig.js')

module.exports ={
  add,
  find,
  findBy,
  findById,
};

function find(){
  return infoBase('userinfo').select('id', 'username', 'password');
}

function findBy(filter) {
  return infoBase('userinfo').where(filter);
}

async function add(user){
  const [id] = await infoBase('userinfo').insert(user);

  return findById(id)
}

function findById(id) {
  return infoBase('userinfo')
  .where({id})
  .first();
}