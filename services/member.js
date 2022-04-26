const memberModel = require('../models/member');
exports.findMember = async () =>{
    return await memberModel.find();
}
exports.Createmember = async (firstname, lastname) =>{
    const member = new memberModel({
        firstname: firstname,
        lastname: lastname
    });
    return await member.save();
}

exports.deleteMember = async (id) =>{
    return await memberModel.deleteOne({'_id' : id});
}