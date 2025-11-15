const showIndex = async (req, res) => {
    res.send(
        //#swagger.tags=['Heyy Whats up?']
        `<div>
            <h1>Heyy Whats up?</h1>
        </div>`
    )
};


module.exports = {showIndex};