const packages =
[
  '@projectlint/plugin-node.js',
  '@projectlint/plugin-package.json',
  '@projectlint/plugin-README'
]


function mapPackage([packageName, value])
{
  return Object.entries(value).map(mapValues, packageName)
}

function mapValues([ruleName, value])
{
  return [`${this}:${ruleName}`, value]
}


module.exports = exports = function(
  {configLevel, configs: parsedConfigs = [], rules: parsedRules, ...args} = {}
) {
  let {configs, rules} = packages.reduce(function(acum, packageName)
  {
    const {configs, rules} = acum
    const {config, rules: packageRules} = require(packageName)

    let packageConfig
    if(configLevel === 'strict')
      packageConfig = config['strict']
    if(!packageConfig || configLevel === 'recommended')
      packageConfig = config['recommended']

    configs[packageName] = packageConfig || config['default']
    rules  [packageName] = packageRules

    return acum
  }, {configs: {}, rules: {}})

  configs = Object.entries(configs).flatMap(mapPackage)
  rules = Object.entries(rules).flatMap(mapPackage)

  configs = parsedConfigs.length ? parsedConfigs : configs
  rules = Object.assign(rules, parsedRules)

  return {args, configs, rules}
}

exports.packages = packages
