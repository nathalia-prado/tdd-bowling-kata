export {
    scoreFrame
}
  
function scoreFrame (frame, nextFrame) {
    let score = frame[0] + frame[1]
    if(frame[0] === 10){
        score += nextFrame[0] + nextFrame[1]
    }
    if(score === 10) {
        score += nextFrame[0] 
    }    
    return score
}