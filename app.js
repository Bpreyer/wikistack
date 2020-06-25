const morgan = require("morgan");
const express = require("express");
const router = express.Router();
const app = express()
app.use(morgan("dev"));
app.use(express.static(__dirname + "/"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const { db, Page, User } = require('./models');
const models = require('./models');
const views = require("./views/layout");
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);
// app.use('/add')

app.get('/', function (req, res) {
  res.send(views());
})

db.authenticate().
then(() => {
  console.log('You are connected to the Database');
})









const init = async () => {
  // await models.Page.sync()
  // await models.User.sync()
  await models.db.sync({force: true})

  const PORT = 1337;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}
init();

module.exports = app;
