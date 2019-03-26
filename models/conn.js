const pgp = require('pg-promise')({
    query: e => {
      console.log('QUERY: ', e.query);
    }  
  });

const options = {
    host: 'localhost',
    database: 'restaurants-app'
};

const db = pgp(options);
module.exports = db;

// db.any('select name from restaurants where id = 1')
//     .then(function(data) {
//         // success;
//         console.log(data);
//     })
//     .catch(function(error) {
//         // error;
//     });

