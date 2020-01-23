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

const {configs, format, options, rules} = auditory(parseArgs({extraArguments, params}))

cli(rules, configs, format, options).pipe(process.stdout)
