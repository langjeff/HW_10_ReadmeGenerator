const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { async } = require('rxjs');
const markdown = require('./generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([    
    {
        type: 'input',
        name: 'title',
        message: 'Tell us the name of your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the what, why, and how of your project:',      
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your project?',      
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would someone use your project?',      
    },
    {
        type: 'input',
        name: 'license',
        message: 'What type of license would you like to have for this project?',      
    },
 
    {
        type: 'input',
        name: 'contribution',
        message: 'How can people contribute to this project?',      
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please list any tests that you used for this project:',      
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your Github username?',      
    },
        {
        type: 'input',
        name: 'email',
        message: 'What is a good email to reach you at with questions on this project?',      
    },
]);
};




// constant to write README file
const writeToFile = util.promisify(fs.writeFile);

// constant to initialize program
const init = async () => {
    console.log('Hi.  I will create a .readme with your answers.');
    try {
    const answers = await questions();

    const readme = markdown(answers);     

    await writeToFile(`${answers.title}.md`, readme);
    
    console.log('Check out your new .readme');
    } catch (err) {
        console.log(err);
    }
};    

// function call to initialize program
init();

//submissions to Github repository for assignment
//submit waltkthrough video
//submit sample .readme 
//github repository link.