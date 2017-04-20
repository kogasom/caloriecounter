import Migration from './migration.js'

const up = function () {
    this.db.exec('create table users (id integer primary key autoincrement, name varchar(255), username varchar(255), password varchar(255),  api_token varchar(255), daily_calories integer)');
}

const down = function () {
    this.db.exec('drop table users')
}

export default function (db) {
    return new Migration(db,up,down)
}
