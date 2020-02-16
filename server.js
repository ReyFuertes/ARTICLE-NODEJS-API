const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//connect to monggo db
dotenv.config({ path: './config.env' });
mongoose.connect(process.env.DATABASE_DEV, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('db connected!'));

const port = 3000;
app.listen(port, () => {
  console.log(`App iis running of port ${port}..`);
});