//const {Port=49349}= require('./index')
//import chromeLauncher from 'chrome-launcher';
//console.log("port en light: ", Port);
const chromeLauncher = require('chrome-launcher');


const chrome = chromeLauncher.launch();
chrome.then(val => {console.log("ee",val.port);}
)

module.exports = {
    ci: {
        collect: {
            url: ['https://www.sport.es/es/'],
            //staticDistDir: './lightouseci',
            numberOfRuns: 1
        },
        // assert: {
        //     // assert options here
        // },
        upload: {

            target: 'lhci',
            serverBaseUrl: `http://localhost/`,
            //serverBaseUrl: `http://localhost/`,  
            token: 'b9b4bef3-5bac-4ff0-938a-0938f45ad421',
        },
        server: {
            storage: {
                storageMethod: 'sql',
                sqlDialect: 'sqlite',
                sqlDatabasePath: '/path/to/db.sql',
            },
        },
        options: {
            port: chrome.port
        }


        // wizard: {
        //     // wizard options here
        // },
    },
}