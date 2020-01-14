const {
  config: {recommended: nodeJsConfig},
  rules: nodeJsRules
} = require('@projectlint/plugin-node.js')
const {
  config: {recommended: packageJsonConfig},
  rules: packageJsonRules
} = require('@projectlint/plugin-package.json')


const configs =
{
  '@projectlint/plugin-node.js'    : nodeJsConfig,
  '@projectlint/rules-package.json': packageJsonConfig
}

const rules =
{
  '@projectlint/plugin-node.js'    : nodeJsRules,
  '@projectlint/rules-package.json': packageJsonRules
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
