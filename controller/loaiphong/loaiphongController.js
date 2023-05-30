const LoaiPhongModel = require('../../model/loaiphong.model')
const createLoaiPhong = async(req, res) => {
    try {
        const { name } = req.body   
        await LoaiPhongModel.create({
            name
        })
        return res.status(200).json({
            msg: "create Phuong success"
        })
        
    } catch (e) {
        return res.status(500).json({
            msg: 'Error from the server'
        })
        
    }
}
module.exports = {
    createLoaiPhong
}