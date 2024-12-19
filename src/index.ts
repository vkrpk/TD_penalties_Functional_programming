import {play} from "./functions/functions";
import {Score} from "./types/Score";

const historicResults: Array<Score> = [{teamA: 0, teamB: 0, round: 1, tirs: 0}];
play(historicResults)

// Employez l'historique de la séance de tirs au but (obtenu ou généré) afin de tester
//
// votre programme en rejouant une partie depuis le début ou à partir d'un moment
//
// choisi ===================> play(results[INDEX MOMENT CHOISI])