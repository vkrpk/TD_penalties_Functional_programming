import {Score} from "../types/Score";

function generateRandomNumber() {
    let r = Math.random();
    return Math.floor(r*2)
}


function shoot() {
    return generateRandomNumber()
}

function lookAtTheGap(score: Score) {
    return ((Math.abs(score.teamA - score.teamB)) > (5 - score.round)) && (score.tirs !== 9)
}

function prolongation(score: Score) {
    if(score.tirs % 2 !== 0) {
        return score.teamB > score.teamA
    } else {
        return score.teamA > score.teamB
    }
}

export function play(historicResults: Array<Score>) {
    let newShoot = historicResults[historicResults.length - 1]
    if(newShoot.tirs % 2 !== 0) {
        newShoot = {teamA: newShoot.teamA, teamB: newShoot.teamB + shoot(), round: newShoot.round + 1, tirs: newShoot.tirs + 1};
    } else {
        newShoot = {teamA: newShoot.teamA + shoot(), teamB: newShoot.teamB, round: newShoot.round, tirs: newShoot.tirs + 1};
    }

    historicResults.push(newShoot);

    if(newShoot.round < 6) {
        if(lookAtTheGap(newShoot) ) {
            display(historicResults)
            console.log(`L'équipe ${newShoot.teamA > newShoot.teamB ? 'A' : 'B'} a gagné, elle ne peut plus être rattrapée par l'équipe adverse.`)
        } else {
            play(historicResults)
        }
    } else {
        if(prolongation(newShoot) ) {
            display(historicResults)
            console.log(`L'équipe ${newShoot.teamA > newShoot.teamB ? 'A' : 'B'} a gagné aux pénalties.`)
        } else {
            console.log('prolongation continue')
            play(historicResults)
        }
    }
}

function display(historicResults: Array<Score>) {
    for(let i = 0; i < historicResults.length; i++) {
        console.log(`Tir ${historicResults[i].tirs} : Score : ${historicResults[i].teamA}/${historicResults[i].teamB} (Équipe A : ${historicResults[i].teamA > historicResults[i].teamB ? '+' : ''}${historicResults[i].teamB} | Équipe B : ${historicResults[i].teamB > historicResults[i].teamA ? '+' : ''}${historicResults[i].teamB})`);
    }
}
