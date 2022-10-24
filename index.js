const { createServer } = require('@lhci/server');
const shell = require('shelljs')
let Port=0; 


createServer({
    port: process.env.PORT,

    storage: {
      storageMethod: 'sql',
      sqlDialect: 'sqlite',
      sqlDatabasePath: './db.sql',
    },
  }).then((data) => {
    Port = data.port
    console.log("Port", Port);
   //return Port
  }).then((data) => {

    console.log("port2: ",Port)
    shell.exec(`lhci autorun --port ${Port}`)
    
  });


console.log("entre")


