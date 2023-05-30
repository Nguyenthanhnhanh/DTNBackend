const express = require('express');
const app = express();
const port = 8001;
const setAssociation = require('./model/association');
const roleRouter = require('./router/roleRouter')
const quanRouter = require('./router/quanRouter')
const phuongRouter = require('./router/phuongRouter')
setAssociation();

app.use("/role", roleRouter);
app.use("/quan",quanRouter);
app.use("/phuong", phuongRouter)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

