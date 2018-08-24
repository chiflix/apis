module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/chai/chai.js', instrument: false},
      'src/**/*.js'
    ],
    tests: [
      'test/**/*.js'
    ],
    testFramework: 'mocha',
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    env: {
      type: 'node'
    }
  }
}
