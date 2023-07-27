import * as score from './score.js'
import { test, expect } from 'vitest'

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
    const frame = [0, 0]
    const expected = 0
    const actual = score.scoreFrame(frame)
  
    expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
})  

test('scores a spare frame', () => {
    const frame = [4, 6]
    const nextFrame = [3, 5]
    const expected = 13
    const actual = score.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})  

test('scores a single strike frames', () => {
    const frame = [10, 0]
    const nextFrame = [3, 5]
    const expected = 18
    const actual = score.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})  

