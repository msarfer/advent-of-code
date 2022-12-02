import { input } from "./input.js";

const plays = input.split('\n').map(play => play.split(' '))

const points = {
    'X': 1,
    'Y': 2,
    'Z': 3
}

export const partOne = () => {
    const rules = {
        'X': {
            'A': 3 + points['X'],
            'B': points['X'],
            'C': 6 + points['X'],
        },
        'Y': {
            'A': 6 + points['Y'],
            'B': 3 + points['Y'],
            'C': points['Y'],
        },
        'Z': {
            'A': points['Z'],
            'B': 6 + points['Z'],
            'C': 3 + points['Z'],
        }
    }

    let score = 0
    plays.map(([elf, me]) => {
        score += rules[me][elf]
    })

    return score
}

export const partTwo = () => {
    const rules = {
        'A': {
            'X': points['Z'],
            'Y': 3 + points['X'],
            'Z': 6 + points['Y'],
        },
        'B': {
            'X': points['X'],
            'Y': 3 + points['Y'],
            'Z': 6 + points['Z'],
        },
        'C': {
            'X': points['Y'],
            'Y': 3 + points['Z'],
            'Z': 6 + points['X'],
        }
    }

    let score = 0
    plays.map(([elf, play]) => {
        score += rules[elf][play]
    })

    return score

}