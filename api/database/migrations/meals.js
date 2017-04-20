import Migration from './migration.js'

const up = function () {
    this.db.exec('create table meals (id integer primary key autoincrement, user_id integer, date date, time integer, text varchar(255), calories integer)');
}

const down = function () {
    this.db.exec('drop table meals')
}

export default function (db) {
    return new Migration(db,up,down)
}
