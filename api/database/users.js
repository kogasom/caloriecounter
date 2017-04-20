import Database from 'better-sqlite3'
import randomString from 'crypto-random-string'
import md5 from 'md5'

var db = new Database('./api/database/caloriecounter.db')

function create ({name, username, password}) {
    try {
        let token = randomString(20)
        var result = db.prepare('insert into users (name,username,password,api_token) values (?,?,?,?)')
        .run(name,username,md5(password),token)
    } catch (e) {
        console.error(e.message)
        return false
    }

    if (result.changes == 1) return find(result.lastInsertROWID)
}

function find (id) {
    return db.prepare('select name,username,api_token,daily_calories from users where id = ?').get(id)
}

function findByCredentials ({username, password}) {
    try {
        var result = db.prepare('select name,username,api_token,daily_calories from users where username = ? and password = ?')
        .get(username,md5(password))
    } catch (e) {
        console.error(e.message)
        return false
    }

    return result
}

function findByToken(token) {
    try {
        var result = db.prepare('select id,name,username,api_token,daily_calories from users where api_token = ?')
        .get(token)
    } catch (e) {
        console.error(e.message)
        return false
    }

    return result
}

function update(id, {daily_calories}) {
    try {
        var result = db.prepare('update users set daily_calories = ? where id = ?')
        .run(daily_calories,id)
    } catch (e) {
        console.error(e.message)
        return false
    }

    return find(id)
}

export default {
    create,
    find,
    findByCredentials,
    findByToken,
    update
}
