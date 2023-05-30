const express = require('express')
const { createQuan,getAllQuan} = require('../controller/quan/quanController')
const quanRouter = express.Router()
quanRouter.post('/createQuan', createQuan)
quanRouter.get('/getAllQuan',getAllQuan )
module.exports = {
    createQuan, getAllQuan}