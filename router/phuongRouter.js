const express = require('express')
const { createPhuong, getAllPhuong } = require('../controller/phuong/phuongController')
const phuongRouter = express.Router()
phuongRouter.post('/createPhuong', createPhuong)
phuongRouter.get('/getAllPhuong', getAllPhuong)
module.exports = {
    phuongRouter
}