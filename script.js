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
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Scissors And Computer Picked Rock That means You Loss.');
        }else if(CompPick === 'Paper'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Scissors And Computer Picked Paper That means You Won.');
        }else if(CompPick === 'Scissors'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${s}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Scissors And Computer Also That means its a Tie.')
    }
    }
    function checkarR(CompPick){
        let r = 'Rock'
        if(CompPick === 'Rock'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Rock And Computer Also That means its a Tie.');
        }else if(CompPick === 'Paper'){
            score.loss += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Rock And Computer Picked Paper That means You Loss.');
        }else if(CompPick === 'Scissors'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${r}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Rock And Computer Picked Scissors That means You won.')
    }
}
    function checkarP(CompPick){
        let p = 'Paper';
        if(CompPick === 'Rock'){
            score.wins += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Win.'
        // alert('You Picked a Paper And Computer Picked Rock That means You won.');
        }else if(CompPick === 'Paper'){
            score.tie += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'Tie.'
        // alert('You Picked a Paper And Computer Also That means its a Tie.');
        }else if(CompPick === 'Scissors'){
            score.loss += 1;
            localStorage.setItem('score',JSON.stringify(score));
            show.innerHTML = `Your Pick : <img class="img-panel-mini" src="IMAGES/${p}-emoji.png"> , Computer Pick : <img class="img-panel-mini" src="IMAGES/${CompPick}-emoji.png">`;
            result.innerText = 'You Loss.'
        // alert('You Picked a Paper And Computer Picked Scissors That means You Loss.')
    }
}