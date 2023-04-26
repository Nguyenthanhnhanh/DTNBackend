const RoleModel = require('../../model/role.model');
const createRole = async (req, res) => {
    try {
        const { name} = req.body;
        const data = await RoleModel.create({
            name
        })
        if(data){
            return res.status(200).json({
                msg: "Save role the success"
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