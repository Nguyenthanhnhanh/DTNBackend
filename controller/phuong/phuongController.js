const PhuongModel = require('../../model/phuong.model')

const createPhuong = async(req, res) => {
    try {
        const { name, quanId} = req.body
        if(!name || !quanId){
            return res.status(400).json({
                msg: "Input the value"
            })
        }
        else {
            await PhuongModel.create({
                name, quanId
            })
            return res.status(200).json({
                msg: "Success fully"
            })
        }
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })
        
    }
}
const getAllPhuong = async(req, res) => {
    try {
        const dataPhuong = await PhuongModel.findAll()
        if(data){
            return res.status(200).json({
                msg: 'get all phuong',
                data: dataPhuong
            })
        }
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })
        
    }
}
module.exports = {
    createPhuong, getAllPhuong
}