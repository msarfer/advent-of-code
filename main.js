import * as day1 from './src/day1/index.js'
import * as day2 from './src/day2/index.js'
import * as day3 from './src/day3/index.js'
import * as day4 from './src/day4/index.js'
import * as day5 from './src/day5/index.js'

const challenges = [
  {id: 1.1, func: day1.partOne()},
  {id: 1.2, func: day1.partTwo()},
  {id: 2.1, func: day2.partOne()},
  {id: 2.2, func: day2.partTwo()},
  {id: 3.1, func: day3.partOne()},
  {id: 3.2, func: day3.partTwo()},
  {id: 4.1, func: day4.partOne()},
  {id: 4.2, func: day4.partTwo()},
  {id: 5.1, func: day5.partOne()},
  {id: 5.2, func: day5.partTwo()},
]

const display = ({id, func}) => {
  console.log(`> Challenge #${id}`)
  console.log(`> ${func}\n`)
}
console.log('> Advent of Code 2022\n')
challenges.map(challenge => display(challenge))