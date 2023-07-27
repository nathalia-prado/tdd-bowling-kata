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

test('scores a double strike frames', () => {
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const expected = 23
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
    expect(actual).toBe(expected)
})  

test('scores a normal in the 10th frame', () => {
    const frame = [3, 5]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const isTenth = true
    const expected = 8
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame, isTenth)
    expect(actual).toBe(expected)
})  

test('scores a spare in the 10th frame', () => {
    const frame = [6, 4, 6]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const isTenth = true
    const expected = 16
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame, isTenth)
    expect(actual).toBe(expected)
})  

test('scores a strike in the 10th frame', () => {
    const frame = [10, 0, 6]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const isTenth = true
    const expected = 16
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame, isTenth)
    expect(actual).toBe(expected)
})  

test('scores a double strike in the 10th frame', () => {
    const frame = [10, 10, 6]
    const nextFrame = [10, 0]
    const thirdFrame = [3,4]
    const isTenth = true
    const expected = 26
    const actual = score.scoreFrame(frame, nextFrame, thirdFrame, isTenth)
    expect(actual).toBe(expected)
}) 