module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/userInfo.db3',
    },
    pool: {
      afterCreate: (conn, done) =>{
        conn.run('PRAGMA foreign_keys = ON',done)
      },
    },
    
  },

};
