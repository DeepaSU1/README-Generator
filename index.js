const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const createFile = require('./createFile.js');

// Internal modules
const util = require('util');

// array of questions for user
const questions = [
    // inquirer.prompt([
    {
        name: 'file_name',
        message: 'what would you like the file name to be?'
    },
      {
        name: 'Description',
        message: 'Enter the description content you like to add to the file?'
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
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'OpenSource', 'The Unlicense'],
        name: 'License'
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) return console.log(err);
    });
    console.log("Success! Your README.md file has been generated")
}
      



const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {

        // Prompt questions
        const userData = await inquirer.prompt(questions);
        //console.log("Your InputData: ", userData);

        console.log("Generating your README next...")
        const markdown = generateMarkdown(userData);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync(userData.file_name+'.md', markdown);

    } catch (error) {
        console.log(error);
    }

};

// function call to initialize program
init();
