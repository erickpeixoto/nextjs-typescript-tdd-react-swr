require('dotenv').config()

module.exports = {
  distDir: 'build',
  env: {
    API_HOST: process.env.API_HOST,
    AUTH_TOKEN: process.env.AUTH_TOKEN
  }
}
