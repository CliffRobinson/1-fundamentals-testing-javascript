// intentionally bugged
const sum = (a,b) => a - b
const subtract = (a,b) => a - b

//async versions for async testing

const sumAsync = (... args) => Promise.resolve(sum(...args))
const subtractAsync = (... args) => Promise.resolve(subtract(...args))

module.exports = {subtract, sum, subtractAsync, sumAsync}