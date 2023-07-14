const express = require(`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

app.set(`view engine`, `hbs`)
app.get(`/`, controller.getRoot);
app.get(`/login`, controller.redirectToRoot);
app.get(`/logincheck`, controller.checkAcct);

module.exports = app;