const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '4444',
	database: 'test1'
});

connection.connect();

connection.query('select * from board', (err, rows) => {
	if (!err) {
		return console.log('success', rows);
	}
	console.log('Error', err);
});

connection.end();