#!/usr/bin/env node

const {cli, parseArgs} = require('@projectlint/cli')

const auditory = require('.')

const params = require('./package.json')


const extraArguments =
[
  ['--configLevel', {
    action: 'store',
    choices: ['strict', 'recommeded', 'default'],
    default: 'recommended',
    dest: 'configLevel'
  }],
  ['--strict', {
    action: 'store_const',
    const: 'strict',
    dest: 'configLevel'
  }]
]

const {args, configs, rules} = auditory(parseArgs({extraArguments, params}))

cli(rules, configs, args)
