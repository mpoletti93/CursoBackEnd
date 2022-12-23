const mongoConn =  "mongodb+srv://mpoletti:poletti12@miprimercluster.78oud0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
try {
    await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})}catch(error){
    console.log(error)
}

module.exports = { mongoConn }