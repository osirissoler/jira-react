const  Text  = require("../models/test")


const getTest = async (req, res) => {
    
     const {name} = req.body

     const test = new Text({name})
     await test.save()

     if(!test){
         res.status(500).json({err:"err"})
     }

    res.status(200).json({ ok: "ok", test})
}

module.exports = {
    getTest
}