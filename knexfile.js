require('./loadEnv')();

function createConfig(database, user, password) {
  return {
    client: 'pg',
    connection: {
      database,
      user,
      password,
    },
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  };
}

module.exports = {
  development: createConfig(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
  ),
  test: createConfig(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
  ),
};
