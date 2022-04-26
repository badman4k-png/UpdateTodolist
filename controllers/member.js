const memberService = require('../services/member');
exports.getMember = async function sayHello(req, res){
    const data = await memberService.findMember();
    res.status(200).json(data);
}
exports.Createmember = async (req, res) =>{
    try{
        const body = req.body;
        await memberService.Createmember(body.firstname, body.lastname);
        res.status(201).json({
            status: true,
            message: "Created"
        });
    }catch{
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
}

exports.deleteMember = async (req, res) => {
    const id = req.query.id;
    console.log(id);
    try {
        await memberService.deleteMember(id);
        res.json({
            status: true,
            message: "Deleted Success"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Error"
        });
    }
    
}