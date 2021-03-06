

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/Apache%20License%202.0-License-green.svg';
      break;
    case 'GNU General Public License v3.0':
      return 'https://img.shields.io/badge/GNU%20General%20Public%20License%20v3.0-License-green.svg';
      break;
    case 'MIT License':
      return 'https://img.shields.io/badge/MIT-License-green.svg';
      break;
    case 'Boost Software License':
      return 'https://img.shields.io/badge/Boost%20Software%20License-License-green.svg';
      break;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License 2.0':
      return "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
      break;
    case 'GNU General Public License v3.0':
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;
    case 'MIT License':
      return "[MIT License](https://opensource.org/licenses/MIT)";
      break;
    case 'Boost Software License':
      return "[Boost Software License](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   return `Licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projName}

<img src="${renderLicenseBadge(data.license)}"> 

## Github
[${data.userName}](https://github.com/${data.userName}/)

## Description
${data.projDesc}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#tests)

## Installation <a name="installation"></a>
${data.projInstall}


## Usage <a name="usage"></a>
${data.projUsage}


## License <a name="license"></a>
Licensed under ${renderLicenseLink(data.license)} License

## Contributing <a name="contributing"></a>
${data.projContribute}

## Tests <a name="tests"></a>
${data.projTest}

## Questions <a name="questions"></a>
Please reach out to ${data.email} with further questions about this application.

`;
}

module.exports = generateMarkdown;
