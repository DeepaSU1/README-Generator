
const inquirer = require('inquirer');
const createFile = require('./createFile.js');

//example 2
// const str = 'some string';
// const info = {
//     mystr: str,
//     name: 'JD'
// };
// module.exports = info;
// module.exports = str;
 

// example 1
function cyclePrompt() {
    console.log('-------Welcome to the file gen app!----------');
     inquirer.prompt([
    {
        type: 'confirm',
        name: 'choice',
        message: 'would you like to generate a file? '
    }
    ]).then(data => {
        // console.log(data);
        if (data.choice) {
            return promptUser();
        }
        console.log('Thanks for using our App!\n-----------');
    });
}

function promptUser(){
    console.log('------------------');
inquirer.prompt([
    {
        name: 'file_name',
        message: 'what would you like the file name to be?'
    },
    {
        name: 'content',
        message: 'what content would you like to add to the file?'
    },
    {
        name: 'Installation',
        message: 'Describe the steps required to install your project for the installation.'
    },
    {
        name: 'Usage',
        message: 'Provide instructions of your project in use for the Usage.'
    },
    {
        name: 'Contributing',
        message: 'Provide guidelines on how other developers can contribute to your project.'
    },
    {
        name: 'Tests',
        message: 'Provide any tests written for your application and provide examples on how to run them.'
    }
]).then(createFile);

}

// module.exports = promptUser;

module.exports = {
    cyclePrompt: cyclePrompt,
    promptUser: promptUser
};
// .then(data => {


// });