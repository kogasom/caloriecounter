import Database from 'better-sqlite3'

class Meals {
    constructor(user_id) {
        this.db = new Database('./api/database/caloriecounter.db')
        this.user_id = user_id
    }

    create({date, time, text, calories}) {
        try {
            var result = this.db.prepare('insert into meals (user_id,date,time,text,calories) values (?,?,?,?,?)')
            .run(this.user_id, date, time, text, calories)
        } catch (e) {
            console.error(e.message)
            return false
        }

        if (result.changes == 1) return find(result.lastInsertROWID)
    }

    all() {
        return this.db.prepare('select * from meals where user_id = ?').all(this.user_id)
    }

    find(id) {
        return this.db.prepare('select * from meals where id = ?').get(id)
    }

    update(meal) {
        try {
            meal.user_id = this.user_id
            this.db.prepare('update meals set date=:date, time=:time, text=:text, calories=:calories where user_id=:user_id and id=:id')
            .run(meal)
        } catch (e) {
            console.error(e.message)
            return false
        }

        find(meal.id)
    }

    remove(id) {
        try {
            this.db.prepare('delete from meals where where user_id=? and id=?')
            .run(this.user_id,id)
        } catch (e) {
            console.error(e.message)
            return false
        }

        return true
    }
}

export default Meals
