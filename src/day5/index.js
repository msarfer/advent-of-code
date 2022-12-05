import { input } from './input.js'

const peek = (stack) => stack[stack.length - 1]
const tops = (stacks) => stacks.reduce((tops, stack) => tops + peek(stack),'')
const movements = input.split('\n').map(move => move.split(/\D/g).filter(char => char).map(num => Number(num)))

export const partOne = () => {
  const stacks = [
    ['F','C','J','P','H','T','W'],
    ['G','R','V','F','Z','J','B','H'],
    ['H','P','T','R'],
    ['Z','S','N','P','H','T'],
    ['N','V','F','Z','H','J','C','D'],
    ['P','M','G','F','W','D','Z'],
    ['M','V','Z','W','S','J','D','P'],
    ['N','D','S'],
    ['D','Z','S','F','M']
  ]

  movements.map(([count, from , to]) => {
    for (let i = 0; i < count; i++) stacks[to - 1].push(stacks[from - 1].pop())
  })

  return tops(stacks)
}

export const partTwo = () => {
  const stacks = [
    ['F','C','J','P','H','T','W'],
    ['G','R','V','F','Z','J','B','H'],
    ['H','P','T','R'],
    ['Z','S','N','P','H','T'],
    ['N','V','F','Z','H','J','C','D'],
    ['P','M','G','F','W','D','Z'],
    ['M','V','Z','W','S','J','D','P'],
    ['N','D','S'],
    ['D','Z','S','F','M']
  ]

  movements.map(([count, from , to]) => {
    const cratesToMove = []
    for (let i = 0; i < count; i++) {
      cratesToMove.unshift(stacks[from - 1].pop())
    }
    cratesToMove.map(elem => stacks[to - 1].push(elem))
  })

  console.log(stacks)
  return tops(stacks)
}