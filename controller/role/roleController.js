const roleModel = require('../../model/role.model')

const createRole =async(req, res) => {
     try {
        const { name} = req.body
        if(!name){
            res.status(404).json({
                msg: 'Name is required'
            })
        }
        const response = await roleModel.create({
            NamedNodeMap: name
        })
        if(response){
            return res.status(200).json({
                msg: 'Create success fully'
            })
        }
        
        
        
     } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
     }
}
module.exports = {
    createRole
}