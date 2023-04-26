const express = require('express')
const app = express();
const port = 8001;
const setAssociation = require("./model/association");
const roleRouter = require('./router/role.router')
app.use('role',roleRouter)
setAssociation();
app.listen(port, () => {
    console.log(`Save running server ${port}`);
  });
  