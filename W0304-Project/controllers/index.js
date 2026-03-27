const showIndex = (req, res) => {
    req.session.user = req.user;
    res.send(
        //#swagger.tags=['Heyy Whats up?']
        `<div>
            <h1>Heyy <span>${req.session.user ? `${req.session.user.displayName}` : " "}</span> Whats up?</h1>
        </div>`
    )
};


module.exports = {showIndex};