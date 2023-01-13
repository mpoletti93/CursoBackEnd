export const mysqlConn = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ecommerce'
    },
    pool: { min: 0, max: 7 }
}

export const sqlite3Conn = {
    client: 'sqlite3',
    connection: {
        filename: "./persistence/db/ecommerce.sqlite"
    },
    pool: { min: 0, max: 7 },
    useNullAsDefault: true
}