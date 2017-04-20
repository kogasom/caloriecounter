import Database from 'better-sqlite3'

var db = new Database('./api/database/caloriecounter.db')

function create(user_id, {date, time, text, calories}) {
    try {
        var result = db.prepare('insert into meals (user_id,date,time,text,calories) values (?,?,?,?,?)')
        .run(user_id, date, time, text, calories)
    } catch (e) {
        console.error(e.message)
        return false
    }

    if (result.changes == 1) return find(result.lastInsertROWID)
}

function all(user_id) {
    return db.prepare('select * from meals where user_id = ?').all(user_id)
}

function find(id) {
    return db.prepare('select * from meals where id = ?').get(id)
}

function update(user_id, meal) {
    try {
        meal.user_id = user_id
        db.prepare('update meals set date=:date, time=:time, text=:text, calories=:calories where user_id=:user_id and id=:id')
        .run(meal)
    } catch (e) {
        console.error(e.message)
        return false
    }

    find(meal.id)
}

function delete(user_id, id) {
    try {
        db.prepare('delete from meals where where user_id=? and id=?')
        .run(user_id,id)
    } catch (e) {
        console.error(e.message)
        return false
    }

    return true
}
