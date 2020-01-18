const {
  config: {recommended: nodeJsConfig},
  rules: nodeJsRules
} = require('@projectlint/plugin-node.js')
const {
  config: {recommended: packageJsonConfig},
  rules: packageJsonRules
} = require('@projectlint/plugin-package.json')
const {
  config: {recommended: readmeConfig},
  rules: readmeRules
} = require('@projectlint/plugin-README')


const configs =
{
  '@projectlint/plugin-node.js'     : nodeJsConfig,
  '@projectlint/plugin-package.json': packageJsonConfig,
  '@projectlint/plugin-README'      : readmeConfig
}

const rules =
{
  '@projectlint/plugin-node.js'     : nodeJsRules,
  '@projectlint/plugin-package.json': packageJsonRules,
  '@projectlint/plugin-README'      : readmeRules
}


function mapValues([ruleName, value])
{
  return [`${this}:${ruleName}`, value]
}

function flatPackage([packageName, value])
{
  return Object.entries(value).map(mapValues, packageName)
}


exports.configs = Object.entries(configs).flatMap(flatPackage)
exports.rules   = Object.entries(rules  ).flatMap(flatPackage)
