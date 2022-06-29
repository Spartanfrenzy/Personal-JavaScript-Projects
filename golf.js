function golfScore(par, strokes){
    if (strokes === 1)
    return ('Hole-in-one!');
    else if (strokes === par) {
        return ('Par');
    }
    else if (strokes < par) {
        let diff = par - strokes;
        if (diff === 1)
        return ('Birdie');
        if (diff === 2)
        return ('Eagle');
    } 
    else {
        let diff = strokes - par;
        if (diff === 1)
        return ('Bogey');
        if (diff === 2)
        return ('Double Bogey');
        if (diff === 3)
        return ('Go Home!');
    }
}