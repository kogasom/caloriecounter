import Database from 'better-sqlite3'
import randomString from 'crypto-random-string'

var db = new Database('./api/database/caloriecounter.db')

function create ({name, username, password}) {
    try {
        let token = randomString(20)
        var result = db.prepare('insert into users (name,username,password,api_token) values (?,?,?,?)')
        .run(name,username,password,token)
    } catch (e) {
        console.error(e.message)
        return false
    }

    if (result.changes == 1) return find(result.lastInsertROWID)
}

function find (id) {
    return db.prepare('select * from users where id = ?').get(id)
}

export default {
    create,
    find
}
