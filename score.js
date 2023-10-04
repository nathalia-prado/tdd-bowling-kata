export {
    scoreFrame
}
  
function scoreFrame (frames) {
    let totalScoresFrames = 0
    frames.forEach((frame, index) => {
        const isTenth = index + 1 === frames.length
        let score = frame[0] + frame[1]
        if(isTenth && (isSpare(score) || isStrike(frame))) {
            score += frame[2]
        } else {
            const nextFrame = frames[index + 1]
            if(isStrike(frame)){
                if(isStrike(nextFrame)){
                    const thirdFrame = frames[index + 2]
                    score += thirdFrame[0] 
                }
                score += nextFrame[0] + nextFrame[1]
            }
            if(isSpare(score)) {
                score += nextFrame[0] 
            } 
        } 
        totalScoresFrames += score
    })
    return totalScoresFrames
}

function isStrike(frame) {
    return frame[0] === 10
}

function isSpare(score) {
   return score === 10
}

