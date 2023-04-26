const UserModel = require('../../model/user.model');
const  RegisterUser =  async(req, res) => {
    try {
        const { 
            name, email,password,  Diachi, Sdt,Gioitinh,Ngaysinh
        } = req.body;
        if(!name || !email || !password || !Diachi || !Sdt || !Gioitinh ||!Ngaysinh ){
            return res.status(404).json({
                msg: "Vui lòng nhập dữ liệu!"
            })
        }
        else {
            await UserModel.create({
                name, email, password, Diachi, Sdt, Gioitinh, Ngaysinh
            })
            return res.status(200).json({
                msg: "Đăng kí người dùng thành công!"
            })
        }
        
    } catch (e) {
        return res.status(500).json({
            msg: 'Error from the server'
        })
        
    }
}
const Login = async(req, res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password){
            return res.status(404).json({
                msg: "Vui lòng nhập email hoặc password"
            })
        }
        const data = await UserModel.findOne({
            where:{
                email
            }, raw: true
        });
      
        
    } catch (e) {
        return res.status(500).json({
            msg: "Error from the server"
        })        
    }
}
module.exports = {
    RegisterUser
}