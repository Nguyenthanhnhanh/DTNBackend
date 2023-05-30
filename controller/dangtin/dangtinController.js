const DangtinModel = require('../../model/dangtin.model')

const createDangtin = async(req, res) => {
    try {
        const {tieude, giaphong,dientich,mota, soluongPhong, tiennghi  } = req.body
        await DangtinModel.create({
            tieude, giaphong, dientich, mota, soluongPhong, soluongphongtrong: soluongPhong, tiennghi, status:0
        })
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })
    }
}
const duyetBaiDang = async(req, res) => {
    try {
        const {id} = req.params
        const data = await DangtinModel.findOne({
            id: id
        })
        if(data){
            data.status = 1
            await data.save()
            return res.status(200).json({
                msg: 'Duyệt thành công!'
            })
        }
        
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
module.exports = {
    createDangtin, duyetBaiDang
}