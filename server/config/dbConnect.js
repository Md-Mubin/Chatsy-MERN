const mongoose = require("mongoose")

const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_DATA_BASE_URL)
    .then(()=>{
        console.log("Database Connected")
    })
}

module.exports = dbConnect