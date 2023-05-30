const QuanModel = require('../../model/quan.model')

const createQuan = async(req, res) => {
    try {
        const { name} = req.body
        if(!name){
            return res.status(400).json({
                msg: 'Input no value'
            })
        }
        const response = await QuanModel.create({
            name
        })
        if(response){
            return res.status(200).json({
                msg: 'Create sucessfully !'
            })
        }
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })
        
    }

}
const getAllQuan = async(req, res) => {
    try {
        const data = await QuanModel.findAll()
        if(data){
            return res.status(200).json({
                msg: "Successfully", 
                data
            })
        }        
    } catch (e) {
        return res.status(500).json({
            msg: 'Error from the server'
        })        
    }
}
module.exports = {
    createQuan, 
    getAllQuan
}