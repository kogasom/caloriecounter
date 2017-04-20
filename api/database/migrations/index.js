require('babel-core/register');

const migrator = require('./migrator.js');

if (!process.argv[2]) {
    return console.log('please specify required action: [up|down]')
}

migrator.migrate(process.argv[2])
