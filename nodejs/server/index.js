const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 5000;


const pool = mysql.createPool({
    connectionLimit: 10,
    host: "sql9.freemysqlhosting.net",
    user: "sql9629574",
    password: "DnQ6kdz2Lt",
    port: 3306,
    database: 'sql9629574',
  });

// Connect to the database
const getUsersFromDB = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
              console.error('Error connecting to the database: ', error);
              return;
            }
            console.log('Connected to the database.');
          
            // Query the database to retrieve the list of users
            connection.query('SELECT * FROM users', (error, results, fields) => {
              if (error) {
                console.error('Error retrieving users: ', error);
                return;
              }
              console.log('List of users:');
              console.log(results);
              resolve(results);
          
              // Close the database connection
              connection.end((error) => {
                if (error) {
                    reject(error);
                  console.error('Error closing the database connection: ', error);
                  return;
                }
                console.log('Database connection closed.');
              });
            });
        });
    });


}


app.get('/api/users', async (req, res) => {
   getUsersFromDB().then((response) => {
    res.json(response);
   })
});

/// fetch("localhost:5000/api/products")

// // {
//     username: 'abc',
//     password: 'dsfsdfd'
// }

// app.get('/api/products', (req, res) => {
//     req.body.title 


//     req.body.username
//     // connect to db
//     // insert into products title req.body.title 
//     //
//     res.send({
//         products: [
//             {
//              name: '',
//              model: 23
//             },
//             {

//             }
//         ]
//     });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

//rest methods -->  get - read, post -- create , put - update, delete - delete

// get will not have any body
// get will have only query params or path


// post will have body

// {
//     id: 1,
//     name: "abc"
// }

// url = "https://dummy.json/api/products/1" -- > including request data in the path
// https://dummy.json/api/products?id=1&name=abc --> get data

// http status codes -->
// 2xx -- success
// 4xx -- client side error , 401 - unauthorize,  404 - page not found
// 5xx -- 500 internal server