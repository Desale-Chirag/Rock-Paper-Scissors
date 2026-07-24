let CompPick;
    let score = JSON.parse(localStorage.getItem('score'));
    if(score === null){
        score = {
        wins : 0,
        tie : 0,    
        loss : 0
        }
    }
    let scorecard = document.querySelector('.js-scorecard');
    // scorecard.innerText =`Wins : ${score.wins}, Losses : ${score.loss}, Ties : ${score.tie}`;
    let result = document.querySelector('.js-result');
    // result.innerText = 'You Win.'
    let show = document.querySelector('.js-ShowPick');
    let isAutoRepeat = false;
    let intervalId;
    function pickAutoMove(){
        const num = Math.random();
        PickComputerMove();
        if(num >= 0 && num < 1/3){
            checkarR(CompPick);
        }else if(num >= 1/3 && num < 2/3){
            checkarP(CompPick);
        }else{
            checkarS(CompPick);
        }
        scorecard.innerText =`Wins : ${score.wins}, Losses : ${score.loss}, Ties : ${score.tie}`;
    }
    function repeatAuto(){
        console.log('repeat button clicked');
        if(!isAutoRepeat){
        isAutoRepeat = true;
        intervalId = setInterval(pickAutoMove, 1000);
    }else{
        isAutoRepeat = false;
        clearInterval(intervalId);
    }      
    }
    function PickComputerMove(){
    const NumRan3 = Math.random();
    if(NumRan3 >= 0 && NumRan3 < 1/3){
        CompPick = 'Rock';
    }else if(NumRan3 >= 1/3 && NumRan3 < 2/3){
        CompPick = 'Paper';
    }else if(NumRan3 >= 2/3 && NumRan3 < 1){
        CompPick = 'Scissors'
    }
   }
    function checkarS(CompPick){
        let s = 'Scissors'
        if(CompPick === 'Rock'){
            score.loss += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Scissors And Computer Picked Rock That means You Loss.');
        }else if(CompPick === 'Paper'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Scissors And Computer Picked Paper That means You Won.');
        }else if(CompPick === 'Scissors'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Scissors And Computer Also That means its a Tie.')
    }
    }
    function checkarR(CompPick){
        let r = 'Rock'
        if(CompPick === 'Rock'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Rock And Computer Also That means its a Tie.');
        }else if(CompPick === 'Paper'){
            score.loss += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Rock And Computer Picked Paper That means You Loss.');
        }else if(CompPick === 'Scissors'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Rock And Computer Picked Scissors That means You won.')
    }
}
    function checkarP(CompPick){
        let p = 'Paper';
        if(CompPick === 'Rock'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Paper And Computer Picked Rock That means You won.');
        }else if(CompPick === 'Paper'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Paper And Computer Also That means its a Tie.');
        }else if(CompPick === 'Scissors'){
            score.loss += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="Images/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="Images/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Paper And Computer Picked Scissors That means You Loss.')
    }
}