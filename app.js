const mysql = require('mysql');
const express = require('express');
const app = express();
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'test1'
});

app.get(['/', '/index.html'], (req, res, next) => {
	connection.query('select * from board', (err, rows) => {
		if (err) console.log('Error', err);
		res.send(rows);
	});
});

app.listen(3000, () => {
	console.log('server connect');
});