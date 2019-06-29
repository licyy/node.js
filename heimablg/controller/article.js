addArticle = (req, res) => {
    res.render("./article/article.ejs", {
        isLogin: req.session.isLogin,
        user: req.session.user
    })
}

module.exports = {
    addArticle
}