import parseArgs from 'minimist'

const config = {
    alias: {
        m:'modo',
        p:'puerto',
        d:'debug'
    },
    default: {
        modo: 'prod',
        puerto: 0,
        debug: false
    }
}

const {modo, puerto, debug, _} = parseArgs(process.argv.slice(2), config)

console.log({
    modo,
    puerto,
    debug,
    otros:_
})