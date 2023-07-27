export {
    scoreFrame
}
  
function scoreFrame (frame, nextFrame, thirdFrame) {
    let score = frame[0] + frame[1]
    if(isStrike(frame)){
        if(isStrike(nextFrame)){
            score += thirdFrame[0] 
        }
        score += nextFrame[0] + nextFrame[1]
    }
    if(isSpare(score)) {
        score += nextFrame[0] 
    }    
    return score
}

function isStrike(frame) {
    return frame[0] === 10
}

function isSpare(score) {
   return score === 10
}

