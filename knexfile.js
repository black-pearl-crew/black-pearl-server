module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : process.env.DB_IP,
      port: '6000',
      user : 'postgres',
      password : 'password',
      database : 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      connection: process.env.DATABASE_URL,
      port: '6000',
      database : 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
