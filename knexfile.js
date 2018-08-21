require('./loadEnv')();

const {
  DB_HOST: host,
  DB_NAME: database,
  DB_USER: user,
  DB_PASSWORD: password,
} = process.env;

function createConfig(connection) {
  return {
    client: 'pg',
    connection,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  };
}

module.exports = {
  development: createConfig({
    host,
    database,
    user,
    password,
  }),
  test: createConfig({
    host,
    database,
    user,
    password,
  }),
  production: createConfig(
    `postgres://${user}:${password}@${host}:5432/${database}?ssl=true`,
  ),
};
