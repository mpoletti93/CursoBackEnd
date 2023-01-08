export const mysqlConn = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'coderhouse'
    },
}

export const sqlite3Conn = {
    client: 'sqlite3',
    connection: {
        filename: "./persistence/db/ecommerce.sqlite"
    },
    useNullAsDefault: true
}