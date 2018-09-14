const fs = require('fs');
fs.appendFile('message.txt', 'data to read', (err)=>{
    if (err) throw err;
    console.log('OK!');
});