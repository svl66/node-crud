const mysql = require('mysql2');
module.exports = {
	'connect' : () => {
		return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database: 'rts_rocknroll',
		port : 8889
		});
	}
};
// Virker DB ikke? Genstart MAMP og skift portnummer!