const usermodel = require("../schema/user.js");

async function update(req, res) {
    const {
        name,
        role,
        password,
        email
    } = req.body;
    const id = await req.params['id'];
    const finduser = await usermodel.findOne({
        id
    })
    if (!finduser) {
        res.status(404).send({
            message: "user not fond",
            success: false,
        })
    } else if (!password && !email) {
        finduser.name = name,
            finduser.role = role,
            await finduser.save();
        res.status(200).send({
            message: "name and role has been updated",
            success: true,
        })
    } else {
        res.status(400).send({
            message: "you are not able to change password and email",
            success: true,
        })
    }
}

module.exports = update;