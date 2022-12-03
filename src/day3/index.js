import { input } from './input.js'

const getPriority = (char) => {
  const asciiCode = char.charCodeAt(0)
  return asciiCode > 96 ? asciiCode - 96 : asciiCode - 38
}

export const partOne = () => {
  const rucksacks = input.split('\n').map(rucksack => {
    rucksack = rucksack.split('')
    return [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2)]
  })


  const intersection = rucksacks.map(([first, second]) => {
    return first.filter((item) => second.includes(item))
  })

  return intersection.reduce((sum, type) => sum + getPriority(...type), 0)

}

export const partTwo = () => {
  const rucksacks = input.split('\n')
  const groups = []
  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push([rucksacks[i].split(''), rucksacks[i + 1].split(''), rucksacks[i + 2].split('')])
  }

  const intersection = groups.map(group => {
    return group.reduce((a, b) => a.filter(c => b.includes(c)))
  })

  return intersection.reduce((sum, type) => sum + getPriority(...type), 0)
}