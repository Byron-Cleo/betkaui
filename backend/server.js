const dotenv = require('../node_moduless/dotenv/types');
dotenv.config({ path: './config.env' });

// const { sequelize } = require('./models');

const app = require('./app');

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

app.listen(PORT, () => {
  try {
    // await sequelize.authenticate();
    console.log(
      `Betka Application in ${ENV} Mode Running on ${PORT} with PostgreSQL DB... ;)`
    );
  } catch (error) {
    console.log('This is the Error from the server', error);
  }
});
