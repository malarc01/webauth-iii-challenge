exports.up = function(knex, Promise) {
  return knex.schema.createTable('usertable', userinfoTableColumn=>{
    userinfoTableColumn.increments();
    

    userinfoTableColumn.string('user',128).notNullable().unique();

    userinfoTableColumn.string('pass',128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('usertable')
};