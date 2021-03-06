// This file is managed by a centralized-boilerplate package.
// https://github.com/pizza-programming-party/centralized-boilerplate

import * as child from 'child_process'
import * as gulp from 'gulp'

gulp.task('boil', boil)
gulp.task('build', build)
gulp.task('lint', lint)
gulp.task('test', test)
gulp.task('e2e', e2e)

async function boil (): Promise<void> {
  execute('node ./node_modules/centralized-boilerplate.package/bin/run.js')
}

async function build (): Promise<void> {
  execute('rm -rf dist')
  execute('tsc')
}

async function lint (): Promise<void> {
  execute('ts-standard --project ./tsconfig.json')
}

async function test (): Promise<void> {
  build()
  execute('jasmine dist/src/**/*.spec.js')
}

async function e2e (): Promise<void> {
  build()
  execute('jasmine dist/e2e/**/*.e2e-spec.js')
}

function execute(command: string) {
  child.execSync(command)
}
