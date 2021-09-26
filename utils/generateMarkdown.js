const licenseInformation = require('./license.js');

// function to generate markdown for README
function generateMarkdown(data) {
  // Get license information based on selected license type
  const {badge} = licenseInformation(data.license);

  return `# ${data.title}
  
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  License type: ${data.license}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions

  GitHub profile [${data.user}](https://github.com/${data.user})

  For additional questions, please contact me at ${data.email}.

`;
}

module.exports = generateMarkdown;
