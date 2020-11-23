

function generateMarkdown(data) {
  switch(data.license) {
      case 'MIT - A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.':
      badge= "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
      case 'Apache - You can do what you like with the software, as long as you include the required notices. This permissive license contains a patent license from the contributors of the code.':
      badge= "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    break;
    case 'GPLv3 - You may copy, distribute and modify the software as long as you track changes/dates in source files. Any modifications to or software including (via compiler) GPL-licensed code must also be made available under the GPL along with build & install instructions.':
      badge= "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    break;
  }
  
  return `# ${data.title}

  ## Description 
${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Badges](#Badges)
* [Contirbuting](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Badges
${badge}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
//prompt for github username, link to github account.
Connect with me on [Github]!(https://github.com/${data.user})
or reach out to me at: ${data.email}  
`;
}


module.exports = generateMarkdown;


