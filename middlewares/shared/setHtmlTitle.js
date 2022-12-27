function setHtmlTitle(title) {
    return function (req, res, next) {
        res.locals.html = true;
        res.locals.title = `${title} - ChattingApp`;
        next();
    }

}
module.exports = setHtmlTitle;