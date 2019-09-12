const test = require('tape')
const { existsSync, readFileSync } = require('fs')
const { join, relative } = require('path')

const ROOT_PATH = join(__dirname, '..')
const SRC_PATH = join(ROOT_PATH, 'src')

test('Check that src/ looks reasonable', t => {
  const paths = [
    'learnyouhtml',
    'javascripting',
    'learnyounode'
  ]

  paths
    .map(path => join(SRC_PATH, path))
    .forEach(path => assertExists(t, path))

  t.end()
})

test('Check that src/learnyouhtml looks reasonable', t => {
  const paths = [
    'index.html'
  ]

  paths
    .map(path => join(SRC_PATH, 'learnyouhtml', path))
    .forEach(path => {
      assertExists(t, path)
      assertNoTodo(t, path)
    })

  t.end()
})

test('Check that src/javascripting looks reasonable', t => {
  const paths = [
    'introduction.js',
    'variables.js',
    'strings.js',
    'string-length.js',
    'revising-strings.js',
    'numbers.js',
    'rounding-numbers.js',
    'number-to-string.js',
    'if-statement.js',
    'for-loop.js',
    'arrays.js',
    'array-filtering.js',
    'accessing-array-values.js',
    'looping-through-arrays.js',
    'objects.js',
    'object-properties.js',
    'object-keys.js',
    'functions.js',
    'function-arguments.js',
    'scope.js'
  ]

  paths
    .map(path => join(SRC_PATH, 'javascripting', path))
    .forEach(path => {
      assertExists(t, path)
      assertNoTodo(t, path)
    })

  t.end()
})

test('Check that src/learnyounode looks reasonable', t => {
  const paths = [
    'hello-world.js',
    'baby-steps.js',
    'my-first-io.js',
    'my-first-async-io.js',
    'filtered-ls.js',
    'make-it-modular.js',
    'mymodule.js',
    'http-client.js',
    'http-collect.js',
    'juggling-async.js',
    'time-server.js',
    'http-file-server.js',
    'http-uppercaserer.js',
    'http-json-api-server.js'
  ]

  paths
    .map(path => join(SRC_PATH, 'learnyounode', path))
    .forEach(path => {
      assertExists(t, path)
      assertNoTodo(t, path)
    })

  t.end()
})

function assertExists (t, path) {
  const relPath = relative(ROOT_PATH, path)
  t.ok(existsSync(path), `ensure ${relPath} exists`)
}

function assertNoTodo (t, path) {
  const relPath = relative(ROOT_PATH, path)
  t.ok(
    !readFileSync(path, 'utf8').includes('TODO'),
    `ensure ${relPath} does not contain the string "TODO"`
  )
}
