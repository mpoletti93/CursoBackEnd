import MongoStore from 'connect-mongo'
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

export const configSession = {
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://mpoletti:poletti12@miprimercluster.78oud0k.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: advancedOptions
    }),
    secret: "test",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1 * 1000 * 60   //one minute = 1 * 1000 (millis) * 60 ()secs
    }
}