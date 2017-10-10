const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

destructivelyAppendKitten(name) {
  array.push(name)
}

function destructivelyPrependKitten(name) {
  array.unshift(name)
}

function destructivelyRemoveLastKitten() {
  array.pop()
}

function destructivelyRemoveFirstKitten() {
  array.shift()
}

function appendKitten(name) {
  return [...array, name]
}

function prependKitten(name) {
  return [name, ...array]
}

function removeLastKitten() {
  return array.slice(0, array.length -1)
}

function removeFirstKitten() {
  return array.slice(1)
}