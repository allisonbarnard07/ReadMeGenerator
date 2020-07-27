const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//Questions for user - needed to generate a good ReadMe

function questions() {
    return inquirer.prompt([{
        type: "input",
        message: "What is the project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "Description"
    },
    {
        type: "input",
        message: "Please add a Table of Contents",
        name: "TableOfContents"
    },
    {
        type: "input",
        message: "Are there instructions for installation? If so, please add.",
        name: "Instructions"
    },
    {
        type: "input",
        message: "Is there usage information? If so, please add.",
        name: "Usage"
    },
    {
        type: "input",
        message: "If any licenses were used, please address.",
        name: "Licenses"
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contribution"
    },
    {
        type: "input",
        message: "What tests were run on this project?",
        name: "Tests"
    }
    ]);
}

//Code to generate ReadMe with answers to questions above in the ReadMe

function generateReadMe(answers) {
    return `

      ##Title 
      ${answers.Title}
      
      ##Description 
      ${answers.Description}

      ## Testing
       ${answers.Test}

      ## Table of Contents 
      ${answers.TableOfContents}

      ## Instruction 
      ${answers.Instructions}

      ## Usage 
      ${answers.Usage}

      ## Licenses 
      ${answers.Licenses}

      ## Contribution 
      ${answers.Contribution}

      ## Testing 
      ${answers.Tests}
      `;
}

questions()
    .then(function (answers) {
        const readme = generateReadMe(answers);
        return writeFileAsync("README.md", readme);
    })
    .then(function () {
        console.log("Successfully wrote to README.md");
    })
    .catch(function (err) {
        console.log(err);
    });
