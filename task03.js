var fs = require('fs');
// appendFile('message.txt', 'data to read', (err)=>{
//     if (err) throw err;
//     console.log('OK!');
// });

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}
var path= process.argv[2];
// fs.readdir(path, function(err,items){
//     for(var i=0; i<items.length;i++) {
        
//         const path_file=path +items[i];
//         fs.appendFile('message.txt', path_file+'\n',(err)=>{
//              if (err) throw err;  
//              });
//     }
// });
var getFiles=function(path_,files_){
    files_=files_ || [];
    var files=fs.readdirSync(path_);
    for( var i in files){
        const path_file=path +items[i];
        if(fs.statSync(path_file).isDirectory()){
            getFiles(path_file,files_);   
        }
        else{
            fs.appendFile('message.txt', path_file+'\n',(err)=>{
              if (err) throw err;  
              });
        }
    }
}