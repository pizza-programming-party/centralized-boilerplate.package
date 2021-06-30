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
    source: [ 'tsconfig.json' ],
    destination: ['tsconfig.json' ]
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
  }
])
