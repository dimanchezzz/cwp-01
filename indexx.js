const fs = require('fs');
const path = require('path');
const DIR_PATH = process.argv[2];
let floderName = path.basename(DIR_PATH);
let pathFile = DIR_PATH + "/" + floderName;
    
fs.mkdir(pathFile, function(err) {
  (function getFiles(baseDir) {
    fs.readdir(baseDir, function (err, files) {
        files.forEach(function(file){
            let extname = path.extname(file);
                    fs.readFile("config.json","utf8", function(err, data) {
                        copyrights = JSON.parse(data);
                        let copyrightInfo = copyrights.copyright;
                        if(extname == ".txt"){
                                let fileName = path.basename(file, extname);
                                fileContent = fs.readFile(baseDir + path.sep + file, "utf8", function(err, data) {
                                    fs.appendFile(pathFile + "/" + fileName + extname, copyrightInfo + "\n" + data + "\n" + copyrightInfo, function(err) {
                                        if(err) throw err; 
                                     });
                                    if(err) throw err; 
                                 });    
                        } 
                            if(err) throw err; 
                    });
        })

        for (let i in files) {
            let currentDir = baseDir + path.sep + files[i];
            fs.stat(currentDir, (err, stats) => {
                    if (stats.isDirectory()) {
                        getFiles(currentDir);
                    } else {
                    	fs.appendFile(path.resolve(DIR_PATH + "/summary.js"), "console.log('" + currentDir + "');\n", function(err) {
    					if(err) throw err; 
						});   
                    }
                }
            );
        }
    });
  })(DIR_PATH, null);
  if(err) throw err; 
});

fs.watch(pathFile, (eventType, fileNames) => {
    if (fileNames) {
        console.log(fileNames.toString());
    }
});