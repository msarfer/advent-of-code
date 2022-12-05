import { input } from './input.js'

export const partOne = () => {

  const rows = input.split('\n')
  let numOverlaps = 0

  rows.map((row) => {
    const pairs = row.split(',')

    const range1 = pairs[0].split('-').map((el) => parseInt(el))
    const range2 = pairs[1].split('-').map((el) => parseInt(el))

    const hasOverlap = (r1, r2) => r1[0] <= r2[0] && r1[1] >= r2[1]
    
    if (hasOverlap(range1, range2)) numOverlaps++
    else if (hasOverlap(range2, range1)) numOverlaps++
  })

  return numOverlaps
}

export const partTwo = () => {

  const rows = input.split('\n')
  let numOverlaps = 0

  rows.map((row) => {
    const pairs = row.split(',')

    const range1 = pairs[0].split('-').map((el) => parseInt(el))
    const range2 = pairs[1].split('-').map((el) => parseInt(el))

    const hasOverlap = (r1, r2) => r1[0] <= r2[0] && r1[1] >= r2[0]
    
    if (hasOverlap(range1, range2)) numOverlaps++
    else if (hasOverlap(range2, range1)) numOverlaps++
  })

  return numOverlaps
}