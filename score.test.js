import * as score from './score.js'
import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
    const frame = [0, 0]
    const expected = 0
    const actual = score.scoreFrame([frame])
  
    expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = score.scoreFrame([frame])
    expect(actual).toBe(expected)
})  

test('scores a spare frame', () => {
    const frame = [4, 6]
    const nextFrame = [3, 5]
    const expected = 21
    const actual = score.scoreFrame([frame, nextFrame])
    expect(actual).toBe(expected)
})  

test('scores a single strike frames', () => {
    const frame = [10, 0]
    const nextFrame = [3, 5]
    const expected = 26
    const actual = score.scoreFrame([frame, nextFrame])
    expect(actual).toBe(expected)
})  

test('scores a double strike frames', () => {
    const frame = [10, 0] 
    const nextFrame = [10, 0]
    const thirdFrame = [3, 4]
    const expected = 47
    const actual = score.scoreFrame([frame, nextFrame, thirdFrame])
    expect(actual).toBe(expected)
})  

test('scores an entire game', () => {
    const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]]
    const expected = 119
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
})  


test('scores a normal in the 10th frame', () => {
    const frame = [3, 5]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const expected = 32
    const actual = score.scoreFrame([frame, nextFrame, thirdFrame])
    expect(actual).toBe(expected)
})  

test('scores a spare in the 10th frame', () => {
    const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [6, 4, 6]]
    const expected = 127
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
})  

test('scores a strike in the 10th frame', () => {
    const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 0, 6]]
    const expected = 127
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
})  

test('scores a double strike in the 10th frame', () => {
    const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 6]]
    const expected = 137
    const actual = score.scoreFrame(frames)
    expect(actual).toBe(expected)
}) 