#! /usr/bin/env node

const boiler = require('centralized-boilerplate')
const path = require('path')

boiler.run(path.resolve(__dirname, '..'), [
  {
    action: 'full-text-replace',
    source: [ 'gitignore' ],
    destination: [ '.gitignore' ]
  },
  {
    action: 'full-text-replace',
    source: [ 'editorconfig' ],
    destination: [ '.editorconfig' ]
  },
  {
    action: 'full-text-replace',
    source: [ 'tsconfig.base.json' ],
    destination: ['tsconfig.base.json' ]
  },
  {
    action: 'full-text-replace',
    source: [ 'vscode', 'extensions.json' ],
    destination: [ '.vscode', 'extensions.json' ]
  },
  {
    action: 'full-text-replace',
    source: [ 'npmignore' ],
    destination: [ '.npmignore' ]
  },
  {
    action: 'full-text-replace',
    source: [ 'gulpfile.ts' ],
    destination: [ 'gulpfile.ts' ]
  },
  {
    action: 'json-merge',
    source: [ 'package.json' ],
    destination: [ 'package.json' ]
  },
])

boiler.conditional(path.resolve(__dirname, '..'), {
  ci: {
    gitlab: [
      {
        action: 'full-text-replace',
        source: [ 'gitlab-ci.yml' ],
        destination: [ '.gitlab-ci.yml' ]
      }
    ]
  }
})

boiler.install([
  {
    name: '@types/gulp',
    version: 'latest',
    environment: 'development'
  },
  {
    name: '@types/jasmine',
    version: 'latest',
    environment: 'development'
  },
  {
    name: '@types/node',
    version: 'latest',
    environment: 'development'
  },
  {
    name: 'gulp',
    version: 'latest',
    environment: 'development'
  },
  {
    name: 'jasmine',
    version: 'latest',
    environment: 'development'
  },
  {
    name: 'ts-node',
    version: 'latest',
    environment: 'development'
  },
  {
    name: 'ts-standard',
    version: 'latest',
    environment: 'development'
  },
  {
    name: 'typescript',
    version: 'latest',
    environment: 'development'
  }
])
