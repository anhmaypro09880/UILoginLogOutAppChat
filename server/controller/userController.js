const User = require("../modals/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        const userNameCheck = await User.findOne({ username });
        const emailCheck = await User.findOne({ email });
        if (userNameCheck) {
            return res.json({ msg: "Username already used", status: false });
        }

        if (emailCheck) {
            return res.json({ msg: "Email already used", status: false });
        }

        const user = await User.create({
            email,
            username,
            password,
        });
        return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const passCheck = await User.findOne({ password });
        if (!user) {
            return res.json({ msg: "Sai userName", status: false });
        }
        if (!passCheck) {
            return res.json({ msg: "Sai pass word", status: false });
        }
        return res.json({ status: true, user });
    } catch (error) {
        next(error);
    }
};
module.exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({ _id: { $ne: req.params.id } }).select([
            "email",
            "username",
            "_id",
        ]);
    } catch (error) {
        next(error);
    }
};
