

const getTest = async (req, res) => {
    console.log(req)
    // const {name} = req.body
    res.status(200).json({ ok: "ok"})
}

module.exports = {
    getTest
}