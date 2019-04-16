var createPolitician = function(newName, color){

    var politician = {};
    politician.name = newName;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = color;


    politician.countTotalVotes = function (){
        this.totalVotes = 0;
        for (let i=0; i < this.electionResults.length; i++){
            this.totalVotes = this.totalVotes + this.electionResults[i];
        };
  
    };

    return politician;


}

let candidateOne = createPolitician("Donald Tusk", [132, 17, 11]);
let candidateTwo = createPolitician("Andrzej Duda", [245, 141, 136]);


candidateOne.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
candidateTwo.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

candidateOne.electionResults[9] = 1;
candidateTwo.electionResults[9] = 28;

candidateOne.electionResults[4] = 17;
candidateTwo.electionResults[4] = 38;

candidateOne.electionResults[43] = 11;
candidateTwo.electionResults[43] = 27;




var setStateResults= function(state) {
    theStates[state].winner = null;

    if(candidateOne.electionResults[state] > candidateTwo.electionResults[state]) {
        theStates[state].winner = candidateOne;
    } else {
        theStates[state].winner = candidateTwo;
    }
    var stateWinner = theStates[state].winner;

    if(stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    var stateResults = document.getElementById('stateResults');
    var stateName = stateResults.children[0].children[0];
    stateName.children[0].innerText = theStates[state].nameFull;
    stateName.children[1].innerText = theStates[state].nameAbbrev;
    
    var nameOne = stateResults.children[1].children[0];
    nameOne.children[0].innerText = candidateOne.name;
    nameOne.children[1].innerText = candidateOne.electionResults[state];

    var nameTwo = stateResults.children[1].children[1];
    nameTwo.children[0].innerText = candidateTwo.name;
    nameTwo.children[1].innerText = candidateTwo.electionResults[state];

    var stateWinnerTable = stateResults.children[1].children[2];
  
    if(candidateOne.electionResults[state] > candidateTwo.electionResults[state]) {
        stateWinnerTable.children[1].innerText = candidateOne.name;
    } else {
        stateWinnerTable.children[1].innerText = candidateTwo.name;
    }
}


candidateOne.countTotalVotes();
candidateTwo.countTotalVotes();



var winner = ""
    
    if(candidateOne.totalVotes > candidateTwo.totalVotes) {
        winner = candidateOne.name;
    } else if(candidateOne.totalVotes < candidateTwo.totalVotes){
        winner = candidateTwo.name;
    } else {
        winner = "DRAW"
    };

console.log("And the winner is " + winner);


 var countryResults = document.getElementById('countryResults');
 countryResults.children[0].children[0].children[0].innerText = candidateOne.name;
 countryResults.children[0].children[0].children[1].innerText = candidateOne.totalVotes;
 countryResults.children[0].children[0].children[2].innerText = candidateTwo.name;
 countryResults.children[0].children[0].children[3].innerText = candidateTwo.totalVotes;
 countryResults.children[0].children[0].children[5].innerText = winner;

 

