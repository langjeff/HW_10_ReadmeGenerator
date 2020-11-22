function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${data.installation}

## Usage 
${data.usage}

## License
${data.license}
//provide description for license.

## Badges
//get badges based on license type.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
//prompt for github username, link to github account.
${data.user}
//add email address and instructions on how to reach me.
${data.email}  
`;
}


module.exports = generateMarkdown;


