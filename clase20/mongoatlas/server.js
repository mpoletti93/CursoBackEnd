import mongoose from "mongoose";



    const URL = "mongodb+srv://mpoletti:poletti12@miprimercluster.78oud0k.mongodb.net/?retryWrites=true&w=majority"

    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("conectados correctamente")