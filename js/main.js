
var choiceH = document.getElementById("choiceH");
var choiceS = document.getElementById("choiceS");
var choiceP = document.getElementById("choiceP");
var prompt = document.getElementById('prompt');

var resultText = document.getElementById('resultText');
var ul = document.getElementById('results');

var countComputer = 0;
var countUser = 0;
var totalPlay = 0;
var totalWin = 0;

var resultList = [];
var results = function(result,choice){
    this.result= result;
    this.choice = choice;
};

function computerChoice(){
    // function for create a random choice for computer

    var imgComputer;
    // create a random choice for computer
    var choices =['hummer','scissors','palm'];
    choiceComputer = choices[Math.floor(Math.random()*3)];
    
    // replace the choice img of computer
    if (choiceComputer == 'hummer'){
        imgComputer = './img/O.png';
    }else if(choiceComputer == 'scissors'){
        imgComputer = './img/Y.png';
    }else{
        imgComputer = './img/X.png';
    }
    var computerChoice = document.getElementById('computerChoice');
    computerChoice.setAttribute('src', imgComputer);

    return choiceComputer;
}

function compare(choiceUser){
    // function for define win, lost and tie
    var winner;
    var choiceComputer = computerChoice();
    if(choiceComputer == choiceUser){
        winner = 'tie';
    }
    else if(choiceComputer == 'palm' && choiceUser == 'scissors'){
        winner = 'user';
    }
    else if(choiceComputer == 'scissors' && choiceUser == 'hummer'){
        winner = 'user';
    }
    else if(choiceComputer == 'hummer' && choiceUser == 'palm'){
        winner = 'user';
    }
    else{
        winner = 'computer';
    }
    
    return winner;
}

var mainGame = (function(){
    // function for display the result socre
    var displayResult = function(choice){
        var winner = compare(choice);
        var computerScore = document.getElementById('countComputer');
        var userScore = document.getElementById('countUser');
        
        // add computer count number when computer win
        if (winner == 'computer'){
            countComputer ++;
            computerScore.innerHTML = countComputer;
            prompt.innerHTML = 'You Lost!';
    
            result = 'Lost';
            var result = new results(result,choice);
            resultList.push(result);
            }

        // add user count number when user win
        else if (winner == 'user'){
            countUser ++;
            userScore.innerHTML = countUser;
            prompt.innerHTML = 'You Win!';

            result = 'Win';
            var result = new results(result,choice);
            resultList.push(result);
        }
        else{
            prompt.innerHTML = 'Tie!';
            result = 'Tie';
            var result = new results(result,choice);
            resultList.push(result);
        }
    }
    
    function displayAll(){
        // function for display result history

        $('ul li').remove();
        
        totalPlay += 1;
        resultText.innerHTML = 'Total play ' + totalPlay + ' times.';
        
        for(var i=0;i<resultList.length;i++){
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = 'No.'+ (i+1) + ' : You select ' + resultList[i].choice + ' and ' + resultList[i].result;   
            
        }
    }

    return {
        displayResult: displayResult,
        displayAll: displayAll
    };

})();






choiceH.addEventListener('click', function(){mainGame.displayResult('hummer')});
choiceS.addEventListener('click', function(){mainGame.displayResult('scissors')});
choiceP.addEventListener('click', function(){mainGame.displayResult('palm')});

choiceH.addEventListener('click', function(){mainGame.displayAll()});
choiceS.addEventListener('click', function(){mainGame.displayAll()});
choiceP.addEventListener('click', function(){mainGame.displayAll()});
