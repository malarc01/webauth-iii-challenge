
exports.up = function(knex, Promise) {
  return knex.schema.createTable('userinfo', userinfoTableColumn=>{
    userinfoTableColumn.increments();

    userinfoTableColumn.string('username',128).notNullable().unique();

    userinfoTableColumn.string('password',128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('userinfo')
};
