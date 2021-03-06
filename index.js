const {dependencies} = require('./package.json')


const packages = Object.keys(dependencies)


function mapPackage([packageName, value])
{
  return Object.entries(value).map(mapValues, packageName)
}

function mapValues([ruleName, value])
{
  return [`${this}:${ruleName}`, value]
}


module.exports = exports = function(
  {
    configLevel = 'recommended',
    configs: parsedConfigs = [],
    format,
    rules: parsedRules,
    ...options
  } = {}
) {
  let {configs, rules} = packages.reduce(function(acum, packageName)
  {
    const {configs, rules} = acum
    const {config, rules: packageRules} = require(packageName)

    let packageConfig

    if(configLevel === 'strict')
      packageConfig = config['strict']
    if((configLevel === 'strict' && !packageConfig)
    || configLevel === 'recommended')
      packageConfig = config['recommended']

    if(!packageConfig)
      throw new SyntaxError(`Package '${packageName}' don't have config level` +
        ` '${configLevel}'`)

    configs[packageName] = packageConfig
    rules  [packageName] = packageRules

    return acum
  }, {configs: {}, rules: {}})

  configs = parsedConfigs.length
          ? parsedConfigs
          : Object.entries(configs).flatMap(mapPackage)

  rules = Object.entries(rules).flatMap(mapPackage)
  rules = Object.assign(rules, parsedRules)

  return {configs, format, options, rules}
}

exports.packages = packages
