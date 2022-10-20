const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'Romania96',
      database: 'employeeTracker_db'
    },
    console.log(`Connected to the books_db database.`)
  );
  
  const viewAllDepartments = () => {
    db.promise().query("select * from department")
    .then(data => {
        console.table(data[0])
    })
  }

  const viewAllRoles = () => {
    db.promise().query("select * from role")
    .then(data => {
        console.table(data[0])
    })
  }

  const viewAllEmployees = () => {
    db.promise().query("select * from employee")
    .then(data => {
        console.table(data[0])
    })
  }

  const addDepartment = () => {
    db.promise().query("select * from role")
    .then(data => {
        console.table(data[0])
    })
  }


