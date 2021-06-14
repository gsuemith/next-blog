// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      //set to your path and filename
      filename: './data/posts.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }

};
