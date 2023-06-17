//merge parent conf object + add new changes for makemytrip 
const merege = require('deepmerge')
const wdioConf = require('./wdio.conf.js')
exports.config = merege(wdioConf.config, {
    specs: [
        './test/specs/makemytrip/book-tickets.js'
    ],
    baseUrl: 'https://www.makemytrip.com'
    
})