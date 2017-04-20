import Database from 'better-sqlite3'
import users from './users.js'
import meals from './meals.js'

var db = new Database('./api/database/caloriecounter.db')

var migrations = [users,meals]

function migrate (action) {
    migrations.forEach(migration => migration(db)[action]())
}

export { migrate }
