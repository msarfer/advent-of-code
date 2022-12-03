import { input } from './input.js'

const elfs = input.split('\n\n').map(elf => elf.split('\n'))

export const partOne = () => {
  const elfsKcal = elfs.map(elf => elf.reduce((sum, num) => sum + Number(num), 0))
  return Math.max(...elfsKcal)
}

export const partTwo = () => {
  const elfsKcal = elfs.map(elf => elf.reduce((sum, num) => sum + Number(num), 0))
  const elfsRank = elfsKcal.slice().sort((a, b) => b - a)
  return elfsRank[0] + elfsRank[1] + elfsRank[2]
}