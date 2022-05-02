const memberModel = require('../models/member');
exports.findMember = async () =>{
    return await memberModel.find();
}
exports.Createmember = async (Username, name, email, password, phone) =>{
    const member = new memberModel({
        Username: Username,
        name: name,
        email: email,
        password: password, 
        phone: phone
    });
    return await member.save();
}

exports.deleteMember = async (id) =>{
    return await memberModel.deleteOne({'_id' : id});
}