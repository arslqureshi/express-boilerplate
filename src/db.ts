import pg from 'pg'

const pool = new  pg.Pool({
     user: "",
     password: "",
     host: "",
     port: "",
     database: "",
})

export default pool;

/*
     psql -U postgres = select postgres user in psql
     \l = list all databased
     \c [database name] = select database
     \dt = display all tables in db
*/