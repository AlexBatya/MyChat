import fs from 'fs';
import path from 'path';
import mysql from 'mysql2';

const sqlJSON: any = fs.readFileSync(path.join('config', 'localhost.json'));
const sql: any = JSON.parse(sqlJSON).MySQL;

const pool = mysql.createPool({
  connectionLimit: 10, // Максимальное количество соединений в пуле
  host: sql.host,
  user: sql.user,
  password: sql.password,
  database: sql.database
});

// Подключение к базе данных

pool.getConnection((err, connection) => {
  if (err) {
		console.error('Ошибка подключения к базе данных:', err);
		return;
  }
  console.log('Подключение к базе данных успешно');

  // Используйте соединение для выполнения запросов
	
});

export default pool;
