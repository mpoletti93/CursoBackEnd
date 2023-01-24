//const yargs = require('yargs/yargs')(process.argv.slice(2))
//const args = yargs.argv

import parseArgs from 'yargs/yargs'
const yargs = parseArgs(process.argv.slice(2))

const {modo, puerto, debug, _} = yargs
    .boolean('debug')
    .alias({
        m:'modo',
        p:'puerto',
        d:'debug'
    })
    .default({
        modo: 'prod',
        puerto: 0,
        debug: false
    }).argv


    console.log({
        modo,
        puerto,
        debug,
        otros:_
    })