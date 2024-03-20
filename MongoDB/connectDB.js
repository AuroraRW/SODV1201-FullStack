const mongoose = require('mongoose')
const MongoDB_URI = "mongodb+srv://admin01:Admin123456@cluster0.wunye3r.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"
async function connectToMongoDB() {
    try {
        await mongoose.connect(MongoDB_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err)
    }
}

module.exports = connectToMongoDB