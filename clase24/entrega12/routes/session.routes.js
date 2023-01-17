import Router from 'express'
export const sessionRouter = Router()


let sessionActive = undefined

const checkInvalidSession = (req, res) => {
    return !req.session?.user || !req.session?.loggedin || req.session.user != "marian"
}

sessionRouter.get('/', (req, res) => {
    
    if (checkInvalidSession(req, res)) {
        sessionActive = sessionActive === true ? false : undefined
        res.render('login.hbs', sessionActive !== undefined && !sessionActive ? { msgError: 'Session Expired' } : '')
    } else {
        req.session.loggedin = true
        res.render('index.hbs', { username: req.session.user })
    }
})

sessionRouter.get('/logout', (req, res) => {
    const username = req.session.user
    req.session.destroy(err => {
        if (err) return res.send(err)
        sessionActive = false
        res.render('logout.hbs', { username: username, timeoutRefresh: 3000 })  //3 seconds
    })
})

sessionRouter.post('/login', (req, res) => {
    const { username } = req.body
    if (username != "marian") {
        res.render('login.hbs', { msgError: 'Wrong Credentials' })
    } else {
        req.session.user = username
        req.session.loggedin = true
        sessionActive = true
        res.redirect('/')
    }
})