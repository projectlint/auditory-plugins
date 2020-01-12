const {
  config: {recommended: packageJsonConfig},
  rules: packageJsonRules
} = require('@projectlint/rules-package.json')


const configs =
{
  '@projectlint/rules-package.json': packageJsonConfig
}

const rules =
{
  '@projectlint/rules-package.json': packageJsonRules
}


function flatPackage([packageName, value])
{
  return Object.entries(value).map(function([ruleName, value])
  {
    return [`${packageName}:${ruleName}`, value]
  })
}


exports.configs = Object.entries(configs).flatMap(flatPackage)
exports.rules   = Object.entries(rules  ).flatMap(flatPackage)
