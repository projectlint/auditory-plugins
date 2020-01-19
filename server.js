#!/usr/bin/env node

const {cli, parseArgs} = require('@projectlint/cli')

const auditory = require('.')

const params = require('./package.json')


const extraArguments =
[
  ['--configLevel', {
    choices: ['strict', 'recommeded'],
    default: 'recommended',
    dest: 'configLevel'
  }],
  ['--strict', {
    action: 'storeConst',
    constant: 'strict',
    dest: 'configLevel'
  }]
]

const {args, configs, rules} = auditory(parseArgs({extraArguments, params}))

cli(rules, configs, args)
