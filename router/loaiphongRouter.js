const express = require('express')
const { createLoaiPhong} = require('../controller/loaiphong/loaiphongController')
const loaiphongRouter = express.Router()
loaiphongRouter.post('/createLoaiPhong', createLoaiPhong)

module.exports = {
    phuongRouter
}