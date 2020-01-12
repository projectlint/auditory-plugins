#!/usr/bin/env node

const {cli, parseArgs} = require('@projectlint/cli')

const auditory = require('.')

const params = require('./package.json')


const {configs, rules, ...args} = parseArgs({params})

cli(
  Object.assign(auditory.rules, rules),
  configs.length ? configs : auditory.configs,
  args
)
