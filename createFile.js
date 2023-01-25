
const fs = require('fs'); 

function createFile(data) {
    console.log(data);
    fs.writeFile(data.file_name + '.md',data.content, (err) => {
        if (err) return console.log(err);
        
        console.log(`you have successfully created ${data.file_name} file`);
        console.log(`the content of the file are: \n ${data.content}`)
    });
}

module.exports = createFile;

// fs.writeFile(data.file_name + '.txt',data.content, (err) => {
//     if (err) return console.log(err);
    
//     console.log(`you have successfully created ${data.file_name} file`);
//     console.log(`the content of the file are; \n ${data.content}`)
// });
