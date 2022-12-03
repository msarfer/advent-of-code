import * as day1 from './src/day1/index.js'
import * as day2 from './src/day2/index.js'
import * as day3 from './src/day3/index.js'

const challenges = [
  {id: 1.1, func: day1.partOne()},
  {id: 1.2, func: day1.partTwo()},
  {id: 2.1, func: day2.partOne()},
  {id: 2.2, func: day2.partTwo()},
  {id: 3.1, func: day3.partOne()},
  {id: 3.2, func: day3.partTwo()},
]

const display = ({id, func}) => {
  console.log(`> Challenge #${id}`)
  console.log(`> ${func}\n`)
}
console.log('> Advent of Code 2022\n')
challenges.map(challenge => display(challenge))