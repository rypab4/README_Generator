// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
}
return ''
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
  return `* [License](#license)`;
}
return ''
}
// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!== "none") {
    return `## License
    
    This project is licensed under the ${license} license` ;
  }
  return ''
}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}
${renderLicenseBadge(data.license)}

***
## Description
${data.description}


## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installations 

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`


## Usage
${data.usage}


${renderLicenseSection(data.license)}


## Contributors
${data.contributors}


## Tests
To run tests, run the follwoing command:
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}.  You can find my work at https://www.github.com/${data.github}.


`;
}

module.exports = generateMarkdown;
