// function to generate markdown for README
function generateMarkdown(userData) {
// Generate Table of Contents based on user input
let draftToC = `## Table of Contents`;
  
if (userData.Installation !== '') { draftToC += `
* [Installation](#Installation)` };

if (userData.usage !== '') { draftToC += `
* [Usage](#Usage)` };

if (userData.Contributing !== '') { draftToC += `
* [Contributing](#Contributing)` };

if (userData.tests !== '') { draftToC += `
* [Tests](#Tests)` };


// Generate markdown for the top required portions of the README
let draftMarkdown = 
`# ${userData.file_name}



## Description 

*The what, why, and how:* 

${userData.Description}
`

// Add Table of Contents to markdown
draftMarkdown += draftToC;

// Add License section since License is required to Table of Contents
draftMarkdown += `
* [License](#License)`;


// Optional Installation section
if (userData.Installation !== '') {

draftMarkdown +=
`

## Installation

*Steps required to install project and how to get the development environment running:*

${userData.Installation}`
};


  
    // Optional Usage section
    if (userData.Usage !== '') {
    
      draftMarkdown +=
      
      `
      
      ## Usage 
      
      *Instructions and examples for use:*
      
      ${userData.Usage}`
      };
      

    // Optional Contributing section
    if (userData.Contributing !== '') {
  
      draftMarkdown +=
        
      `
      
      ## Contributing
      
      *If you would like to contribute it, you can follow these guidelines for how to do so.*
      
      ${userData.Contributing}`
      };

      
    // Optional Tests section
    if (userData.Tests !== '') {
    
      draftMarkdown +=
      `
      
      ## Tests
      
      *Tests for application and how to run them:*
      
      ${userData.Tests}`
      };
    
    
      // License section is required
      draftMarkdown +=
      `
      
      ## License
      
      ${userData.License}
      `;
    // Return markdown
    return draftMarkdown;
    
  }
  
    
module.exports = generateMarkdown;
