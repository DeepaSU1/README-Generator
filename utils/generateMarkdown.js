// function to generate markdown for README
function generateMarkdown(userData) {
// Generate Table of Contents based on user input
let draftToC = `## Table of Contents`;
  
// checking the input
if (userData.Installation !== " ") { draftToC += `
* [Installation](#Installation)` };

if (userData.usage !== " ") { draftToC += `
* [Usage](#Usage)` };

if (userData.Contributing !== " ") { draftToC += `
* [Contributing](#Contributing)` };

if (userData.tests !== " ") { draftToC += `
* [Tests](#Tests)` };


// Generate markdown for the top required portions of the README
// printing the description
let draftMarkdown = 
`# ${userData.file_name}


## Description 

*The  Why, What and How:* 

${userData.Description}
`

// Add Table of Contents to markdown
draftMarkdown += draftToC;

// Add License section 
draftMarkdown += `
* [License](#License)`;


//  Installation section
if (userData.Installation !== '') {

draftMarkdown +=
`

## Installation

*Steps required to install project and how to get the development environment running:*

${userData.Installation}`
};


  
    //  Usage section
    if (userData.Usage !== '') {
    
      draftMarkdown +=
      
      `
      
      ## Usage 
      
      *Instructions and examples for use:*
      
      ${userData.Usage}`
      };
      

    //  Contributing section
    if (userData.Contributing !== '') {
  
      draftMarkdown +=
        
      `
      
      ## Contributing
      
      *If you would like to contribute it, you can follow these guidelines for how to do so.*
      
      ${userData.Contributing}`
      };

      
    //  Tests section
    if (userData.Tests !== '') {
    
      draftMarkdown +=
      `
      
      ## Tests
      
      *Tests for application and how to run them:*
      
      ${userData.Tests}`
      };
    
    
      // License section 
      draftMarkdown +=
      `
      
      ## License
      
      ${userData.License}
      `;
    // Return markdown
    return draftMarkdown;
    
  }
  
    
module.exports = generateMarkdown;
