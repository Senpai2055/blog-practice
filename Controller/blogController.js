const db = require("../Model/index");
const Blog = db.blog;

exports.index = (req, res) => {

    res.render("index");
};
exports.createblog = (req,res)=>{
    res.render("createblog")
};